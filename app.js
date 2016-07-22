var channels = [
    { name: 'Hardware support' },
    { name: 'Software support'}
];

class Channel extends React.Component {
    onClick() {
        console.log('On click working: ', this.props.name)
    }
    render() {
        return (
            <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
        )
    }
}

class ChannelList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.channels.map(channel => {
                    return <Channel name={channel.name} />
                })}
            </ul>
        )
    }
}

class ChannelForm extends React.Component {
    render() {
        return (
            <form>
                <input type="text" />
            </form>
        )
    }
}

class ChannelSection extends React.Component {
    render() {
        return (
            <div>
                <ChannelList channels={channels} />
                <ChannelForm />
            </div>
        )
    }
}

ReactDOM.render(<ChannelSection />, document.getElementById('app'));
