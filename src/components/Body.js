import React, { Component } from 'react'
import { Menu,Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class Body extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
        <>
        <Menu stackable>
            <Menu.Item>
            <img src='https://t3.ftcdn.net/jpg/00/88/43/58/360_F_88435823_c3MiOAvV8gFwtQzTGlsLt6I6mFvQuQmN.jpg' alt='logo' />
            </Menu.Item>

            <Menu.Item active={window.location.pathname === '/'}>
              <Link exact to='/' style={{color:'black'}}>Home</Link>
            </Menu.Item>

            <Menu.Item active={window.location.pathname === '/news/india'}>
              <Link exact to='/news/india' style={{color:'black'}}>India</Link>
            </Menu.Item>


            <Menu.Item active={window.location.pathname === '/news/opinion'}>
              <Link exact to='/news/opinion' style={{color:'black'}}>Opinion</Link>
            </Menu.Item>

            <Menu.Item active={window.location.pathname === '/news/world'}>
              <Link exact to='/news/world' style={{color:'black'}}>World</Link>
            </Menu.Item>

            <Menu.Item active={window.location.pathname === '/news/cities'}>
              <Link exact to='/news/cities' style={{color:'black'}}>Cities</Link>
            </Menu.Item>

            

            <Menu.Item active={window.location.pathname === '/news/people'}>
              <Link exact to='/news/people' style={{color:'black'}}>People</Link>
            </Menu.Item>


            <Menu.Item active={window.location.pathname === '/news/science'}>
              <Link exact to='/news/science' style={{color:'black'}}>Science</Link>
            </Menu.Item>


            <Menu.Menu position='right'>

            <Menu.Item>
                <Link exact to='/addnews'><Button primary>Add news</Button></Link>
            </Menu.Item>
            </Menu.Menu>
        </Menu>
        <br />
        {this.props.children}

        </>
    )
  }
}