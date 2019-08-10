import React, {Component} from 'react';
import Nprogress from 'nprogress';

export default function asyncComponent(importComponent) {
    class AsyncFunc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            };
        }

        componentWillMount() {
            Nprogress.configure({showSpinner: false});
            Nprogress.start();
        }

        async componentDidMount() {
            try {
                importComponent().then((component) => {
                    const LazyComponent = component.default;
                    this.setState({component: <LazyComponent {...this.props}/>});
                    Nprogress.done()
                }).catch(() => {
                    window.location.reload();
                })
            } catch (error) {
                window.location.reload();
            }
        }

        render() {
            const Component = this.state.component;
            return Component || <div>Loading content. Please Wait</div>
        }
    }

    return AsyncFunc;
}
