import React from "react";
import {
  AppBar,
  Avatar,
  Toolbar,
  Box,
  Typography,
  InputBase
} from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { Search} from "@mui/icons-material";



//****************CSS*******************//
const Header = styled(AppBar)`
//  background:black;
 color:white;
  position: sticky;
`;

const Tab = styled(NavLink)`
  text-decoration: none;
  color: inherit;
 
`;
const Tabcorner = styled(Box)`
justify-content:center;
display:flex;
// flex:1;

& > a {
  padding: 20px;
  color: inherit;
  text-decoration: none;
}
`;
const StyleSearch= styled(Search)`
padding:20px
`

//****************CSS end***************//
const NavBar2 = () => {
  return (
    <Header>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Tab to={"/"}>LOGO</Tab>
        </Box>
     
       <Tabcorner>
            <NavLink to={"/"}>Services</NavLink>
            <NavLink to={"/"}>About Us</NavLink>
            <NavLink to={"/"}>Contact</NavLink>
            <Search />
            <Avatar />
       </Tabcorner>
      </Toolbar>
    </Header>
  );
};

export default NavBar2;
