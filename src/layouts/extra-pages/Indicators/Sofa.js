import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    NeurologicalSystem: string,
    RespiratorySystem: string,
    CardiovascularSystem: string,
    LiverFunction: string,
    RenalFunction: string,
    Coagulation: string
) {
  return { NeurologicalSystem, RespiratorySystem, CardiovascularSystem, LiverFunction, RenalFunction, Coagulation };
}

const rows = [
  createData('13', '<400', 'MAP<70', '1.5', '1.6', '< 150')
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

export default function Sofa() {
  return (
    <TableContainer component={Paper} sx={{ ...tableStyle, ...paperStyle }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={cellStyle}>Neurological System</TableCell>
            <TableCell align="center" sx={cellStyle}>Respiratory System</TableCell>
            <TableCell align="center" sx={cellStyle}>Cardiovascular System</TableCell>
            <TableCell align="center" sx={cellStyle}>Liver Function</TableCell>
            <TableCell align="center" sx={cellStyle}>Renal Function</TableCell>
            <TableCell align="center" sx={cellStyle}>Coagulation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={cellStyle}
              align="center"
            >
              <TableCell align="center" component="th" scope="row" sx={cellStyle}>{row.NeurologicalSystem}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.RespiratorySystem}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.CardiovascularSystem}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.LiverFunction}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.RenalFunction}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.Coagulation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
