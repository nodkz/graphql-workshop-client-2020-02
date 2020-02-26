import * as Types from '../../__generated__/types';

import { OrderPagination2Row_itemFragmentDoc, OrderPagination2Row_itemFragment } from './OrderPagination2Row_item';
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';


export type OrderPagination2QueryVariables = {
  perPage?: Types.Maybe<Types.Scalars['Int']>,
  page?: Types.Maybe<Types.Scalars['Int']>
};


export type OrderPagination2Query = (
  { __typename: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename: 'Viewer' }
    & { orderPagination: Types.Maybe<(
      { __typename: 'OrderPagination' }
      & Pick<Types.OrderPagination, 'count'>
      & { items: Types.Maybe<Array<Types.Maybe<(
        { __typename: 'Order' }
        & Pick<Types.Order, 'freight'>
        & OrderPagination2Row_itemFragment
      )>>>, pageInfo: (
        { __typename: 'PaginationInfo' }
        & Pick<Types.PaginationInfo, 'perPage' | 'currentPage'>
      ) }
    )> }
  )> }
);


export const OrderPagination2QueryDocument = gql`
    query OrderPagination2Query($perPage: Int, $page: Int) {
  viewer {
    orderPagination(perPage: $perPage, page: $page) {
      count
      items {
        freight
        ...OrderPagination2Row_item
      }
      pageInfo {
        perPage
        currentPage
      }
    }
  }
}
    ${OrderPagination2Row_itemFragmentDoc}`;

/**
 * __useOrderPagination2Query__
 *
 * To run a query within a React component, call `useOrderPagination2Query` and pass it any options that fit your needs.
 * When your component renders, `useOrderPagination2Query` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderPagination2Query({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useOrderPagination2Query(baseOptions?: ApolloReactHooks.QueryHookOptions<OrderPagination2Query, OrderPagination2QueryVariables>) {
        return ApolloReactHooks.useQuery<OrderPagination2Query, OrderPagination2QueryVariables>(OrderPagination2QueryDocument, baseOptions);
      }
export function useOrderPagination2QueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrderPagination2Query, OrderPagination2QueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrderPagination2Query, OrderPagination2QueryVariables>(OrderPagination2QueryDocument, baseOptions);
        }
export type OrderPagination2QueryHookResult = ReturnType<typeof useOrderPagination2Query>;
export type OrderPagination2QueryLazyQueryHookResult = ReturnType<typeof useOrderPagination2QueryLazyQuery>;
export type OrderPagination2QueryQueryResult = ApolloReactCommon.QueryResult<OrderPagination2Query, OrderPagination2QueryVariables>;