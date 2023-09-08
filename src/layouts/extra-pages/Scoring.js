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
import Bundle from './Bundle';
import BundleTable from './BundleTable';
import SourceOfInfection from './SourceOfInfection';
import Screening from './Screening';
import Severity from './Severity';

function Score() {
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
            // color: '#000000', // 버튼 텍스트색을 검은색으로 설정
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

  const handleBundleSelect = () => {
    console.log('bundle select');
  }

  const [showPredictionResults, setShowPredictionResults] = useState(false);
  

  const handlePrediction = () => {
    setShowPredictionResults(true); 
    setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, 200);
  };
  const handleResetPrediction = () => {
    setShowPredictionResults(false);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={1}> 
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ mb:1}}>환자선택</Typography>
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
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                    </Typography>
                    <DataTable selectRow={handleRowSelect}/>
                </Box>
                </Modal>
              {/* <Projects /> */}
            </Grid>

            { selectedRow === null ? 
              (<></>)
              :
              (
                
                <Grid item xs={12}>
                  <Typography variant="h3" sx={{mt:1, mb:2}}>환자 기본정보</Typography>
                    <Card>
                        <Box sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left', marginTop: 2, marginBottom: 2, marginLeft: 3, backgroundColor : '#ffffff' }}>
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
                </Grid>
              )
            }
          </Grid>
        </MDBox>
        <MDBox mt={4.5}>
          {
            selectedRow === null ? 
            (<></>)
            :
            (
            //   <Grid item xs={12}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                    <Typography variant="h3" sx={{mt:1, mb:2}}>감염의심</Typography>
                        <Card>
                            {/* <Bundle selectRow={handleBundleSelect}/> */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 2, marginBottom: 2, backgroundColor: '#ffffff' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <TextField
                                    label="체온"
                                    value={'37.5'}
                                    variant="outlined"
                                    sx={{ margin: 1 }}
                                    InputProps={{ readOnly: true }}
                                    />
                                    <TextField
                                    label="WBC"
                                    value={'5000 /mm3'}
                                    variant="outlined"
                                    sx={{ margin: 1 }}
                                    InputProps={{ readOnly: true }}
                                    />
                                    <TextField
                                    label="NEU"
                                    value={'35%'}
                                    variant="outlined"
                                    sx={{ margin: 1 }}
                                    InputProps={{ readOnly: true }}
                                    />
                                    <TextField
                                    label="ETC"
                                    value={'ETC'}
                                    variant="outlined"
                                    sx={{ margin: 1 }}
                                    InputProps={{ readOnly: true }}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <TextField
                                    label="Culture"
                                    value={'YES'}
                                    variant="outlined"
                                    sx={{ margin: 1 }}
                                    InputProps={{ readOnly: true }}
                                    />
                                    <TextField
                                    label="CRP"
                                    value={'12 mg/L'}
                                    variant="outlined"
                                    sx={{ margin: 1 }}
                                    InputProps={{ readOnly: true }}
                                    />
                                    <TextField
                                    label="ANC"
                                    value={'1750 /mm3'}
                                    variant="outlined"
                                    sx={{ margin: 1 }}
                                    InputProps={{ readOnly: true }}
                                    />
                                    <TextField
                                    label="EMPTY"
                                    value={'EMP'}
                                    variant="outlined"
                                    sx={{ margin: 1 }}
                                    InputProps={{ readOnly: true }}
                                    />
                                </Box>
                                </Box>
                        </Card>
                        <Typography variant="h3" sx={{mt:2, mb:2}}>감염원</Typography>
                        <Card>
                            <SourceOfInfection />
                        </Card>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography variant="h3" sx={{mt:1, mb:2}}>번들수행</Typography>
                            <BundleTable />
                </Grid>
            </Grid>
            )
          }
        </MDBox>

        <MDBox mt={4.5}>
          {
            selectedRow === null ? 
            (<></>)
            :
            (
            <Grid container spacing={3}>
              <Grid item xs={12} md={5}>
                <Typography variant="h3" sx={{mt:1, mb:2}}>지표점수 (Screening)</Typography>
                <Card sx={{ height: '220px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', marginBottom: 1  }}>
                        <Screening />
                    </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography variant="h3" sx={{mt:1, mb:2}}>지표점수 (Serverity)</Typography>
                <Card sx={{ height: '220px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left', marginBottom: 2  }}>
                        <Severity />
                    </Box>
                </Card>
              </Grid>
            </Grid>
            )
          }

        </MDBox>
        {
          showPredictionResults === false ?
          (<></>)
          : 
          (
            <MDBox mt={4.5}>
              <Typography variant="h3" sx={{mt:1, mb:2}}>예측결과</Typography>
              <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Number of surviving patients in the study population"
                count="40,420"
                percentage={{
                  color: "success",
                  amount: "100%",
                  label: "at start day",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Number of surviving patients in the study population"
                count="28,294"
                percentage={{
                  color: "error",
                  amount: "70%",
                  label: "than 1day hosp -30%",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Number of surviving patients in the study population"
                count="24,332"
                percentage={{
                  color: "error",
                  amount: "56%",
                  label: "than 30day hosp -14%",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Number of surviving patients in the study population"
                count="18735"
                percentage={{
                  color: "error",
                  amount: "33%",
                  label: "than 50day hosp -23%",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
            </MDBox>
          )
        }
      </MDBox>
    </DashboardLayout>
  );
}

export default Score;
