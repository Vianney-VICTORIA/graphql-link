const links = require('../json-ressources/links_service.json');
const {DataSource} = require('apollo-datasource')
const _ = require('lodash')

class LinkApi extends DataSource {
    constructor() {
        super();
    }
    initialize(config) {}
    /**
     * Get all Links from the Link Data Source.
     * @param {Object} args allow client to filter the data
     * @return Array
     */
    getLinks(args) {
        return  _.filter(links, args);
    }
    /**
     * Get a Link by ID from the Link Data Source.
     * @param {String} id Should be int :)
     * @return Object
     */
    getLinkById(id) {
        const link =  _.filter(links, { id: parseInt(id) });
        return link[0]
    }
    /**
     * Function to demonstrate the mutation for the test
     * By running this query the "active" property of the link pass will be mutate
     * Mutate by true or false
     * @param {String} id Should be int :)
     * @return Object
     */
    toggleActiveLink(id) {
        const link =  _.filter(links, { id: parseInt(id) });
        link[0].active = !link[0].active;
        return link[0]
    }
    /**
     * Function to demonstrate that Client can create a link
     * TODO: the method should be dynamic and client should be ablee to decide what kind of link he can create
     * By running this query the "active" property of the link pass will be mutate
     * @param {Object} link The Link data Post by the client to create a new link
     * @return Object
     */
    addLink(link) {
        link.id = Math.floor(Math.random() * 10 * 33);
        return link
    }
}
module.exports = LinkApi;
