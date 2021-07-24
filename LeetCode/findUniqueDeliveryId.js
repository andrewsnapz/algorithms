function findUniqueDeliveryId(deliveryIds) {
    let set = new Set();
    const iterator = set.values();
    for (let i = 0; i < deliveryIds.length; i++) { 
        if (set.has(deliveryIds[i])) { 
            set.delete(deliveryIds[i]);
        } else { 
            set.add(deliveryIds[i]);
        }
    }
    return iterator.next().value;
}

console.log(findUniqueDeliveryId([2, 5, 4, 8, 6, 3, 1, 4, 2, 3, 6, 5, 1])); // 8