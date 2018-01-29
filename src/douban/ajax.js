const jsonp = (function () {
    let id = 0
    return function jsonp(url, callback) {
        const timeStart = Date.now()
        id += 1
        const script = document.createElement('script')
        if (url.includes('?')) {
            url += `&callback=jsonp${id}`
        } else {
            url += `?callback=jsonp${id}`
        }
        script.src = url
        window[`jsonp${id}`] = (res) => {
            console.log('请求时间', Date.now() - timeStart)
            callback && callback(res)
        }
        document.head.appendChild(script)
    }
}())

export {
    jsonp,
}
