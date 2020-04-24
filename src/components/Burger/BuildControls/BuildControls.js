import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Cheese', type: 'cheese'},
    {label: 'Salad', type: 'salad'},
    {label: 'Paneer', type: 'paneer'},
    {label: 'Potato', type: 'potato'}

];
const buildControls = (props)=>{
  return(
      <div className={classes.BuildControls}>
          <p>Price: {props.price}</p>
      {controls.map((item, indx) => {
        return <BuildControl label={item.label} key={indx} moreclicked = {()=>{props.moreClickedHandle(item.type)}} lessclicked = {()=>{props.lessClickedHandle(item.type)}} disabledInfo = {props.disabled} type={item.type}/>
      })}
      </div>
  );
}

export default buildControls;