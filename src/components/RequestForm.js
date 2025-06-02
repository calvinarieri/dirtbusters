import React from 'react';
import Input from './Form/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function RequestForm() {
  function handleCloseRequestForm() {
    document.getElementById("serviceform").close();
  }

  const branches = [
    {
      id: 1,
      name: "Gate C",
      located: "Juja"
    },
    {
      id: 2,
      name: "Withethie",
      located: "Kibute"
    }
  ];

  const formInputs = [
    {
      label: "full name",
      name: 'fname',
      placeholder: 'John Doe',
      required: true,
      type: 'text'
    },
    {
      label: "phone number",
      name: 'phone',
      placeholder: '',
      required: true,
      type: 'text'
    },
    {
      label: "email",
      name: 'email',
      placeholder: 'yourname@example.com',
      required: false,
      type: 'email'
    },
    {
      label: "available time",
      name: 'availability',
      placeholder: '',
      required: true,
      type: 'datetime-local'
    },
  ];

  const validationSchema = Yup.object({
    fname: Yup.string().required('Full name is required'),
    phone: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email'),
    availability: Yup.string().required('Availability is required'),
    pickup: Yup.string().required('Building name is required'),
    branch: Yup.string().required('Please select a branch'),
    notes: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      fname: '',
      phone: '',
      email: '',
      availability: '',
      pickup: '',
      branch: '',
      notes: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      handleCloseRequestForm();
    }
  });

  return (
    <div>
      <dialog id="serviceform" className='px-14 md:w-5/12'>
        <form className='py-4' onSubmit={formik.handleSubmit}>
          <div>
            <h1 className='border-b md:text-2xl py-2 px-4 text-gray-600 border-gray-400'>SERVICE REQUEST:</h1>
          </div>
          <div className='flex flex-col gap-2 pt-2'>
            {
              formInputs.map((item, index) => {
                return (
                  <Input
                    key={index}
                    label={item.label}
                    name={item.name}
                    required={item.required}
                    value={formik.values[item.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder={item.placeholder}
                    type={item.type}
                    error={formik.touched[item.name] && formik.errors[item.name]}
                  />
                )
              })
            }

            <div>
              <Input
                label="Building name"
                name="pickup"
                required={true}
                value={formik.values.pickup}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=""
                type="text"
                error={formik.touched.pickup && formik.errors.pickup}
              />

              <div className='flex flex-col'>
                <label>nearest branch</label>
                <select
                  name="branch"
                  value={formik.values.branch}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='border-2 border-blue-500 rounded-xl px-2 py-2 outline-none w-full'
                >
                  <option label='choose branch' value="" />
                  {branches.map((item) => {
                    return (
                      <option
                        key={item.id}
                        label={`${item.name}, ${item.located}`}
                        value={item.id}
                      />
                    )
                  })}
                </select>
                {formik.touched.branch && formik.errors.branch && (
                  <span className="text-red-500 text-sm">{formik.errors.branch}</span>
                )}
              </div>
            </div>

            <div>
              <div className='flex flex-col'>
                <label>Additional notes</label>
                <textarea
                  name="notes"
                  placeholder='aditional notes'
                  value={formik.values.notes}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='border-2 border-blue-500 rounded-xl px-2 py-2 outline-none w-full h-36'
                ></textarea>
                {formik.touched.notes && formik.errors.notes && (
                  <span className="text-red-500 text-sm">{formik.errors.notes}</span>
                )}
              </div>
            </div>
          </div>

          <div className='flex justify-between py-4'>
            <button
              type="button"
              onClick={handleCloseRequestForm}
              className='border-2 px-4 py-2  border-red-600 text-red-600 rounded-xl  text-blue'
            >cancel</button>
            <input
              type='submit'
              value='complete order'
              className='border-2 px-4 py-2  border-blue-600 rounded-xl  text-blue-600'
            />
          </div>
        </form>
      </dialog>
    </div>
  );
}
