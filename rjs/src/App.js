import React, { Component } from 'react';
import './App.css';
import User from './User/User';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {name: 'user1'},
        {name: 'user2'},
        {name: 'user3'}
      ],
      isShowUsers: true
    }
  }

  toggleShowUser = () => {
    // console.log(this);
    
    const _isShowUsers = this.state.isShowUsers;
    
    this.setState({
      isShowUsers: !_isShowUsers
    })
  }

  deleteUser = (index) => {
    console.log(this);
    const _users = [...this.state.users];
    _users.splice(index, 1);
    this.setState({users: _users});
  }

  render() {
    let users = null;
    if (this.state.isShowUsers) {
      users = (
        <div>
          {
            this.state.users.map((user, index) => {
              return <User key={index} user={user} click={() => this.deleteUser(index)} />
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <button onClick={this.toggleShowUser}>Toggle Show User</button>
        { users }
      </div>
    )
  }
  
}

export default App;
