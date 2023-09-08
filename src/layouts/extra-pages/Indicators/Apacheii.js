import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    tempature: string,
    meanbp: string,
    heartrate: string,
    respirrate: string,
    pao2: string,
    na: string,
    k : string,
    cr : string,
    hct : string,
    wbc : string,
    gcs : string,
    age : string,
    chronicdisease : string,
) {
  return { tempature, meanbp, heartrate, respirrate, pao2, na, k, cr, hct, wbc, gcs, age, chronicdisease };
}

const rows = [
    // 2 2 2 2 3 
    // tempature: 2,
    // meanbp: 2,
    // heartrate: 2,
    // respirrate: 2,
    // pao2: 3,
    // na: 3,
    // k : 4,
    // cr : 2,
    // hct : 2,
    // wbc : 2,
    // gcs : string,
    // age : string,
    createData('33.6', '59', '61', '8', '57', '115', '2.1', '0.5', '23%', '33.2', '11','45', 'No')
];
const tableStyle = {
  // backgroundColor: '#f5f5f5', // 연한 회색 배경색
};

const cellStyle = {
  border: '1px solid rgba(225, 224, 224, 1)', // 테두리 스타일 설정
};

const paperStyle = {
  boxShadow: 'none', // 그림자 효과 제거
};

export default function Apacheii() {
  return (
    <TableContainer component={Paper} sx={{ ...tableStyle, ...paperStyle }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{...cellStyle, whiteSpace: 'nowrap'}}>Tempature</TableCell>
            <TableCell align="center" sx={{...cellStyle, whiteSpace: 'nowrap'}}>MeanBP</TableCell>
            <TableCell align="center" sx={{...cellStyle, whiteSpace: 'nowrap'}}>HeartRate</TableCell>
            <TableCell align="center" sx={{...cellStyle, whiteSpace: 'nowrap'}}>Respir.rate</TableCell>
            <TableCell align="center" sx={{...cellStyle, whiteSpace: 'nowrap'}}>PaO2</TableCell>
            <TableCell align="center" sx={{...cellStyle, whiteSpace: 'nowrap'}}>Na</TableCell>
            <TableCell align="center" sx={{...cellStyle, whiteSpace: 'nowrap'}}>K</TableCell>
            <TableCell align="center" sx={{...cellStyle, whiteSpace: 'nowrap'}}>Cr</TableCell>
            <TableCell align="center" sx={{...cellStyle, whiteSpace: 'nowrap'}}>Hct</TableCell>
            <TableCell align="center" sx={{...cellStyle, whiteSpace: 'nowrap'}}>WBC</TableCell>
            <TableCell align="center" sx={{...cellStyle, whiteSpace: 'nowrap'}}>GCS</TableCell>
            <TableCell align="center" sx={{...cellStyle, whiteSpace: 'nowrap'}}>Age</TableCell>
            <TableCell align="center" sx={{...cellStyle, whiteSpace: 'nowrap'}}>Chronicdisease</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={cellStyle}
              align="center"
            >
                {/* tempature, meanbp, heartrate, respirrate, pao2, na, k, cr, hct, wbc, gcs, age, chronicdisease */}
              <TableCell align="center" component="th" scope="row" sx={cellStyle}>{row.tempature}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.meanbp}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.heartrate}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.respirrate}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.pao2}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.na}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.k}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.cr}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.hct}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.wbc}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.gcs}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.age}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.chronicdisease}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
