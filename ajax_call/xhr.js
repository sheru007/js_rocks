console.log("hii, I'm sk007")

function myAxios(method, url, body = null) {

    return new Promise( (resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        // use below command to avoid JSON.parse function
        xhr.responseType = 'json';

        // set the header using below function
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        // event listeners for getting response from ajax call
        xhr.onload = () => {
            if(xhr.status >= 400) {
                reject(xhr.response);
                console.error("Failed !!!")
            } else {
                resolve(xhr.response)
            }
        }

        // event listeners for what to do if we get error
        xhr.onerror = () => {
            reject(xhr.response);
            console.error("ERROR!!!")
        }

        // EVENT listeners must be declare before the send event.
        xhr.send(JSON.stringify(body))
    })

}

const url = 'http://jsonplaceholder.typicode.com/users';

// myAxios('GET', url);
myAxios('POST', url, {
    name: 'sheru',
    job: 'software developer'
}).then( (res) => {
    console.log("console from then block : ", res);
}).catch( (err) => {
    console.log(" console from catch block : ", err);
})
