import React from 'react';
import ReactDom from 'react-dom';
import { useState } from 'react';

import'./index.css';
import orders from './orders';
import Order from './Order';
import Vendors from './Vendors';
import UpdateStatus from './UpdateStatus';

function Orderlist() {

  const allVendors = ['all', ...new Set(orders.map((order) => order.vendor))];

  const [orderItems, setOrderItems] = useState(orders);
  const [vendors, setVendor] = useState(allVendors);

  const filterOrders = (vendor) => {
    if(vendor === 'all'){
      setOrderItems(orders);
      return;
    }
    const newOrders = orders.filter((order) => order.vendor === vendor);
    setOrderItems(newOrders);
  } 

  const ongoingOrders = orderItems.filter(function(order){
    return order.isDelivered == false;
  });

  const completedOrders = orderItems.filter(function(order){
    return order.isDelivered == true;
  });

  return( <section className='OrdersPage'> 
           
            <h1> FILTERS </h1>

            <h4> Vendor </h4>

            <Vendors vendors={vendors} filterOrders={filterOrders}/>
           
            <h1>ONGOING ORDERS -</h1>
           
            {ongoingOrders.map((order) =>{
              return(
                <Order key={order.id} {...order}></Order>)
            })};

            <h1>COMPLETED ORDERS -</h1>

            {completedOrders.map((order) =>{
              return(
                <Order key={order.id} {...order}></Order>)
            })}

          </section>
    );
  }





ReactDom.render(<Orderlist/>,document.getElementById('root')
)
