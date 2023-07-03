import { Box, Button, TextField, Typography, popoverClasses } from "@mui/material";
import React, {
  ChangeEvent,
  FC,
  Fragment,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import ViewColumnOutlinedIcon from "@mui/icons-material/ViewColumnOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import actionHeader from "./assests/actionHeader.png";
import SortIcon from "./sorticon";
import SortedIcon from "./assests/sortedIcon.png";
import { EnTableProps } from "./enTable.types";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Pagination from "@mui/material/Pagination";

const EnTable: FC<EnTableProps> = ({ rows }) => {
    const filterRef = useRef(null)
  const [nRows, setNRows] = useState<any>(rows);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState();
  const pageLimit = 10;
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [totalPageNum, setTotalPageNum] = useState<number>(
    Math.ceil(Number(rows?.length) / pageLimit)
  );
  let TotalPageNum: number = Math.ceil(Number(rows?.length) / pageLimit);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Project ID",
      flex: 1,
    },
    {
      field: "customerName",
      headerName: "Customer Name",
      flex: 1,
    },
    {
      field: "projectName",
      headerName: "Project Name",
      flex: 1,
    },
    {
      field: "orderType",
      headerName: "Order Type",
      flex: 1,
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      flex: 1,
    },
    {
      field: "orderDate",
      headerName: "Order Date",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params: any) => {
        if (params.value === "Active") {
          return (
            <>
              <CircleIcon
                fontSize="small"
                sx={{ fontSize: "12px", marginRight: "12px" }}
                htmlColor="#7FB800"
              />
              {params.value}
            </>
          );
        } else if (params.value === "Inactive") {
          return (
            <>
              <CircleIcon
                fontSize="small"
                sx={{ fontSize: "12px", marginRight: "12px" }}
                htmlColor="#FF595E"
              />
              {params.value}
            </>
          );
        }
      },
    },
    {
      field: "action",
      width: 20,
      renderHeader: (params: any) => (
        <img src={actionHeader} alt="actionheader" />
      ),
      renderCell: (params: any) => <MoreVertIcon />,
      sortable: false,
    },
  ];

  const sortedIcons = () => <img src={SortedIcon} alt="sorted-icon" />;

  function handlePagination() {
    let newRow = rows?.slice((page - 1) * pageLimit, page * pageLimit);

    setNRows(newRow);
  }

  function handleSearch(e: any) {
    setSearch(e.target.value);
    const filtered = rows?.filter((entry) =>
      Object.values(entry).some(
        (val) => typeof val === "string" && val.includes(e.target.value)
      )
    );
    let newRow = filtered?.slice((page - 1) * pageLimit, page * pageLimit);
    setPage(1);
    setTotalPageNum(Math.ceil(Number(filtered?.length) / pageLimit));
    setNRows(newRow);
  }

  function handlePaginationChange(event: any, value: any) {
    console.log(event);
    setPage(value);
  }

  useEffect(() => {
    handlePagination();
    console.log(page);
  }, [page]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  function customExport() {
    return (
      <GridToolbarContainer
        sx={{
          padding: "0 15px 0 0",
          height: "48px",
          borderBottom: "1px solid #E6E8F0",
          borderRadius: "4px 4px 0 0 !important",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          width={"332px"}
          borderRight={"1px solid #E6E8F0"}
          height={"48px"}
          display={"flex"}
          alignItems={"center"}
          paddingLeft={"20px"}
          paddingRight={"20px"}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25 9.2499L11 10.9999M10.5 5.7499C10.5 3.12655 8.37335 0.999901 5.75 0.999901C3.12665 0.999901 1 3.12655 1 5.7499C1 8.37325 3.12665 10.4999 5.75 10.4999C8.37335 10.4999 10.5 8.37325 10.5 5.7499Z"
              stroke="#00235B"
              stroke-width="0.9"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <TextField
            onChange={handleSearch}
            value={search}
            sx={{
              width: "100%",
              "& .MuiInputBase-root": {
                borderRadius: "0 !important",
                height: "48px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                border: "none !important",
                borderColor: "transparent !important",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
                borderWidth: "0 !important",
              },
            }}
            placeholder="search"
          />
        </Box>
        <Box display={"flex"} alignItems={"center"} columnGap={"34px"}>
          <Box
            sx={{ cursor: "pointer" }}
            display={"flex"}
            alignItems={"center"}
            columnGap={"4px"}
          >
            {/* <ViewColumnOutlinedIcon fontSize="small" /> */}
            <GridToolbarColumnsButton
              startIcon={<ViewColumnOutlinedIcon fontSize="small" />}
              endIcon={<KeyboardArrowDownOutlinedIcon />}
              sx={{
                color: "#00235B",
                fontWeight: "300",
                textTransform: "capitalize",
                fontSize: "16px",
              }}
            />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            position={'relative'}
            ref={filterRef}
          >
            <GridToolbarFilterButton
            // focusElementRef={filterRef}
              onClick={handleClick}
              slotProps={{
                popper: {placement: 'right',anchorEl: anchorEl}
              }}
              sx={{
                color: "#00235B",
                fontWeight: "300",
                textTransform: "capitalize",
                fontSize: "16px",
              }}
              endIcon={<KeyboardArrowDownOutlinedIcon htmlColor="#00235B" />}
            />
          </Box>

          <Box display={"flex"} alignItems={"center"}>
            <GridToolbarExport
              sx={{
                color: "#00235B",
                fontWeight: "300",
                textTransform: "capitalize",
                fontSize: "16px",
              }}
              endIcon={<KeyboardArrowDownOutlinedIcon htmlColor="#00235B" />}
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              disableElevation
              sx={{
                textTransform: "capitalize",
                borderRadius: "8px !important",
                fontWeight: "600 !important",
              }}
            >
              Add Project
            </Button>
          </Box>
        </Box>
      </GridToolbarContainer>
    );
  }

  return (
    <Fragment>
      {/* table header search and filter with add project button */}
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "48px !important",
          width: "100% !important",
          borderTop: "1px solid #E6E8F0",
          borderRight: "1px solid #E6E8F0",
          borderLeft: "1px solid #E6E8F0",
          borderRadius: "4px 4px 0 0 !important",
        }}
      >
        <Box
          width={"332px"}
          borderRight={"1px solid #E6E8F0"}
          height={"48px"}
          display={"flex"}
          alignItems={"center"}
          paddingLeft={"20px"}
          paddingRight={"20px"}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25 9.2499L11 10.9999M10.5 5.7499C10.5 3.12655 8.37335 0.999901 5.75 0.999901C3.12665 0.999901 1 3.12655 1 5.7499C1 8.37325 3.12665 10.4999 5.75 10.4999C8.37335 10.4999 10.5 8.37325 10.5 5.7499Z"
              stroke="#00235B"
              stroke-width="0.9"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <TextField
            onChange={handleSearch}
            value={search}
            sx={{
              width: "100%",
              "& .MuiInputBase-root": {
                borderRadius: "0 !important",
                height: "48px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                border: "none !important",
                borderColor: "transparent !important",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
                borderWidth: "0 !important",
              },
            }}
            placeholder="search"
          />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          columnGap={"36px"}
          fontSize={"16px !important"}
          paddingRight={"15px"}
          paddingLeft={"15px"}
          color={"#00235B !important"}
        >
          <Box
            sx={{ cursor: "pointer" }}
            display={"flex"}
            alignItems={"center"}
            columnGap={"8px"}
          >
            <ViewColumnOutlinedIcon fontSize="small" />
            <Typography
              marginLeft={"6px"}
              fontSize={"16px !important"}
              fontWeight={"300"}
            >
              Column
            </Typography>
            <KeyboardArrowDownOutlinedIcon />
          </Box>
          <Box
            sx={{ cursor: "pointer" }}
            display={"flex"}
            alignItems={"center"}
            columnGap={"8px"}
          >
            <FilterAltOutlinedIcon fontSize="small" />
            <Typography
              marginLeft={"6px"}
              fontSize={"16px !important"}
              fontWeight={"300"}
            >
              Filter
            </Typography>
            <KeyboardArrowDownOutlinedIcon />
          </Box>
          <Box
            sx={{ cursor: "pointer" }}
            display={"flex"}
            alignItems={"center"}
            columnGap={"8px"}
          >
            <IosShareOutlinedIcon fontSize="small" />
            <Typography
              marginLeft={"6px"}
              fontSize={"16px !important"}
              fontWeight={"300"}
            >
              Export
            </Typography>
            <KeyboardArrowDownOutlinedIcon />
          </Box>
          <Box>
            <Button
              variant="contained"
              disableElevation
              sx={{
                textTransform: "capitalize",
                borderRadius: "8px !important",
                fontWeight: "600 !important",
              }}
            >
              Add ProjectNumber
            </Button>
          </Box>
        </Box>
      </Box> */}
      {/* main table */}
      <DataGrid
        disableColumnMenu
        sx={{
          borderRadius: 0,
          //   "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
          //     width: '20px !important'
          //   },
          "&.MuiDataGrid-cell:focus": { outline: " none !important" },
          "& .MuiDataGrid-cell:focus-within": { outline: "none !important" },
          "& .MuiDataGrid-sortIcon": {
            opacity: "1 !important",
            visibility: "visible !important",
          },
          "& .MuiDataGrid-columnHeader": { outline: "none !important" },
          "& .MuiDataGrid-menuIconButton": {
            opacity: "1 !important",
            visibility: "visible !important",
          },
          "& .MuiButtonBase-root": {
            opacity: "1 !important",
            visibility: "visible !important",
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none !important",
          },
          "& .MuiDataGrid-columnHeaders": {
            fontSize: "16px !important",
            color: "#00235B !important",
            paddingRight: "10px !important",
          },
          "& .MuiDataGrid-iconButtonContainer": {
            width: "auto !important",
            marginLeft: "10px !important",
          },
        }}
        rows={nRows}
        columns={columns}
        // components={{
        //   ColumnSortedAscendingIcon: UnfoldMoreIcon,
        //   ColumnSortedDescendingIcon: UnfoldMoreIcon,
        // }}
        slots={{
          columnUnsortedIcon: SortIcon,
          columnSortedAscendingIcon: sortedIcons,
          columnSortedDescendingIcon: sortedIcons,
          toolbar: customExport,
          exportIcon: IosShareOutlinedIcon,
          openFilterButtonIcon: FilterAltOutlinedIcon,
        }}
        checkboxSelection
        hideFooter
      />
      <Box
        display={"flex"}
        alignItems={"center"}
        height={"72px"}
        borderRadius={"0 0 4px 4px"}
        paddingRight={"15px"}
        bgcolor={"white"}
        justifyContent={"end"}
        columnGap={"15px"}
      >
        <KeyboardDoubleArrowLeftIcon
          onClick={() => setPage(1)}
          sx={{
            display: `${page !== 1 ? "block" : "none"}`,
            cursor: "pointer",
            height: "18px",
            width: "18px",
          }}
        />

        <Pagination
          count={totalPageNum}
          siblingCount={0}
          defaultPage={1}
          boundaryCount={1}
          page={page}
          shape="rounded"
          onChange={handlePaginationChange}
        />

        {/* <Box display={"flex"} alignItems={"center"} columnGap={""}>
          <Button
            sx={{ height: "36px", minWidth: "36px", color: "#696E7D" }}
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <KeyboardArrowLeftIcon
              sx={{ cursor: "pointer", height: "18px", width: "18px" }}
            />
          </Button>

          <Button
            sx={{ height: "36px", minWidth: "36px", color: "#696E7D" }}
            disabled={page === Math.ceil(Number(rows?.length) / pageLimit)}
            onClick={() => setPage(page + 1)}
          >
            <KeyboardArrowRightIcon
              sx={{ cursor: "pointer", height: "18px", width: "18px" }}
            />
          </Button>
        </Box> */}

        <KeyboardDoubleArrowRightIcon
          onClick={() => setPage(totalPageNum)}
          sx={{
            display: `${
              page === Math.ceil(Number(rows?.length) / pageLimit)
                ? "none"
                : "block"
            }`,
            cursor: "pointer",
            height: "18px",
            width: "18px",
          }}
        />
      </Box>
    </Fragment>
  );
};

export default EnTable;
