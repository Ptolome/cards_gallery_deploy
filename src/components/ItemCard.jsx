import './CardStile.css'

export const ItemCard = (products) => {
  console.log(products);
  return (
    <>
      <img src={products.imageUrl} alt={products.title} />
      <div className='block-price'>
      {products.discount ? (<>
            <div className='green-price'>
                {products.price*products.discount} ₽
            </div> 
            <div className="discount">
                {products.price} ₽
            </div>  
            </>
    ):(
        <div className='price'>
            {products.price} ₽
         </div> 
      )}
      </div>
      <div className='title'>{products.title}</div>
      
    </>
  );
};
