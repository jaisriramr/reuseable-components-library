import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TmDataTable from "./tmDataTable";
// import { Typography } from "@mui/material";
import { Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const meta: Meta<typeof TmDataTable> = {
  component: TmDataTable,
  title: "tm/TmDataTable",
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof TmDataTable>;

export const Primary: Story = (args) => {

  return (
    <>
    <TmDataTable {...args} />
    </>
  )
}


Primary.args = {
    
    rows: [
        {id: 'DTTX23244', projectName: 'London Vlog', orderType: 'Multiple, Mixed', orderDate: '21 Mar 23', dueDate: '28 Mar 23', status: 'Rejected'},
        {id: 'DTTX23244', projectName: 'London Vlog', orderType: 'Multiple, Mixed', orderDate: '21 Mar 23', dueDate: '28 Mar 23', status: 'Rejected'},
        
    ],
    columns: 
    [
        {
        field: 'id', headerName: 'Project ID', width: 147, renderCell: (params) => (
            <Typography fontSize={'16px'} fontWeight={'400'} color={'#535353'} >{params.value}</Typography>
        )
    },{
        field: 'projectName', headerName: 'Project Name', width: 283
    }, {
        field: 'orderType', headerName: 'Order Type', width: 255
    }, {
        field: 'orderDate', headerName: 'Order Date', width: 253, renderCell: (params) => (
            <Typography fontSize={'16px'} fontWeight={'400'} color={'#999999'} >{params.value}</Typography>
        )
    }, {
        field: 'dueDate', headerName: 'Due Date', width: 240, renderCell: (params) => (
            <Typography fontSize={'16px'} fontWeight={'400'} color={'#535353'} >{params.value}</Typography>
        )
    }, {
        field: 'status', headerName: 'Status', width: 118, headerAlign: 'center' ,align: 'center', renderCell: (params) => {

            if(params.value === 'Rejected') {
                return (<Typography fontSize={'12px'} display={'flex'} alignItems={'center'} justifyContent={'center'} columnGap={'3px'} fontWeight={'400'} color={'#6C63FF'} width={'100%'} borderRadius={'50px'} border={'0.5px solid #6C63FF'} bgcolor={'rgba(108, 99, 255, 0.1)'} >
                    <CircleIcon htmlColor="#6C63FF" sx={{fontSize: '8px'}} /> {params.value}
                    </Typography>)
            }
        }
        
    },{
        field: '', width: 50, sortable: false,renderCell: (params) => {
            return <MoreVertIcon />
        }
    }]

};
