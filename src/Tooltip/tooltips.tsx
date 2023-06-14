import React, { FC } from "react"
import { ToolTipsProps } from './tolltips.types'
import Tooltip from '@mui/material/Tooltip';

const ToolTips: FC<ToolTipsProps> = ({
    children,
    arrow,
    describeChild,
    disableFocusListener,
    disableHoverListener,
    disableInteractive,
    disableTouchListener,
    enterDelay,
    enterNextDelay,
    enterTouchDelay,
    id,
    followCursor,
    leaveDelay,
    leaveTouchDelay,
    onClose,
    onOpen,
    open,
    placement,
    title,
    TransitionProps,
    className,
}) => {

  return (
    <div>
        <Tooltip 
            className={className}
            children={children}
            arrow={arrow}
            describeChild={describeChild}
            disableFocusListener={disableFocusListener}
            disableHoverListener={disableHoverListener}
            disableInteractive={disableInteractive}
            disableTouchListener={disableTouchListener}
            enterDelay={enterDelay}
            enterNextDelay={enterNextDelay}
            enterTouchDelay={enterTouchDelay}
            followCursor={followCursor}
            id={id}
            leaveDelay={leaveDelay}
            leaveTouchDelay={leaveTouchDelay}
            onClose={onClose}
            onOpen={onOpen}
            open={open}
            placement={placement}
            title={title}
            TransitionProps={TransitionProps}
        ></Tooltip>
    </div>
  );
};

export default ToolTips;
