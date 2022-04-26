import React from 'react';
import { Box, Typography, Slider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { changeLength } from '../reducers';

const PasswordLength = () => {
  const length = useSelector((state) => state.password.length);
  const dispatch = useDispatch();

  return (
    <Box>
      <Typography sx={{
        textAlign: 'left',
        color: '#4f5269',
        fontSize: '0.75em',

      }}>
          LENGTH: {length}
        </Typography>
      <Box sx={{
        width: '330px',
        height: '50px',
        backgroundColor: '#1e223f',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Slider
          min={4}
          step={1}
          max={32}
          defaultValue={4}
          onChange={({target: { value }}) => dispatch(changeLength(value))}
          sx={{
            width: '280px',
            '& .MuiSlider-thumb': {
              backgroundColor: 'white',
            },
            '& .MuiSlider-track': {
              backgroundColor: '#5e6bda',
              height: '2px',
              border: 'none',
            },
            '& .MuiSlider-rail': {
              backgroundColor: '#4f5269',
              height: '2px',
            }
          }}
        />
      </Box>
    </Box>
  )
}

export default PasswordLength