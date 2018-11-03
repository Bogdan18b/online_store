import formatMoney from '../lib/formatMoney';
import RemoveFromCart from './RemoveFromCart';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  img {
    margin-right: 10px;
  }
  a, p {
    margin: 0;
  }
`;

const CartItem = ({ cartItem }) => {
  if (!cartItem.item) return (
    <CartItemStyles>
      <p>Item has been removed</p>
      <RemoveFromCart id={cartItem.id}/>
    </CartItemStyles>
  );
  return (
    <CartItemStyles>
      <Link href={{
          pathname: '/item',
          query: { id: cartItem.item.id}
        }}>
        <a><img width="100" src={cartItem.item.image} alt={cartItem.item.title} /></a>
      </Link>
      <div className="cart-item-details">
        <Link href={{
            pathname: '/item',
            query: { id: cartItem.item.id}
          }}>
          <a>{cartItem.item.title}</a>
        </Link>
        <p>
          {formatMoney(cartItem.item.price * cartItem.quantity)}
          {" - "}
          <em>
            {cartItem.quantity} &times; {formatMoney(cartItem.item.price)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id}/>
    </CartItemStyles>
  )
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired
};

export default CartItem;
