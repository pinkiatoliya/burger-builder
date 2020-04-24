import React from 'react';
import classes from './Burger.css';
import BurgerIngradients  from '../Burger/BurgerIngradients/BurgerIngradients';

const burger = (props)=>{
    let transformInredients = Object.keys(props.ingredients)
    .map(igKey => {
       return [...Array(props.ingredients[igKey])].map((_, i)=>{
          return <BurgerIngradients type={igKey} key={igKey+i}/>
       });
    });

    let isEmpty = a => Array.isArray(a) && a.every(isEmpty);
    if(isEmpty(transformInredients)){
        transformInredients = <p>Please start add ingredients </p>
    }
    // console.log(isEmpty(transformInredients));
    return(
        <div className={classes.Burger}>
           <BurgerIngradients type="bread-top" />
              {transformInredients}
           <BurgerIngradients type="bread-bottom" />
        </div>
    );
}

export default burger;