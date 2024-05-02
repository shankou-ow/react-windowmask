'use client'

import React, { useRef, ReactNode } from 'react'
import Windowmask from './Windowmask'

type SideMenuProps = {
  isShown: boolean
  children?: ReactNode
  closeSideMenu: Function
}

const SideMenu: React.FC<SideMenuProps> = ({ isShown, children, closeSideMenu }) => {
  const enableScrollTargetRef = useRef(React.createRef<HTMLDivElement>()).current

  return (
    <Windowmask isShown={isShown} uniqueKey={'modal-window'} enableScrollTargetRef={enableScrollTargetRef} close={closeSideMenu}>
      {/* Layer */}
      <article className='relative flex justify-end w-full h-full max-h-full'>
        {/* Side Panel */}
        <div
          className='relative p-2 flex flex-col w-full max-w-96 max-h-full min-h-screen text-gray-400 bg-white animate-slide-left'
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu header */}
          <div className='flex justify-end p-2'>
            <button
              className='flex justify-center items-center p-1 w-8 h-8 border rounded-full hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:outline-none focus:ring-blue-300'
              onClick={() => closeSideMenu()}
            >✕</button>
          </div>
          {/* Menu body */}
          <div className='p-4 overflow-auto' ref={enableScrollTargetRef}>
            {children}
          </div>
          {/* Menu header */}
        </div>
      </article>
    </Windowmask>
  )
}
export default SideMenu