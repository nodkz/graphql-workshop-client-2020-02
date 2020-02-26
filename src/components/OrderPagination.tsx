import { gql, useQuery } from '@apollo/client';
import { notification, Table } from 'antd';
import {
  OrderListQuery,
  OrderListQuery_viewer_orderPagination_items,
} from './__generated__/OrderListQuery';
import { PaginationConfig } from 'antd/lib/table';
import { useRouter } from 'next/router';

const query = gql`
  query OrderListQuery($perPage: Int, $page: Int) {
    viewer {
      orderPagination(perPage: $perPage, page: $page) {
        count
        items {
          orderID
          orderDate
          freight
          employee {
            firstName
            lastName
          }
          customer {
            companyName
            address {
              city
            }
          }
        }
        pageInfo {
          perPage
          currentPage
        }
      }
    }
  }
`;

export default function OrderPagination() {
  const router = useRouter();

  const variables = {
    page: parseInt((router.query as any)?.page) || 1,
    perPage: parseInt((router.query as any)?.perPage) || 10,
  };

  const { data, loading } = useQuery<OrderListQuery>(query, {
    variables,
    // onCompleted: () => {
    //   notification.info({
    //     message: 'Запрос выполнен!!!',
    //   });
    // },
    onError: (e) => {
      notification.error({
        message: JSON.stringify(e),
      });
    },
  });

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
    <Table<OrderListQuery_viewer_orderPagination_items>
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
      ]}
    />
  );
}
