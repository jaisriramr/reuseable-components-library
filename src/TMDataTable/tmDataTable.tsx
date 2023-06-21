import React, { FC } from "react"
import { TmDataTableProps } from './tmDataTable.types'
import { DataGrid } from "@mui/x-data-grid";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const TMTabs: FC<TmDataTableProps> = ({
    rows,
    className,
    columns,
}) => {

  return (
    <div>
        <DataGrid 
            className={className}
            rows={rows}
            columns={columns}
            hideFooter
            sx={{
                '& .MuiDataGrid-columnHeader--moving': {background: '#F5F5F5 !important'},
                '&, [class^=MuiDataGrid]': { border: 'none' },
                '& .MuiDataGrid-columnHeader': {outline: 'none !important'},
                "& .MuiDataGrid-columnHeaders": { color: '#05172E', background: '#F5F5F5 !important' , maxHeight: '37px !important', lineHeight: '37px !important',minHeight: '37px !important', fontSize: '16px', 'font-weight': 500, paddingLeft: '14px !important' },
                '&.MuiDataGrid-cell:focus': { outline: ' none !important'}, '& .MuiDataGrid-cell:focus-within': { outline: 'none !important'},
                '& .MuiDataGrid-row': {paddingLeft: '14px !important', cursor: 'pointer'},
                '& .MuiDataGrid-columnSeparator': {
                    display: 'none !important',
                },
                '& .Mui-selected': {background: 'transparent !important'},
                '& .Mui-selected:hover': {background: '#F5F5F5 !important'},
                "& .MuiDataGrid-sortIcon": {
                    opacity: '1 !important',
                    visibility: 'visible !important',
                    },
                    "& .MuiDataGrid-menuIconButton": {
                    opacity: '1 !important',
                    visibility: 'visible !important',
                    },
                '& .MuiDataGrid-cellContent': {
                    fontSize: '16px !important'
                },
                '& .MuiDataGrid-columnHeader--sorted': {
                    justifyContent: 'center !important'
                },
                '& .MuiDataGrid-iconButtonContainer': {
                    width: 'auto !important'
                }
            }}
            disableColumnMenu
            components={{
                ColumnSortedAscendingIcon: ArrowDropDownIcon,
                ColumnSortedDescendingIcon: ArrowDropUpIcon
            }}
        />
    </div>
  );
};

export default TMTabs;
