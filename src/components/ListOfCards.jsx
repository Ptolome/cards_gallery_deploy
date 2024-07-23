import { ItemCard } from "./ItemCard"
import  "./ListOfCards.css"

export const ListOfCards = (props)=>{
    const listItems= props.products
    console.log('loC',listItems)
    return (
        <ul className="list-cards">
            {listItems.map((item)=>(
                <li  key={item.id} className="card">
                    <ItemCard 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        discount={item.discount}
                        imageUrl={item.imageUrl}
               
                    />
                </li>
            ))}
           
        </ul>
        
    )
}