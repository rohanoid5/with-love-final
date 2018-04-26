import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import ButtonBase from 'material-ui/ButtonBase';
import AddIcon from '@material-ui/icons/Send';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts'
import TextField from 'material-ui/TextField';
import logo from './logo.svg';
import Incoming from './Incoming';
import Outgoing from './Outgoing';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E01F4F'
    },
    secondary: green
  },
  status: {
    danger: 'orange'
  }
});

const styles = {
  button: {
    margin: theme.spacing.unit
  },
  card: {
    width: 576,
    height: 500,
    backgroundColor: '#2A2F34'
  },
  cardSmall: {
    width: 448,
    height: 500,
    backgroundColor: '#2A2F34'
  },
  cardInput: {
    width: 448,
    maxHeight: 100,
    backgroundColor: '#2A2F34'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    padding: '36px 0px',
    justifyContent: 'space-evenly'
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover': {
      zIndex: 1
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15
    },
    '&:hover $imageMarked': {
      opacity: 0
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor'
    }
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  },
  chatContainer: {
    width: '97%',
    height: '98%',
    margin: '5px auto',
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: 'auto',
    position: 'relative'
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  textField: {
    width: '80%',
    margin: 8,
    marginLeft: 12
  },
};

const images = [
  {
    url: 'casual.jpg',
    title: 'Basic',
    width: '40%'
  }, {
    url: 'premium.jpg',
    title: 'Premium',
    width: '40%'
  }
];

