import { Dialog, DialogTitle,DialogContent,DialogContentText } from "@material-ui/core";
import React, { useEffect, useState } from "react";

export default function CustomDialog(props) {
    const [open,setOpen] = useState(false);

    function handleClose(){
        props.onCloseDialog();
    }

    useEffect(()=>{
        setOpen(props.openDialouge);
    },[props.openDialouge])
    
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Alert !!!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.dialogContent}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
