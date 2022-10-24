import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button as MyButton } from "./index";
import { BaseUrl } from "../constants";

function ActionsDialog({ open, OnClick, data }) {
  const hadlerClose = () => {
    OnClick();
  };
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        fullWidth={true}
        onClose={hadlerClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`Delete Manager ${data._name}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            if you Deleted This Manager. you could not undo it so please be
            Cautious
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={hadlerClose}>
            <MyButton title="cancle" style="p-[20px]  font-bold text-xl" />
          </Button>
          <Button
            onClick={async function fetchData() {
              try {
                const req = await fetch(`${BaseUrl}/admin/Remove_admin`, {
                  method: "POST",
                  mode: "cors",
                  cache: "no-cache",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  referrerPolicy: "no-referrer",
                  body: JSON.stringify({
                    id: data.id,
                  }),
                });
              } catch (err) {}
            }}
          >
            <MyButton
              title="Suspand"
              style="!bg-red-500 p-[20px] font-bold text-xl "
            />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ActionsDialog;
