import { Box, Typography } from '@mui/material';
import PasswordLength from './components/PasswordLength';
import PasswordSettings from './components/PasswordSettings';
import GenerateButton from './components/GenerateButton';
import PasswordDisplay from './components/PasswordDisplay';

function App() {
  return (
    <Box sx={{
      backgroundColor: '#5e6bda',
      width: '100vw',
      height: '100vh',
      margin: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{
        width: '350px',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b0f2f',
        borderRadius: '10px',
      }}>
        <Typography sx={{ color: 'white', marginTop: 4, fontSize: '20px' }}>Password Generator</Typography>
        <PasswordDisplay />
        <PasswordLength />
        <PasswordSettings />
        <GenerateButton />
      </Box>
    </Box>
  );
}

export default App;
