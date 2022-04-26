import { ClickAwayListener, Tooltip, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changePassword } from '../reducers';

const PasswordDisplay = () => {
  const { password } = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const PWD = 'PLEASE, SET YOUR PASSWORD SETTINGS';

  const verifyPwd = () => {
    const pwd = JSON.parse(localStorage.getItem('password'));
    if (pwd?.length > 0) {
      dispatch(changePassword(pwd));
    }
  }

  const handleTooltipOpen = ({ target }) => (
    navigator.clipboard.writeText(target.innerText),
    setOpen(true)
  )

  const handleTooltipClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    verifyPwd();
  }, [])

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          title="Copied to clipboard!"
          placement="top"
          arrow
        >
          <Button
            onClick={password !== PWD ? handleTooltipOpen : handleTooltipClose}
            variant="contained"
            sx={{
              width: '330px',
              height: '50px',
              marginTop: 5,
              marginBottom: 2,
              backgroundColor: '#1e223f',
              color: 'white',
              '&:hover': {
                backgroundColor: '#5e6bda',
              },
            }}
          >
            { password }
          </Button>
        </Tooltip>
      </div>
    </ClickAwayListener>
  )
}

export default PasswordDisplay