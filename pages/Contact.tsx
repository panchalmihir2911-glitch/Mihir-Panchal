import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto max-w-6xl px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Book Your MOT</h1>
          <p className="text-slate-600">Give us a call or visit us in Baguley. We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Hours */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Details</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="text-slate-600">Baguley MOT Centre<br/>Baguley, Manchester<br/>(Exact address pending)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600 text-lg font-medium">0161 123 4567</p>
                    <p className="text-xs text-slate-400 mt-1">Call now to book</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">info@baguleymot.co.uk</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Clock className="text-blue-600" /> Opening Hours
              </h2>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-600">Monday - Saturday</span>
                  <span className="font-semibold text-slate-900">9:00 AM – 6:00 PM</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="text-slate-600">Sunday</span>
                  <span className="font-semibold text-red-500">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map & Mock Booking Form */}
          <div className="space-y-8">
            <div className="bg-slate-200 rounded-xl h-64 w-full flex items-center justify-center text-slate-500 overflow-hidden relative">
               {/* Simulated Map */}
               <img src="https://picsum.photos/id/10/800/400" className="w-full h-full object-cover opacity-50 grayscale" alt="Map Location" />
               <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                 <button className="bg-white text-slate-900 px-6 py-2 rounded-full shadow-lg font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
                   <MapPin size={18} className="text-red-500" /> View on Google Maps
                 </button>
               </div>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Request a Call Back</h2>
                <p className="mb-6 text-blue-100">Leave your details and we'll call you to confirm an appointment slot.</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-blue-700 border border-blue-500 placeholder-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-white" />
                        <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-blue-700 border border-blue-500 placeholder-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-white" />
                    </div>
                    <input type="text" placeholder="Vehicle Registration (Optional)" className="w-full px-4 py-3 rounded-lg bg-blue-700 border border-blue-500 placeholder-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-white" />
                    <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-slate-100 transition-colors">
                        Request Booking
                    </button>
                </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                <FaqItem question="Do you only do MOT testing?" answer="Yes, we specialize in MOTs and minor fixes to help you pass. We avoid unnecessary garage upsells." />
                <FaqItem question="How long does an MOT take?" answer="Usually 45–60 minutes. You can wait in our reception area or drop the car off." />
                <FaqItem question="Do you do same-day appointments?" answer="Yes, subject to availability. Please call us early in the day to check." />
                <FaqItem question="Do you offer pre-MOT checks?" answer="Yes, a quick inspection to help reduce failure chances, ideal for older vehicles." />
                <FaqItem question="What if my car fails?" answer="We offer free or low-cost re-tests depending on DVSA rules. We'll explain the failures clearly." />
            </div>
        </div>

      </div>
    </div>
  );
};

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
            >
                {question}
                {isOpen ? <ChevronUp size={20} className="text-blue-500" /> : <ChevronDown size={20} className="text-slate-400" />}
            </button>
            {isOpen && (
                <div className="p-4 pt-0 text-slate-600 border-t border-slate-50 bg-slate-50/50">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default Contact;