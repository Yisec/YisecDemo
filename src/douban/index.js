import { jsonp } from './ajax'
import { Component, render, observer, forceUpdate, cssModule } from 'yisec'
import S from './index.scss'

const store = observer({
    now: [],
    top250: [],
    'get-now': function () {
        jsonp('https://api.douban.com/v2/movie/in_theaters', (res) => {
            this.now = res.subjects
        })
    },
    'get-top250': (function () {
        let ajax = false
        return function () {
            if (ajax) return
            ajax = true
            const url = `https://api.douban.com/v2/movie/top250?start=${this.top250.length}&count=18`
            jsonp(url, (res) => {
                store.top250.push(...res.subjects)
                ajax = false
            })
        }
    }()),
}, { deep: true })

const Scroll = window.ss = (function () {
    const cache = {}

    function trigger(key) {
        const data = {
            top: Scroll.top,
            bottom: Scroll.bottom,
            height: Scroll.height,
        }
        if (key) {
            cache[key] && cache[key](data)
        } else {
            Object.keys(cache).forEach((key) => {
                cache[key] && cache[key](data)
            })
        }
    }
    let timeout
    window.addEventListener('scroll', () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            trigger()
        }, 50)
    })

    return {
        get top() {
            return document.body.scrollTop || document.documentElement.scrollTop
        },
        set top(newValue) {
            document.body.scrollTop = newValue
            document.documentElement.scrollTop = newValue
        },
        get height() {
            return document.body.scrollHeight || document.documentElement.scrollHeight
        },
        get bottom() {
            return Scroll.height - Scroll.top - window.innerHeight
        },
        set bottom(newValue) {
            Scroll.top = Scroll.height - window.innerHeight - newValue
        },
        toTop() {
            Scroll.top = 0
        },
        toBottom() {
            Scroll.bottom = 0
        },
        on(key, fn) {
            // if ()
            cache[key] = fn
            trigger(key)
            return () => {
                this.off(key)
            }
        },
        off(key) {
            delete cache[key]
            return this
        },
    }
}())

// 图墙
class Wall extends Component {
    onScroll = () => {
        if (Scroll.bottom < 2000) {
            this.props.onScroll && this.props.onScroll()
        }
    }
    willMount() {
        window.addEventListener('scroll', this.onScroll)
    }
    willUnmoun() {
        window.removeEventListener('scroll', this.onScroll)
    }
    render() {
        return (`
            <slot/>
        `)
    }
}

// 图片懒加载
class Lazy extends Component {
    static id = 0
    key = `lazy-img-${Lazy.id++}`
    didMount() {
        Scroll.on(this.key, this.addScroll)
    }
    addScroll = ({ height, top, bottom }) => {
        const rect = this.refs.img.getBoundingClientRect()
        const { innerHeight } = window
        if (
            (rect.top >= 0 && rect.top <= innerHeight)
            || (rect.bottom >= 0 && rect.bottom <= innerHeight)
            || (rect.top < 0 && rect.bottom > innerHeight)
        ) {
            const { src } = this.props
            this.rmScroll()
            this.refs.img.src = src.replace('img1.', 'img3.')
        }
    }
    rmScroll = () => Scroll.off(this.key)
    willMount() {
        this.rmScroll()
    }
    render() {
        return (`
            <img ref="img" :class={props.class} :style={props.style} referrerpolicy="never" />
        `)
    }
}

class Movie extends Component {
    components = {
        Lazy,
    }
    computed = {
        bgd: () => {
            const { cover } = this.props
            return {
                paddingTop: `${190 / 135 * 100 }%`,
                display: 'block',
                textDecoration: 'none',
                position: 'relative',
                fontSize: '14px',
                color: '#fff',
                margin: '0 auto',
            }
        },
        isShow: () => !/惊悚|恐怖/.test(this.props.genres.join(',')),
    }
    render() {
        // 把连续的 if elesif else 作为一个node 也可以定义一个不渲染的节点<template></template>
        return (`
            <a ys:if="isShow" target="_blank" href={url} :style={bgd}>
                <Lazy style="position: absolute; height: 100%; width: 100%; bottom: 0;" alt="" :src="images.large" />
                <div style="position: absolute; bottom: 0; width: 100%; box-sizing: border-box; padding: 1em; background: rgba(0, 0, 0, .6);">
                    <h2>{original_title} { title }（{year}）</h2>
                    <p>导演: {directors.map(i => i.name).join(' ')}</p>
                    <p>主演: {casts.map(i => i.name).join(' ')}</p>
                    <p>信息: {genres.join()}</p>
                    <p>评分:
                        <span ys:if={rating}>
                            {rating.average}/{rating.max + ' '}
                        </span>
                        <span ys:if={!rating}>
                            暂无
                        </span>
                    </p>
                </div>
            </a>
        `)
    }
}

@cssModule(S)
export default class Douban extends Component {
    static defaultProps = {
        store,
    }
    state = {
        type: 'now',
    }
    components = {
        Movie,
        Wall,
    }
    loadMore = () => {
        const { type } = this.state
        type === 'top250' && this.updateData()
    }
    didMount = () => {
        this.use(this.list[0])()
    }
    updateData = () => {
        store[`get-${this.state.type}`]()
    }
    use = ({ type, title }) => () => {
        document.title = title
        const { type: preType } = this.state
        this[`${preType}Top`] = Scroll.top
        this.state.type = type
        if (!store[type].length) {
            this.updateData()
        }
        forceUpdate()
        Scroll.top = this[`${type}Top`] || 0
    }
    list = [
        { type: 'now', title: '正在上映' },
        { type: 'top250', title: 'Top250' },
    ]
    render = () => (`
            <div>
                <div style="padding-bottom: 60px; max-width: 600px;">
                    <Wall onScroll={loadMore} ref="xx">
                        <div ys:for={item in store[type]}>
                            <Movie item={item} :props={item} key={item.id} />
                        </div>
                    </Wall>
                </div>
                <div class="nav" ys:for={item in list}>
                    <div @click={use(item)}>{item.title}</div>
                </div>
            </div>
        `)
}
