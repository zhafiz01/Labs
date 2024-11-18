let submissions = 

[   {name: "Jane", score: 95, passed: true},
    {name: "Joe", score: 90, passed: true},
    {name: "Jack", score: 45, passed: false},
    {name: "Jill", score: 90, passed: true},
]

function addSubmission(array, newName, newScore) {
    let newSubmission = {
        name: newName,
        score: newScore,
        passed: newScore >= 60
    };
    array.push(newSubmission);
}

addSubmission(submissions, "Kyle", 95);


function deleteSubmissionByIndex (array, index) {
    array.splice(index, 1)
}

deleteSubmissionByIndex(submissions, 3)


function deleteSubmissionByName (array, name) {
    const index = array.findIndex(submission => submission.name === name);
    if (index !== -1) {
        array.splice(index, 2);
    }
}

deleteSubmissionByName(submissions, "Kyle")

function editSubmission (array, index, score) {
    if (index >= 0 && index < array.lenght) {
        array[index].score = score;
        array[index].passed = score >= 60;
    }
}

editSubmission(submissions, 2, 60);


function findSubmissionByName (array, name) {
    return array.find(submission => submission.name === name);
}

console.log(findSubmissionByName(submissions, "Jane"));



function findLowestScore (array) {
    return array.reduce((lowest, current) => current.score < lowest.score ? current : lowest);
}

console.log(findLowestScore(submissions))


function findAverageScore(array) {
    let totalScore = array.reduce((sum, submission) => sum + submission.score, 0);
    return totalScore / array.length;
}

console.log(findAverageScore(submissions));

function filterPassing(array) {
    return array.filter(submission => submission.passed);
}

console.log(filterPassing(submissions));


function filter90AndAbove(array) {
    return array.filter(submission => submission.score >=90);

}

console.log(filter90AndAbove(submissions))

function createRange(start, end) {
    let rangeArray = [];
    for (let i = start; i <= end; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
}


console.log(createRange(2, 5));



