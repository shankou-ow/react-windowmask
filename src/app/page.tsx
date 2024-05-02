'use client'

import { useState } from 'react'
import ModalWindow from '@/components/ModalWindow'
import SideMenu from '@/components/SideMenu'

export default function Home() {
  const [isModalWindowShown, setIsModalWindowShown] = useState(false)
  const [isSideMenuShown, setIsSideMenuShown] = useState(false)
  
  const closeModalHandler = () => {
    setIsModalWindowShown(false)
  }

  const closeSideMenuHandler = () => {
    setIsSideMenuShown(false)
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-white text-gray-400'>
      <div className='h-[2000px]'>
        <button className='m-2 p-2 border rounded' onClick={() => setIsModalWindowShown(true)}>Open ModalWindow</button>
        <button className='m-2 p-2 border rounded' onClick={() => setIsSideMenuShown(true)}>Open SideMenu</button>
      </div>

      <ModalWindow isShown={isModalWindowShown} title={'Modal Window'} closeModal={closeModalHandler}>
        <div className='h-[2000px]'>
          ModalWindow
        </div>
      </ModalWindow>

      <SideMenu isShown={isSideMenuShown} closeSideMenu={closeSideMenuHandler}>
        <ul className='h-[2000px]'>
          <li>SideMenu 1</li>
          <li>SideMenu 2</li>
          <li>SideMenu 3</li>
        </ul>
      </SideMenu>
    </main>
  )
}
