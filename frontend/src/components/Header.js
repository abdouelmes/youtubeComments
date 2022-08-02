// import PropTypes from 'prop-types'
import React from 'react'


import Input from "./Video"
import Comments from "./Comments"


const Header = ({ title }) => {
 
  return (
      <header className='header'>
      <h1>Find a video to comment on: {title}</h1>
        <div className='container'>
        <Input />
        <Comments />
          </div> 
    </header>
  )
}
//setting defaults and setting prop types
// Header.defaultProps={
// title:'default',
// }
// Header.propTypes={
// title: PropTypes.string,
// }

export default Header