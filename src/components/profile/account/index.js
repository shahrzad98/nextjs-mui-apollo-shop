import { useUser } from '@digify/theme-kit';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import PersonData from './PeronalData';
import SecurityData from './SecurityData';

export default function Account() {
  const {
    data,
    handleChange,
    handleSubmit,
    updateLoading,
    error,
    handleCancel,
    editMode,
    handleEditMode,
    fetchUserInfo
  } = useUser();
  const { info } = data;
  const router = useRouter();
  const isDesktop = !useIsMobile();

  return (
    <>
      {!isDesktop && (
        <Button sx={{ padding: '16px 0' }} onClick={() => router.back()}>
          <i className="icon-Arrowarrow-right" />
          <Typography variant="body1" component={'h1'} ml={1} color={'#1C1B20'}>
            اطلاعات حساب
          </Typography>
        </Button>
      )}
      <PersonData
        {...{
          info,
          handleChange,
          handleSubmit,
          updateLoading,
          error,
          handleCancel,
          editMode,
          handleEditMode
        }}
      />
      <SecurityData
        fetchUserInfo={fetchUserInfo}
        granted={data?.info?.granted}
      />
    </>
  );
}
