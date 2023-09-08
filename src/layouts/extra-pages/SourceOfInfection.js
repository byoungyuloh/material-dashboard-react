import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function createData(
  name: string,
  caloriesChecked: boolean,
  fatChecked: boolean,
  carbsChecked: boolean,
  proteinChecked: boolean,
) {
  return { name, caloriesChecked, fatChecked, carbsChecked, proteinChecked };
}

const rows = [
  createData(false, true, true, true),
  createData('Blood Culture', false, false, false, false),
  createData('Antibiotics', true, false, true, true),
  createData('수액', true, false, false, false),
  createData('Vasopressor', true, false, false, true),
];

const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: '#1976D2', // 파란색으로 변경
          },
        },
      },
    },
  },
});

export default function SourceOfInfection() {
  return (
    <TableContainer component={Paper}>
      <ThemeProvider theme={theme}>
      <Table aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Bundles</TableCell>
            <TableCell>Self Check</TableCell>
            <TableCell>1h</TableCell>
            <TableCell>3h</TableCell>
            <TableCell>6h</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody> 
            <TableRow>
              {/* <TableCell>{row.name}</TableCell> */}
              <TableCell>
                <label>
                  <Checkbox  defaultChecked color="default"/>
                  호흡기
                </label>
              </TableCell>
              <TableCell>
                <label>
                  <Checkbox  color="default"/>
                  근골격계
                </label>
              </TableCell>
              <TableCell>
                <label>
                  <Checkbox  color="default"/>
                  원발성 균혈증
                </label>
              </TableCell>
              <TableCell>
                <label>
                  <Checkbox  color="default"/>
                  비뇨생식기
                </label>
              </TableCell>
            </TableRow>
            <TableRow>
              {/* <TableCell>{row.name}</TableCell> */}
              <TableCell>
                <label>
                  <Checkbox />
                  중추신경계
                </label>
              </TableCell>
              <TableCell>
                <label>
                  <Checkbox  defaultChecked  color="default"/>
                  카테터 관련
                </label>
              </TableCell>
              <TableCell>
                <label>
                  <Checkbox  defaultChecked color="default"/>
                  소화기
                </label>
              </TableCell>
              <TableCell>
                <label>
                  <Checkbox  color="default"/>
                  심혈관계
                </label>
              </TableCell>
            </TableRow>
            <TableRow>
              {/* <TableCell>{row.name}</TableCell> */}
              <TableCell>
                <label>
                  <Checkbox color="default"/>
                  피부/연조직
                </label>
              </TableCell>
              <TableCell>
                <label>
                  <Checkbox  color="default"/>
                  이비인후
                </label>
              </TableCell>
              <TableCell>
                <label>
                  <Checkbox  color="default"/>
                  기타/원인불명
                </label>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
      </ThemeProvider>
    </TableContainer>
  );
}
