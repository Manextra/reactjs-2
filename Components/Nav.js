import React from 'react'

const Nav = (props) => {
  console.log(props.num)
  return (
    <div className='bg-red-200'>Navigation bar i am for {props.num}</div>
  )
}

export default Nav