
import React from 'react'
import {List  } from '../redux/reducers/ListDanhmucReducer'

type Props = {
    prod: List
}

export default function ListItem({prod}: Props) {
  return (
    <li><a className="dropdown-item Menu_danhmuc_2" href="#">{prod.tenDanhMuc}</a></li>
  )
}