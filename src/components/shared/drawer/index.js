import React from 'react';
import { Drawer } from '@mui/material';

function FullScreenDialog({
  open,
  setOpen,
  body,
  actions,
  header,
  heightContent = '100%'
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        sx={theme => ({
          ...theme.drawerPaper,
          '& .MuiPaper-root': {
            height: heightContent
          }
        })}
        anchor={'bottom'}
        open={open}
        onClose={handleClose}
      >
        {header}
        {body}
        {actions}
      </Drawer>
    </div>
  );
}
export default FullScreenDialog;
