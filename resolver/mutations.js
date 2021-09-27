module.exports = {
    /**
     * Mutation function to demonstrate the mutation for the test
     * Mutate by true or false
     */
    toggleActiveLink: (parents, {id}, {dataSources}, info) => {
        return dataSources.LinkApi.toggleActiveLink(id);
    },
    /**
     * Mutation function to add a New Link
     */
    addNewLink: (parents, {link}, {dataSources}, info) => {
        return dataSources.LinkApi.addLink(link);
    }
}
