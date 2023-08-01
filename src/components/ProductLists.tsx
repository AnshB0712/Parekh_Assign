import React from 'react'
import { CartProduct } from '../types/CartProduct'
import { useProductsContext } from '../hooks/useProductsContext'
import { ActionType } from '../types/ReducerActionTypes'

const ProductLists = () => {
  const { productsState,productsDispatch } = useProductsContext()
  console.log(productsState)

  const handleAddItem = (product: CartProduct) => productsDispatch({type: ActionType.AddItemToCart,payload: product})
  const handleRemoveItem = (product: CartProduct) => productsDispatch({type: ActionType.RemoveItemToCart,payload: product})

  return (
    <div>
      {productsState.products.data?.map((product,i) => (<section key={i}>
        <h2 style={{textAlign: 'center',borderBottom: '1px solid #000'}}>{product.name}</h2>
        <ul style={{display:'grid',placeItems:'center', gap:'15px'}}>
          {product.productList?.map((singleProduct,i) => {
            
            const isItemInCart = Boolean(productsState.cart?.find((p) => p.category === product.name && p.name === singleProduct.name && p.price === singleProduct.price))

            return(
            <article key={i} style={{width: '250px',display:'flex',flexDirection:'column',alignContent:'center',border: '1px solid #222',borderRadius:'8px',padding:'.25rem'}}>
            <p style={{textAlign: 'center',fontSize:'1.25rem'}}>{singleProduct.name}</p>
            <p style={{textAlign: 'center'}}>{`Rs. ${singleProduct.price}`}</p>
            <button disabled={isItemInCart} style={{background: '#0d76c1',color:'#fff',border:'none',marginBottom:'8px'}} onClick={() => handleAddItem({category: product.name,...singleProduct})}>Add to Cart</button>
            <button disabled={!isItemInCart}  onClick={() => handleRemoveItem({category: product.name,...singleProduct})}>Remove From Cart</button>
          </article>
          )
          }
        )}
        </ul>
      </section>))}
    </div>
  )
}

export default ProductLists
