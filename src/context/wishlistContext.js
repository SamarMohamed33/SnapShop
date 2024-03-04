import axios from "axios";
import { createContext, useState } from "react";

export let wishlistContext = createContext(0);

async function addToWishList(productId) {
  return axios
    .post(
      "https://ecommerce.routemisr.com/api/v1/wishlist",
      { productId },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    )
    .then(({ data }) => data)
    .catch((error) => error);
}
async function getWishlist() {
  return axios
    .get("https://ecommerce.routemisr.com/api/v1/wishlist", {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then(({ data }) => data)
    .catch((error) => error);
}
async function removeFromWishlist(productId) {
  return axios
    .delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then(({ data }) => data)
    .catch((error) => error);
}
export default function WishlistProvider({ children }) {
  const [numOfWishlistItems, setNumOfWishlistItems] = useState(0);
  return (
    <wishlistContext.Provider
      value={{
        numOfWishlistItems,
        setNumOfWishlistItems,
        addToWishList,
        getWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
}