const welcomeConversation = [
  ['Hi😃', 'My name is Blah!😊', 'Welcome to With Love!🤗', 'May I know your name?'],
  ['So in order to prepare your letter', "I'll be asking you a few question🤓 ", "Based on your answer I'll prepare the best letter possible😎", 'Please be as descriptive as possible', "What's your relationship with this person?"],
  ['Okay!👍', 'Describe your feelings towards this person'],
  ['Great👌', 'Now tell me a few personal situations you want the letter to be based on.'],
  ['Nice🤘', 'Do you want it to be casual or concerned?'],
  ['Almost done!🤙.', 'Let me know your email address.'],
  ['Lastly!', "What's your mobile number?"],
  ['All done!🤩']
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      val: 1,
      optionText: -1,
      input: '',
      messages: [],
      numChildren: 0,
      disabled: true,
      userInfo: []
    }
  }

  componentDidMount = () => {
    // for(let i = 0; i < welcomeConversation.length; i++) {
    //   (() => {
    //     this.timerID = setTimeout(
    //       () => {
    //         console.log(welcomeConversation[i])
    //       },
    //       3000
    //     );
    //   })();
    // }
    if(this.state.val == 3) {
      // var offset = 0;
      // welcomeConversation[0].forEach((item, index) => {
      //   this.timerID = setTimeout(() => {
      //     console.log(item);
      //     this.renderIncomingText(item, 800)
      //     // if (this.messagesEnd != null) this.scrollToBottom();
      //     if(index == welcomeConversation[0].length - 1) this.setState({disabled: false})
      //   }, offset);
      //  offset += 1000;
      // });
    }
    // var offset = 0;
    // welcomeConversation[0].forEach((item, index) => {
    //   this.timerID = setTimeout(() => {
    //     console.log(item);
    //     this.renderIncomingText(item, 800)
    //     // if (this.messagesEnd != null) this.scrollToBottom();
    //     if(index == welcomeConversation[0].length - 1) this.setState({disabled: false})
    //   }, offset);
    //  offset += 1000;
    // });
    fetch('/api/hit')
      .then(res => res.json())
      .then((out) => {
        console.log('Output: ', out)
      })
      .catch(err => console.log(err))
    if(this.el != null)
      this.scrollToBottom();
  }

  componentDidUpdate = () => {
    if(this.el != null)
      this.scrollToBottom();
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  renderIncomingText = (data, time) => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
    var cbs = this.state.messages;
    cbs.push(<Incoming data={data} time={time}/>);
    this.setState({messages: cbs});
  }

  renderOutgoingText = data => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
    var cbs = this.state.messages;
    cbs.push(<Outgoing data={data}/>);
    this.setState({messages: cbs, userInfo: [...this.state.userInfo, data], disabled: true}, () => {
      // console.log(this.state.userInfo);
      if(this.state.userInfo.length >= welcomeConversation.length) {
        this.setState({disabled: true})
        // console.log(this.state.userInfo)
        return;
      }
      // else if
      var offset = 0;
      welcomeConversation[this.state.userInfo.length].forEach((item, index) => {
        this.timerID = setTimeout(() => {
          console.log(item);
          this.renderIncomingText(item, 800)
          // if (this.messagesEnd != null) this.scrollToBottom();
          if(index == welcomeConversation[this.state.userInfo.length].length - 1)
            this.setState({disabled: false})
        }, offset);
       offset += 1000;
      });
    });
  }

  scrollToBottom = () => {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const {classes} = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    return (<MuiThemeProvider theme={theme}>
      <div className="App">
        <Card raised={true} elevation={6} className={ this.state.val != 3 ? classes.card : classes.cardSmall}>
          {
            this.state.val == 1
              ? <div>
                <img src='twitter_like_button.gif'/>
                <div style={{
                  textAlign: 'center',
                  fontSize: 36,
                  color: '#FFF',
                  fontWeight: 300
                }}>
                  Welcome to&nbsp;
                  <span className="App-logo-text">With Love</span>
                </div>
                <p style={{
                  color: '#adadad',
                  textAlign: 'center',
                  margin: '8px 0px'
                }}>
                  Having trouble articulating your thoughts on paper?<br/>We got your back
                </p>
                <div style={{
                  marginTop: 18
                }}>
                  <Button onClick={() => {
                    this.setState({val: 2})
                  }} variant="raised" color="primary" className={classes.button}>
                    Get Started
                  </Button>
                </div>
              </div>
              : null
          }
          {
            this.state.val == 2
              ? <div>
                <h2 style={{
                  color: '#F6F6F6',
                  textAlign: 'center',
                  fontWeight: 300,
                  padding: 12
                }}>
                  Choose an option
                </h2>
                <div className={classes.root}>
                  {
                    images.map(image => (
                      <ButtonBase focusRipple="focusRipple" key={image.title} className={classes.image}
                        style={{
                          width: image.width
                        }} onClick={() => {
                          this.setState({val: 3}, () => {
                            var offset = 0;
                            welcomeConversation[0].forEach((item, index) => {
                              this.timerID = setTimeout(() => {
                                console.log(item);
                                this.renderIncomingText(item, 800)
                                // if (this.messagesEnd != null) this.scrollToBottom();
                                if(index == welcomeConversation[0].length - 1) this.setState({disabled: false})
                              }, offset);
                              offset += 1000;
                            });
                          })
                        }} onMouseEnter={() => {
                          if (image.title === images[0].title)
                          this.setState({optionText: 0})
                          else if (image.title === images[1].title)
                          this.setState({optionText: 1})
                        }} onMouseLeave={() => {
                          this.setState({optionText: -1});
                        }}>
                        <span className={classes.imageSrc} style={{
                        backgroundImage: `url(${image.url})`
                        }}/>
                        <span className={classes.imageBackdrop}/>
                        <span className={classes.imageButton}>
                          <Typography component="span" variant="subheading" color="inherit" className={classes.imageTitle}>
                            {image.title}
                            <span className={classes.imageMarked}/>
                          </Typography>
                        </span>
                      </ButtonBase>))
                  }
                </div>
                <p style={{
                  color: '#adadad',
                  textAlign: 'center',
                  margin: '8px 0px'
                }}>
                  { this.state.optionText == 0
                    ? 'Our Basic option includes Blah Blah and Blah!'
                    : (this.state.optionText == 1 ?
                    'Our Premium option includes Blah Blah and Blah!' :
                    'Choose between our two customized options according to your need!')
                  }
                </p>
              </div>
              : null
          }
          { this.state.val == 3 ?
            <div className={classes.chatContainer}>
              <div style={{maxHeight: '82%', overflowY: 'auto', position: 'relative', paddingBottom: 50,}}>
                <div>{this.state.messages}</div>
                <div style={{
                  float: "left",
                  clear: "both"
                }} ref={el => { this.el = el; }}></div>
              </div>
              { !(welcomeConversation.length - this.state.userInfo.length == 1) ?
                <div style={{width: '100%', position: 'absolute', bottom: '0px', display: 'flex', flexDirection: 'row'}}>
                  <TextField
                    autoFocus
                    id="input"
                    placeholder="Type here"
                    multiline
                    rowsMax="2"
                    disabled={this.state.disabled}
                    value={this.state.input}
                    onChange={this.handleChange('input')}
                    className={classes.textField}
                    onKeyPress={(ev) => {
                      if (ev.key === 'Enter') {
                        if(this.state.input.length > 0) {
                          this.renderOutgoingText(this.state.input);
                          // if (this.messagesEnd != null) this.scrollToBottom();
                          this.setState({input: ''})
                        }
                        ev.preventDefault();
                      }
                    }}/>
                  <Button
                    variant="fab"
                    mini color="primary"
                    aria-label="add"
                    disabled={this.state.disabled}
                    onClick={() => {
                      if(this.state.input.length > 0) {
                        this.renderOutgoingText(this.state.input);
                        // if (this.messagesEnd != null) this.scrollToBottom();
                        this.setState({input: ''})
                      }
                    }}
                    className={classes.button}>
                    <AddIcon />
                  </Button>
                </div> :
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Button onClick={() => {
                    console.log(this.state.userInfo)
                  }} variant="raised" color="primary" style={{margin: '0px 4px'}}>
                    Proceed
                  </Button>
                  <Button onClick={() => {
                    this.setState({
                      userInfo: [],
                      messages: [],
                      numChildren: 0,
                      disabled: true
                    }, () => {
                      var offset = 0;
                      welcomeConversation[0].forEach((item, index) => {
                        this.timerID = setTimeout(() => {
                          console.log(item);
                          this.renderIncomingText(item, 800)
                          // if (this.messagesEnd != null) this.scrollToBottom();
                          if(index == welcomeConversation[0].length - 1) this.setState({disabled: false})
                        }, offset);
                        offset += 1000;
                      });
                      this.scrollToBottom();
                    })
                  }} variant="raised" color="primary" style={{margin: '0px 4px'}}>
                  Redo
                </Button>
              </div>
            }
            </div> : null
          }
        </Card>

      </div>
    </MuiThemeProvider>);
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
