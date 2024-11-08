function getAreaOfCircle(radius) {
    return Math.PI * radius * radius;
}

let circleArea = getAreaOfCircle(5);
console.log("Area of Circle:", circleArea);


function getCircumferenceofCircle(radius) {
    return 2 * Math.PI * radius;
}

let circleCircumference = getCircumferenceofCircle(3);
console.log("Circumference of Circle:", circleCircumference)

function getAreaofSqaure(side) {
    return side * side;
}

let SquareArea = getAreaofSqaure(3);
console.log("Area of Sqaure:", SquareArea)

function getAreaofTriangle(base, height) {
    return 0.5 * base * height

}
console.log("Area of Triangle:", getAreaofTriangle(7, 9))