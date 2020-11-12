import React from 'react'
import { NavLink } from 'react-router-dom';


const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: '#a40000',
    // background: '#FF0000',
    textDecoration: 'none',
    color: 'white',
  }

class Navbar extends React.Component { 


    render() {
      return (
        <>
          <br/>
          <br/>
          <div>
            <NavLink
              to="/my_library"
              /* set exact so it knows to only set activeStyle when route is deeply equal to link */
              exact
              /* add styling to Navlink */
              style={link}
              /* add prop for activeStyle */
              activeStyle={{
                background: 'black'
              }}
            >My Library</NavLink>

            <NavLink
              to="/playlists"
              exact
              style={link}
              activeStyle={{
                background: 'gray'
              }}
            >My Playlists</NavLink>

            <NavLink
              to="/add_new_video"
              exact
              style={link}
              activeStyle={{
                background: 'gray'
              }}
            >Add New Video</NavLink>

            <NavLink
              to="/add_new_playlist"
              exact
              style={link}
              activeStyle={{
                background: 'gray'
              }}
            >Add New Playlist</NavLink>
          </div>
          <br/>
          <br/>
        </>
      )
    }
  }
   
  export default Navbar;