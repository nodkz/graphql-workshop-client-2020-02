/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OrderListQueryDEMO
// ====================================================

export interface OrderListQueryDEMO_viewer_orderPagination_items_employee {
  __typename: "Employee";
  firstName: string | null;
  lastName: string | null;
}

export interface OrderListQueryDEMO_viewer_orderPagination_items {
  __typename: "Order";
  /**
   * Order unique ID
   */
  orderID: number | null;
  orderDate: any | null;
  employee: OrderListQueryDEMO_viewer_orderPagination_items_employee | null;
}

export interface OrderListQueryDEMO_viewer_orderPagination {
  __typename: "OrderPagination";
  /**
   * Total object count.
   */
  count: number | null;
  /**
   * Array of objects.
   */
  items: (OrderListQueryDEMO_viewer_orderPagination_items | null)[] | null;
}

export interface OrderListQueryDEMO_viewer {
  __typename: "Viewer";
  orderPagination: OrderListQueryDEMO_viewer_orderPagination | null;
}

export interface OrderListQueryDEMO {
  /**
   * Data under client context
   */
  viewer: OrderListQueryDEMO_viewer | null;
}
