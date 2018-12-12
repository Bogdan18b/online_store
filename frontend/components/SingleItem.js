import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';
import Link from 'next/link';
import SickButton from './styles/SickButton';
import Spinner from './styles/Spinner';

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  display-auto-columns: 1fr;
  display-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    text-align: center;
    font-size: 2rem;
    h2 {
      color: ${props => props.theme.red};
    }
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
      price
      user {
        name
        id
      }
    }
    me {
      id
    }
  }
`;

class SingleItem extends Component {
  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error}/>
          if (loading) return <Spinner />
          if (!data.item) return <p>No item found for ID {this.props.id}</p>
          const { item } = data;
          return (
            <SingleItemStyles>
              <Head>La Piata | {item.title}</Head>
              <img src={item.largeImage} alt={item.title}/>
              <div className="details">
                <h2>{item.title.toUpperCase()}</h2>
                <p>Price: {formatMoney(item.price)}</p>
                <p>Sold By: {item.user.name}</p>
                <p>Description: {item.description}</p>
                {data.me && data.me.id === item.user.id && <SickButton><Link href={{
                    pathname: 'update',
                    query: {id: item.id}
                  }}>
                  <a>Update</a>
                </Link></SickButton>}
                {data.me && data.me.id !== item.user.id && <AddToCart id={item.id}/>}
                {data.me && data.me.id === item.user.id && <DeleteItem id={item.id}/>}
                {!data.me && <SickButton><Link href={{
                    pathname: 'signup',
                  }}>
                  <a>Sign in to buy the item</a>
                </Link></SickButton>}
              </div>
            </SingleItemStyles>
          );
        }}

      </Query>
    );
  }
}

export default SingleItem;
export { SINGLE_ITEM_QUERY };
