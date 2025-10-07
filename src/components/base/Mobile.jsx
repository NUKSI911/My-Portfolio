import React, { useEffect } from 'react'
import Base from './Base'
import './Mobile.css'

const Mobile = ({ menu, fullScreen }) => {
  useEffect(() => {
    if(!
      fullScreen
    ){
      fullScreen(true);
    }
    
    return () => {
      fullScreen(false);
    };
  }, []);

  return (
    <div id='mobile'>
      <Base menu={menu} />
    </div>
  )
}

export default Mobile
