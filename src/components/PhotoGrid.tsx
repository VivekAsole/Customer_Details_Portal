import React, { useEffect, useState } from 'react'
import { fetchPhotos } from '../utils/api'
import styles from '../styles/PhotoGrid.module.css'
import { Customer } from '../types/Customer'

interface PhotoGridProps {
  customer: Customer
}

const PhotoGrid: React.FC<PhotoGridProps> = (customer) => {
  const [photos, setPhotos] = useState<string[]>([])
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  useEffect(() => {
    const loadPhotos = async () => {
      const fetchedPhotos = await fetchPhotos()
      if (fetchedPhotos.length) {
        setPhotos(fetchedPhotos)
      }
    }
  
    loadPhotos() // Initial load of photos
  
    const interval = setInterval(() => {
      loadPhotos() // Periodic refresh of photos
    }, 10000)
  
    return () => clearInterval(interval) // Cleanup the interval on component unmount or customer change
  }, [customer]);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev.add(index)))
  }

  return (
    <div className={styles.photoGrid}>
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt="Customer"
          className={loadedImages.has(index) ? styles.loaded : ''}
          onLoad={() => handleImageLoad(index)}
        />
      ))}
    </div>
  )
}

export default PhotoGrid;
