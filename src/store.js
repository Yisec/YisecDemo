const key = 'test_app'
export default {
    save(json) {
        localStorage.setItem(key, JSON.stringify(json))
    },
    get() {
        const str = localStorage.getItem(key)
        try {
            return JSON.parse(str)
        } catch (err) {
            return []
        }
    },
}
