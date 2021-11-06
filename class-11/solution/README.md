# Solution: Event Driven Applications

## Lab Requirements

### Grading Standards & Notes

- Features
  - Event Driven
  - Modularized Properly
- Code Quality
  - Look for succinct, testable units
- Testing
  - Tests should be written only for the event handlers (units/functions)
  - Students should not endeavor to test any actual events
- Deployment
  - GitHub Actions Only
- Documentation
  - README Standards
  - JSDoc Required

### Solution Code Notes

- The tests include
  - a spy on `console.log()`
  - We don't test `emit()` or `on()` directly.  Those are already tested!
