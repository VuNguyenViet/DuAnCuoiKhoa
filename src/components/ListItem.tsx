
import React from 'react'
import {List  } from '../redux/reducers/ListDanhmucReducer'
import { NavLink } from 'react-router-dom'

type Props = {
    prod: List
}

export default function ListItem({prod}: Props) {
  return (
    <NavLink  to = "/DanhSachKhoaHoc">
      <li><a className="dropdown-item Menu_danhmuc_2" href="#">{prod.tenDanhMuc}</a></li>
    </NavLink>
    
  )
}