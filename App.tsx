
import React, { useState, useMemo } from 'react';
import { HOSPITALS, CITIES } from './constants';
import { City } from './types';
import HospitalCard from './components/HospitalCard';
import AssistantPanel from './components/AssistantPanel';

const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City>(City.ALL);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAssistant, setShowAssistant] = useState(false);

  const filteredHospitals = useMemo(() => {
    return HOSPITALS.filter(h => {
      const matchesCity = selectedCity === City.ALL || h.city === selectedCity;
      const matchesSearch = h.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            h.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            h.specialty?.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCity && matchesSearch;
    });
  }, [selectedCity, searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200 mr-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-800 tracking-tight leading-none">HealPoint</h1>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">India Healthcare Directory</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setShowAssistant(!showAssistant)}
                className={`flex items-center px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  showAssistant 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                AI Assistant
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className={`flex-1 transition-all duration-500 ${showAssistant ? 'lg:w-2/3' : 'w-full'}`}>
            {/* Search and Filters */}
            <div className="mb-10 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Search Facilities</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Name, address, or specialty..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                    />
                    <svg className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Filter by City</label>
                  <div className="flex flex-wrap gap-2">
                    {CITIES.map(city => (
                      <button
                        key={city}
                        onClick={() => setSelectedCity(city)}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                          selectedCity === city 
                            ? 'bg-slate-800 text-white shadow-md' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">
                {filteredHospitals.length} Centers Found
                {selectedCity !== City.ALL && <span className="text-blue-600 ml-2">in {selectedCity}</span>}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredHospitals.length > 0 ? (
                filteredHospitals.map(hospital => (
                  <HospitalCard key={hospital.id} hospital={hospital} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200">
                  <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">No results found</h3>
                  <p className="text-slate-500">Try adjusting your search or filters.</p>
                  <button 
                    onClick={() => {setSearchTerm(''); setSelectedCity(City.ALL);}}
                    className="mt-6 text-blue-600 font-bold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Assistant Sidebar */}
          {showAssistant && (
            <div className="lg:w-1/3 animate-in fade-in slide-in-from-right duration-500">
              <div className="sticky top-28">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-800">Smart Search</h2>
                  <button onClick={() => setShowAssistant(false)} className="lg:hidden text-slate-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <AssistantPanel />
                <div className="mt-4 p-4 bg-yellow-50 rounded-2xl border border-yellow-100">
                  <p className="text-xs text-yellow-800 font-medium flex items-start">
                    <svg className="w-4 h-4 mr-2 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    The AI Assistant uses real-time Google Maps grounding to find facilities not listed in our main directory.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Mobile Assistant Toggle */}
      <div className="fixed bottom-6 right-6 lg:hidden z-50">
        <button
          onClick={() => setShowAssistant(!showAssistant)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl shadow-blue-300 hover:scale-110 active:scale-95 transition-all"
        >
          {showAssistant ? (
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )}
        </button>
      </div>

      <footer className="bg-slate-800 text-slate-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-600 p-1.5 rounded-lg mr-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl">HealPoint India</span>
          </div>
          <p className="max-w-md mx-auto text-sm leading-relaxed mb-8">
            Connecting you to quality healthcare across major Indian cities. Always consult with a professional for medical emergencies.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="mt-8 text-xs border-t border-slate-700 pt-8 uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} HealPoint. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
