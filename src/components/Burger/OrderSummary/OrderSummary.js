import React, { Component } from 'react'

import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[ordersummery will update]')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igkey => {
            return (
                <li key={igkey}>
                    <span style={{ textTransform: 'capitalize' }}>{igkey}</span> : {this.props.ingredients[igkey]}
                </li>);
        })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
                <p>Continue with checkout ?</p>
                <Button clicked={this.props.purchaseCanceled} btnType={"Danger"}>CANCEL</Button>
                <Button clicked={this.props.purchaseContinued} btnType={"Success"}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;