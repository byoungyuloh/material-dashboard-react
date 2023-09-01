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
import {
  Typography
} from '@mui/material';
import DataGridExample from "./DataGridExample";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Average survival rate for 1-day hospitalization"
                count="40,420"
                percentage={{
                  color: "success",
                  amount: "+100%",
                  label: "at start day",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Average survival rate for 30-day hospitalization"
                count="28,294"
                percentage={{
                  color: "error",
                  amount: "-30%",
                  label: "than 1-day hosp",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Average survival rate for 50-day hospitalization"
                count="24,332"
                percentage={{
                  color: "error",
                  amount: "-14%",
                  label: "than 30-day hosp",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Average survival rate for 100-day hospitalization"
                count="18735"
                percentage={{
                  color: "error",
                  amount: "-23%",
                  label: "than 50-day hosp",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{mt:1, mb:2}}>Servival Rate Over days by Treatment</Typography>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{mt:1, mb:2}}>Servival Rate Over days by Treatment</Typography>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={4.5}>
            <Typography variant="h2" sx={{mt:1, mb:2}}>Treatment Path of Days</Typography>
            <DataGridExample />
        </MDBox>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
