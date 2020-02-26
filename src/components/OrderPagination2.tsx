import { useRouter } from 'next/router';
import OrderPagination2Row from './OrderPagination2Row';
import { useOrderPagination2Query } from './__generated__/OrderPagination2Query';

export default function OrderPagination2() {
  const router = useRouter();

  const variables = {
    page: parseInt((router.query as any)?.page) || 1,
    perPage: parseInt((router.query as any)?.perPage) || 10,
  };

  const { data, loading } = useOrderPagination2Query({ variables });

  if (loading) {
    return <div>Loading...</div>;
  }

  const items = data?.viewer?.orderPagination?.items;

  return (
    <table>
      {items.map((item, i) => {
        return <OrderPagination2Row item={item} key={i} />;
      })}
    </table>
  );
}
