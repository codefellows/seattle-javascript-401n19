# Solution: Socket.io

## How to grade this lab

You will need to clone their repository and run all 4 servers in separate terminal windows. Unfortunately, this is a long lab to grade, as monitoring responses between servers with automation will be problematic.

- The Queue Server is the hub
- The student and instructor "servers" are actually clients that run separately and communicate using only events
- The student app should send assignments to the hub.
- The instructor app should see that event, apply a grade, and send an event back
- The student should then be able to show their grade

You can also attempt to validate online, using this application. If the students have followed the specification, this application should work against localhost:3000 if the api and queue servers are running

You can also view this in a UI

- Open this [Web Application](https://javascript-401.netlify.app/)
- In the form at the top of the page, enter an assignment title
- Submit the form
- This will contact a Server Hub at <http://localhost:3000> and emit a `submission` event with the assignment name
- If their code is working, this app will show a growing table of graded assignments as you enter them

### Grading Standards & Notes

In order to grade this assignment, you'll need to clone the student's repository and run each part of the application in separate terminal windows.

They will have a server, student, and instructor applications that all need to be running

- The server acts as hub
- The student fires events at the server that simulate an assignment being turned in
  - The student application should have a setTimeout() that does this every second
- The instructor application will subscribe to assignments and grade them, firing an event in response
- The student should then 'see' their grade

You should be able to witness this "ping-pong" of messages when the applications are all running

### Lab Assistance Notes
