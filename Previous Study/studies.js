
// -> Promise
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve('Resolved');
    }, 2000);
});

await myPromise
    .then((result) => result + 'passing by then')
    .then((result) => result + 'and now it is over!!')
    .catch((err) => console.log(err.message));


    // After 2 seconds, it will return the value:
    // "Resolved passing by then and now it is over!!"

// -> Async/await


