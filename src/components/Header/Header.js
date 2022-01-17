import React from "react";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.css";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar position="fixed" className="Header__toolbar">
          <Typography variant="h5" className="Header__title">
            Travel Advisor
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className="Header__title">
              Explore new places
            </Typography>
            {/* <Autocomplete> */}
            <div className="Header__search">
              <div className="Header__search-icon">
                <SearchIcon />
              </div>
              <InputBase placeholder="Search..." className="Header__input" />
            </div>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
