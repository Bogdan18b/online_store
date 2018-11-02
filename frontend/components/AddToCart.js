import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import SickButton from './styles/SickButton';

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
            <SickButton
              onClick={() => addToCart().catch(err => alert(err.message.slice(15)))}
              disabled={loading}
            >Add{loading && 'ing'} To Cart

            </SickButton>
          </React.Fragment>
        )}
      </Mutation>
    );
  }
}

export default AddToCart;
