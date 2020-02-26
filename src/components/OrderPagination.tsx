import { Table, Button } from 'antd';
import { PaginationConfig } from 'antd/lib/table';
import { useRouter } from 'next/router';
import { useOrderListQuery } from './__generated__/OrderListQuery';
import { useOrderDeleteMutation } from './__generated__/OrderDeleteMutation';

export default function OrderPagination() {
  const router = useRouter();

  const variables = {
    page: parseInt((router.query as any)?.page) || 1,
    perPage: parseInt((router.query as any)?.perPage) || 10,
  };

  const { data, loading, refetch } = useOrderListQuery({ variables });
  const [orderDelete] = useOrderDeleteMutation();

  function onChange(pagination: PaginationConfig) {
    router.push({
      pathname: router.pathname,
      query: {
        page: pagination.current,
        perPage: pagination.pageSize,
      },
    });
  }

  return (
    <Table
      loading={loading}
      dataSource={data?.viewer?.orderPagination?.items || []}
      pagination={{
        pageSize: data?.viewer?.orderPagination?.pageInfo?.perPage || 10,
        current: data?.viewer?.orderPagination?.pageInfo?.currentPage || 1,
        total: data?.viewer?.orderPagination?.count || 0,
        showSizeChanger: true,
      }}
      onChange={onChange}
      rowKey="orderID"
      rowClassName={() => 'editable-row'}
      columns={[
        {
          title: 'OrderID',
          dataIndex: 'orderID',
        },
        {
          title: 'Customer',
          dataIndex: 'customer.companyName',
        },
        {
          title: 'City',
          dataIndex: 'customer.address.city',
        },
        {
          title: 'Order date',
          dataIndex: 'orderDate',
          render: (t) => new Date(t).toLocaleDateString(),
        },
        {
          title: 'Freight',
          dataIndex: 'freight',
          width: '150px',
        },
        {
          title: 'Operations',
          render: (t, record) => {
            return (
              <Button
                onClick={async () => {
                  await orderDelete({
                    variables: {
                      filter: {
                        orderID: record.orderID,
                      },
                    },
                  });
                  refetch();
                }}
              >
                Delete
              </Button>
            );
          },
        },
      ]}
    />
  );
}
