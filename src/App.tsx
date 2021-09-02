import React, { FC } from 'react'
import ImageGallery from './components/ImageGallery'
import Header from './components/Header'

const App: FC = () => {
  return (
    <div>
      <Header />
      <ImageGallery />
    </div>
  )
}

export default App
