const jsonp = (function() {
    let id = 0
    return function jsonp(url, callback) {
        id += 1
        const script = document.createElement('script')
        if (url.includes('?')) {
            url += `&callback=jsonp${id}`
        } else {
            url += `?callback=jsonp${id}`
        }
        script.src = url
        window[`jsonp${id}`] = res => {
            callback && callback(res)
        }
        document.head.appendChild(script)
    }
}())

export {
    jsonp,
}
