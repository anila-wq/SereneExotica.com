import { useState } from 'react';
import { X } from 'lucide-react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; number: string; email: string }) => void | Promise<void>;
}

export default function ContactFormModal({ isOpen, onClose, onSubmit }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    number: '',
    email: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      number: '',
      email: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.number.trim()) {
      newErrors.number = 'Number is required';
    } else if (!/^\d{10}$/.test(formData.number.replace(/\s/g, ''))) {
      newErrors.number = 'Please enter a valid 10-digit number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.number && !newErrors.email;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      await onSubmit(formData);
      setFormData({ name: '', number: '', email: '' });
      setErrors({ name: '', number: '', email: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-8">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-[#0b2c24] mb-2">Get in Touch</h2>
            <p className="text-gray-600 text-sm">Fill in your details and we'll contact you soon</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${
                  errors.number ? 'border-red-500' : 'border-gray-300'
                } rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all`}
                placeholder="Enter your phone number"
              />
              {errors.number && <p className="mt-1 text-xs text-red-500">{errors.number}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#d4af37] hover:bg-[#c49d2f] text-[#0b2c24] font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
