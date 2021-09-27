module.exports = {
    links: (parents, args, {dataSources}, info) => {
        return dataSources.LinkApi.getLinks(args);
    },
    linkById: (parents, {id}, {dataSources}, info) => {
        return dataSources.LinkApi.getLinkById(id);
    },
    users: (parents, args, {dataSources}, info) => {
        return dataSources.UserApi.getUsers(args);
    },
    userById: (parents, {id}, {dataSources}, info) => {
        return dataSources.UserApi.getUserById(id);
    }
}
