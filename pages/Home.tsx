import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Timer, PoundSterling, ShieldCheck, ArrowRight, Car, Wrench, Search, RefreshCw } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/111/1920/1080" // Vintage car/garage vibe
            alt="Garage Workshop" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block bg-blue-600/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full mb-6 border border-blue-500/30">
              SERVING MANCHESTER & BAGULEY
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Affordable, Reliable <span className="text-blue-500">MOT Testing</span> in Baguley.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
              Fast appointments, honest results, and friendly service for local drivers who don’t want dealership prices. No hidden costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/25 text-center flex items-center justify-center gap-2">
                Book Your MOT Today <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg transition-all border border-white/10 text-center">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Local Drivers Choose Us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We keep things simple. No complex jargon, no sales pressure, just honest testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<PoundSterling className="text-blue-600" size={32} />}
              title="Budget-Friendly"
              description="Fair MOT rates with absolutely no upsell pressure. We only fix what needs fixing."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-blue-600" size={32} />}
              title="Local & Trusted"
              description="Serving Baguley, Wythenshawe, Brooklands & Timperley with pride."
            />
            <FeatureCard 
              icon={<Timer className="text-blue-600" size={32} />}
              title="Fast Service"
              description="Most MOTs are completed within 45–60 minutes while you wait."
            />
            <FeatureCard 
              icon={<CheckCircle2 className="text-blue-600" size={32} />}
              title="DVSA-Approved"
              description="Fully qualified professionals using the latest testing equipment."
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto max-w-6xl px-4">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
             <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Core Services</h2>
                <p className="text-slate-600">Everything you need to stay on the road legally.</p>
             </div>
             <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1 group">
               View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServicePreviewCard 
                title="Class 4 MOT" 
                icon={<Car size={24} />}
                items={["Cars & Taxis", "Small Vans", "Family SUVs", "Full Certification"]}
              />
              <ServicePreviewCard 
                title="Pre-MOT Inspection" 
                icon={<Search size={24} />}
                items={["Reduce Failure Risk", "Quick Check", "Peace of Mind", "Honest Advice"]}
              />
              <ServicePreviewCard 
                title="MOT Re-tests" 
                icon={<RefreshCw size={24} />}
                items={["Free/Discounted*", "Within 10 Working Days", "Clear Repairs List", "Fast Turnaround"]}
              />
              <ServicePreviewCard 
                title="Basic Repairs" 
                icon={<Wrench size={24} />}
                items={["Bulbs & Wipers", "Minor Fixes", "Diagnostics Support", "Partner Network"]}
              />
           </div>
        </div>
      </section>

      {/* Customer Promise */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Wrench size={400} />
        </div>
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">"We treat your car like a neighbour’s — honest, quick, and affordable."</h2>
          <p className="text-blue-100 text-lg mb-10">
            Straightforward reporting. We explain failures and advisories clearly, without the drama.
          </p>
          <Link to="/about" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors shadow-lg">
            Read Our Story
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
    <div className="mb-4 bg-white p-3 rounded-lg inline-block shadow-sm border border-slate-100">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const ServicePreviewCard: React.FC<{ title: string; icon: React.ReactNode; items: string[] }> = ({ title, icon, items }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 transition-colors group">
    <div className="flex items-center gap-3 mb-4">
      <div className="text-blue-600 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-bold text-lg text-slate-900">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
          <div className="w-1 h-1 bg-blue-400 rounded-full"></div> {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Home;