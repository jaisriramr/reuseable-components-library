import React, { FC, Fragment } from "react";
import { AlertProps } from './alert.types'
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";

const Alerts: FC<AlertProps> = ({
    action,
    children,
    closeText,
    color,
    icon,
    onClose,
    role,
    severity,
    variant,
    type,
    autoHideDuration,
    disableWindowBlurListener,
    key,
    open,
    resumeHideDuration,
    transitionDuration,
    anchorOrigin,
    message,
    onSnackBarClose,
    className,
    sx,
}) => {

  return (
    <Fragment>
        {
        type === 'alert' ? (
          <Alert 
            className={className}
              action={action} 
              children={children} 
              closeText={closeText} 
              color={color} 
              icon={icon}
              onClose={onClose}
              role={role}
              severity={severity}
              variant={variant}
              sx={sx}
          />
        ) : <Snackbar 
        sx={sx}
        className={className}
          action={action}
          anchorOrigin={anchorOrigin}
          autoHideDuration={autoHideDuration}
          disableWindowBlurListener={disableWindowBlurListener}
          key={key}
          message={message}
          onClose={onSnackBarClose}
          open={open}
          resumeHideDuration={resumeHideDuration}
          transitionDuration={transitionDuration}
        />
      }
    </Fragment>
  );
};

export default Alerts;
