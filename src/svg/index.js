import { Component, cssModule } from 'yisec';
import moduleCss from './index.scss';

@cssModule(moduleCss)
export default class extends Component {
    state = {
        src: '',
    }
    handleChange = (e) => {
        this.state.src = URL.createObjectURL(e.target.files[0])
    }
    touchend = (e) => {
        e.preventDefault()
    }
    click = () => {
        console.log('click')
    }
    render() {
        return (`
        <div>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="340px" height="333px" viewBox="0 0 340 333" enable-background="new 0 0 340 333" xml:space="preserve">
            <circle class="circle" cx="160" cy="160" r="100" stroke="#000000" stroke-width="2" fill="rgba(0, 0, 0, 0)" />
            <path class="path" stroke="#000000" stroke-width="2" d="M 100 160 l 40 40 l 100 -70" fill="rgba(0, 0, 0, 0)" />
        </svg>
            <div style="overflow-x: hidden;">
                <div class="test">
                    <div></div>
                </div>
            </div>
            <input @click={click} @touchend={touchend} style="height: 300px; background: red; display: block;" type="checkbox" />
            <img :src="src" alt="" style="width: 100%; height: auto;">
            <input type="file" accept="image/*" @change="handleChange" />


            <svg width="120" height="120" viewPort="0 0 120 120" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                <rect x="-100" y="10" width="100" height="100">
                <animate attributeType="XML" attributeName="x" from="-100" to="120"
                    dur="10s" repeatCount="indefinite"/>
                </rect>
            </svg>
        </div>
        `)
    }
}
