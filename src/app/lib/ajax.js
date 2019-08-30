export default (url, {method = 'POST', data = {}, header = {name: 'Content-Type', value: 'application/json'}}) =>
    new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.setRequestHeader(header.name, header.value)
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response)
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                })
            }
        }
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            })
        }
        xhr.send(JSON.stringify(data))
    })

