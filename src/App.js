import React, { Component } from 'react';
import UserRow from './components/userRow'
import Users from './data/users'
import Header from './components/header'
import UserForm from './components/userForm'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: Users,
            user: {
                fullName: '',
                email: '',
                phone: '',
            }
        }
        this.updateValue = this.updateValue.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    updateValue(e) {
        let user = this.state.user
        user[e.target.name] = e.target.value
        this.setState({ user: user })
    }

    submitForm() {
        if(this.state.user.fullName == '' || this.state.user.email == '' || this.state.user.phone == '') {
            alert('Missing fields in form')
            return false
        } else {
            let users = this.state.users
            users.push(this.state.user)
            this.setState({ users: users, user: {fullName:'', email: '', phone: ''}})
            alert('User has been created')
        }
    }

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Nord Software</h1>
        </header>
          <UserForm
            user={this.state.user}
            updateValue={this.updateValue}
            submitForm={this.submitForm}
          />
          <Header/>
          {this.state.users.map(user => (
              <UserRow
                  user={user}
              />
          ))}
      </div>
    );
  }
}

export default App;
