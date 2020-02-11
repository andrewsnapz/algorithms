//For those who is going to do Karat interview with Roblox
/*
You're developing a system for scheduling advising meetings with students in a Computer Science program. Each meeting should be scheduled when a student has completed 50% of their academic program.

prereqs_courses1 = [
    ["Data Structures", "Algorithms"],
    ["Foundations of Computer Science", "Operating Systems"],
    ["Computer Networks", "Computer Architecture"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Computer Architecture", "Data Structures"],
    ["Software Design", "Computer Networks"]
];

Software Design
Computer Networks
Computer Architecture
Data Structures
Algorithms
Foundations of CS
Operating Systems

Each course at our university has at most one prerequisite that must be taken first. No two courses share a prerequisite. There is only one path through the program.

In this case, the order of the courses in the program is:
    Software Design
    Computer Networks
    Computer Architecture
    Data Structures
    Algorithms
    Foundations of Computer Science
    Operating Systems

Write a function that takes a list of (prerequisite, course) pairs, and returns the name of the course that the student will be taking when they are halfway through their sequence of courses. (If a track has an even number of courses, and therefore has two "middle" courses, you should return the first one.)

Sample output 1:
    "Data Structures"

Sample input 2:
prereqs_courses2 = [
    ["Data Structures", "Algorithms"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Foundations of Computer Science", "Logic"]
]

Data Structures
Algorithms
Foundations of CS
Logic

Sample output 2:
    "Algorithms"

Sample input 3:
prereqs_courses3 = [
    ["Data Structures", "Algorithms"],
]

Sample output 3:
    "Data Structures"

*/

function halfWayPoint(prereqArray) {
    //first need to find the pair in which the first element is not a prereq for the other classes
    //iteriate through the array, find the index of this class and push the pair into a new array
    let classesInOrder = [];
    let leftPointer = 0;
    let rightPointer = leftPointer + 1;
    let indexOfFirstClass;

    while (!prereqArray[rightPointer]) { 
        if (prereqArray[leftPointer][0] !== prereqArray[rightPointer][1]) {
            rightPointer++;
            console.log(rightPointer);
        } else { 
            indexOfFirstClass = prereqArray[leftPointer];
        }
    }
    console.log("this is the indexOfFirstClass", indexOfFirstClass);
}

let prereqs_courses1 = [
    ["Data Structures", "Algorithms"],
    ["Foundations of Computer Science", "Operating Systems"],
    ["Computer Networks", "Computer Architecture"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Computer Architecture", "Data Structures"],
    ["Software Design", "Computer Networks"]
];

// Software Design
// Computer Networks
// Computer Architecture
// Data Structures
// Algorithms
// Foundations of CS
// Operating Systems

console.log(halfWayPoint(prereqs_courses1));