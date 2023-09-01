import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const columns: GridColDef[] = [
    {
        field: 'patno',
        headerName: 'patno',
        width: 200,
        editable: false,
      },
        {
        field: 'name',
        headerName: 'name',
        width: 200,
        editable: false,
      },
      {
        field: 'age',
        headerName: 'age',
        width: 200,
        editable: false,
      },
      {
        field: 'sex',
        headerName: 'sex',
        width: 200,
        editable: false,
      },
      {
        field: 'meddate',
        headerName: 'meddate',
        width: 200,
        editable: false,
      },
];

const rows = [
    {'id':2,'name':"홍길동",'patno':11775,'age':55,'sex':'M','meddate':'2010-03-05'},
];

const DataTable = ({selectRow}) => {
    const handleRowClick = (params) => {
        selectRow(params.row); // 선택된 행 데이터를 부모 컴포넌트로 전달
    };
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        onRowClick={handleRowClick}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
  );
}

export default DataTable;
