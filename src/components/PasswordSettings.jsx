import { Box, FormControl, FormControlLabel, FormGroup, Typography, Switch } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeConditions } from '../reducers';

function PasswordSettings() {
  const { conditions } = useSelector((state) => state.password)
  const dispatch = useDispatch();

  const handleChange = ({target: { name, checked }}) => {
    console.log(name, checked);
    if (checked) {
      name === 'numbers' && dispatch(changeConditions({...conditions, numbers: true }));
      name === 'symbols' && dispatch(changeConditions({...conditions, symbols: true }));
      name === 'lowercase' && dispatch(changeConditions({...conditions, lowercase: true }));
      name === 'uppercase' && dispatch(changeConditions({...conditions, uppercase: true }));
    } else {
      name === 'numbers' && dispatch(changeConditions({...conditions, numbers: false }));
      name === 'symbols' && dispatch(changeConditions({...conditions, symbols: false }));
      name === 'lowercase' && dispatch(changeConditions({...conditions, lowercase: false }));
      name === 'uppercase' && dispatch(changeConditions({...conditions, uppercase: false }));
    }
  }

  return (
    <Box sx={{ marginTop: 2,}}>
      <Typography sx={{
        textAlign: 'left',
        color: '#4f5269',
        fontSize: '0.75em',

      }}>
        SETTINGS
      </Typography>
      <FormControl component="fieldset" sx={{
        backgroundColor: '#1e223f',
        borderRadius: '5px',
        color: 'white',
        width: '330px',
      }}>
        <FormGroup sx={{ display: 'flex',alignContent: 'center', width: '330px' }}>
          <FormControlLabel
            label="Include Numbers"
            labelPlacement="start"
            control={
              <Switch
                onChange={handleChange}
                name="numbers"
                sx={{
                  '& .MuiSwitch-track': {
                    backgroundColor: '#6e7081',
                  },
                  '& .MuiSwitch-thumb': {
                    backgroundColor: 'white',
                  },
                  '& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
                    backgroundColor: '#5e6bda',
                  }
                }}
              />
            }
          />
          <FormControlLabel
            label="Include Symbols"
            labelPlacement="start"
            control={
              <Switch
                onChange={handleChange}
                name="symbols"
                sx={{
                  '& .MuiSwitch-track': {
                    backgroundColor: '#6e7081',
                  },
                  '& .MuiSwitch-thumb': {
                    backgroundColor: 'white',
                  },
                  '& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
                    backgroundColor: '#5e6bda',
                  }
                }}
              />
            }
          />
          <FormControlLabel
            label="Include Lowercase"
            labelPlacement="start"
            control={
              <Switch
                onChange={handleChange}
                name="lowercase"
                sx={{
                  '& .MuiSwitch-track': {
                    backgroundColor: '#6e7081',
                  },
                  '& .MuiSwitch-thumb': {
                    backgroundColor: 'white',
                  },
                  '& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
                    backgroundColor: '#5e6bda',
                  }
                }}
              />
            }
          />
          <FormControlLabel
            label="Include Uppercase"
            labelPlacement="start"
            control={
              <Switch
                onChange={handleChange}
                name="uppercase"
                sx={{
                  '& .MuiSwitch-track': {
                    backgroundColor: '#6e7081',
                  },
                  '& .MuiSwitch-thumb': {
                    backgroundColor: 'white',
                  },
                  '& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
                    backgroundColor: '#5e6bda',
                  }
                }}
              />
            }
          />
        </FormGroup>
      </FormControl>
    </Box>
  )
}

export default PasswordSettings;