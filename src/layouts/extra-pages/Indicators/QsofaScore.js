import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  gcs: string,
  분당호흡수: string,
  sbp: string,
  carbs: string,
  protein: string,
) {
  return { gcs, 분당호흡수, sbp, carbs, protein };
}

const rows = [
  createData('변화있음', '> 22', '<100')
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

export default function QsofaScore() {
  return (
    <TableContainer component={Paper} sx={{ ...tableStyle, ...paperStyle }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={cellStyle}>GCS</TableCell>
            <TableCell align="center" sx={cellStyle}>분당 호흡수</TableCell>
            <TableCell align="center" sx={cellStyle}>SBP (mmhg)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.gcs}
              sx={cellStyle}
              align="center"
            >
              <TableCell align="center" component="th" scope="row" sx={cellStyle}>{row.gcs}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.분당호흡수}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.sbp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
