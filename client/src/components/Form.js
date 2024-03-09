import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const {register, handleSubmit, resetField} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <div className='form max-w-sm mx-auto w-96'>
        <h1 className='font-bold pb-4 text-xl'>Categories</h1>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-4'>
                <select className='form-input' {...register('brand')}>
                    <option value="Brand 1">Brand 1</option>
                    <option value="Brand 2">Brand 2</option>
                    <option value="Brand 3">Brand 3</option>
                </select>
                <select className='form-input' {...register('model')}>
                    <option value="Model 1">Model 1</option>
                    <option value="Model 2">Model 2</option>
                    <option value="Model 3">Model 3</option>
                </select>
                <div className="input-group">
                    <input type="number" {...register('year')} placeholder='Year' className='form-input' />
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-indigo-500 w-full'>Check</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Form
