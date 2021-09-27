## Technical Stack used

- Apollo Server
- Graph QL
- NodeJs
- The data comes from 2 Json file in ``|--json_ressources/``

## Commands to run the project

Install Node Dependencies:

```bash
npm i
```

Start the server with nodemon:

```bash
npm start
```

## Run GraphQl Queries

- You can use Apollo playground on ``http://localhost:4000/`` to:
  - Read the GraphQl API documentation
  - Read The GraphQl Schema
  - Run queries

## Current implementation
- The current schema allow to:
  - Client can create / modify a Link
  - Client can get All ( Users || Links )
  - Client can get ( User || Links ) By Id

## Blocking points
- The Client can not create dynamically a link, some improvement need to be done e.g add a schema directive
- Field Validation are not done. Need to code custom scalar type for some fields e.g Date / character limit / url parser 

## Futur implementation
- All the blocking points :)
- Add TypeScript Support
- Use a proper Naming convention for the function
- Refactor the Schema and use Interfaces
- Add ExpressJs dependencies to get the benefices of the framework
- Add Unit Test
- Create better way to handle Errors and log them
- Authentification system:
  - JWT in cookies and managed on server side
- Authorization context: Roles and Permission
- Security/Protection:
  - add a rate limit to the queries , it can be role based
  - add a depth limit
  - implement pagination
  - implement cost score attribute for all queries
- adopt a proper folder structure:
  - modularise GraphQl folder like resolver / mutation / queries....
  - Create   Model / controller / services folders 

