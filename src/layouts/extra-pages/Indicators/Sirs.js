import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  Temperature: string,
  HeartRate: string,
  RespiratoryRate: string,
  BloodPressure: string,
) {
  return { Temperature, HeartRate, RespiratoryRate, BloodPressure };
}

const rows = [
  createData('38.5', '110 bpm', '22 bpm', '85/60 mmHg')
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

export default function Sirs() {
  return (
    <TableContainer component={Paper} sx={{ ...tableStyle, ...paperStyle }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={cellStyle}>Temperature</TableCell>
            <TableCell align="center" sx={cellStyle}>Heart Rate</TableCell>
            <TableCell align="center" sx={cellStyle}>Respiratory Rate</TableCell>
            <TableCell align="center" sx={cellStyle}>Systolic Blood Pressure</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.gcs}
              sx={cellStyle}
              align="center"
            >
              <TableCell align="center" component="th" scope="row" sx={cellStyle}>{row.Temperature}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.HeartRate}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.RespiratoryRate}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.BloodPressure}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
