import Yisec, {
    Component,
    render,
    observer,
    addPipe,
    router,
    cssModule,
} from 'yisec';
import S from './index.scss'
import storage from './store'
import Douban from './douban'
import Svg from './svg'

addPipe({
    date(time) {
        const d = new Date(time)
        return `创建于: ${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    },
    log(any) {
        console.log('log', any)
        return any
    },
})

class Btn extends Component {
    static defaultProps = {
        title: '默认的',
    }
    create = () => {
        console.log('哈哈哈哈哈')
    }
    template = `
        <button style="background: red;" @click="click" oncreate={create}>
            <span>
                <slot />
            </span>
        </button>
    `
    click = (e) => {
        this.props.click(e)
        this.$emit('heihei', 1, 2)
    }
}

@cssModule(S)
class Todo extends Component {
    state = {
        edit: false,
        store,
    }
    components = {
        Btn,
    }
    willMount() {
        console.log(this.props)
    }
    willUnmount() {
        console.log('(ಥ _ ಥ)被卸载了', this.props)
    }
    heihei() {
        console.log('btn emit')
        this.$emitSiblings('haha', '通知兄弟们')
        return false
    }
    emit = {
        pageSwitch: (state) => {
            console.log('btn', state)
        },
        haha: () => {
            console.log(this.props.index, '接收到了通知')
        },
    }
    toggleEdit = () => {
        if (this.state.edit) {
            this.props.item.title = this.refs.$title.value
        }
        this.state.edit = !this.state.edit
        this.props.save()
    }
    toggle = () => {
        this.props.item.complete = !this.props.item.complete
        this.props.save()
    }
    render() {
        return (`
            <div class="flex todo-item" leaveTime="300" leave-class="xxx">
                <input type="checkbox" :checked={item.complete} @change={toggle} />
                {index}:
                <div class="item-text">
                    <template ys:if={state.edit}>
                        <input
                            type="text"
                            ref="$title"
                            :value={item.title}
                            @ctrlEnter={toggleEdit}
                            @blur={toggleEdit}
                            autofocus />
                    </template>
                    <div ys:if={!state.edit} @click={toggleEdit}>
                        {item.title}
                    </div>
                </div>
                <div>
                    { store.time }
                    <button @click={() => store.time++}>+1</button>
                </div>
                <Btn @click="del">
                    del
                </Btn>
            </div>
            <p style="font-size: 12px; color: gray; text-align: right;">{props.key|date|log}</p>
            <slot @name={props.key}/>
        `)
    }
}

Yisec.register('Todo', Todo)

@cssModule(S)
class TodoList extends Component {
    // state 状态
    state = {
        filter: 'all',
        buttons: ['all', 'active', 'complete'],
    }
    // getter
    computed = {
        currentItems() {
            const { store } = this.props
            const type = this.state.filter
            const result = store.items.filter((item) => {
                if (type === 'all') {
                    return true
                } else if (type === 'complete') {
                    return item.complete
                }
                return !item.complete
            })
            console.log(result)
            return result
        },
        left() {
            return store.items.length
        },
    }
    heihei = () => {
        console.log(this.state, '被heihei了')
    }
    pageChange = () => {
        this.$emitChildren('pageSwitch', 'hide')
    }
    changeFilter = type => (event) => {
        event && event.stopPropagation()
        this.state.filter = type
    }
    willMount() {
        console.log(this.getType)
    }
    getType(type) {
        return type
    }
    del = id => (event) => {
        event.stopPropagation()
        const { store } = this.props
        store.items = store.items.filter(i => i.id != id)
        store.save()
    }
    add = () => {
        const { store } = this.props
        const id = Date.now()
        store.items.push({
            title: this.refs.$input.value,
            complete: false,
            id,
        })
        this.refs.$input.value = ''
        store.save()
    }
    slotClick = () => {
        console.log(this.state.filter)
    }
    render() {
        return (`
            <div class="main" :enter-class={['transition-up']}>
                <Link href="/douban">去豆瓣</Link>
                <Link href="/svg">SVG</Link>
                <h1 class="xx haha" @click="pageChange"> Todo List </h1>
                <input
                    type="text"
                    class="add-input"
                    ref="$input"
                    @enter="add"
                    placeholder="add a todo item" />
                <div ys:for="(item,index) in currentItems">
                    <Todo :index="index" item={item} del={del(item.id)} key={item.id} save={store.save}>
                        <p click={slotClick}>slot render { name | date }</p>
                    </Todo>
                </div>
                <div ys:if={!currentItems.length}>
                    Empty !!!
                </div>
                <div>
                    {left} left
                    <span ys:for={type in state.buttons} class="btns">
                        <button @click={changeFilter(type)} :class={[{current: state.filter === type}]}>
                            {getType(type)}
                        </button>
                    </span>
                </div>
            </div>
        `)
    }
}

// console.log(process.env.NAME)

// store，可直接使用
const store = observer({
    items: storage.get() || [],
    time: 0,
    save() {
        storage.save(this.items)
    },
}, { deep: true })

export default function init() {
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'referrer')
    meta.setAttribute('content', 'never')
    document.head.appendChild(meta)

    router({
        hash: true,
        $root: document.querySelector('#app'),
        routes: {
            '/': {
                component: TodoList,
                props: { store },
            },
            '/douban': {
                component: Douban,
            },
            '/svg': {
                component: Svg,
            },
        },
    })
}

init()
