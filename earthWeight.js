// Write your function here:
const calculateWeight = (earthWeight, planet) => {
   switch (planet) {
        case 'Mercury':
            return earthWeight * 0.378;
        case 'Venus':
            return earthWeight * 0.907;
        case 'Mars':
            return earthWeight * 0.377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * 0.916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    };
};
// Test the function
const earthWeight = 100;
console.log("Weight on Mercury:", calculateWeight(earthWeight, 'Mercury'));
console.log("Weight on Venus:", calculateWeight(earthWeight, 'Venus'));
console.log("Weight on Mars:", calculateWeight(earthWeight, 'Mars'));
console.log("Weight on Jupiter:", calculateWeight(earthWeight, 'Jupiter'));
console.log("Weight on Saturn:", calculateWeight(earthWeight, 'Saturn'));
console.log("Weight on Neptune:", calculateWeight(earthWeight, 'Neptune'));



// Uncomment the line below when you're ready to try out your function
//console.log(calculateWeight(100, 'Saturn')) // Should print 236

// We encourage you to add more function calls of your own to test your code!