'use client'
import React, { createContext, useContext, useState } from 'react'

interface ModalContextType {
  isOpen: boolean
  setOpen: (modal: React.ReactNode, fetchData?: () => Promise<void>) => void
  setClose: () => void
  data: {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  setOpen: () => {},
  setClose: () => {},
  data: {},
})

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showingModal, setShowingModal] = useState<React.ReactNode>(null)

  const setOpen = async (
    modal: React.ReactNode,
    fetchData?: () => Promise<void>
  ) => {
    if (fetchData) {
      await fetchData()
    }
    setShowingModal(modal)
    setIsOpen(true)
  }

  const setClose = () => {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ isOpen, setOpen, setClose, data: {} }}>
      {children}
      {showingModal}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within the modal provider')
  }
  return context
}

export default ModalProvider
