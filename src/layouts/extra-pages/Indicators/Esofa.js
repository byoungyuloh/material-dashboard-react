import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  lacticacid: string,
  respsupp: string,
  vasopressor: string,
  bil: string,
  cr: string,
  plt: string,
) {
  return { lacticacid, respsupp, vasopressor, bil, cr, plt };
}

const rows = [
  createData('> 2.0', 'Yes', 'Yes', '> 2.0', '> 2.0', '<100')
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

export default function Esofa() {
  return (
    <TableContainer component={Paper} sx={{ ...tableStyle, ...paperStyle }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={cellStyle}>Lactic Acid</TableCell>
            <TableCell align="center" sx={cellStyle}>Resp.Supp</TableCell>
            <TableCell align="center" sx={cellStyle}>Vasopressor</TableCell>
            <TableCell align="center" sx={cellStyle}>Bil (mg/dl)</TableCell>
            <TableCell align="center" sx={cellStyle}>Cr (mg/dl)</TableCell>
            <TableCell align="center" sx={cellStyle}>Plt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={cellStyle}
              align="center"
            >
              <TableCell align="center" component="th" scope="row" sx={cellStyle}>{row.lacticacid}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.respsupp}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.vasopressor}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.bil}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.cr}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.plt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
