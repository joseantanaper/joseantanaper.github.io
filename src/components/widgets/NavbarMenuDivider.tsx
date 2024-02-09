import React from 'react'
import { dividerHrClass } from '@/util/styleTools'

const NavbarMenuDivider = () => {
  return (
    <>
      {/* <div className="vr d-none d-sm-block mx-3"></div> */}
      <div className={`vr ${dividerHrClass}`} />
      <li className="nav-item d-sm-none">
        <hr className="" />
      </li>
    </>
  )
}

export default NavbarMenuDivider
