/* eslint-disable react/prop-types */
import Slider from '../UI/Slider'

function NewArrivalsSlider({products}) {
  return (
    <div className="mt-5">
    <h1 className='mx-12 font-bold text-3xl'>New Arrivals</h1>
    <Slider products={products} />
    </div>
  )
}

export default NewArrivalsSlider