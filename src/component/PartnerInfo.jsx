import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Button as MyButton } from "./index";
const PartnerInfoRender = () => {
  return <></>;
};
function PartnerInfo(open, handleClose, data) {
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Partner Information"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            View All partner Information
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <MyButton title="Accept" style="p-[20px]" />
          </Button>
          <Button onClick={handleClose}>
            <MyButton title="Reject" style="bg-red-500 p-[20px]" />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PartnerInfo;
