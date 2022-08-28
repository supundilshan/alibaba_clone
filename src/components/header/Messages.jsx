import React from 'react';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import MessagesPopUp from './MessagesPopUp';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} arrow/>
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'white',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 300,
      fontSize: theme.typography.pxToRem(12),
      border: "2px solid rgba(108, 107, 107, 0.2)",
      right: "80px !important"
    },
    "& .MuiTooltip-arrow": {
        left: "100px !important",
        "&::before": {
          backgroundColor: "white",
          border:"1px solid rgba(108, 107, 107, 0.2)",
          maxWidth: 100,
        },
      }
  }));



const Messages = () => {
    return (
        <div className="Messages-container">
            <HtmlTooltip
                title={
                    <React.Fragment>
                       <MessagesPopUp/>
                    </React.Fragment>
                }>
                <div style={{display:"block"}}>
                    <div> <SmsOutlinedIcon style={{ fontSize: 25 }}/> </div>
                    <div className='text Link-Item'> <a href="">masage</a> </div>
                </div>
            </HtmlTooltip>
        </div>
    );
};

export default Messages;