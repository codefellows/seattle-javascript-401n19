# Solution: Bearer Authorization

## Lab Requirements

### Grading Standards & Notes

- Features
  - Students must implement at least 1 alternative means of token expiration
- Code Quality
  - Follow best practices
  - Code should be extensible
    - Modular logic, based on configuration from ENV
- Testing
  - Tests must be provided to assert token security and expiration
- Deployment
  - GitHub Actions and Heroku
- Documentation
  - README Standards
  - JSDoc Required
  - UML

### Solution Code Notes

This lab comes to the students in 'starter-code` and has 2 primary goals, both of which are covered in detail in the sections following

1. Fix the bugs in the server
   - Hint: When `npm test` works, most bugs are all fixed
2. Make the JWT tokens more secure
   - We've given them some ideas in the lab assignment. Below are some possible solutions
   - We want them to research and "think" about security with JWTs and find their own ideas

### BUG LIST

The Following list details the bugs in the code that the students should find

#### index.js

- Didn't require dotenv, so process.env.PORT will be undefined
- The server doesn't export a `start` method, so the start line will fail

#### server.js

- The server exports `startup`, not `start` which breaks the index. Fix one or the other

#### auth/routes/auth-router.js

- Line 18 - Sets a 200 instead of a 201
- Line 26,27 - using `request.token` instead of `req.token`

#### auth/models/users-model.js

- We forgot to require  `jsonwebtoken`
- Line 18 -- we are not signing the token with `process.env.SECRET` so later, in bearer, we can't validate the token
- Line 23 -- need to `await` the bcrypt call in an `async` function, otherwise the password cannot be hashed

#### auth/middleware/basic.js

- Line 10 should be: `let basic = req.headers.authorization.split(' ').pop()`

#### auth/middleware/bearer.js

- We're not calling `next()` so the middleware never gets to the route even if it works

### JWT Security Ideas and Implementations

`users-model.js`

> Added expiration to the token create method, based on the TOKEN_EXPIRE env variable

```javascript
  users.methods.generateToken = function(type) {

    let token = {
      id: this._id,
      role: this.role,
      type: type || 'user',
    };

    let options = {};
    if ( type !== 'key' && !! TOKEN_EXPIRE ) {
      options = { expiresIn: TOKEN_EXPIRE };
    }

    return jwt.sign(token, SECRET, options);
  };
```

#### Single Use Tokens

`users-model.js`

- Created a set (usedTokens) that we reference in the `authenticateToken()` method.
  - This can be optionally turned on using the SINGLE_USE_TOKENS environment variable
  - If a token is in the set, we return an invalid token error
  - Otherwise, we add it to the set
  - This ensures that tokens are only ever used once.
- The middleware will always stamp `.user` and `.token` on the request object
- It's up to the routes that are authenticated to keep sending that back in the header

```javascript
users.statics.authenticateToken = function(token) {

  if ( usedTokens.has(token ) ) {
    return Promise.reject('Invalid Token');
  }

  let parsedToken = jwt.verify(token, SECRET);

  // Add to the scrap heap if we are in "one use token mode" and this token isn't a reusable "key"
  (SINGLE_USE_TOKENS) && parsedToken.type !== 'key' && usedTokens.add(token);

  let query = {_id: parsedToken.id};
  return this.findOne(query);

};
```
