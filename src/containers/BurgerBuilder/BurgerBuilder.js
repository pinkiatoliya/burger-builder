import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const Ingredients_Price = {
    salad: 50,
    paneer: 50,
    potato: 20,
    cheese: 50
}
class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                paneer: 0,
                potato: 0,
                cheese: 0
            },
            totalPrice: 40
        }
    }

    addIngredientHandler = (type)=>{
      let priceAddition = Ingredients_Price[type]; 
      let oldCount = this.state.ingredients[type];      
      let newCount = oldCount+1;
      let newPrice = priceAddition+ this.state.totalPrice

      let updateIngredient = {
          ...this.state.ingredients
        }
      updateIngredient[type] = newCount;
      this.setState({ingredients: updateIngredient, totalPrice: newPrice});      
    }
    removeIngredientHandler = (type)=>{

        let priceAddition = Ingredients_Price[type]; 
        let oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }  
        let newCount = oldCount - 1;
        let newPrice = this.state.totalPrice- priceAddition;
  
        let updateIngredient = {
            ...this.state.ingredients
          }
        updateIngredient[type] = newCount;
        this.setState({ingredients: updateIngredient, totalPrice: newPrice});
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
            console.log(disabledInfo[key]);
        }
        return (
            <Auxiliary>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls moreClickedHandle = {this.addIngredientHandler} lessClickedHandle = {this.removeIngredientHandler} disabled = {disabledInfo} price = {this.state.totalPrice}>Builder Control</BuildControls>

            </Auxiliary>
        );
    }
}

export default BurgerBuilder;