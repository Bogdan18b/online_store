 La Piata is a full-stack single page web application online store built using Node.js. You have a live demo [here](https://project-ike.herokuapp.com/#/). Feel free to login as a guest and sell your old items.

![](https://github.com/Bogdan18b/online_store/blob/master/demo.png)

# Features
## Backend
### GraphQL Yoga Server
 - implements query and mutation resolvers
 - custom SSL
 - charges credit cards with Stripe
 - sends emails to reset password
 - performs JWT puthentication
 - checks permissions
### Prisma, a GraphQL Database Interface
 - provides a set of GraphQL CRUD APIs for a MySQL, Postgres or MongoDB Database
 - schema fefinition
 - data relationships queried directly from our Yoga Server
 - self-hosted or as-a-service
## Frontend
### React.js
 - Next.js for server side rendering, routing and tooling
 - Styled Components for styling
 - React-Apollo for interfacing with Apollo Client
 - Jest & Enzyme for Testing
### Apollo Client
 - for data management
 - performs GraphQL utations
 - fetches GraphQL queries
 - caches GraphQL data
 - manages local state
 - error and loading UI states
