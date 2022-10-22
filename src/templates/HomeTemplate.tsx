import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
type Props = {}

export default function HomeTemplate({ }: Props) {
  return (
    <>
      <Header />
      < Menu />
      <div style={{ minHeight: 600 }}>
        <Outlet />
      </div>

      <Footer />

    </>
  )
}