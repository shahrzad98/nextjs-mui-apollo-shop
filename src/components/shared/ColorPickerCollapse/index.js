import { Close, Edit } from '@mui/icons-material';
import { Box, Collapse, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import ColorPicker from '../Color-Picker';

const ColorPickerCollapse = ({
  color,
  setColor,
  title = 'رنگ',
  SUGGESTION_COLORS = []
}) => {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [selectedSuggest, setSelectedSuggest] = React.useState('');

  const color_suggest_style = {
    width: '24px',
    height: '24px',
    border: '0.5px solid #c9c3e2',
    borderRadius: '8px',
    marginRight: '12px',
    marginBottom: '12px',
    cursor: 'pointer'
  };
  return (
    <Box width="1" borderRadius="10px" bgcolor="#F3F3F3" p={2}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Grid container alignItems="center" gap={2}>
          <Box
            width="32px"
            height="32px"
            borderRadius="10px"
            bgcolor={'#' + color?.hex || '#fff'}
          />
          <Typography variant="body2">{title}</Typography>
        </Grid>
        <IconButton onClick={() => setCollapseOpen(prev => !prev)}>
          {collapseOpen ? (
            <Close />
          ) : (
            <Box color="#483493">
              <Edit />
            </Box>
          )}
        </IconButton>
      </Box>
      <Collapse in={collapseOpen}>
        <Box py={3} borderTop="0.5px solid #DAD6E9" my={2}>
          <Grid container>
            {SUGGESTION_COLORS.map(e => (
              <Grid
                onClick={() => {
                  setColor({ hex: e.code?.replace('#', '') });
                  setSelectedSuggest(e.code);
                }}
                style={{
                  ...color_suggest_style,
                  backgroundColor: e.code,
                  border: selectedSuggest === e.code && '4px solid #F3F3F3',
                  outline: selectedSuggest === e.code && '4px solid #C9C3E0'
                }}
                key={e.code}
              />
            ))}
          </Grid>

          <ColorPicker {...{ color, setColor }} />
        </Box>
      </Collapse>
    </Box>
  );
};

export default ColorPickerCollapse;
