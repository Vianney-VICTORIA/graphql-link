const {gql} = require("apollo-server");

//TODO create Authorization system:
//  - Roles + Permission
//  - Role to be a type Enum and part of the type User

module.exports = gql`
    type Query {
        links:[Link],
        linkById(id: ID):Link,
        users:[User],
        userById(id: ID):User
    }
    type Mutation {
        toggleActiveLink(id: ID): Link
        updateLink(
            title: String
            url: String  
        ):Link
        addNewLink(link: linkInput): Link
    }
    input linkInput{
        title: String 
        active: Boolean
        description: String
        createDate: Int 
        modifyDate: Int
        url: String
    }
    
    type Link {
        id: ID
        title: String #TODO: create a custom scalar to throw an error if more than 144 character
        active: Boolean
        description: String
        createDate: Int #TODO: create a custom scalar type to parse the datetime
        modifyDate: Int
        url: String #TODO: create a custom scalar type to parse and verify the given URL
        type: String #TODO: create a schema directive to define what would be the type of link
    }
    type User {
        id: ID
        name: String!
        links:[Link]
    }

    type ClassicLink {
        link: Link!#TODO: if type = Classic
    }
    type ShowLink {
        link: Link!#TODO: if type = ShowLink
        events: [ShowEvent!]
    }
    type MusicLink {
        link: Link!#TODO: if type = MusicLink
        music_plateform:[MusicPlateform!]
    }
    
    type ShowEvent {
        id: ID!,
        date: String,
        place: String,
        on_sale: Boolean,
        url: String
    }
    type MusicPlateform {
        id: ID!,
        type_name: String, #TODO: create an ENUM to list the possible plateforms
        url: String, #TODO create a custom scalar type to parse the URL and define the type name / embed_code (maybe use a third party service)
        embed_code: String #TODO: create a custom scalar type to parse and verify the given embed_code
    }
`

