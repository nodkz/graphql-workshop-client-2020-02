import { withApollo } from 'app/utils/withApollo';

function orders() {
  return (
    <div>
      <h1>Order list</h1>
    </div>
  );
}

export default withApollo(orders, { ssr: true });
