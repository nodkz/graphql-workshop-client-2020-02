import * as Types from '../../__generated__/types';

import gql from 'graphql-tag';

export type OrderPagination2Row_itemFragment = (
  { __typename: 'Order' }
  & Pick<Types.Order, 'orderID' | 'freight'>
  & { customer: Types.Maybe<(
    { __typename: 'Customer' }
    & Pick<Types.Customer, 'companyName'>
  )> }
);

export const OrderPagination2Row_itemFragmentDoc = gql`
    fragment OrderPagination2Row_item on Order {
  orderID
  freight
  customer {
    companyName
  }
}
    `;