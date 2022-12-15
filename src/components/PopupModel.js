import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import './PopupModel.css';
import { AiFillTrophy } from 'react-icons/ai';

const PopUpModel = ({ open, score, theme, restartGame }) => {
  return (
    <Dialog
      open={open}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      className={`popup-model model${theme}`}
    >
      <DialogContent>
        <div className='total-score'>
          <div className={`score `}>
            <AiFillTrophy />
            &nbsp;
            <span> Your Total Score: {score}</span>
          </div>
        </div>
      </DialogContent>
      <Button className='submit-button'>Play Again</Button>
    </Dialog>
  );
};

export default PopUpModel;
