import React from 'react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import SignLoginPopUp from './ToolTips/SignLoginPopUp';

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

const SignLoginBtn = () => {
    return (
        <div className="Signin-container">
            <HtmlTooltip
                title={
                    <React.Fragment>
                        <SignLoginPopUp/>
                    </React.Fragment>
                }>
                <div style={{display:"flex"}}>
                    <div><PermIdentityIcon style={{ fontSize: 45 }}/></div>
                    <div className='signloginTitle'>
                        <div className='text Link-Item'><a href="">Sign In</a></div>
                        <div className='text Link-Item'><a href=""> Join Free</a></div>  
                    </div>
                </div>
            </HtmlTooltip>
        </div>
    );
};

export default SignLoginBtn;