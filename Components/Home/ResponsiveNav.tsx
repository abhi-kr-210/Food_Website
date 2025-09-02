'use client'

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

function ResponsiveNav() {
     const [shownav,setshownav]=useState(false);
     const openNavhandler=()=>setshownav(true);
     const closeNavhandler=()=>setshownav(false);


  return (
    <div>
        <Nav openNav={openNavhandler}/>
        <MobileNav showNav={shownav} closeNav={closeNavhandler}/>
    </div>
  )
}

export default ResponsiveNav