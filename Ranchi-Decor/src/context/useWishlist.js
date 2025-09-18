import { useContext } from 'react'
import { WishlistContext } from './WishlistContext'

export default function useWishlist() {
  return useContext(WishlistContext)
}