// 3. Toggle Message

import React, { Component } from "react";

class Message extends React.Component {
  constructor(props){
    super(props)
    this.state = { isClicked: false}
  }

    render() {
    const {isClicked} = this.state
      return (<React.Fragment>
        <p>--------------#2-Focusable Input-------------</p>
        <br/>
            <a href="#" onClick={(() => this.setState({isClicked:!isClicked}))}>
              Want to buy a new car?</a>
              {isClicked &&  <p>Call +11 22 33 44 now!</p>}
            

        <p>--------------#3-Toggle Message-------------</p>

           
          </React.Fragment>);
    }
  }
  
  export default Message;