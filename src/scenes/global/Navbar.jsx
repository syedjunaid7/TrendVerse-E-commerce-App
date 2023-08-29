import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
          E COMMER
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }}>
            <SearchIcon />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutlineIcon />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <ShoppingBagIcon />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
