const actualTemp = 75; 
const desiredTemp = 70; 

if (actualTemp > desiredTemp) {
    console.log("Run A/C");
} else if (actualTemp < desiredTemp) {
    console.log("Run heat");
} else {
    console.log("Standby");
}
