![logo](https://github.com/Bogdan18b/online_store/blob/master/logo.png)

 La Piata is a full-stack single page web application online store. You have a live demo [here](https://la-piata-frontend-ebhmpztoni.now.sh). You can login as a guest and add a new item to sell or order a few items.

![demo](https://github.com/Bogdan18b/online_store/blob/master/demo.png)

## Table of Contents

  - [About](https://github.com/Bogdan18b/online_store#about)
  - [Features](https://github.com/Bogdan18b/online_store#features)
    - [Backend](https://github.com/Bogdan18b/online_store#backend)
      - [GraphQL Yoga Server](https://github.com/Bogdan18b/online_store#graphql-yoga-server)
      - [Prisma](https://github.com/Bogdan18b/online_store#prisma)
    - [Frontend](https://github.com/Bogdan18b/online_store#frontend)
      - [React](https://github.com/Bogdan18b/online_store#react)
      - [Apollo Client](https://github.com/Bogdan18b/online_store#apollo-client)
  - [Future Updates](https://github.com/Bogdan18b/online_store#future-updates)

## About
La piata is a single page web app built in Node.js and React and uses a GraphQL Yoga Server with a Prisma Database on the backend and React with an Apollo Client on the frontend. I deployed the backend on Heroku and the frontend on Now.
## Features
### Backend
Backend is built using a GraphQL Yoga Server, with a Prisma Database Interface.
#### GraphQL Yoga Server
 - test the playground [here](https://la-piata-yoga-prod.herokuapp.com/);
 - implements query and mutation resolvers;
 - custom SSL;
 - charges credit cards with Stripe;
 - sends emails to reset password;
 - performs JWT authentication;
 - checks permissions;

#### Prisma
 - a GraphQL Database Interface;
 - provides a set of GraphQL CRUD APIs for a MySQL, Postgres or MongoDB Database;
 - schema definition, with an example:
 ```graphql
       type User {
         id: ID! @unique
         name: String!
         email: String! @unique
         password: String!
         resetToken: String
         resetTokenExpiry: Float
         permissions: [Permission]
         cart: [CartItem!]!
       }
       type Item {
         id: ID! @unique
         title: String!
         description: String!
         image: String
         largeImage: String
         price: Int!
         user: User!
       }
 ```
 - data relationships queried directly from our Yoga Server;
 - self-hosted or as-a-service;

### Frontend
#### React
 - [Next.js](https://nextjs.org/) for server side rendering, routing and tooling;
 - [Styled Components](https://www.styled-components.com/) for styling, example:
 ```javascript
     const CloseButton = styled.button`
       background: black;
       color: white;
       font-size: 3rem;
       border: 0;
       position: absolute;
       z-index: 2;
       right: 0;
     `;
 ```
 - [React-Apollo](https://github.com/apollographql/react-apollo) for interfacing with Apollo Client;
 - [Jest](https://jestjs.io/) & [Enzyme](https://airbnb.io/enzyme/) for testing;

#### Apollo Client
 - for data management;
 - performs GraphQL mutations;
 - fetches GraphQL queries;
 - caches GraphQL data;
 - manages local state;
 - error and loading UI states.

## Future Updates
Future updates include a detailed user profile page and more tests. Check my portfolio [here](http://bogdanbobletec.us) to see the latest version of the site.
