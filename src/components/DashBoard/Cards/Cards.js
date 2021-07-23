import React from 'react'
import './Cards.scss'
import PeopleIcon from '@material-ui/icons/People';
import SmsIcon from '@material-ui/icons/Sms';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


export default function Cards() {
  return (
    <div className="cards_main">
      <div className="card">
        <p><PeopleIcon /></p>
        <div className="card_details">
          <p>New Visits</p>
          <p><strong>102,400</strong></p>
        </div>
      </div>
      <div className="card">
        <p>< SmsIcon /></p>
        <div className="card_details">
          <p>Messages</p>
          <p><strong>81,212</strong></p>
        </div>
      </div>
      <div className="card">
        <p><ShoppingBasketIcon /></p>
        <div className="card_details">
          <p>Purchases</p>
          <p><strong>9,280</strong></p>
        </div>
      </div>
      <div className="card">
        <p><ShoppingCartIcon /></p>
        <div className="card_details">
          <p>Shoppings</p>
          <p><strong>13,600</strong></p>
        </div>
      </div>
    </div>
  )
}
