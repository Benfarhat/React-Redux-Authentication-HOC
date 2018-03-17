import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class UserList extends Component {
  
  renderUser(user){
    return(
        <div key={user.name} className="card card-block">
          <div className="card-body">
            <h4 className="card-title">{user.name}</h4>
            <p className="card-text">{user.company.name}</p>
            <a className="btn btn-primary">{user.username}</a>
          </div>
        </div>
    )
  }
  
  
  componentWillMount() {
      this.props.fetchUsers()
  }
  

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps, actions)(UserList)