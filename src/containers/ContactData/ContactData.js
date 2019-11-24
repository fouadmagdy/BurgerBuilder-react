import React, { Component } from 'react';

import classes from './ContactData.css'
import Button from "../../components/UI/Button/Button"
import Spinner from '../../components/UI/Spinner/spinner'
import axios from '../../axios-orders'
import { throws } from 'assert';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault()
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingrdients,
            price: this.props.price,
            customer: {
                name: 'fouad magdy',
                address: {
                    street: 'Haram 1',
                    zipcode: '41651',
                    Country: 'Germany'
                },
                email: 'fouad@hotmail.com',
            },
            delevieryMethod: 'fatest'
        }
        axios.post('/orders.json', order).then(response => {
            this.setState({ loading: false })
            this.props.history.push('/')
        }).catch(error => {
            console.log(error)
            this.setState({ loading: false })
        })
    }

    render() {
console.log(this.props)
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="your name" />
                <input className={classes.Input} type="email" name="email" placeholder="your email" />
                <input className={classes.Input} type="text" name="street" placeholder="street" />
                <input className={classes.Input} type="text" name="Postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData