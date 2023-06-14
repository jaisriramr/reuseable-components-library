import { GridColDef } from "@mui/x-data-grid";
import { ChangeEventHandler, MouseEventHandler } from "react";

export interface DataTablePRops {
    exportButton?: boolean
    columns: GridColDef[],
    rows: Array<object>,
    tableHeader: Array<string>, // { text: 'All Projects', value: 7  }
    search?: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    onClickExport?: MouseEventHandler,
    onClickFilter?: MouseEventHandler,
    filterButton?: boolean,
    footerPagination?: boolean,
    page?: number,
    pageLimit?: number,
    className?: string,
}

