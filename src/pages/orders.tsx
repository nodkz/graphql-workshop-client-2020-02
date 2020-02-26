import { withApollo } from 'app/utils/withApollo';
import OrderPagination from 'app/components/OrderPagination';

function orders() {
  return (
    <div>
      <h1>Order list</h1>
      <OrderPagination />
    </div>
  );
}

export default withApollo(orders, { ssr: false });
