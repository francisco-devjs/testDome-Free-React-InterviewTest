// 2. Focusable Input

import { useEffect, useRef } from "react";


const FocusableInput = () => {
    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current.focus();
    },[inputRef])
    return <input ref={inputRef}/>
      

    
  };

  
  export default FocusableInput;

  // ------------------------------------------


