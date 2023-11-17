import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import ReviewProductForm from '../ReviewProductForm';
import reviewApi from 'api/reviewApi';
import { toast } from 'react-toastify';

const ModalReviewProduct = ({ handleClickOpen, open, handleClose, product, checkRenderReivew }) => {
  const handleSubmit = async (values) => {
    const newValue = { ...values, idProduct: product && product.id };
    try {
      const res = await reviewApi.createReviewProduct(newValue);
      if (res && res.data.errCode === 0) {
        toast.success('Đánh giá thành công');
        handleClose();
        checkRenderReivew();
      }
    } catch (error) {}
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
          <div className="flex flex-col items-center gap-3 ">
            <img src={product?.imageProduct[0].url} alt="" className="w-[200px]" />
            <div>{product?.nameProduct}</div>
          </div>
          <ReviewProductForm onSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalReviewProduct;
