import { useState, useEffect, useCallback, useMemo } from 'react';
import { Alert, Grid, Slide, Snackbar } from '@mui/material';
import { useReactiveVar } from '@apollo/client';
import { removeSnackbar } from 'utils/snackbar';
import { snackbarsState } from 'utils/vars';
import styled from '@emotion/styled';

const VERTICAL_SIDES = ['top', 'bottom'];

const SnackbarsContainer = styled(Grid)(
  props => `
${[...new Array(50)].map(
  (_, i) => `div:nth-of-type(${i + 1}) {
              ${props.vertical}: ${i * 70 + 24}px;
              width: auto;
              transition: ${props.vertical} 0.5s;
            }`
)}
`
);

const SnackbarItem = ({
  hash,
  verticalSide,
  value: { autoClose, timeOut, message, severity, position }
}) => {
  const [open, setOpen] = useState(true);

  const formattedPosition = useMemo(() => {
    return position.split('-');
  }, [position]);

  const handleClose = useCallback(() => {
    setOpen(false);
    removeSnackbar(hash);
  }, [hash]);

  useEffect(() => {
    let timeOutFn;
    if (autoClose) {
      timeOutFn = setTimeout(() => {
        handleClose();
      }, timeOut);
    }

    return () => {
      if (autoClose) clearTimeout(timeOutFn);
    };
  }, [handleClose, timeOut, autoClose]);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: formattedPosition[0],
        horizontal: formattedPosition[1]
      }}
      TransitionComponent={Slide}
      TransitionProps={{ direction: verticalSide === 'top' ? 'down' : 'up' }}
    >
      <Alert severity={severity} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

const SnackbarProvider = () => {
  const snackbars = useReactiveVar(snackbarsState);

  return VERTICAL_SIDES.map(side => (
    <SnackbarsContainer key={side} vertical={side}>
      {Object.entries(snackbars)
        .filter(item => item[1]?.position?.includes(side))
        .map(([key, value]) => {
          return (
            <SnackbarItem
              key={key}
              hash={key}
              value={value}
              verticalSide={side}
            />
          );
        })}
    </SnackbarsContainer>
  ));
};

export default SnackbarProvider;
