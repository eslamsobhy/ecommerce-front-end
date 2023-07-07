/* eslint-disable react/prop-types */
import Slider from '../UI/Slider'

function DealsSlider({products}) {
  return (
    <div className="mt-auto mx-12">
    <h1 className='mx-12 font-bold text-3xl'>Deals</h1>
    <Slider products={products} />
    </div>
  )
}

export default DealsSlider