import React, { useState } from 'react' 
import Button from '../components/UI/Button.jsx'
import TextInput from '../components/UI/TextInput.jsx'

function Login() {
    const [formData, setFormData] = useState({        
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let newErrors = {};
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form Data Submitted:", formData);
            setFormData({
                email: "",
                password: "",
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
            <h2 className="mt-7 text-center text-2xl/9 font-bold text-gray-900">Sign in to your account</h2>
        </div>
        <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form onSubmit={handleSubmit} className=''>
                < TextInput
                    label="Email Address"
                    type="email"
                    name="email"
                    width="w-full"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    error={errors.email}
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
                <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-teal-500 focus:ring-teal-600"
                        />
                        <label className="text-sm font-medium text-gray-900 ml-2" htmlFor="remember-me">Remember me</label>
                    </div>
                    <div className="text-sm leading-5"> 
                        <a href="#" className="text-sm font-semibold text-teal-500 hover:text-teal-600">Forgot your password?</a>
                    </div>
                </div>
                <div className='mt-4'>
                    <Button title="Sign In"
                    className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-teal-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"/>
                </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Login