console.log("hii, i am from fetch script")

function myAxios(method, url, body = null) {

    const headers = {
        'content-type' : 'application/json'
    }
    return fetch(url, {
        method,
        headers,
        body: JSON.stringify(body)
    }).then( res => res.json() )
}



const url = 'http://jsonplaceholder.typicode.com/users';

// myAxios('GET', url).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

myAxios('POST', url, {
    name: 'savinay',
    job: 'software developer'
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})