import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/material/Add";
import RemoveIcon from "@mui/icons-material";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  //strapi format
  const {
    palette: { neutral },
  } = useTheme();
  const { category, price, name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        <img alt={item.name}
        width='300px'
        height='400px'
        src=""
        onClick={() => navigate()}
        style={{cursor:'pointer'}}
        />
        <Box
        display={isHovered ? 'blocked' : 'none'}
        position='absolute'
        bottom='10%'
        left='0'
        width='100%'
        padding='0 5%'
        >
            <Box 
            display='flex'
            alignItems='center'
            backgroundColor={shades.neutral{100}}
            borderRadius='3px'>
                                    <IconButton
                          onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography color={shades.primary[300]}>{item.count}</Typography>
                        <IconButton
                          onClick={() =>
                            setCount(count+1))
                          }
                        >
                          <AddIcon />
                        </IconButton>
                        
                        <Button
                        onClick={() => {dispatch(addToCart({item :{...item, count}}))}}
                        sx={{backgroundColor :shades.primary[300], color : 'white'}}
                        >
Add to Cart
                        </Button>
      </Box>
      </Box>
      <Box mt='3px'>
      <Typography variant="subtitle2" colr = {neutral.dark}>
        
      </Typography>
    </Box>
  );
};

export default Item;
