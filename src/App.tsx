import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface State{
  currentValue: string;
  todoList: string[];
};

class App extends Component<any, State> {
  constructor(props: any){
    super(props);
    this.state = {
      currentValue: '',
      todoList: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>){
    this.setState({ currentValue: event.target.value });
  }

  handleAdd() {
    const { currentValue, todoList } = this.state
    let list = todoList;
    if(currentValue.length > 0){
      list.push(currentValue);
      this.setState({currentValue: '', todoList: list})
    }
  }

  handleDelete(item: string){
    const { todoList } = this.state
    const newList = todoList.filter(function(value, index, arr){
      return value !== item;
    });
    this.setState({todoList: newList})
}

  render() {
    const { currentValue, todoList } = this.state

    let table = todoList.map((item, index) => {
      return(
        <tr key={index}>
          <td>{item}</td>
          <td><button className="buttonDelete" onClick={() => this.handleDelete(item)}>Delete</button></td>
        </tr>
      )
    })
    return (
      <div className="container">
        <h1 className="title">Todo List</h1>
        <div>
          <input
            className="input"
            onChange={this.handleChange}
            value={currentValue}
            placeholder="Add your item here" />
          <button className="button" onClick={this.handleAdd}>Add</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>To-do</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {table}
            </tbody>
          </table>
        </div>
</div>
    );
  }
}

export default App;
