import React, { useEffect } from 'react'
import MainLayout from '@/components/templates/MainLayout'
import '@/components/templates/MobileLayout.css'

const MobileLayout = ({ menu, fullScreen }) => {
  useEffect(() => {
    if (!
      fullScreen
    ) {
      fullScreen(true);
    }

    return () => {
      fullScreen(false);
    };
  }, []);

  return (
    <div id='mobile'>
      <MainLayout menu={menu} />
    </div>
  )
}

export default MobileLayout
