import { ReactNode } from "react";

export interface BreadCrumbsProps {
  children?: ReactNode,
  expandText?: string,
  itemsAfterCollapse?: number,
  itemsBeforeCollapse?: number,
  maxItems?: number,
  separator?: ReactNode,
  className?: string,
}