import React, { FC } from "react"
import { SkeletonProps } from './skeleton.types'
import Skeleton from '@mui/material/Skeleton'

const TMSkeleton: FC<SkeletonProps> = ({
    animation,
    children,
    height,
    variant,
    width,
    className
}) => {


  return (
    <div>
        <Skeleton 
            className={className}
            animation={animation}
            children={children}
            height={height}
            variant={variant}
            width={width}
        />
    </div>
  );
};

export default TMSkeleton;
