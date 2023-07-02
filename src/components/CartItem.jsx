import { useState } from 'react'

const CartItem = ({item ,index ,deleteItem}) => {
  

  const [flag, setFlag] = useState(false)
  const [qty, setQty] = useState(1)


  const toggleInput = (e) => {
    setQty(e.target.value)
    if(e.target.value == 10){
      setFlag(true)
    }
    if(e.target.value ==0){
      deleteItem(index)
    }
    
  
  }

  const submitInput = (e)=> {
    e.preventDefault();
    setFlag(false)
    setQty(e.target.qty.value)

  }

  return (
    <>
                {/* cart item */}
            <div className=" flex justify-between my-3 border-b-[2px] py-2" key={index}>
              <div className="  flex"> 
                   <img className="" src="https://m.media-amazon.com/images/I/71nHKoF+OJL._AC_AA180_.jpg" alt="Image not Found" />     

                   <div className="flex flex-col">
                    <h5 className="text-xl font-bold">{item.item_name}</h5>
                    <p>by sam Wothington</p>
                    <p className=" font-bold ">Bluray</p>
                    {item.available
                    ? <p className="text-green-500">in stock</p>
                    : <p className="text-red-500">out of stock</p>}
                   
                    
                    {/* select qty */}
                    {flag 
                   ? <form onSubmit={submitInput}>
                    <input  type="text"  maxLength="3" autoComplete='off' id='qty' className='w-[77px] border-2 border-blue-300 rounded  me-1'/>  
                    <button type='submit' className='bg-yellow-500 rounded p-[3px] me-1'>update</button>
                    <button className='bg-red-500 rounded p-[3px]' onClick={deleteItem}>delete</button>
                   </form>
                   : <div>
                    <select defaultValue={1} onChange={toggleInput} id="quantity" className="w-[90px] inline-block me-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="0">Qty:0 Delete</option>
                      <option value="1">Qty:1</option>
                      <option value="2">Qty:2</option>
                      <option value="3">Qty:3</option>
                      <option value="4">Qty:4</option>
                      <option value="5">Qty:5</option>
                      <option value="6">Qty:6</option>
                      <option value="7">Qty:7</option>
                      <option value="8">Qty:8</option>
                      <option value="9">Qty:9</option>
                      <option value="10">Qty:10</option>
                     </select> 
                     <button className='bg-red-500 rounded p-[3px]' onClick={deleteItem}>delete</button>
                    </div> 
                  }   
                    </div>           
              </div>
              <div className=" me-5" >{qty * item.price} </div>
            </div>
    </>
  )
}

export default CartItem