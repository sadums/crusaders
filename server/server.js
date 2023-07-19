const express = require('express')
const app = express()
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers} = require('./schemas')
const db = require('./config/connection')

const PORT = process.env.PORT || 5500;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    //We will add context here
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startApolloServer = async () => {
    await server.start()
    server.applyMiddleware({ app })

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`Server is live at localhost:${PORT}`)
            console.log(`Make GraphQL requests to http://localhost:${PORT}${server.graphqlPath}`)
        })
    })
}

startApolloServer()