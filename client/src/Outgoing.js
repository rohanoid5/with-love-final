import React from 'react';

export default class Outgoing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount = () => {
    this.timerID = setInterval(
      () => this.setState({loading: false}),
      2800
    );
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div style={{
        position: 'relative',
        width: '95%',
        margin: 6,
        display: 'flex',
        flexDirection: 'row-reverse',
      }}>
        <div style={{
          minWidth: '50px',
          maxWidth: '50%',
          position: 'relative',
          borderRadius: '8px 8px 0px 8px',
          padding: 6,
          background: 'linear-gradient(to left bottom, #b94237, #9d2316)',
          margin: 0,
          float: 'right',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            textAlign: 'left',
            fontSize: 15,
            wordBreak: 'break-all',
            wordWrap: 'break-word',
            color: '#FFF'
          }}>
            <div style={{wordBreak: 'break-word'}}>{this.props.data}</div>
          </div>
        </div>
      </div>
    );
  }
}
