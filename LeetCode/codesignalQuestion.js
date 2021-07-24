function gradeSort(scores) {
    let outterArray = [];
    let scoreCache = {
        'Excellent': 0,
        'Good': 0,
        'Fair': 0,
        'Poor': 0
    };
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 900) {
            scoreCache['Excellent']++;
        } else if (scores[i] >= 800 && scores[i] <= 899) {
            scoreCache['Good']++;
        } else if (scores[i] >= 700 && scores[i] <= 799) {
            scoreCache['Fair']++;
        } else if (scores[i] <= 699) {
            scoreCache['Poor']++;
        }
    }
    //check for the pair with the biggest score
    //check if any other pair shares the biggest score
        //if another pair shares the biggest score, store make sure they are pushed in the order of the best key.
    //if not, store in the order of the highest count
    for (let rating in scoreCache) {
        let theHighestCount = 0;
        let priorityRating;
        if (scoreCache[rating] > theHighestCount) {
            theHighestCount = scoreCache[rating];
            priorityRating = rating;
        } 
}

//Poor 600 - 699
//Fair 700 - 799
//Good 800 - 899
//Excellent 900+
/* output: [
    ['You scored Execellent - 2'],
    [You scored Poor - 1]
]
*/

let scores1 = [901 , 902, 650];
let scores2 = [1000, 801, 702, 601];