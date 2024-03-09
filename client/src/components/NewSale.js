import React from 'react'
import { useForm } from 'react-hook-form'

const NewSale = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <div className='form max-w-sm mx-auto w-96'>
        <h1 className='font-bold pb-4 text-xl'>Categories</h1>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-4'>
                <select className='form-input' {...register('type')}>
                    <option value="Brand 1">Car</option>
                    <option value="Brand 2">Bike</option>
                    <option value="Brand 3">Scooter</option>
                    <option value="Brand 3">Truck</option>
                </select>
                <div className="input-group">
                    <input type="text" {...register('units')} placeholder='Model Name' className='form-input' />
                </div>
                <div className="input-group">
                    <input type="number" {...register('units')} placeholder='Units Sold' className='form-input' />
                </div>
                <div className="input-group">
                    <input type="text" {...register('year')} placeholder='Year' className='form-input' />
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-indigo-500 w-full'>Check</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default NewSale
