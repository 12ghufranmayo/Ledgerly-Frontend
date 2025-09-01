import React, { useState } from 'react' 
import Button from '../components/UI/Button.jsx'
import TextInput from '../components/UI/TextInput.jsx'


function Registration() {
    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: ""
        
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData( (previtem) => ({...previtem, [e.target.name]: e.target.value}));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let newErrors = {};
        if (formData.password !== formData.confirm_password) newErrors.confirm_password = "Passwords does not match";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form Data Submitted:", formData);
            setFormData({
                fullname: "",
                username: "",
                email: "",
                phone: "",
                password: "",
                confirm_password: ""
            });
        }
    }

  return (
    <div className="flex min-h-screen flex-col justify-center px-4 py-3 sm:px-6 lg:px-8 bg-gray-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-7 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create a new Account</h2>
        </div>
        <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form onSubmit={handleSubmit} className=''>
                <TextInput 
                    label="Full Name"
                    type="text"
                    name="fullname"
                    width="w-full"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Enter your fullname"
                    required
                    error={errors.fullname}                
                />
                <TextInput
                    label="Username"
                    type="text"
                    name="username"
                    width="w-full"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    required
                    error={errors.username}
                />
                < TextInput
                    label="Email Address"
                    type="email"
                    name="email"
                    width="w-full"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    error={errors.email}
                />
                < TextInput
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    width="w-full"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    error={errors.phone}
                />
                < TextInput
                    label="Password"
                    type="password"
                    name="password"
                    width="w-full"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="*******"
                    required
                    error={errors.password}
                />
                < TextInput
                    label="Confirm Password"
                    type="password"
                    name="confirm_password"
                    width="w-full"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    placeholder="*******"
                    required
                    error={errors.confirm_password}
                />
                <div className='mt-4'>
                    <Button title="Create Account"
                    
                    className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-teal-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"/>
                </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Registration