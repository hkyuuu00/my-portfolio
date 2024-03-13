import React from 'react';
import '../style/Menu.scss'
import {Link} from 'react-router-dom';

export default function Menu() {
  const menuList = ['Home','About','Skills','Project','Experience','Education','Blog']
  return (
    <div className='menu'>
      <ul className='ul'>
        {menuList.map((menu) => 
          <li key={menu} className='link'>
            <Link to={`${menu}`}>{menu}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}
