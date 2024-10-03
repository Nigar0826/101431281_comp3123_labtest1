// comp3123 lab test1
// Nigar Ahmadova
// 101431281
// question2


// Function that resolves a message after 500ms, similar to delayedSuccess
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 'message': 'delayed success!' });
        }, 500);
    }); 
}

// Function that rejects with an error message after 500ms, similar to delayedException
function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({ 'error': 'delayed exception!' });
        }, 500);
    });
}

// Call resolvedPromise and handle the result
resolvedPromise()
    .then(result => console.log(result))  
    .catch(error => console.error(error))

// Call rejectedPromise and handle the result
rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error))  