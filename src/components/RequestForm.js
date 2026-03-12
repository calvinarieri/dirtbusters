import React from 'react';
import { OrderContext } from '../contexts/OrderContext';
import Input from './Form/Input';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import * as Yup from 'yup';

export default function RequestForm() {
  const {selectedService} = React.useContext(OrderContext);

  function handleCloseRequestForm() {
    document.getElementById("serviceform").close();
  }
 
  const branches = [
    { id: 1, name: "Gate C", located: "Juja" },
    { id: 2, name: "Withethie", located: "Kibute" }
  ];

  const formInputs = [
    { label: "First Name", name: 'fname', placeholder: 'John Doe', required: true, type: 'text' },
    { label: "Phone Number", name: 'phone', placeholder: '712345678', required: true, type: 'text' },
    { label: "Available Time", name: 'availability', placeholder: '', required: true, type: 'datetime-local' }
  ];

  const validationSchema = Yup.object({
    fname: Yup.string().required('First name is required').max(50, 'Name too long'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^[712]\d{8}$/, "Phone number must be 9 digits and start with 7, 1, or 2"),
    availability: Yup.string().required('Availability is required'),
    pickup: Yup.string().required('Building name is required'),
    branch: Yup.string().required('Please select a branch'),
  });

  const formik = useFormik({
    initialValues: {
      fname: '',
      phone: '',
      availability: '',
      pickup: '',
      branch: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      const clientPhone = values.phone;
      const branchId = parseInt(values.branch, 10);

      const internalPhone =
        branchId === 1
          ? "742761211"
          : branchId === 2
          ? "752262271"
          : null;

      const orderNumber = `DB${Date.now().toString().slice(-7)}`;

      try {
        const clientMessage = `Hi ${values.fname}, We have received your order. Your tracking number is ${orderNumber}. Dirtbusters will be reaching out soon for more details.`;

        await fetch("https://api.arierisworld.com/notify/v1/sms/send_sms/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone_number: clientPhone,
            message: clientMessage,
          }),
        });

        if (internalPhone) {
          const details = Object.entries(values)
            .filter(([key]) => key !== 'branch' && key !== 'notes')
            .map(([key, val]) => `${key}: ${val}`)
            .join(", ");
          const internalMessage = `New order (${orderNumber}): ${selectedService}: ${details}`;
          
          await fetch("https://api.arierisworld.com/notify/v1/sms/send_sms/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phone_number: internalPhone,
              message: internalMessage,
            }),
          });
        } else {
          console.warn("No internal phone number found for this branch");
        }

        resetForm();
        handleCloseRequestForm();
      } catch (error) {
        console.error("SMS send failed:", error);
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div>
      <dialog id="serviceform" className="backdrop:bg-black/50 rounded-3xl shadow-2xl p-0 border-0 max-w-2xl w-full mx-auto">
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform translate-x-16 -translate-y-16"></div>
          
          {/* Close button */}
          <button
            type="button"
            onClick={handleCloseRequestForm}
            className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
          >
            <span className="text-gray-500 text-xl">×</span>
          </button>

          <form onSubmit={formik.handleSubmit} className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Service <span className="text-blue-600">Request</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              {/* Form inputs */}
              {formInputs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Input
                    label={item.label}
                    name={item.name}
                    required={item.required}
                    value={formik.values[item.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder={item.placeholder}
                    type={item.type}
                    error={formik.touched[item.name] && formik.errors[item.name]}
                    disabled={formik.isSubmitting}
                  />
                </motion.div>
              ))}

              {/* Building name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Input
                  label="Building Name"
                  name="pickup"
                  required={true}
                  value={formik.values.pickup}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder="Enter your building name"
                  error={formik.touched.pickup && formik.errors.pickup}
                  disabled={formik.isSubmitting}
                />
              </motion.div>

              {/* Branch selection */}
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <label className="text-sm font-semibold text-gray-700 mb-2">
                  Nearest Branch <span className="text-red-500">*</span>
                </label>
                <select
                  name="branch"
                  value={formik.values.branch}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 outline-none w-full text-gray-700 bg-white transition-colors duration-200"
                  disabled={formik.isSubmitting}
                >
                  <option value="">Choose nearest branch</option>
                  {branches.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}, {item.located}
                    </option>
                  ))}
                </select>
                {formik.touched.branch && formik.errors.branch && (
                  <span className="text-red-500 text-sm mt-1">{formik.errors.branch}</span>
                )}
              </motion.div>
            </div>

            {/* Form Actions */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <button
                type="button"
                onClick={handleCloseRequestForm}
                className="flex-1 border-2 border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-500 font-bold py-3 px-6 rounded-xl transition-all duration-300"
                disabled={formik.isSubmitting}
              >
                Cancel
              </button>

              <button
                type="submit"
                className={`flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${formik.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Complete Order'
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </dialog>
    </div>
  );
}
