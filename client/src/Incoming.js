import React from 'react';

export default class Incoming extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount = () => {
    this.timerID = setInterval(
      () => this.setState({loading: false}),
      this.props.time
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
        flexDirection: 'row',
      }}>
        <div style={{
          minWidth: '50px',
          maxWidth: '50%',
          position: 'relative',
          borderRadius: '0px 8px 8px 8px',
          padding: 6,
          background: 'linear-gradient(to left bottom, #c8c8c8, #bdbdbd)',
          margin: 0,
          float: 'left',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            textAlign: 'left',
            fontSize: 15,
            wordBreak: 'break-all',
            wordWrap: 'break-word',
            color: '#000'
          }}>
            { this.state.loading ?
              <div className="loading__dots">
                <div className="loading__dots__dot"></div>
                <div className="loading__dots__dot"></div>
                <div className="loading__dots__dot"></div>
              </div> : <div style={{wordBreak: 'break-word'}}>{this.props.data}</div>
            }
          </div>
        </div>
      </div>
    );
  }
}
