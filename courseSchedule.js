function canFinish(numCourses, prerequisites) {}

// [course, prereq]
console.log(canFinish(2, [[1, 0]])); // true;
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
); // false;
console.log(
  canFinish(4, [
    [3, 2],
    [1, 0],
    [0, 1],
    [2, 3],
  ])
); // false
console.log(
  canFinish(3, [
    [3, 2],
    [1, 0],
    [2, 1],
  ])
); // true

// store values into object
/* 
    {
        1(class): 0 (prereq)
    }

    if (!obj[0]) return true;

    {
        1: 0,
        0: 1
    }

    if (!obj[0]) return true;
    if (obj[obj[0]]) return false;

    {
        3 : 2,
        1 : 0,
        2 : 1,
    }


*/
