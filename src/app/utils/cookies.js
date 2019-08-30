export default {
    get: (name, req) => {
        const str = name + '='
        decodeURIComponent(req ? req.cookies : document.cookie).split(';').map(v => {
            while (v.charAt(0) === ' ') v = v.substring(1)
            if (v.indexOf(str) === 0) return v.substring(str.length, v.length)
        })
        return null
    }
}