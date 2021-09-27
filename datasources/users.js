const users = require('../json-ressources/users_services.json');
const {DataSource} = require('apollo-datasource')
// If the data comes from an other Rest API
// const {RESTDatasource} = require('apollo-datasource-rest')

const _ = require('lodash')
//const {ApolloError} = require("apollo-server");

class UserApi extends DataSource {
    constructor() {
        super();
        // If the data comes from an other Rest API
        //this.BaseUrl = 'MySuperApiUrl'
    }
    initialize(config) {}
    /**
     * Get all the users from the User Service.
     * @param {Object} args specific argument to filter the user data
     * @return Array
     */
    getUsers(args) {
        return  _.filter(users, args);
    }
    /**
     * Get a single user by his ID from the User Service.
     * @param {String} id Should be int :)
     * @return Object
     */
    getUserById(id) {
        const user =  _.filter(users, { id: parseInt(id) });
        return user[0]
    }
    // Example For Rest api call
    // async getUserById(id) {
    //     try {
    //         const data =  await this.get(`${id}`);
    //         return data
    //     } catch (e) {
    //         return new ApolloError("Error Server", "ERROR", {token: "uniqueTokenForLog"})
    //     }
    // }
}
module.exports = UserApi;
