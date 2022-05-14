import React from 'react'

const Action= (props)=> {
    return (
      <>
        {
            
            <form onSubmit={props.onSubmitForm}>
                <div className='input-group'>
                    <input type="text" className='form-control' name="txtItem"  placeholder='Add new item..'/>
                    <button type='submit' className='btn btn-outline-primary'>Add Item</button>
                    {
                        props.items.length 
                        ?
                        <button type='button' className='btn btn-outline-warning btn-sm' onClick={props.clearAll}>Clear All</button>
                        :
                        ''
                    }
                </div>
            </form>
        }
      </>
    )
}

export default Action;