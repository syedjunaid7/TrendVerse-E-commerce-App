import { useState } from "react";
import { useDispatch } from "react-redux";
import {IconButton, Box, Typography, useTheme, Button} from "@mui/material"
import AddIcon from "@mui/material/Add"
import RemoveIcon from "@mui/icons-material"
import {shades} from "../theme"
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({item,width}) => {
    
}