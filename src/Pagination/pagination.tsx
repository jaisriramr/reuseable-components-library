import React, { FC } from "react"
import { PaginationProps } from './pagination.types'
import Pagination from '@mui/material/Pagination';

const TMPagination: FC<PaginationProps> = ({
  boundaryCount,
  color,
  count,
  defaultPage,
  disabled,
  hideNextButton,
  hidePrevButton,
  onChange,
  page,
  shape,
  showFirstButton,
  showLastButton,
  siblingCount,
  size,
  variant,
  className,
}) => {

  return (
    <Pagination 
    className={className}
    boundaryCount={boundaryCount}
    color={color}
    count={count}
    defaultPage={defaultPage}
    disabled={disabled}
    hideNextButton={hideNextButton}
    hidePrevButton={hidePrevButton}
    onChange={onChange}
    page={page}
    shape={shape}
    showFirstButton={showFirstButton}
    showLastButton={showLastButton}
    siblingCount={siblingCount}
    size={size}
    variant={variant}
    />
  );
};

export default TMPagination;
