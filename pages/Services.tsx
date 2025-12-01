import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-slate-300 text-lg">Comprehensive MOT and repair services for Manchester drivers.</p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 -mt-8">
        <div className="grid grid-cols-1 gap-8">
          
          {/* Main MOT Service */}
          <ServiceSection 
            title="Class 4 MOT Testing"
            subtitle="Our core specialty. Fast, fair, and DVSA-approved."
            image="https://picsum.photos/id/1071/800/400" // Car imagery
            features={[
              "Cars, Small Vans, Taxis, Family SUVs",
              "Full DVSA-standard inspection",
              "Printed MOT certificate included",
              "Clear explanation of failures/advisories"
            ]}
          >
            <p className="text-slate-600 mb-4">
              We carry out Class 4 MOTs with a focus on honesty and speed. 
              <strong> Why choose our MOT?</strong> Fast turnaround, honest evaluation, and budget pricing.
            </p>
          </ServiceSection>

          {/* Secondary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col">
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 font-bold text-xl">
                RT
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">MOT Re-tests</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                If your vehicle fails, we offer free or discounted re-tests (within DVSA rules).
                We’ll tell you exactly what needs fixing — no pushing unnecessary repair work.
              </p>
              <Link to="/contact" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1 mt-auto">
                Book Re-test <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col">
              <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 font-bold text-xl">
                PM
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Pre-MOT Check</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                A quick, low-cost pre-inspection to reduce chances of failure.
                Ideal for older cars or anyone who wants peace of mind before the official test.
              </p>
              <Link to="/contact" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1 mt-auto">
                Schedule Check <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col">
              <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6 font-bold text-xl">
                MR
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Minor Repairs</h3>
              <p className="text-slate-600 mb-4 flex-grow">
                We handle small repairs that help you pass: Bulbs, Wipers, Tyres, Brake checks, and minor mechanical fixes.
              </p>
              <p className="text-xs text-slate-500 mt-2">
                *For bigger repairs, we recommend trusted partners.
              </p>
              <Link to="/contact" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1 mt-auto pt-4">
                Enquire Now <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const ServiceSection: React.FC<{ 
  title: string; 
  subtitle: string; 
  image: string; 
  children: React.ReactNode; 
  features: string[] 
}> = ({ title, subtitle, image, children, features }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 flex flex-col md:flex-row">
    <div className="md:w-1/2 h-64 md:h-auto relative">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
      <div className="absolute bottom-4 left-4 text-white md:hidden">
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
    </div>
    <div className="p-8 md:w-1/2 flex flex-col justify-center">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{title}</h2>
      <p className="text-blue-600 font-medium mb-6">{subtitle}</p>
      <div className="mb-6 text-slate-600 leading-relaxed">
        {children}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-700">
            <Check className="text-green-500 shrink-0 mt-1" size={18} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
        Book This Service
      </Link>
    </div>
  </div>
);

export default Services;