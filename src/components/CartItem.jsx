import React from 'react'

const CartItem = () => {
  return (
    <>
                {/* cart item */}
                <div className=" flex justify-between my-3">
              <div className="  flex"> 
                   <img className="" src="https://m.media-amazon.com/images/I/71nHKoF+OJL._AC_AA180_.jpg" alt="Image not Found" />     

                   <div className="flex flex-col">
                    <h5 className="text-xl font-bold">Avatar: The Way of Water</h5>
                    <p>by sam Wothington</p>
                    <p className=" font-bold ">Bluray</p>
                    <p className="text-green-500">in stock</p>
                    
                    {/* select qty */}
                    <select defaultValue={1}  id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="0">Qty:0 Delete</option>
                      <option value="1">Qty:1</option>
                      <option value="2">Qty:2</option>
                      <option value="3">Qty:3</option>
                      <option value="4">Qty:4</option>
                    </select>                      

                    </div>           
              </div>
              <div className=" me-5" >$300</div>
            </div>
    </>
  )
}

export default CartItem