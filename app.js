//we require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require("mongoose");
const { graphql } = require('graphql');

const graphqlSchema = require('./graphql/schema/index');
const graphqlResolvers = require('./graphql/resolvers/index');
//we parser express our app
const app = express();


app.use(bodyParser.json());


//rootValue is a resolver 
//query is like a request and mutation is for changing data(C.R.U.D)
//type help with specifying catogories for fileds
//Event specifies how the event is stored (properties)
app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    //allows us to use graphiql website
    graphiql: true
})
);

mongoose
    .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@graphql-cluster.srou8.mongodb.net/`)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on Port ${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    });

