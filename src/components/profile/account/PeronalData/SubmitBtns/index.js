import { Box, Typography, Divider, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

export default function SubmitBtns({ updateLoading, editMode, handleCancel }) {
  const isMobile = useIsMobile();
  return (
    <>
      <Box
        p={{
          xs: 2,
          md: 4
        }}
        display="flex"
        alignItems={'center'}
        justifyContent="space-between"
      >
        <Typography variant="subtitle1">اطلاعات شخصی</Typography>
        <Box>
          {(isMobile ? (editMode ? false : true) : true) && (
            <LoadingButton
              variant={!editMode ? 'text' : 'contained'}
              loading={updateLoading}
              type="submit"
              startIcon={
                !editMode && (
                  <i
                    className="icon-Edit"
                    style={{ color: 'rgba(28, 27, 32, 0.4)' }}
                  />
                )
              }
              sx={{
                color: !editMode ? 'rgba(28, 27, 32, 0.4)' : '#fff',
                padding: {
                  xs: '14px ',
                  md: '10px'
                },
                fontSize: editMode
                  ? { xs: '10px,', md: '14px' }
                  : { xs: '14px,', md: '18px' }
              }}
            >
              {!editMode ? 'ویرایش اطلاعات' : 'ثبت تغییرات'}
            </LoadingButton>
          )}
          {!isMobile && editMode && (
            <Button
              variant={'outlined'}
              disabled={updateLoading}
              onClick={() => handleCancel()}
              sx={{
                padding: '10px',
                fontSize: '14px',
                width: 100,
                margin: '0 10px'
              }}
            >
              انصراف
            </Button>
          )}
        </Box>
      </Box>
      <Divider style={{ width: '100%' }} />
    </>
  );
}
