import React from 'react'
import Item from '../Item/Item'

const List =(props)=> {
    return (
      <>
            <ul className='list-group'>
                {
                    props.items.map((item,index)=>
                        <Item key={index} item={item} deleteItem={props.deleteItem}/>
                    )
                }
            </ul>
      </>
    )
}

export default List