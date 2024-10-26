import React, { useState } from 'react';

function Registration() {

     const [formData, setFormData] = useState({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Handle form submission logic here
          console.log(formData);
        };
        
  return (
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
     <form
       onSubmit={handleSubmit}
       className="bg-white p-6 rounded shadow-md w-96"
     >
       <h2 className="text-2xl font-bold mb-4">Register</h2>
       
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700" htmlFor="username">
           Username
         </label>
         <input
           type="text"
           name="username"
           value={formData.username}
           onChange={handleChange}
           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
           required
         />
       </div>

       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700" htmlFor="email">
           Email
         </label>
         <input
           type="email"
           name="email"
           value={formData.email}
           onChange={handleChange}
           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
           required
         />
       </div>

       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700" htmlFor="password">
           Password
         </label>
         <input
           type="password"
           name="password"
           value={formData.password}
           onChange={handleChange}
           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
           required
         />
       </div>

       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
           Confirm Password
         </label>
         <input
           type="password"
           name="confirmPassword"
           value={formData.confirmPassword}
           onChange={handleChange}
           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
           required
         />
       </div>

       <button
         type="submit"
         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
       >
         Register
       </button>
     </form>
   </div>
  )
}

export default Registration