
import React from 'react';
import { Hospital } from '../types';

interface HospitalCardProps {
  hospital: Hospital;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 mb-2">
              {hospital.city}
            </span>
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
              {hospital.name}
            </h3>
            {hospital.hindiName && (
              <p className="text-sm text-slate-500 font-medium mt-1">{hospital.hindiName}</p>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start text-slate-600">
            <svg className="w-5 h-5 mr-2 mt-0.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm leading-relaxed">{hospital.address}</p>
          </div>

          {hospital.timings && (
            <div className="flex items-center text-slate-600">
              <svg className="w-5 h-5 mr-2 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-medium">{hospital.timings}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {hospital.specialty?.map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-50">
          <a
            href={hospital.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            View on Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
