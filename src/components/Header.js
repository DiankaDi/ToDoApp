import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString(),
        });
    }
    render() {
        return (
            <div className='header'>
                <p className='header_text'>My Day</p>
                <p className="date">{this.state.time}</p>
            </div>
        );
    }
}

export default Header;