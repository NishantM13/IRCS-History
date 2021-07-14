let orders = [

  { 
    UIDNO: 39,
    warehouseName: 'MUM',
    vendor: 'DEL',
    dispatchDate: '20.06.2021' ,
    deliveryDate: '04.07.2021' ,
    totalValue: 4500 ,
    item : [{itemName:'Water',itemQuantityDelivered:1,itemQuantity:3,itemUnit:10,itemValue:4000},{itemName:'Rice',itemQuantityDelivered:0,itemQuantity:'5',itemUnit:'6',itemValue:'500'}],
    isDelivered: false,
  },
   { 
    UIDNO: 93,
    warehouseName: 'MUM',
    vendor: 'CHE',
    dispatchDate: '20.06.2021' ,
    deliveryDate: '04.07.2021' ,
    totalValue: 4500 ,
    item: [{itemName:'Water',itemQuantityDelivered:0,itemQuantity:3,itemUnit:10,itemValue:4000},{itemName:'Rice',itemQuantityDelivered:0,itemQuantity:'5',itemUnit:'6',itemValue:'500'}],
    isDelivered: false,
  },
   { 
    UIDNO: 120,
    warehouseName: 'CHE',
    vendor: 'MUM',
    dispatchDate: '29.06.2021' ,
    deliveryDate: '06.07.2021' ,
    totalValue: 4500 ,
    item: [{itemName:'Blood',itemQuantityDelivered:0,itemQuantity:3,itemUnit:10,itemValue:4000},{itemName:'Oxygen',itemQuantityDelivered:0,itemQuantity:'5',itemUnit:'6',itemValue:'500'}],
    isDelivered: false,
  },
   { 
    UIDNO: 10,
    warehouseName: 'CHE',
    vendor: 'HYD',
    dispatchDate: '26.06.2021' ,
    deliveryDate: '01.07.2021' ,
    totalValue: 4500 ,
    item: [{itemName:'ParleG',itemQuantityDelivered:0,itemQuantity:3,itemUnit:10,itemValue:4000},{itemName:'Oreo',itemQuantityDelivered:0,itemQuantity:'5',itemUnit:'6',itemValue:'500'}],
    isDelivered: true,
  },
   { 
    UIDNO: 62,
    warehouseName: 'DEL',
    vendor: 'KOL',
    dispatchDate: '20.06.2021' ,
    deliveryDate: '22.06.2021' ,
    totalValue: 4500 ,
    item: [{itemName:'Apple',itemQuantityDelivered:0,itemQuantity:3,itemUnit:10,itemValue:4000},{itemName:'Banana',itemQuantityDelivered:0,itemQuantity:'5',itemUnit:'6',itemValue:'500'}],
    isDelivered: true,
  },
   { 
    UIDNO: 12,
    warehouseName: 'HYD',
    vendor: 'MUM',
    dispatchDate: '26.06.2021' ,
    deliveryDate: '10.07.2021' ,
    totalValue: 4500 ,
    item: [{itemName:'Honda',itemQuantityDelivered:0,itemQuantity:3,itemUnit:10,itemValue:4000},{itemName:'Toyota',itemQuantityDelivered:0,itemQuantity:'5',itemUnit:'6',itemValue:'500'}],
    isDelivered: false,
  }

]

export default orders