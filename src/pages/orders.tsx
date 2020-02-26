import { withApollo } from 'app/utils/withApollo';
import OrderPagination2 from 'app/components/OrderPagination2';

function orders() {
  return (
    <div>
      <h1>Order list</h1>
      <OrderPagination2 />
    </div>
  );
}

export default withApollo(orders, { ssr: false });
