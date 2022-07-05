import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_LEMONADE_TYPES } from '../../../graphql/queries/getAllLemonadeTypes';
import ManagementGrid from '../../shared/DataGrid';
import { GridColDef } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
        editable: false,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: false,
    },
];

const LemonadeType = () => {
    const [rows, setRows] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const navigate = useNavigate();

    const handleUseEffect = (loading: boolean, data: any) => {
        let rowsArray = [] as any;
        if (!loading && data?.retrieveAllLemonadeTypes?.length > 0) {
            data?.retrieveAllLemonadeTypes?.map((item, index) => {
                const rowObject = {
                    id: item.id,
                    name: item.name,
                };
                rowsArray?.push(rowObject);
            });
            setRows(rowsArray);
        }
    };

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <Typography variant="h4">
                Lemonade Types
            </Typography>
            <Button
                sx={{ my: 3 }}
                variant="contained"
                onClick={() => { navigate("/management/lemonadetype/details/0") }}>
                Add Lemonade Type
            </Button>
            <ManagementGrid
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                pageIndex={pageIndex}
                query={GET_ALL_LEMONADE_TYPES}
                handleUseEffect={handleUseEffect}
                path="/management/lemonadetype/details/"
            />
        </Box>
    );
}

export default LemonadeType;