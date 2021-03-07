// 5. Change Username
import React from 'react';


class Username extends React.Component {
   
    state = { value: '' };
  
    changeValue(value) {
      this.setState({ value });
    }
  
    render() {
      const { value } = this.state;
      return <h1>{value}</h1>;
    }
  }
  
  function App2() {
    const inputRef = React.useRef()
    const nameRef = React.useRef()
    
    
    function clickHandler() {
     nameRef.current.changeValue(inputRef.current.value)
    }
  
    return (
      <div>
        <p>--------------#4-Focus-------------</p>
          <br/>
        <button onClick={clickHandler}>Change Username</button>
        <input type="text" ref={inputRef}/>
        <Username ref={nameRef} />
       
        <p>--------------#5-Change Username-------------</p>
      </div>
    );

  }

  export default App2;