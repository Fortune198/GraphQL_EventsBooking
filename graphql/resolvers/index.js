//import our files 
const authResolver = require('./auth');
const eventsResolver = require('./event');
const bookingResolver = require('./booking');


//merge all files/resolvers into one object
const rootResolver = {
    ...authResolver,
    ...eventsResolver,
    ...bookingResolver
};


//export the resolver
module.exports = rootResolver;