import React from 'react';
import classes from './buildControl.css';
const buildControl = (props)=>{
    console.log(props.disabledInfo[props.type], '[buildcontrol comp]');
    return(
        <div className={classes.BuildControl }>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.More} onClick={props.moreclicked} >More</button>
            <button className={classes.Less} onClick={props.lessclicked} disabled={props.disabledInfo[props.type]}>Less</button>            
        </div>
    );
}

export default buildControl;