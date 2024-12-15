import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import Close from '../../../../public/static/assets/svg/shared/Close';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '1px solid #accccc',
  p: 4,
  maxHeight: '85vh',
  display: 'block',
  overflow: 'scroll'
};

function BasicModal({
  header,
  body,
  actions,
  open,
  setOpen,
  handleSubmit = () => {},
  onSubmit = () => {},
  form = false
}) {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item xs={12}>
              <Box
                id="modal-modal-title"
                variant="h6"
                component="div"
                sx={{
                  mt: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {header}
                </Box>
                <IconButton sx={{ ml: 'auto' }} onClick={handleClose}>
                  <Close />
                </IconButton>
              </Box>
            </Grid>
            {form ? (
              <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                <Grid item xs={12}>
                  <Box
                    id="modal-modal-description"
                    sx={{ mt: 3, textAlign: 'center' }}
                  >
                    {body}
                  </Box>
                </Grid>
                <Grid item xs={12} sx={{ mt: 4, textAlign: 'center' }}>
                  {actions}
                </Grid>
              </form>
            ) : (
              <>
                <Grid item xs={12}>
                  <Box
                    id="modal-modal-description"
                    sx={{ mt: 3, textAlign: 'center' }}
                  >
                    {body}
                  </Box>
                </Grid>
                <Grid item xs={12} sx={{ mt: 4, textAlign: 'center' }}>
                  {actions}
                </Grid>
              </>
            )}
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default React.memo(BasicModal);
