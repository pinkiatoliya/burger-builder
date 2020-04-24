import React, { Component } from 'react';
import * as classes from './BurgerIngradients.css';
import proptypes from 'prop-types';


class BurgerIngradient extends Component{
    render(){
        let ingredient = null;
        switch (this.props.type) {
           case 'bread-bottom':
               ingredient = <div className={classes.BreadBottom}></div>
               break;
    
               case 'bread-top':
                ingredient = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
                break;
       
                case 'paneer':
                    ingredient = <div className={classes.Paneer}></div>
                    break;
    
                case 'potato':
                    ingredient = <div className={classes.Potato}></div>
                    break;
    
                case 'salad':
                    ingredient = <div className={classes.Salad}></div>
                    break;
    
                case 'cheese':
                    ingredient = <div className={classes.Cheese}></div>
                    break;    
           default:
               break;
       }

       return ingredient;
    }

}

// eslint-disable-next-line react/no-typos
BurgerIngradient.proptypes = {
    type: proptypes.string.isRequired
};

export default BurgerIngradient;