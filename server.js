const { ApolloServer, gql, ApolloError} = require('apollo-server');
//TODO: Modify the require to use a specific JS FrameWork e.g Express
// E.G: be able to use all the Framework Middleware like cookies and create a real JWT Auth system

const LinkApi = require('./datasources/links');
const UserApi = require('./datasources/users');

const typeDefs = require('./schema/schema.js')
const resolvers = require('./resolver/resolver.js')

const dataSources = () => ({
    LinkApi: new LinkApi(),
    UserApi: new UserApi()
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    debug: true,
    formatError: (error) => {
        if (error.extensions.code === 'INTERNAL_SERVER_ERROR') {
            return new ApolloError("Error Server", "ERROR", {token: "uniqueTokenForLog"})
        }
        return error
    }
});
//TODO: Implement a dynamic way of handle the errors:
// With specific code / Message and a UniqueToken (then we can search error by Token)
// And log them in the appropriate place => LogFile / DB / ....

server.listen({ port: process.env.PORT || 4000 }).then(({url}) => {
        console.log(`Server running at ${url}`);
    })
