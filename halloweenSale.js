const howManyGames = (p,d,m,s, count=0) => {
    let updatedP = p-d;
    if (updatedP < m) {
        updatedP = m;
    }

    let updatedS;
    if (s >= p) {
        updatedS = s-p;
        count++;
        return howManyGames(updatedP,d,m,updatedS,count);
    } else {
        return count;
    }
};

//p: first game sold
//d: decrease for each game
//m: mimumum discount
//s: how much we have

console.log(howManyGames(20,3,6,80)); //6
console.log(howManyGames(20,3,6,85)); //7
console.log(howManyGames(83,31,1,6317)); //6155