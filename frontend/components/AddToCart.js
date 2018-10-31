import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

class AddToCart extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{ id }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addToCart, { loading, error }) => (
          <React.Fragment>
            <button
              onClick={() => addToCart().catch(err => alert(err.message.slice(15)))}
              disabled={loading}
            >Add{loading && 'ing'} To Cart

            </button>
          </React.Fragment>
        )}
      </Mutation>
    );
  }
}

export default AddToCart;
