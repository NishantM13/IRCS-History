import React from 'react';
import ReactDom from 'react-dom';
import { useState } from 'react';

import'./index.css';
import orders from './orders';
import Vendors from './Vendors';
import UpdateStatus from './UpdateStatus';
import Status from './Status';

const Order = ({UIDNO, warehouseName, vendor, dispatchDate, deliveryDate, totalValue, item, isDelivered}) =>{ 

  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);

  const whichButton = (isDelivered) =>{
    if(isDelivered){
      return <button onClick={() => setButtonPopup2(true)}>Receipt</button>;
    }
    else{
      return <button onClick={() => setButtonPopup2(true)}>Check Status</button>;
    }
  };

  const deleteButton = (isDelivered) => {
    if(!isDelivered){
      return <button>Delete</button>;
    }
    else{
      return <button>Delete</button>;
    }
  }

  const updateButton = (isDelivered) => {
    if(!isDelivered){
      return <button onClick={() => setButtonPopup(true)}>Update Status</button>;
    }
    else{
      return null;
    }
  }

  //SAMPLE DATA -

  // let orders = [

  // { 
  //   UIDNO: 39,
  //   warehouseName: 'MUM',
  //   vendor: 'DEL',
  //   dispatchDate: '20.06.2021' ,
  //   deliveryDate: '04.07.2021' ,
  //   totalValue: 4500 ,
  //   item : [{itemName:'Water',itemQuantityDelivered:0,itemQuantity:3,itemUnit:10,itemValue:4000},{itemName:'Rice',itemQuantity:'5',itemUnit:'6',itemValue:'500'}],
  //   isDelivered: false,
  // },
  
  return (  <div className='order'>

              <ul>
                
                <li>
                  <h1>Order UID NO. : {UIDNO}</h1>
                </li>
                <li>  
                  <h2>Vendor : {vendor}</h2><h2>Warehouse : {warehouseName}</h2>
                 </li>
                 <li> 
                  <h2>Dispatch Date : {dispatchDate}</h2><h2>Delivery Date : {deliveryDate}</h2>
                </li>
                <li>
                  
                  {whichButton(isDelivered)}
                  <Status trigger={buttonPopup2} setTrigger={setButtonPopup2}>  

                      <h1>Order: {UIDNO} </h1>
                      <h2>Vendor: {vendor} </h2>
                      <h2>Warehouse: {warehouseName} </h2>
                      <h2>Disatch Date: {dispatchDate} </h2>
                      <h2>Warehouse: {deliveryDate} </h2>
                      <h1>Items - </h1>
                      {item.map((object, index) =>{
                        return(
                          <li key={object.UIDNO}>
                            <h3> {item[index].itemName} - {item[index].itemQuantityDelivered}/{item[index].itemQuantity}</h3>
                          </li>
                        )
                      })}
                      <h1>Total: {totalValue}</h1>

                  </Status>
                
                  {deleteButton(isDelivered)}

                  {updateButton(isDelivered)}
                  <UpdateStatus trigger={buttonPopup} setTrigger={setButtonPopup}>
                      
                    <form>  

                      <h3> Update Status of Order {UIDNO} </h3>
                      <p> Enter Number of Recieved Items: </p>
                      
                      {item.map((object, index) =>{
                        return(
                          <li key={object.UIDNO}>
                            <h1> {item[index].itemName} <input
                                                            type='number'
                                                            id={item[index].itemQuantityDelivered}
                                                            name={item[index].itemName}
                                                                                            /> 
                              of {item[index].itemQuantity} ({item[index].itemQuantityDelivered} completed previously) 
                            </h1>
                          </li>
                        )
                      })}



                      <button type='submit'>Submit</button>

                    </form>

                  </UpdateStatus>

                </li>

              </ul>
              
            </div>
    );
};

export default Order