import { IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { openSnackbar } from 'utils/snackbar';

const CopyButton = ({ text, color = '#171C22' }) => {
  return (
    <IconButton
      onClick={() => {
        navigator.clipboard.writeText(text);
        openSnackbar({ message: 'کپی شد' });
      }}
    >
      <ContentCopyIcon htmlColor={color} />
    </IconButton>
  );
};

export default CopyButton;
