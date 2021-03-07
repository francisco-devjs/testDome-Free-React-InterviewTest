// 8. Todo List

import React from 'react';


const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends React.Component {
  render() {
    const { items, onListClick } = this.props;
    return (
   
    <ul onClick={onListClick}>
      {items.map((item, index) => 
                 <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
     <p>--------------#8-Todo List-------------</p>
    </ul>
   
    );
  }
  
  handleItemClick(item, event) {
    if(item.done == false){
        this.props.onItemClick(item, event)
        return true
    }else{
        return false
    }
  }
}

const App3 = (props) => <TodoList
  items={props.items}
  onListClick={(event) => console.log("List clicked!")}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;

export default App3;

