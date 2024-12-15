import React from 'react';
import FullScreenDialog from '../drawer';
import BasicModal from '../model';
import useIsMobile from '../Hooks/useIsMobile';

const DrawerModal = ({
  header,
  body,
  actions,
  open,
  setOpen,
  onSubmit,
  handleSubmit,
  form,
  heightContent,
  actionsStyle,
  contentStyle
}) => {
  const matches = !useIsMobile();

  return matches ? (
    <BasicModal
      {...{
        header,
        body,
        actions,
        open,
        setOpen,
        onSubmit,
        handleSubmit,
        form,
        heightContent,
        actionsStyle
      }}
    />
  ) : (
    <FullScreenDialog
      {...{
        header,
        body,
        actions,
        open,
        setOpen,
        onSubmit,
        handleSubmit,
        form,
        heightContent,
        actionsStyle,
        contentStyle
      }}
    />
  );
};

export default DrawerModal;
