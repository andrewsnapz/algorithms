function canFinish(numCourses, prerequisites) {
    let pt1 = 0;
    let pt2 = pt1 + 1;
    
}


// [course, prereq]
console.log(canFinish(2, [[1,0]])); // true;
console.log(canFinish(2, [[1,0],[0,1]])) // false;
console.log(canFinish(2, [[3,2], [1,0],[0,1],[2,3]])) // false

// array with the length of the course prereq array
