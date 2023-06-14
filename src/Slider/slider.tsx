import React, { FC } from "react"
import { SliderProps } from './slider.types'
import Slider from '@mui/material/Slider';

const TMSlider: FC<SliderProps> = ({
  color,
  disableSwap,
  disabled,
  max,
  min,
  name,
  role,
  onChange,
  onChangeCommitted,
  orientation,
  scale,
  size,
  step,
  tabIndex,
  track,
  value,
  defaultValue,
  valueLabelDisplay,
  className,
}) => {

  return (
    <div>
        <Slider
        className={className}
          defaultValue={defaultValue}
         color={color}
         disableSwap={disableSwap}
         disabled={disabled}
         max={max}
         min={min}
         name={name}
         role={role}
         onChange={onChange}
         onChangeCommitted={onChangeCommitted}
         orientation={orientation}
         scale={scale}
         size={size}
         step={step}
         tabIndex={tabIndex}
         track={track}
         value={value}
         valueLabelDisplay={valueLabelDisplay}
        />
    </div>
  );
};

export default TMSlider;
