import React from 'react';
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class MenuBar extends React.Component{

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){

        const { activeItem } = this.state

    return(
        <div>
        <Menu pointing secondary>
          
          <Link to="/">
            <Menu.Item
              name='All Bookmarks'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to="/addz" style={{display:this.props.disp}} >
            <Menu.Item
              name='Add New'
              active={activeItem === 'messages'}
              onClick={this.handleItemClick}
            />
          </Link>
        
          {this.props.disp !== 'block' ?  (<Menu.Menu position="right" >
              <Link to="/authorize" >
                <Menu.Item
                  name='Authorize'
                  active={activeItem === 'Authorize'}
                  onClick={this.handleItemClick}
                />
              </Link>
            </Menu.Menu>) : (<Menu.Menu position="right" >
                <Menu.Item
                  name='Unauthorize'
                  active={activeItem === 'Unauthorize'}
                  onClick={()=>this.props.cb(false)}
                />
            </Menu.Menu>)
        }
        </Menu>

      </div>
    )
    }
}

export default MenuBar;