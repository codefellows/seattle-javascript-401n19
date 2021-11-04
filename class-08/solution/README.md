# Solution: Access Control

## Lab Requirements

Most of the requirements are completed for the students by the instructor in lecture.  This is mainly going to involve the students doing some re-implementations, troubleshooting, and digging in for testing.

### Grading Standards & Notes

There's plenty of opportunity here for modularization and simplification. While simply getting tests written and the features to work warrants a "complete", only go to a 10 if the students take the extra steps of code cleanup and modularization.

- Features
- Code Quality
- Testing
- Deployment
  - GitHub Actions and Heroku
- Documentation
  - README Standards
  - JSDoc Required

### Solution Code Notes

Look for the following from students:

1. Model Finding Middleware should be broken out into a module
1. Tests should be written and working
   - All auth routes (/signup, /signin) should work, and return an object with a user and a token
   - All `/v1` routes should work, without a login
   - All `/v2` routes should work with proper logins
     - Tests will need to create an account, login, get a token and then hit the routes with bearer headers
