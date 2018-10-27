import PleaseSignIn from '../components/PleaseSignIn';
import OrderList from '../components/OrderList';

const OrderPage = props => {
  return (
    <div>
      <PleaseSignIn>
        <OrderList />
      </PleaseSignIn>
    </div>
  );
};

export default OrderPage;
