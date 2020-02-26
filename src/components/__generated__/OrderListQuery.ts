/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OrderListQuery
// ====================================================

export interface OrderListQuery_viewer_orderPagination_items_employee {
  __typename: "Employee";
  firstName: string | null;
  lastName: string | null;
}

export interface OrderListQuery_viewer_orderPagination_items_customer_address {
  __typename: "CustomerAddress";
  city: string | null;
}

export interface OrderListQuery_viewer_orderPagination_items_customer {
  __typename: "Customer";
  companyName: string | null;
  address: OrderListQuery_viewer_orderPagination_items_customer_address | null;
}

export interface OrderListQuery_viewer_orderPagination_items {
  __typename: "Order";
  /**
   * Order unique ID
   */
  orderID: number | null;
  orderDate: any | null;
  freight: number | null;
  employee: OrderListQuery_viewer_orderPagination_items_employee | null;
  customer: OrderListQuery_viewer_orderPagination_items_customer | null;
}

export interface OrderListQuery_viewer_orderPagination_pageInfo {
  __typename: "PaginationInfo";
  perPage: number;
  currentPage: number;
}

export interface OrderListQuery_viewer_orderPagination {
  __typename: "OrderPagination";
  /**
   * Total object count.
   */
  count: number | null;
  /**
   * Array of objects.
   */
  items: (OrderListQuery_viewer_orderPagination_items | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: OrderListQuery_viewer_orderPagination_pageInfo;
}

export interface OrderListQuery_viewer {
  __typename: "Viewer";
  orderPagination: OrderListQuery_viewer_orderPagination | null;
}

export interface OrderListQuery {
  /**
   * Data under client context
   */
  viewer: OrderListQuery_viewer | null;
}

export interface OrderListQueryVariables {
  perPage?: number | null;
  page?: number | null;
}
