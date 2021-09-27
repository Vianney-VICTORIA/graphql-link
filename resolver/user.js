const _ = require("lodash");
const {ApolloError} = require("apollo-server");

module.exports = {
    // Not sustainable for bigger set of data
    async links(user, args, {dataSources}) {
        try {
            const links = await dataSources.LinkApi.getLinks();
            const data = links.filter((link) => {
                return _.filter(user.links, {id: link.id}).length > 0;
            });
            return data;
        } catch (e) {
            return new ApolloError("Error Server", "ERROR", {token: "uniqueTokenForLog"})
        }
    }
}
