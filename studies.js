// // -> Promise
// const myPromise = new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//         resolve('Resolved');
//     }, 2000);
// });

// await myPromise
//     .then((result) => result + 'passing by then')
//     .then((result) => result + 'and now it is over!!')
//     .catch((err) => console.log(err.message));

//     // After 2 seconds, it will return the value:
//     // "Resolved passing by then and now it is over!!"

// // -> Async/await

// async function resolvePromise() {
//   const myPromise = new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//       resolve('Resolved')
//     }, 3000)
//   })

//   const resolved = await myPromise
//     .then(result => result + 'passing by then')
//     .then(result => result + 'and now it is over!!')
//     .catch(err => console.log(err.message))

//   return resolved
//  }

//fetch (APIs)

fetch(url, options)
  .then(response => response.json())
  .then(json => console.log(json))

// returns a promise

// fetch (APIs) - Using POST, GET, PUT, DELETE, etc.

fetch('https://API-adress.com/', {
  method: 'GET',
  cache: 'no-cache'
})
  .then(response => response.json())
  .then(json => console.log(json))
  // returns a promise

fetch('https://API-adress.com/', {
  method: 'POST',
  cache: 'no-cache'
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(json => console.log(json))
  // returns a promise  