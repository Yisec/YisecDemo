import {jsonp} from './ajax'
import {Component, render, observer, forceUpdate} from 'yisec'
import S from './index.scss' 

const store = observer({
    now: [],
    top250: [],
    'get-now': function() {
        jsonp(`https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items`, res => {
            this.now = res.subject_collection_items
        })
    },
    'get-top250': (function(){
        let ajax = false
        return function() {
            if (ajax) return
            ajax = true
            const url = `https://m.douban.com/rexxar/api/v2/subject_collection/filter_movie_classic_hot/items?start=${this.top250.length}&count=18`
            jsonp(url, res => {
                this.top250.push(...res.subject_collection_items)
                ajax = false
            })
        }
    }())
}, { deep: true }) 

const Scroll = (function() {
    const cache = {}
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
        },
        off(key, fn) {
    
        }
    }
})() 

// 图墙
class Wall extends Component {
    onScroll = () => {
        if (Scroll.bottom < 100) {
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
    render() {
        return (`
            <img src="" alt="">
        `)
    }
}

class Movie extends Component {
    computed = {
        bgd: () => {
            const { cover } = this.props
            return {
                paddingTop: cover.height / cover.width * 100 + '%',
                display: 'block',
                textDecoration: 'none',
                position: 'relative',
                fontSize: '14px',
                color: '#fff',
            }
        }
    }   
    render() {
        //  :src="item.cover.url" 
        return (`
            <a target="_blank" :style="bgd">
                <img style="position: absolute; height: 100%; width: 100%; bottom: 0;" alt="" referrerpolicy="never">
                <div style="position: absolute; bottom: 0; width: 100%; box-sizing: border-box; padding: 1em; background: rgba(0, 0, 0, .6);">
                    <h2>{{ title }}</h2>
                    <p>导演: {{directors}}</p>
                    <p>信息: {{info}}</p>
                    <p>评分: 
                        <span v-if="rating">
                            {{rating.value}}/{{rating.max + ' '}} {{rating.count}}评价
                        </span>
                        <span v-if="!rating">
                            暂无
                        </span>
                    </p>
                </div>
            </a>
        `)
    }
}

class App extends Component {
    state = {
        type: 'now',
    }
    mclass = S
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
    use = ({type, title}) => () => {
        document.title = title
        const {type: preType} = this.state
        this.state.type = type
        if (!store[type].length) {
            this.updateData()
        }
        this[`${preType}Top`] = Scroll.top
        forceUpdate()
        Scroll.top = this[`${type}Top`] || 0
    }
    list = [
        {type: 'now', title: '正在上映'},
        {type: 'top250', title: 'Top250'},
    ]
    render = () => {
        return (`
            <div>
                <Wall :onScroll="loadMore">
                    <div v-for="item in store[type]">
                        <Movie :item="item" :props="item" :key="item.id" />
                    </div>
                </Wall> 
                <div mclass="nav" v-for="item in list">
                    <div @click="use(item)">{{item.title}}</div>
                </div> 
            </div>
        `)
    }
}

const container = document.createElement('div')
document.body.appendChild(container)

window.xx = render(App, {store}, container)
