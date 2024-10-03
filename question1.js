// comp3123 lab test1
// Nigar Ahmadova
// 101431281
// question1


function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        // Check if the input is a valid array, reject the promise if not
        if (!Array.isArray(array)) {
            reject("Input must be an array");
            return;
        }

        // Filter out non-strings and convert the remaining strings to lowercase
        const filteredArray = array
            .filter(item => typeof item === 'string')  
            .map(str => str.toLowerCase());            

        // Resolve the promise with the filtered and transformed array
        resolve(filteredArray);
    });
}

// Example input according to the requirements
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

// Call lowerCaseWords with the example input, log the result or error
lowerCaseWords(mixedArray)
    .then(result => console.log(result))  
    .catch(error => console.error(error)); 