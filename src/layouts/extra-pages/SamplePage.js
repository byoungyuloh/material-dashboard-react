/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import ColorToggleButton from './ColorToggleButton';

import VerticalLinearStepper from './VerticalLinearStepper';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import DataTable from './DataTable';
import {
    Box,
    Stack,
    Typography
} from '@mui/material';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    // height: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            // backgroundColor: '#ffffff', // 버튼 배경색을 하얗게 설정
            color: '#000000', // 버튼 텍스트색을 검은색으로 설정
          },
        },
      },
    },
  });


  const [selectedRow, setSelectedRow] = useState(null);
  
  const handleRowSelect = (row) => {
    setSelectedRow(row); // 선택된 행 데이터 업데이트
    setOpen(false); // 모달 열기
  };

  const [showPredictionResults, setShowPredictionResults] = useState(false);

  const handlePrediction = () => {
    setShowPredictionResults(true); // 예측 결과를 보이도록 설정
  };
  const handleResetPrediction = () => {
    setShowPredictionResults(false);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}> 
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h3" sx={{mt:1, mb:2}}>환자선택</Typography>
              <Divider sx={{ backgroundColor: 'black' }}/>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" onClick={handleOpen}>Select Patient</Button>
                </ThemeProvider>
                <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Patient List
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Please Select Patient
                </Typography>
                <DataTable selectRow={handleRowSelect}/>
              </Box>
            </Modal>
              {/* <Projects /> */}
            </Grid>
            
            <Grid item xs={12}>
            <Typography variant="h3" sx={{mt:1, mb:2}}>환자 기본정보</Typography>
            <Divider/>
              {/* <OrdersOverview /> */}
              {
            selectedRow === null ?
            (<Box></Box>) :
            (
            <Card>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2, marginBottom: 2, backgroundColor : '#ffffff' }}>
                    <TextField
                        label="PatNo"
                        value={selectedRow?.patno}
                        variant="outlined"
                        sx={{ width:'150px',margin: 1 }}
                        InputProps={{ readOnly: true }}
                    />
                    <TextField
                        label="Name"
                        value={selectedRow?.name}
                        variant="outlined"
                        sx={{ width:'150px',margin: 1 }}
                        InputProps={{ readOnly: true }}
                    />
                    <TextField
                        label="Age"
                        value={selectedRow?.age}
                        variant="outlined"
                        sx={{ width:'150px',margin: 1 }}
                        InputProps={{ readOnly: true }}
                    />
                    <TextField
                        label="Sex"
                        value={selectedRow?.sex}
                        variant="outlined"
                        sx={{ width:'150px',margin: 1 }}
                        InputProps={{ readOnly: true }}
                    />
                    <TextField
                        label="MedDate"
                        value={selectedRow?.meddate}
                        variant="outlined"
                        sx={{ width:'150px',margin: 1 }}
                        InputProps={{ readOnly: true }}
                    />
                </Box>
            </Card>   
            )
          }
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={4.5}>
            <Typography variant="h3" sx={{mt:1, mb:2}}>검사결과</Typography>
            <Divider sx={{ backgroundColor: 'black' }}/>
            {
          selectedRow === null ? 
          (<Box></Box>) : (
            <Card>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2, marginBottom: 2  }}>
                    <TextField sx={{width:'150px', margin: 1}}label="sbp" value={80} variant="outlined" InputProps={{ readOnly: true }} />
                    <TextField sx={{width:'150px', margin: 1}}label="dbp" value={110} variant="outlined" InputProps={{ readOnly: true }} />
                    <TextField sx={{width:'150px', margin: 1}}label="RR" value={68} variant="outlined" InputProps={{ readOnly: true }} />
                    <TextField sx={{width:'150px', margin: 1}}label="BT" value={36.7} variant="outlined" InputProps={{ readOnly: true }} />
                    <TextField sx={{width:'150px', margin: 1}}label="Cr" value={0.7} variant="outlined" InputProps={{ readOnly: true }} />
                    <TextField sx={{width:'150px', margin: 1}}label="T.bil" value={1} variant="outlined" InputProps={{ readOnly: true }} />
                    <TextField sx={{width:'150px', margin: 1}}label="ALT" value={45} variant="outlined" InputProps={{ readOnly: true }} />
                    <TextField sx={{width:'150px', margin: 1}}label="AST" value={17} variant="outlined" InputProps={{ readOnly: true }} />
                    <TextField sx={{width:'150px', margin: 1}}label="CK" value={157} variant="outlined" InputProps={{ readOnly: true }} />
                    <TextField sx={{width:'150px', margin: 1}}label="INR" value={1.0} variant="outlined" InputProps={{ readOnly: true }} />
                    <TextField sx={{width:'150px', margin: 1}}label="Na" value={140} variant="outlined" InputProps={{ readOnly: true }} />
                </Box>
            </Card>
          )
        }
        </MDBox>

        <MDBox mt={4.5}>
            <Typography variant="h3" sx={{mt:1, mb:2}}>최적치료경로 예측</Typography>
            <Divider sx={{ backgroundColor: 'black' }}/>
            {
          selectedRow === null ? 
          (<></>) : (
            <Card>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2  }}>
                    <VerticalLinearStepper sx={{ marginLeft: '10px' }} onPredictionClick={handlePrediction} onResetClick={handleResetPrediction} />
                </Box>
            </Card>
          )
        }
            {/* <DataGridExample /> */}
        </MDBox>





      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
