import MenuOptions from '@/components/sidebar'
import InfoBar from '@/components/infobar'
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <MenuOptions />
      <div className="w-full">
        <InfoBar />
        <div className="border-l-[1px] border-t-[1px] pb-20 rounded-l-3xl border-muted-foreground/20 overflow-scroll h-[calc(100vh-60px)]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
