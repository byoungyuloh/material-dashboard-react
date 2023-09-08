import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
  createData('Lactic Acid', false, true, true, true),
  createData('Blood Culture', false, false, false, false),
  createData('Antibiotics', true, false, true, true),
  createData('수액', true, false, false, false),
  createData('Vasopressor', true, false, false, true),
];

export default function BundleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" >
        <TableHead sx={{height:'6.4vh'}}>
          <TableRow>
            <TableCell align="center">Bundles</TableCell>
            <TableCell align="center">Self Check</TableCell>
            <TableCell align="center">1h</TableCell>
            <TableCell align="center">3h</TableCell>
            <TableCell align="center">6h</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">
              <FormControl>
                {/* <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel> */}
                <RadioGroup
                  row
                  aria-labelledby="demo-form-control-label-placement"
                  name="position"
                  defaultValue="처방"
                >
                  <FormControlLabel
                    value="없음"
                    control={<Radio />}
                    label="없음"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="처방"
                    control={<Radio />}
                    label="처방"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="결과"
                    control={<Radio />}
                    label="결과"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </FormControl>
              </TableCell>
              <TableCell align="center">
              <FormControl>
                {/* <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel> */}
                <RadioGroup
                  row
                  aria-labelledby="demo-form-control-label-placement"
                  name="position"
                  defaultValue="없음"
                >
                  <FormControlLabel
                    value="없음"
                    control={<Radio />}
                    label="없음"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="처방"
                    control={<Radio />}
                    label="처방"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="결과"
                    control={<Radio />}
                    label="결과"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </FormControl>
              </TableCell>
              <TableCell align="center">
              <FormControl>
                {/* <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel> */}
                <RadioGroup
                  row
                  aria-labelledby="demo-form-control-label-placement"
                  name="position"
                  defaultValue="결과"
                  // sx={{ gap: 0 }}
                >
                  <FormControlLabel
                    value="없음"
                    control={<Radio />}
                    label="없음"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="처방"
                    control={<Radio />}
                    label="처방"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="결과"
                    control={<Radio />}
                    label="결과"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </FormControl>
              </TableCell>
              <TableCell align="center">
                        <FormControl>
                {/* <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel> */}
                  <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                  >
                    <FormControlLabel
                      value="top"
                      control={<Radio />}
                      label="없음"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Radio />}
                      label="처방"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="bottom"
                      control={<Radio />}
                      label="결과"
                      labelPlacement="start"
                    />
                  </RadioGroup>
              </FormControl>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
