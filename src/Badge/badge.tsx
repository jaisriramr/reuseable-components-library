import React, { FC, Fragment } from "react";
import { BadgeProps } from "./badge.types";
import Badge from '@mui/material/Badge';

const TMBadge: FC<BadgeProps> = ({
    anchorOrigin,
    badgeContent,
    children,
    color,
    invisible,
    max,
    overlap,
    showZero,
    variant,
    role,
    className
}) => {

  return (
    <Fragment>
        <Badge 
            className={className}
            anchorOrigin={anchorOrigin}
            badgeContent={badgeContent}
            children={children}
            color={color}
            invisible={invisible}
            max={max}
            overlap={overlap}
            showZero={showZero}
            variant={variant}
            role={role}
        />
    </Fragment>
  );
};

export default TMBadge;
