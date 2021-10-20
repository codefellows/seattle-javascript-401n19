'use strict';

// we are gonna want access to permissions, capabilities of user, 

module.exports = (capability) => {
    // middleare code runs
    return (req,res,next) => {
        // we have access to capability
        // We are expecting bearerAuth middleware to have put the correct user objhect in our req
        // Inspect the users capabilties, if good pass next()
        // Using try/catch to avoid deeply checking the object
        // we wanna handle rejections and errors
        try {
            console.log('req.user', req.user, 'capbilities', req.user.capabilities);
            if (req.user.capabilities.includes(capability)) {
                next();
            }
            else {
                next('Access Denied');
            }
        } catch (e) {
            next(`Invalid Login with : ${e.message}`);
        }
    }
}