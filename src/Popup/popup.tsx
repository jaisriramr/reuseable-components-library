import React, { FC } from "react"
import { PopupProps } from './popup.types'
import Popover from "@mui/material/Popover";
import Dialog from '@mui/material/Dialog';
import Modal from '@mui/material/Modal';

const TMTabs: FC<PopupProps> = ({
    type,
    id,
    role,
    open,
    anchorEl,
    anchorOrigin,
    anchorPosition,
    anchorReference,
    ariaDescribedby,
    ariaLabelledBy,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll,
    onBackdropClick,
    onClose,
    transformOrigin,
    transitionDuration,
    children,
    closeAfterTransition,
    container,
    keepMounted,
    hideBackdrop,
    dialogTransitionDuration,
    className,
}) => {

  return (
    <div>
        {
            type === 'popover' ? 
            (<div>
                <Popover id={id}
                    className={className}
                    open={open} 
                    anchorEl={anchorEl}
                    anchorOrigin={anchorOrigin}
                    anchorPosition={anchorPosition}
                    anchorReference={anchorReference}
                    container={container}
                    role={role}
                    onClose={onClose}
                    transformOrigin={transformOrigin}
                    transitionDuration={transitionDuration}
                >
                    {children}
                </Popover>
            </div>) : 
            type === 'dialog' ? 
            (<div>
                <Dialog 
                    className={className}
                    open={open}
                    id={id}
                    role={role}
                    aria-describedby={ariaDescribedby}
                    aria-labelledby={ariaLabelledBy}
                    disableEscapeKeyDown={disableEscapeKeyDown}
                    fullScreen={fullScreen}
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    onBackdropClick={onBackdropClick}
                    onClose={onClose}
                    scroll={scroll}
                    transitionDuration={dialogTransitionDuration}
                    
                >
                    {children}
                </Dialog>
            </div>) : 
            type === 'modal' ? 
            (<div>
                <Modal 
                    className={className}
                    open={open} 
                    id={id}
                    role={role}
                    onClose={onClose}
                    closeAfterTransition={closeAfterTransition}
                    container={container}
                    disableAutoFocus={disableAutoFocus}
                    disableEnforceFocus={disableEnforceFocus}
                    disableEscapeKeyDown={disableEscapeKeyDown}
                    disablePortal={disablePortal}
                    disableRestoreFocus={disableRestoreFocus}
                    disableScrollLock={disableScrollLock}
                    hideBackdrop={hideBackdrop}
                    keepMounted={keepMounted}
                    onBackdropClick={onBackdropClick}
                    
                >
                    {children}
                </Modal>
                    
            </div>) : 
            (<div></div>)
        }
    </div>
  );
};

export default TMTabs;
