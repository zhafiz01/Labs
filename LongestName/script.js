let name1 = "Chris";
let name2 = "Jacob";
let name3 = "Janok";

let length1 = name1.length;
let length2 = name2.length;
let length3 = name3.length;


if (length1 > length2 && length1 > length3) {
    console.log(`${name1} has the longest name.`);
  } else if (length2 > length1 && length2 > length3) {
    console.log(`${name2} has the longest name.`);
  } else if (length3 > length1 && length3 > length2) {
    console.log(`${name3} has the longest name.`);
  } else if (length1 === length2 && length1 > length3) {
    console.log(`${name1} and ${name2} tie for the longest name.`);
  } else if (length1 === length3 && length1 > length2) {
    console.log(`${name1} and ${name3} tie for the longest name.`);
  } else if (length2 === length3 && length2 > length1) {
    console.log(`${name2} and ${name3} tie for the longest name.`);
  } else {
    console.log(`All three names, ${name1}, ${name2}, and ${name3}, are the same length.`);
  }
  