import React, { FC } from "react"
import { BreadCrumbsProps } from './breadcrumbs.types'
import Breadcrumbs from '@mui/material/Breadcrumbs';

const TMBreadCrumbs: FC<BreadCrumbsProps> = ({
  children,
  expandText,
  itemsAfterCollapse,
  itemsBeforeCollapse,
  maxItems,
  separator,
  className,
}) => {

  return (
    <Breadcrumbs 
    className={className}
      children={children}
      expandText={expandText}
      itemsAfterCollapse={itemsAfterCollapse}
      itemsBeforeCollapse={itemsBeforeCollapse}
      maxItems={maxItems}
      separator={separator}
    />
  );
};

export default TMBreadCrumbs;
