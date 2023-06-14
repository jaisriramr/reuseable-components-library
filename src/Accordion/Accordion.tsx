import React, { FC, Fragment } from "react";
import { AccordionProps } from './Accordion.types'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TMAccordion: FC<AccordionProps> = ({
  accordionData,
  className
}) => {

  function assignAccordion () {

    return (
      <div>
        {
          accordionData?.map((accordion: any, i: any) => (
            <Accordion className={className} sx={accordion.sx} defaultExpanded={accordion.defaultExpanded} disabled={accordion.disabled} disableGutters={accordion.disableGutters}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${i}a-content`} id={`panel${i}a-header`}> 
                <Typography>{accordion.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {accordion.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))   
        }
      </div>
    )
  }

  return (
    <Fragment>
      {assignAccordion()}
    </Fragment>
  );
};

export default TMAccordion;
