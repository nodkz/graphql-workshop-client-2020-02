import * as Types from '../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type OrderListQueryVariables = {
  perPage?: Types.Maybe<Types.Scalars['Int']>,
  page?: Types.Maybe<Types.Scalars['Int']>
};


export type OrderListQuery = (
  { __typename: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename: 'Viewer' }
    & { orderPagination: Types.Maybe<(
      { __typename: 'OrderPagination' }
      & Pick<Types.OrderPagination, 'count'>
      & { items: Types.Maybe<Array<Types.Maybe<(
        { __typename: 'Order' }
        & OrderListRowFragment
      )>>>, pageInfo: (
        { __typename: 'PaginationInfo' }
        & Pick<Types.PaginationInfo, 'perPage' | 'currentPage'>
      ) }
    )> }
  )> }
);

export type OrderListRowFragment = (
  { __typename: 'Order' }
  & Pick<Types.Order, 'orderID' | 'orderDate' | 'freight'>
  & { employee: Types.Maybe<(
    { __typename: 'Employee' }
    & Pick<Types.Employee, 'firstName' | 'lastName'>
  )>, customer: Types.Maybe<(
    { __typename: 'Customer' }
    & Pick<Types.Customer, 'companyName'>
    & { address: Types.Maybe<(
      { __typename: 'CustomerAddress' }
      & Pick<Types.CustomerAddress, 'city'>
    )> }
  )> }
);

export const OrderListRowFragmentDoc = gql`
    fragment OrderListRow on Order {
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
    `;
export const OrderListQueryDocument = gql`
    query OrderListQuery($perPage: Int, $page: Int) {
  viewer {
    orderPagination(perPage: $perPage, page: $page) {
      count
      items {
        ...OrderListRow
      }
      pageInfo {
        perPage
        currentPage
      }
    }
  }
}
    ${OrderListRowFragmentDoc}`;

/**
 * __useOrderListQuery__
 *
 * To run a query within a React component, call `useOrderListQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderListQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useOrderListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrderListQuery, OrderListQueryVariables>) {
        return ApolloReactHooks.useQuery<OrderListQuery, OrderListQueryVariables>(OrderListQueryDocument, baseOptions);
      }
export function useOrderListQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrderListQuery, OrderListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrderListQuery, OrderListQueryVariables>(OrderListQueryDocument, baseOptions);
        }
export type OrderListQueryHookResult = ReturnType<typeof useOrderListQuery>;
export type OrderListQueryLazyQueryHookResult = ReturnType<typeof useOrderListQueryLazyQuery>;
export type OrderListQueryQueryResult = ApolloReactCommon.QueryResult<OrderListQuery, OrderListQueryVariables>;