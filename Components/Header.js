import React from 'react'
import Nav from './Nav'
const Header = (props) => {
  console.log(props.num)
  return (
    <div className='bg-green-500 p-5'>
      I am Header
      <Nav num = {props.num}/>
    </div>
  );
};

export default Header;