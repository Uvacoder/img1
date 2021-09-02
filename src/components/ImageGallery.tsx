import React, { FC } from 'react'
import { photos } from '../api/photos'
import { Photo } from '../model'

import LightGallery from 'lightgallery/react'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

const ImageGallery: FC = () => {
  return (
    <div className="gallery">
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} mode="lg-fade">
        {photos.map((photo: Photo) => (
          <a key={photo.id} className="gallery__item" href={`images/${photo.src}`} data-lg-size={photo.size}>
            <img className="gallery__image img-responsive" alt={photo.author} src={`thumbs/${photo.src}`} />
          </a>
        ))}
      </LightGallery>
    </div>
  )
}

export default ImageGallery
