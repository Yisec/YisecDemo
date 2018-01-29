import React, { PureComponent } from 'react';
import fn from './index';

class CL extends PureComponent {
    componentDidMount() {
        fn()
    }
    render() {
        return (
            <div id="yisec" />
        )
    }
}

lysRouter['/ext'] = CL
