import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const columns: GridColDef[] = [
  {
    field: 'Bundle',
    headerName: 'Bundle',
    width: 200,
    editable: false,
    align:'center',
    headerAlign: 'center',
  },
  {
    field: 'Self Check',
    headerName: 'Self Check',
    width: 200,
    editable: false,
    align:'center',
    headerAlign: 'center',
    renderCell: (params) => (
      <FormControlLabel
        control={
          <Checkbox
            checked={params.row.checkedSelfCheck} // 'checkedSelfCheck' 상태를 사용하여 체크 여부 관리
            onChange={(event) => {
              params.api.updateRows([{ ...params.row, checkedSelfCheck: event.target.checked }]); // 'checkedSelfCheck' 상태 업데이트
            }}
          />
        }
      />
    ),
  },
  {
    field: '1h',
    headerName: '1h',
    width: 200,
    editable: false,
    align:'center',
    headerAlign: 'center',
    renderCell: (params) => (
      <FormControlLabel
        control={
          <Checkbox
            checked={params.row.checked1h} // 'checked1h' 상태를 사용하여 체크 여부 관리
            onChange={(event) => {
              params.api.updateRows([{ ...params.row, checked1h: event.target.checked }]); // 'checked1h' 상태 업데이트
            }}
          />
        }
      />
    ),
  },
  {
    field: '3h',
    headerName: '3h',
    width: 200,
    editable: false,
    align:'center',
    headerAlign: 'center',
    renderCell: (params) => (
      <FormControlLabel
        control={
          <Checkbox
            checked={params.row.checked3h} // 'checked3h' 상태를 사용하여 체크 여부 관리
            onChange={(event) => {
              params.api.updateRows([{ ...params.row, checked3h: event.target.checked }]); // 'checked3h' 상태 업데이트
            }}
          />
        }
      />
    ),
  },
  {
    field: '6h',
    headerName: '6h',
    width: 200,
    editable: false,
    align:'center',
    headerAlign: 'center',
    renderCell: (params) => (
      <FormControlLabel
        control={
          <Checkbox
            checked={params.row.checked6h} // 'checked6h' 상태를 사용하여 체크 여부 관리
            onChange={(event) => {
              params.api.updateRows([{ ...params.row, checked6h: event.target.checked }]); // 'checked6h' 상태 업데이트
            }}
          />
        }
      />
    ),
  },
];

const rows = [
  {
    'id': 1,
    'Bundle': 'Lactic Acid',
    'Self Check': 'Some Value',
    '1h': 'Another Value',
    '3h': 'More Value',
    '6h': 'Even More Value',
    'checkedBundle': false, // 각 필드에 대한 체크 상태 추가
    'checkedSelfCheck': true,
    'checked1h': true,
    'checked3h': true,
    'checked6h': false
  },
    {
        'id': 2,
        'Bundle': 'Blood Culture',
        'Self Check': 'Some Value',
        '1h': 'Another Value',
        '3h': 'More Value',
        '6h': 'Even More Value',
        'checkedBundle': true, // 각 필드에 대한 체크 상태 추가
        'checkedSelfCheck': false,
        'checked1h': false,
        'checked3h': true,
        'checked6h': false,
    },
    {
        'id': 3,
        'Bundle': 'Antibiotics',
        'Self Check': 'Some Value',
        '1h': 'Another Value',
        '3h': 'More Value',
        '6h': 'Even More Value',
        'checkedBundle': false, // 각 필드에 대한 체크 상태 추가
        'checkedSelfCheck': true,
        'checked1h': true,
        'checked3h': false,
        'checked6h': false,
    },
    {
        'id': 4,
        'Bundle': '수액',
        'Self Check': 'Some Value',
        '1h': 'Another Value',
        '3h': 'More Value',
        '6h': 'Even More Value',
        'checkedBundle': true, // 각 필드에 대한 체크 상태 추가
        'checkedSelfCheck': false,
        'checked1h': true,
        'checked3h': true,
        'checked6h': false,
    },
    {
        'id': 5,
        'Bundle': 'Vasopressor',
        'Self Check': 'Some Value',
        '1h': 'Another Value',
        '3h': 'More Value',
        '6h': 'Even More Value',
        'checkedBundle': true, // 각 필드에 대한 체크 상태 추가
        'checkedSelfCheck': true,
        'checked1h': true,
        'checked3h': true,
        'checked6h': true,
    }
];

const Bundle = ({ selectRow }) => {
  const handleRowClick = (params) => {
    selectRow(params.row);
  };

  return (
    <div style={{ height: 400, width: '100%', display: 'flex' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}

export default Bundle;
