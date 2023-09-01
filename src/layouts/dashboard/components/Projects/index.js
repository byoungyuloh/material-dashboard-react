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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import { Chart } from "react-google-charts";
// Material Dashboard 2 React examples


function Projects() {
  // const { columns, rows } = data();
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );


  const data = [
    ["From", "To", "population"],
    ["TazoPERAN Inj",       "1차생존",19500],
    ["Metronidazole Inj",   "1차생존",12750],
    ["Meropen Inj",         "1차생존",16750],
    ["TazoPERAN Inj",       "1차사망",500],
    ["Metronidazole Inj",   "1차사망",250],
    ["Meropen Inj",         "1차사망",250],
    ["1차생존",             "Steroid",19000],
    ["1차생존",             "TazoPERAN Inj1",10000],
    ["1차생존",             "Metronidazole Inj1", 10000],
    ["1차생존",             "Meropen Inj1",10000],
    // total : 49,000
    // drug : 44000 + death 5000
    ["Steroid",             "2차생존",17000],
    ["TazoPERAN Inj1",      "2차생존",8000],
    ["Metronidazole Inj1",  "2차생존",8000],
    ["Meropen Inj1",        "2차생존",8000],
    ["Steroid",             "2차사망",2000],
    ["TazoPERAN Inj1",      "2차사망",2000],
    ["Metronidazole Inj1",  "2차사망",2000],
    ["Meropen Inj1",        "2차사망",2000],
    //
    ["2차생존",              "Steroid1",17000],
    ["2차생존",              "TazoPERAN Inj2",8000],
    ["2차생존",              "Metronidazole Inj2",8000],
    ["2차생존",              "Meropen Inj2",8000],
    ["Steroid1",            "사망",1000],
    ["TazoPERAN Inj2",      "사망",1000],
    ["Metronidazole Inj2",  "사망",1000],
    ["Meropen Inj2",        "사망",1000],
    ["Steroid1",            "3차생존",16000],
    ["TazoPERAN Inj2",      "3차생존",7000],
    ["Metronidazole Inj2",  "3차생존",7000],
    ["Meropen Inj2",        "3차생존",7000],
    ["1차사망",               "2차미조치",1000],
    ["2차미조치",             "2차사망",2000],
    ["2차사망",               "3차미조치",10000],
    ["3차미조치",             "사망",10000]
  ];
  // sankey chart draw option
  const options = {
    width: "90%",
    height: "100%",
    sankey: {
      node: {
        colors: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c"],
      },
    },
  };
  // servival rate graph text
  

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={5}>
        <Chart
            chartType="Sankey"
            data={data}
            options={options}
            width="95%"
            height="470px"
            // margin="100px"
            legendToggle
          />
      </MDBox>
    </Card>
  );
}

export default Projects;
