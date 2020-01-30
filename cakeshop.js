function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
    if (servedOrders.length === 0) return true;
    if (takeOutOrders[0] === servedOrders[0]) { 
        return isFirstComeFirstServed(takeOutOrders.slice(1), dineInOrders, servedOrders.slice(1));
    } else if (dineInOrders[0] === servedOrders[0]) {
        return isFirstComeFirstServed(takeOutOrders, dineInOrders.slice(1), servedOrders.slice(1));
    } else { 
        return false;
    }
}

let takeOutOrders = [1, 3, 5];
let dineInOrders = [2, 4, 6];
let servedOrders = [1, 2, 3, 5, 4, 6];
console.log(isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders)) //true
