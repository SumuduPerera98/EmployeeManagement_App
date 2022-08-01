import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  
    render() {
    return (
      <div>
        <header>
            <nav className='navbar navbar-expand-nd navbar-dark bg-dark'>
            <div><a href="https://example.com" className='navbar-brand'>Employee Management App</a></div>    
            </nav>
        </header>
      </div>
    )
  }
}
