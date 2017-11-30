import S from './index.scss'
import storage from './store'
import './douban'

import Fv,{
    Component,
    render,
    observer,
    addPipe,
} from 'yisec';

addPipe({
    date(time) {
        const d = new Date(time) 
        return `创建于: ${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    }
})

class Btn extends Component {
    template = `
        <button style="background: red;" @click="click">
            <span>
                <slot></slot>
            </span>
        </button>
    `
    click = () => {
        this.props.click()
        this.$emit('heihei', 1, 2)
    }
}

// store，可直接使用
const store = observer({
    items: storage.get() || [],
    time: 0,
    save() {
        storage.save(this.items)
    },
}, {deep: true})

class Todo extends Component {
    state = {
        edit: false,
        store,
    }
    mclass = S
    components = {
        Btn,
    }
    template = `
        <div class="flex" mclass="todo-item" leaveTime="300" leave-class="xxx">
            <input type="checkbox" :checked="item.complete" @change="toggle" />
            {{index}}:
            <div mclass="item-text">
                <input 
                    v-if="state.edit" 
                    type="text" 
                    ref="$title" 
                    :value="item.title" 
                    @ctrlEnter="toggleEdit" 
                    @blur="toggleEdit" 
                    autofocus />
                <div v-if="!state.edit" @click="toggleEdit">
                    {{item.title}}
                </div>
            </div>
            <div>
                {{ store.time }}
                <button @click="() => store.time++">+1</button>
            </div>
            <Btn @click="del"> 
                del
            </Btn>
        </div>
        <p style="font-size: 12px; color: gray; text-align: right;">{{props.key|date}}</p>
        <slot @name="props.key" />
    `
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
}

Fv.register('Todo', Todo)

class TodoList extends Component {
    // 处理css modules
    mclass = S
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
            return store.items.filter(i => {
                if (type == 'all') {
                    return true
                } else if (type == 'active') {
                    return !i.complete
                } else if (type == 'complete') {
                    return i.complete
                }
            })
        },
        left() {
            return this.props.store.items.filter(i => !i.complete).length
        },
    }
    emit = {
        heihei: () => {
            console.log(this.state, '被heihei了')
        }
    }
    pageChange = () => {
        this.$emitChildren('pageSwitch', 'hide')
    }
    changeFilter = (type) => (event) => {
        event && event.stopPropagation()
        this.state.filter = type
    }
    del = (id) => () => {
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
    render () {
        return (`
            <div mclass="main" :enter-mclass="['transition-up']">
                <h1 mclass="xx haha" @click="pageChange"> Todo List </h1>
                <input 
                    type="text" 
                    mclass="add-input"
                    ref="$input"
                    @enter="add"
                    placeholder="add a todo item" />
                <div v-for="(item,index) in currentItems">
                    <Todo :index="index" :item="item" :del="del(item.id)" :key="item.id" :save="store.save">
                        <p :click="slotClick">slot render {{ name | date }}</p>
                    </Todo>
                </div>
                <div v-if="!currentItems.length">
                    Empty !!!
                </div>
                <div>
                    {{left}} left
                    <span v-for="type in state.buttons" mclass="btns">
                        <button @click="changeFilter(type)" :mclass="{current: state.filter === type}">
                            {{type}}
                        </button>
                    </span>
                </div>
            </div>
        `)
    }
}

// console.log(process.env.NAME)

window.xx = render(TodoList, { store }, document.querySelector('#app'))
