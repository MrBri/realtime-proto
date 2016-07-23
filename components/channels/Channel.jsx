import React, {Component} from 'react';

class Channel extends Component {
    onChange(e) {
        e.preventDefault();
        const {setChannel, channel} = this.props;
        setChannel(channel);
    }
    render() {
        const {channel} = this.props;
        return (
            <li>
                <a onChange={this.onChange.bind(this)}>
                    {channel.name}
                </a>
            </li>
        )
    }
}

Channel.propTypes = {
    channel: React.PropTypes.object.isRequired,
    setChannel: React.PropTypes.func.inRequired
};

export default Channel;
