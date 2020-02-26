import { gql, useQuery } from '@apollo/client';
import { notification } from 'antd';

const query = gql`
  query OrderListQuery {
    viewer {
      orderPagination(perPage: 10) {
        count
        items {
          orderID
          orderDate
          employee {
            firstName
            lastName
          }
        }
      }
    }
  }
`;

export default function OrderPagination() {
  const { data, loading, error } = useQuery(query, {
    onCompleted: () => {
      notification.info({
        message: 'Запрос выполнен!!!',
      });
    },
    onError: (e) => {
      notification.error({
        message: JSON.stringify(e),
      });
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>${JSON.stringify(error)}</div>;
  } else if (data) {
    return <div>${JSON.stringify(data)}</div>;
  }
}
