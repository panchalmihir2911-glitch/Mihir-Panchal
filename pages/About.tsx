import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-100 py-16">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About Baguley MOT Centre</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Your Local MOT Garage in Baguley. Built on community, trust, and fair pricing.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/id/442/800/600" // Garage/tools related
              alt="Mechanic working" 
              className="rounded-lg shadow-xl mb-6 md:mb-0"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Small Garage, Big Values</h2>
            <div className="prose prose-slate text-slate-600 space-y-4">
              <p>
                Baguley MOT Centre is a small, community-focused garage built on one simple idea: 
                <strong> quality MOT testing doesn’t need premium-garage pricing.</strong>
              </p>
              <p>
                For years, local drivers have chosen us because we keep things straightforward. 
                Whether you're preparing for an annual MOT or want a quick pre-check, we’re here to keep things easy.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <ValueItem 
                icon={<Users className="text-blue-500" />}
                title="Friendly & Approachable"
                text="You don’t need car knowledge — we explain everything simply."
              />
              <ValueItem 
                icon={<Award className="text-blue-500" />}
                title="Fairly Priced"
                text="We keep costs low without cutting corners. No sales games."
              />
              <ValueItem 
                icon={<Heart className="text-blue-500" />}
                title="Reliable"
                text="Drivers come back because we deliver exactly what we promise."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ValueItem: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
    <div className="shrink-0 mt-1">{icon}</div>
    <div>
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 mt-1">{text}</p>
    </div>
  </div>
);

export default About;