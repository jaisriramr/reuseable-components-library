
export interface PaginationProps {
  boundaryCount?: number,
  color?: 'primary' | 'secondary' | 'standard',
  count?: number,
  defaultPage?: number,
  disabled?: boolean,
  hideNextButton?: boolean,
  hidePrevButton?: boolean,
  onChange?: ((event: React.ChangeEvent<unknown>, page: number) => void) | undefined,
  page?: number,
  shape?: 'circular' | 'rounded',
  showFirstButton?: boolean,
  showLastButton?: boolean,
  siblingCount?: number,
  size?: 'small' | 'medium' | 'large',
  variant?: 'outlined' | 'text',
    className?: string,
}