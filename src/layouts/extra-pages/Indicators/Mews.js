import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    SystolicBloodPressure: string,
    HeartRate: string,
    RespiratoryRate: string,
    Temperature : string,
    AVPUScale : string,
) {
  return { SystolicBloodPressure, HeartRate, RespiratoryRate, Temperature, AVPUScale };
}

const rows = [
  createData('77 mmHg', '119 bpm', '16 bpm', '37.7', 'Reacts to Pain')
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

export default function Mews() {
  return (
    <TableContainer component={Paper} sx={{ ...tableStyle, ...paperStyle }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={cellStyle}>Systolic Blood Pressure</TableCell>
            <TableCell align="center" sx={cellStyle}>Heart Rate</TableCell>
            <TableCell align="center" sx={cellStyle}>Respiratory Rate</TableCell>
            <TableCell align="center" sx={cellStyle}>Temperature</TableCell>
            <TableCell align="center" sx={cellStyle}>AVPU Scale</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.gcs}
              sx={cellStyle}
              align="center"
            >
                {/* RespiratoryRate, OxygenSaturation, SystolicBloodPressure, HeartRate, LevelofConsciousness, Temperature */}
              <TableCell align="center" component="th" scope="row" sx={cellStyle}>{row.SystolicBloodPressure}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.HeartRate}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.RespiratoryRate}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.Temperature}</TableCell>
              <TableCell align="center" sx={cellStyle}>{row.AVPUScale}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
