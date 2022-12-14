import React from 'react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
// import MessagesPopUp from './MessagesPopUp';
import OrdersPopUp from './ToolTips/OrdersPopUp';

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

const Orders = () => {
    return (
        <div className="Orders-container">
            <HtmlTooltip
                title={
                    <React.Fragment>
                       <OrdersPopUp/>
                    </React.Fragment>
                    // <div>sasa</div>
                }>
                <div style={{display:"block"}}>
                    <div><LocalAtmIcon style={{ fontSize: 25 }}/></div>
                    <div className='text link-container'><a href="" className='link-item'>Orders</a></div>
                </div>
            </HtmlTooltip>
        </div>
    );
};

export default Orders;
