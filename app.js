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

ReactDOM.render(<Channel name="Hardware support"/>, document.getElementById('app'));
