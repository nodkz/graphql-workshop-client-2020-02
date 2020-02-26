import { OrderPagination2Row_itemFragment } from './__generated__/OrderPagination2Row_item';

interface Props {
  item: OrderPagination2Row_itemFragment;
}

export default function OrderPaginationRow({ item }: Props) {
  return (
    <tr>
      <td>{item.orderID}</td>
      <td>{item.freight}</td>
      <td>{item.customer.companyName}</td>
    </tr>
  );
}
