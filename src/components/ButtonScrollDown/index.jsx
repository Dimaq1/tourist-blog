import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import SouthIcon from '@mui/icons-material/South';
import style from './style.js'
import { scrollDown } from '../../store/buttonScrollDown/reducer.js';

function ButtonScrollDown() {
  const dispatch = useDispatch();

  const handleScrollDownClick = () => {
    dispatch(scrollDown())
  }


  return (
    <Button sx={style} onClick={() => handleScrollDownClick()} variant="text">
      scroll down
      <SouthIcon />
    </Button>
  );
}

export default ButtonScrollDown;