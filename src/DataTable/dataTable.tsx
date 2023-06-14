import React, { FC, useEffect } from "react"
import { DataTablePRops } from './dataTable.types'
import { DataGrid } from '@mui/x-data-grid';
import Tabs from '../Tabs/tabs'
import Box from "../Box/box";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Typography from "@mui/material/Typography";
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from "@mui/material/Button";
import Select from '@mui/material/Select'
import { MenuItem } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DataTable: FC<DataTablePRops> = ({
    columns,
    rows,
    tableHeader,
    search,
    onClickExport,
    exportButton,
    filterButton,
    onClickFilter,
    footerPagination,
    className,
}) => {

    const [tabValue, setTabValue] = React.useState(0)
    const [nRow, setNRow] = React.useState(rows);
    const [nsearch, setNSearch] = React.useState('')
    const [nPage, setNPage] = React.useState(1)
    const [nPageLimit, setNPageLimit] = React.useState(10)



    function handleTabEvents(event: React.SyntheticEvent, newValue: any) {
        console.log(event)
        setTabValue(newValue)   
    }

    function handlePageLimit(e: any) {
        setNPageLimit(e.target.value)
    }

    function handlePage(e: any) {
        setNPage(e.target.value)
    }

    function assignTabs() {
        return (
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabValue} onChange={handleTabEvents} tabList={tableHeader}>

                    </Tabs>
                </Box>

                <div style={{
                    position: 'absolute',
                    right: '0',
                    height: '22px',
                    width: '148px',
                    background: '#fafafa',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 10px',
                    columnGap: '10px'
                }}>
                    <Typography fontSize={12}>rows per page</Typography>
                    <Select value={nPageLimit} onChange={(e) => handlePageLimit(e)} sx={{
                        height: '18px',
                        fontSize: '10px'
                    }}>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </div>
            </div>
        )
    }


    // code to always make the sort icon visible 
    // , '.MuiDataGrid-iconButtonContainer': {
    //     visibility: 'visible',
    //   },
    //   '.MuiDataGrid-sortIcon': {
    //     opacity: 'inherit !important',
    //   },

    function handleSearch (e: any) {
        setNSearch(e.target.value)
        const filtered = rows.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(e.target.value)));
        setNRow(filtered)
    }

    function assignSearch() {



        return (
            <div style={{
                height: '60px',
                background: '#F5F5F5',
                borderRadius: '4px',
                marginTop: '10px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',

            }}>
                <div style={{
                    width: '60%',
                    height: '40px',
                    border: '1px solid #D9D9D9',
                    padding: '0 10px',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <SearchIcon htmlColor="#999999" />
                    <input type="text" style={{
                        width: '100%',
                        height: 'auto',
                        fontSize: '16px',
                        color: '#999',
                        paddingLeft: '10px',
                        border: 'none',
                        outline: 'none',

                    }} 
                    value={nsearch}
                    onChange={handleSearch} placeholder="Search for project id, name, due date, status, order type, order date ..." />
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '16px',
                }}>
                    {
                        filterButton && (
                            <div onClick={onClickFilter} style={{ cursor: 'pointer', border: '1px solid #D9D9D9', color: '#D9D9D9', padding: '10px', borderRadius: '4px', background: 'white', maxWidth: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', columnGap: '16px', }} >
                                <FilterListIcon htmlColor="#999" />
                                <Typography color="#999">Filter</Typography>
                            </div>
                        )
                    }

                    {exportButton && (<div onClick={onClickExport} style={{ cursor: 'pointer', border: '1px solid #D9D9D9', color: '#D9D9D9', padding: '10px', borderRadius: '4px', background: 'white', maxWidth: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', columnGap: '16px', }} >
                        <ExitToAppIcon htmlColor="#999" />
                        <Typography color="#999">Export</Typography>
                    </div>)
                    }


                </div>
            </div>
        )
    }

    function handlePageChange() {
        let newRow = rows.slice((nPage - 1) * nPageLimit, nPage * nPageLimit)
        setNRow(newRow)
    }

    useEffect(() => {
        handlePageChange()
    }, [nPage, nPageLimit])

    function assignFooter() {
        var totalPageCount = Math.ceil(rows.length / nPageLimit);
        let pageArr = [];

        for (var i = 0; i < totalPageCount; i++) {
            pageArr.push(i + 1)
        }

        return (
            <div style={{
                height: '60px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#fff',
                padding: '0 16px'
            }}>
                <Typography color='#999999'>
                    1 to 10 of {totalPageCount}
                </Typography>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '16px',
                }}>
                    <Button sx={{
                        border: '1px solid #D9D9D9',
                        height: '32px',
                        width: '32px',
                        borderRadius: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent',
                        padding: 'none',
                    }}
                        disabled={nPage === 1}
                        onClick={() => setNPage(nPage - 1)}
                    >
                        <ArrowBackIcon htmlColor="#535353" />
                    </Button>

                    <Select onChange={(e) => handlePage(e)} value={nPage} defaultValue={nPage} sx={{
                        height: '32px !important'

                    }}>
                        {
                            pageArr.map((n: any, i: any) => {
                                return (
                                    <MenuItem key={i} value={n}>{n}</MenuItem>
                                )
                            })
                        }
                    </Select>

                    <Button sx={{
                        border: '1px solid #D9D9D9',
                        height: '32px',
                        width: '32px',
                        borderRadius: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent',
                        padding: 'none'
                    }}
                        disabled={nPage === totalPageCount}
                        onClick={() => setNPage(nPage + 1)}
                    >
                        <ArrowForwardIcon htmlColor="#535353" />
                    </Button>

                </div>
            </div>
        )
    }

    return (
        <div>
            <div style={{ padding: '16px', background: '#fff', borderRadius: '10px' }}>
                {tableHeader && assignTabs()}
                {search && assignSearch()}
                <DataGrid
                    className={className}
                    sx={{ '&, [class^=MuiDataGrid]': { border: 'none' }, "& .MuiDataGrid-columnHeaders": { 'border-bottom': '1px solid #959595', color: '#05172E', fontSize: '16px', 'font-weight': 500 }, '& . .MuiDataGrid-columnHeaderTitleContainer': { background: 'red' }, '& .MuiDataGrid-cell:focus': { outline: ' none'}, '& .MuiDataGrid-cell:focus-within': { outline: ' none'}, }}
                    columns={columns}
                    rows={nRow}
                    components={{
                        ColumnSortedAscendingIcon: ArrowDropUpIcon,
                        ColumnSortedDescendingIcon: ArrowDropDownIcon
                    }}

                    hideFooter={true}

                />
                
            </div>
            <br />
            {footerPagination && assignFooter()}
        </div>
    );
};

export default DataTable;
