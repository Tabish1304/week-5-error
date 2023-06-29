import React from 'react'

const Price = ({originalPrice,salePrice}) => {
  return (
    <div>
       <div className="book-price">
          {salePrice ? (
            <>
              <span className="book-price-normal">£{originalPrice.toFixed(2)}</span>
              £{salePrice.toFixed(2)}
            </>
          ) : (
           <>£{originalPrice.toFixed(2)}</>
          )}
        </div>
    </div>
  )
}

export default Price
