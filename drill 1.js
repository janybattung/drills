function makeOrder(tableNumber, order, status) {
    let newOrder = {
      'tableNumber': tableNumber,
      'order': order,
      'status': status,
    };
    
    return newOrder;
  }
  //makeOrder(1, 'spaghetti', 'Open');
  let myOrder = makeOrder(1, 'spaghetti', 'Open');
  console.log(myOrder);