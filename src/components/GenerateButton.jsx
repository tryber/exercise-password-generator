import { Box,Button } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changePassword } from '../reducers';
import generator from 'generate-password';

const GenerateButton = () => {
  const { length, conditions: { numbers, symbols, lowercase, uppercase }, conditions } = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const calculatePassword = () => {
    const shouldCalculate = Object.values(conditions).some((condition) => condition === true);
    if (shouldCalculate) {
      console.log('entrou')
      let password = generator.generate({
        length,
        numbers,
        symbols,
        lowercase,
        uppercase,
      })
      dispatch(changePassword(password));
      localStorage.setItem('password', JSON.stringify(password));
    } else {
      dispatch(changePassword('PLEASE, SET YOUR PASSWORD SETTINGS'));
    }
  }

  return (
    <Box>
      <Button
        variant="contained"
        onClick={calculatePassword}
        sx={{
          width: '330px',
          height: '50px',
          marginTop: 2,
          marginBottom: 2,
          backgroundColor: '#5e6bda',
          color: 'white',
          marginTop: 2,
          marginBottom: 2,
          '&:hover': {
            backgroundColor: '#6f57a9',
          }
        }}
      >
        GENERATE PASSWORD
      </Button>
    </Box>
  )
}

export default GenerateButton