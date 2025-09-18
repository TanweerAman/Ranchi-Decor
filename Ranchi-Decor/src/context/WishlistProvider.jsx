import { useState } from 'react'
import { WishlistContext } from './WishlistContext'

export default function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([])

  const addToWishlist = (product) => {
    setWishlist(prevWishlist => {
      const exists = prevWishlist.find(item => item.id === product.id)
      if (!exists) {
        return [...prevWishlist, product]
      }
      return prevWishlist
    })
  }

  const removeFromWishlist = (id) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== id))
  }

  const isInWishlist = (id) => {
    return wishlist.some(item => item.id === id)
  }

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
      return false // removed
    } else {
      addToWishlist(product)
      return true // added
    }
  }

  return (
    <WishlistContext.Provider value={{ 
      wishlist, 
      addToWishlist, 
      removeFromWishlist, 
      isInWishlist, 
      toggleWishlist 
    }}>
      {children}
    </WishlistContext.Provider>
  )
}