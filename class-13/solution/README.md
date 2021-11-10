# Solution: Message Queues

## Lab Requirements

### How to grade this lab

You will need to clone their repository and run all 4 servers in separate terminal windows. Unfortunately, this is a long lab to grade, as monitoring responses between servers with automation will be problematic.

- The Queue Server is the hub
- The CAPS (Code Academy Parcel Service) server is an API that takes requests and fires events to the hub
- The flowers-r-us and acme-widgets "servers" are actually clients
- When you hit the CFPS API using httpie or postman the 2 clients should log out events to their console
  - You should issue POST to /delivery/acme-widgets/CODE or flowers-r-us/CODE
  - CODE should just be a random number you use for each test
- If you disconnect a client and fire events for it, and then re-connect you'll need to see the missed events get logged out on the client app console

You can also attempt to validate online, using this application. If the students have followed the specification, their API should be on port 3000, and their CAPS queue server on port 3001. The 2 should auto-connect

- Open this [Web Application](https://javascript-401.netlify.app/)
- In the form at the top of the page, choose a retailer and enter a fake tracking number
- Submit the form
- This will POST to `/delivery` on <http://localhost:3000> and simulate a delivery
- If your lab is working, this app will show your queued responses in the correct columns
  - If you leave the website and do manual POSTS as before and then re-visit the website
    - The website will attempt to `getall` from your queue

### Grading Standards & Notes

- Features
  - Server and Logger need to be running and passing events
  - File reader (4th run) should be perfect by now
    - Uses the Message Queue server
  - API Server needs to have the correct events firing on CRUD operations (or errors)
- Code Quality
- Testing
  - Spies should be placed on the event running functions
- Deployment
  - All servers to deployed to Heroku
  - Heroku logs should show the output
  - Since TAs can't get there, students should provide a screen shot to prove.
- Documentation
  - README Standards
  - JSDoc Required
