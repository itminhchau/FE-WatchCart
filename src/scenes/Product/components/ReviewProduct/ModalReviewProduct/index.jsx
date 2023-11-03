import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import ReviewProductForm from '../ReviewProductForm';

const labels = {
  1: 'Rất tệ',
  2: 'Tệ',
  3: 'Tạm ổn',
  4: 'Tốt',
  5: 'Rất tốt',
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const ModalReviewProduct = ({ handleClickOpen, open, handleClose, product }) => {
  const [value, setValue] = React.useState(1);
  const [hover, setHover] = React.useState(-1);
  // console.log('product', product);
  const handleSubmit = (values) => {
    console.log('values :', values);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"
      >
        <div className="text-[#1976d2] absolute top-[5px] right-[10px] cursor-pointer " onClick={handleClose}>
          <CloseIcon />
        </div>
        <DialogTitle id="alert-dialog-title">{'Đánh giá sản phẩm'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="flex flex-col items-center gap-3">
              <img src={product?.imageProduct[0].url} alt="" className="w-[200px]" />
              <div>{product?.nameProduct}</div>
              <Box
                sx={{
                  width: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Rating
                  size="medium"
                  name="hover-feedback"
                  value={value}
                  precision={1}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
              </Box>
            </div>
            <ReviewProductForm onSubmit={handleSubmit} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>{/* <Button onClick={handleSubmit}>Hoàn tất</Button> */}</DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalReviewProduct;
