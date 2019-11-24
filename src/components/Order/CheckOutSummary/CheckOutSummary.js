import React from 'react';

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckOutSummary'


const checkOutSummary = (props) => {
    return (
        <div className={classes.Checkout}>
            <h1>We Hope It Taste Well</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button clicked={props.checkoutCancelled} btnType="Danger" >CANCEL</Button>
            <Button clicked={props.checkoutCountinued} btnType="Success">COUNTINUE</Button>
        </div>
    )
}

export default checkOutSummary