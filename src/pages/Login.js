import React from 'react'
import Input from '../components/Form/Input'
import { useFormik } from 'formik'

export default function Login() {
  const formik = useFormik({
    initialValues:{
      username:'',
      password:'',
    },
    onSubmit: (values) =>{
      console.log(values)
    }
  })
  const formInputs =[
    {
      label:"username or email",
      name: "username",
      type:"text",
      onChange: formik.handleChange,
      required:true,
      value: formik.values.username,
      placeholder:'',
      error: formik.errors.username     
    },
    {
      label:"password",
      name: "password",
      type:"password",
      onChange:formik.handleChange,
      required:true,
      value: formik.values.password,
      placeholder:'',
      error: formik.errors.password      
    }
  ]
  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={formik.handleSubmit}>
          <div className='py-4'>
            <h1 className='text-8xl'>Hello</h1>
          </div>

        <div className='flex flex-col gap-2'>
          {formInputs.map(
            function(item, index){
              return(
                <Input
                  key={index}
                  label = {item.label}
                  type={item.type}
                  name={item.name}
                  onChange={item.onChange}
                  required = {item.required}
                  value={item.value}
                  placeholder={item.placeholder}
                />
              )
            }
        )}
        </div>
        <div className='py-4'>
          <input
            type="submit"
            value="log in"
            className='border-2 bg-blue-600 hover:bg-blue-500 duration-150 text-white font-bold rounded-full w-full py-3'
          />
        </div>
      </form>

    </div>
  )
}
