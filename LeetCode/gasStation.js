const canCompleteCircuit = (gas, cost) => {
    let starterIdx = 0;
    let travelIdx = starterIdx + 1;
    let costIdx = travelIdx - 1;
    let travelPrice = gas[starterIdx];

    while(starterIdx !== travelIdx || starterIdx > gas.length) {
        if (travelIdx === undefined) {
            travelIdx = 0;
        }
        if (costIdx === undefined) {
            costIdx = 0;
        }
        travelPrice = travelPrice + gas[travelIdx] - cost[costIdx];
        console.log('updated travelPrice: ', travelPrice)
        if (travelPrice > 0) {
            travelIdx++;
            costIdx++;
        } else if (travelPrice <= 0) {
            starterIdx++;
        }
        console.log('this is the starterIdx ', starterIdx);
        console.log('this is the travelIdx: ', travelIdx);
        console.log('this is the costIdx: ', costIdx);
    }
};

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));