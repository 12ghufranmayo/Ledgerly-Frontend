// AddClientForm.jsx
import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { BsCreditCard2Back } from "react-icons/bs"
import Button from '../../components/UI/Button';

const AddClient = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    clientCode: '',
    clientName: '',
    clientType: 'Company',
    primaryPhone: '',
    email: '',
    billingStreet: '',
    billingCity: '',
    defaultPaymentTerms: 'Net 30 days',
    defaultCurrency: 'PKR',
    status: 'Active'
  });

  const steps = [
    { id: 1, title: 'Basic Info', icon: FaRegUser },
    { id: 2, title: 'Contact', icon: MdPhoneInTalk },
    { id: 3, title: 'Financial', icon: BsCreditCard2Back }
  ];


  const handleInputChange = (name, value) => {
    // setFormData(prev => ({ ...prev, [name]: value }));
  };

  const FormField = ({ label, name, type = 'text', required = false, options = [], placeholder }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === 'select' ? (
        <select
          value={formData[name] || ''}
          onChange={(e) => handleInputChange(name, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required={required}
        >
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          // value={formData[name] || ''}
          onChange={(e) => handleInputChange(name, e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required={required}
        />
      )}
    </div>
  );

  const BasicInfoStep = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Client Code" name="clientCode" placeholder="CLI-001" required />
        <FormField 
          label="Client Type" 
          name="clientType" 
          type="select" 
          options={['Company', 'Individual', 'Partnership']} 
          required 
        />
      </div>
      <FormField label="Client Name" name="clientName" placeholder="Company Name" required />
    </div>
  );

  const ContactStep = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Phone" name="primaryPhone" type="tel" placeholder="+92 300 1234567" required />
        <FormField label="Email" name="email" type="email" placeholder="contact@company.com" required />
      </div>
      <FormField label="Address" name="billingStreet" placeholder="Street Address" required />
      <FormField label="City" name="billingCity" placeholder="City" required />
    </div>
  );

  const FinancialStep = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField 
          label="Payment Terms" 
          name="defaultPaymentTerms" 
          type="select" 
          options={['Net 15 days', 'Net 30 days', 'Net 45 days', 'Cash on Delivery']} 
          required 
        />
        <FormField 
          label="Currency" 
          name="defaultCurrency" 
          type="select" 
          options={['PKR', 'USD', 'EUR']} 
          required 
        />
      </div>
      <FormField 
        label="Status" 
        name="status" 
        type="select" 
        options={['Active', 'Inactive']} 
        required 
      />
    </div>
  );

  const renderStepContent = () => {
    console.log(currentStep);
    
    switch (currentStep) {
      case 1: return <BasicInfoStep />;
      case 2: return <ContactStep />;
      case 3: return <FinancialStep />;
      default: return <BasicInfoStep />;
    }
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    alert('Client saved successfully!');
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Add New Client</h1>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.id === currentStep ? 'bg-blue-600 text-white' : 
                  step.id < currentStep ? 'bg-green-600 text-white' : 'bg-gray-200'
                }`}>
                  <step.icon size={20} />
                </div>
                <span className="ml-2 hidden md:block">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Step {currentStep}: {steps[currentStep - 1].title}
          </h2>
          {renderStepContent()}
        </div>

        {/* Buttons */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-lg ${
                currentStep === 1 ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>
            
            {currentStep === steps.length ? (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-teal-500 text-slate-50 rounded-lg hover:bg-teal-600"
              >
                Save Client
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                className="px-6 py-2 bg-teal-500 text-slate-50 rounded-lg hover:bg-teal-600"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClient;