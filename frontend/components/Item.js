import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.image && <Link href={{
            pathname: '/item',
            query: { id: item.id}
          }}>
          <a><img src={item.image} alt={item.title}/></a>
        </Link>}
        <Title>
          <Link href={{
              pathname: '/item',
              query: { id: item.id}
            }}>
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>
        <AddToCart id={item.id}/>
      </ItemStyles>
    );
  }
}

export default Item;
