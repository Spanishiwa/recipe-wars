import * as React from 'react';
import {
  Box,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close recipe image dialog modal"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.text.primary,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ImageModal(props) {
  const { imgSrc, title, handleClose } = props;

  return (
    <Box component="section">
      <BootstrapDialog
        aria-labelledby="recipe-image-dialog-title"
        maxWidth="md"
        onClose={handleClose}
        open={props.open}
        title="Close dialog modal"
      >
        <BootstrapDialogTitle
          id="recipe-image-dialog-title"
          sx={{ marginRight: '56px' }}
          onClose={props.handleClose}
        >
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <CardMedia
            alt={title}
            component="img"
            image={imgSrc}
            sx={{ maxWidth: '700px' }}
            title={title}
          />
        </DialogContent>
      </BootstrapDialog>
    </Box>
  );
}

ImageModal.propTypes = {
  imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};
