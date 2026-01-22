
import { Hospital, City } from './types';

export const HOSPITALS: Hospital[] = [
  {
    id: '1',
    name: 'Tewari Eye Centre',
    hindiName: 'तेवरी आई सेंटर',
    address: 'C2c, Block B, Sector 55, Noida, Uttar Pradesh 201307',
    mapLink: 'https://maps.app.goo.gl/PywQVffhxUpu3KW77',
    city: City.NOIDA,
    specialty: ['Opthalmology', 'Eye Care']
  },
  {
    id: '2',
    name: 'Sama Hospital',
    address: '8, Siri Fort Rd, Sector 3, Sadiq Nagar, New Delhi, Delhi 110049',
    mapLink: 'https://maps.app.goo.gl/fywtHnj1M1495bry7',
    city: City.DELHI,
    specialty: ['Multispeciality']
  },
  {
    id: '3',
    name: 'Motherland Hospital',
    address: 'NH-01, Amrapali Platinum, Sector 119, Noida, Uttar Pradesh 201305',
    mapLink: 'https://maps.app.goo.gl/63tBD8koMafGafez6',
    city: City.NOIDA,
    specialty: ['Maternity', 'Child Care']
  },
  {
    id: '4',
    name: 'Phoenix HealthCare',
    address: '378, Rani Bagh, Sainik Vihar, Pitampura, Delhi, 110034, India',
    mapLink: 'https://share.google/eAaOp4fP6tsiWmBht',
    city: City.DELHI,
    specialty: ['Multispeciality']
  },
  {
    id: '5',
    name: 'MASSH - Minimal Access Smart Surgery Hospital',
    address: 'B-18, Nehru Place Flyover, Chirag Enclave, Nehru Place, New Delhi, Delhi 110048',
    mapLink: 'https://g.co/kgs/JGRJ3E3',
    city: City.DELHI,
    specialty: ['Surgery', 'Minimal Access']
  },
  {
    id: '6',
    name: 'Aashlok Hospital',
    hindiName: 'आश्लोक हॉस्पिटल',
    address: '25 A, Block A 1, Block AB, Safdarjung Enclave, New Delhi, Delhi 110029',
    mapLink: 'https://maps.app.goo.gl/JXbpyqJzUz9vJQ717',
    city: City.DELHI,
    specialty: ['Multispeciality']
  },
  {
    id: '7',
    name: 'Habilite Clinics',
    address: 'M 11, Road, Vinoba Puri, Block M, Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi 110024',
    mapLink: 'https://maps.app.goo.gl/996kTkentPASP3ZUA',
    city: City.DELHI,
    specialty: ['Clinics', 'Consultation']
  },
  {
    id: '8',
    name: 'Medharbour Multispeciality Hospital',
    address: 'Plot No 222, opposite Amity International School, Sector 51, Gurugram, Haryana 122018',
    mapLink: 'https://maps.app.goo.gl/KfNQp2H9ErF4hteG8',
    city: City.GURUGRAM,
    specialty: ['Multispeciality']
  },
  {
    id: '9',
    name: 'WFY Plastic Surgery Clinic',
    address: 'First Floor, Plot No. 372, near Artemis Hospital Road, Wazirabad, Sector 52, Gurugram, Haryana 122003',
    mapLink: 'https://maps.app.goo.gl/kY12D9f1o8SSHEwR6',
    city: City.GURUGRAM,
    specialty: ['Plastic Surgery', 'Aesthetics']
  },
  {
    id: '10',
    name: 'Sant Paramanand Hospital',
    hindiName: 'संत परमानंद हॉस्पिटल',
    address: '2 & 3, Park Area Yamuna Bazar, Plot No 1, Ring Rd, Kashmere Gate, New Delhi, Delhi, 110006',
    mapLink: 'https://maps.app.goo.gl/ba5tz73zDsZrapG58',
    city: City.DELHI,
    timings: '7.00 PM - 9.00 PM Daily',
    specialty: ['Multispeciality']
  },
  {
    id: '11',
    name: 'AKS Asthetics',
    address: 'Shop No-T09, 3rd floor, Ats Dolce, Zeta I, Greater Noida, UP 201310',
    mapLink: 'https://maps.app.goo.gl/TpikthbxkMq7QgE37',
    city: City.NOIDA,
    specialty: ['Aesthetics']
  },
  {
    id: '12',
    name: 'Bliniq Cosmetic Surgery Centre',
    address: 'Plot no. 24 A-1 Block Qutub Vihar Phase 1, near Dwarka, Sector 19B, Delhi 110071',
    mapLink: 'https://goo.gl/maps/KaL81t6qNjwAsDfj6',
    city: City.DELHI,
    specialty: ['Cosmetic Surgery']
  },
  {
    id: '13',
    name: 'Rivaya Aesthetic & Plastic Surgery Clinic',
    address: '1st floor, 266, C4E, Janakpuri, New Delhi, Delhi 110058',
    mapLink: 'https://maps.app.goo.gl/g3wz8Ldjpq9aRqy38',
    city: City.DELHI,
    specialty: ['Plastic Surgery']
  },
  {
    id: '14',
    name: 'Dr Anubhav Sangwan (Apollo Miracles)',
    address: 'SCO 1 and 2, Room no.1, 1st floor, Sector 14, Gurugram, Haryana 122001',
    mapLink: 'https://maps.app.goo.gl/Hvpsqf8cmEvNEvZi9',
    city: City.GURUGRAM,
    specialty: ['Specialist']
  },
  {
    id: '15',
    name: 'DR AKASH DUA',
    hindiName: 'डॉ आकाश दुआ',
    address: 'Plot No 25, Upper Ground Floor, Pocket 17, Sector-24, Rohini, Delhi 110085',
    mapLink: 'https://maps.app.goo.gl/8PEQpyo7DohAosULA',
    city: City.DELHI,
    specialty: ['Specialist']
  },
  {
    id: '16',
    name: 'Med Esthetiks',
    address: 'C203, Greater Kailash-1, M Block, New Delhi, Delhi 110048',
    mapLink: 'https://maps.app.goo.gl/Rx2B9W95khV6XRms5',
    city: City.DELHI,
    specialty: ['Aesthetics']
  },
  {
    id: '17',
    name: 'Wanshika Hospital',
    hindiName: 'वंशिका हॉस्पिटल',
    address: 'B4/44, Safdarjung Enclave, New Delhi, Delhi 110029',
    mapLink: 'https://maps.app.goo.gl/F7d3baM2888rMRVD8',
    city: City.DELHI,
    specialty: ['Multispeciality']
  },
  {
    id: '18',
    name: 'Healing Hands Clinic',
    address: '1st floor, Crystal empire building, Lane 2, Baner, Pune 411045',
    mapLink: 'https://maps.app.goo.gl/ANQyE8Lt55tubkYq9',
    city: City.PUNE,
    specialty: ['Laser Surgery', 'Proctology']
  },
  {
    id: '19',
    name: 'Dr Abhinav Kesarwani (Karnika Polyclinic)',
    address: 'Morewadi, Pimpri Colony, Pimpri-Chinchwad, Pune 411018',
    mapLink: 'https://maps.app.goo.gl/2UfD7Z3yFaULMS3o8',
    city: City.PUNE,
    specialty: ['Specialist']
  },
  {
    id: '20',
    name: 'Oxycare Superspeciality Hospital',
    hindiName: 'ऑक्सीकेयर सुपरस्पेशालिटी हॉस्पिटल',
    address: 'Walhekarwadi, Pimpri-chinchwad, Pune 411033',
    mapLink: 'https://maps.app.goo.gl/1frbLHtXcfJEq8Xb7',
    city: City.PUNE,
    specialty: ['Superspeciality']
  },
  {
    id: '21',
    name: 'D.Y Patil Hospital',
    address: 'Sant Tukaram Nagar, Pimpri Colony, Pune 411018',
    mapLink: 'https://maps.app.goo.gl/Scb8bx6vBmfFz8LQ7',
    city: City.PUNE,
    specialty: ['University Hospital', 'Multispeciality']
  },
  {
    id: '22',
    name: 'Dr Harshwardhan Oak',
    address: 'Thergaon, Pimpri-Chinchwad, Maharashtra 411033',
    mapLink: 'https://maps.app.goo.gl/puRhmFzauXUv3T1Z8',
    city: City.PUNE,
    specialty: ['Specialist']
  },
  {
    id: '23',
    name: 'Health Square',
    address: 'Vitthal Heights, Kharadi - Hadapsar Bypass Rd, Pune 411014',
    mapLink: 'https://maps.app.goo.gl/nzpSc4h37J3r2LWB7',
    city: City.PUNE,
    specialty: ['Diagnostic']
  },
  {
    id: '24',
    name: 'Plastic & Hand Surgery Clinic',
    address: 'Malwadi, Hadapsar, Pune, Maharashtra 411028',
    mapLink: 'https://maps.app.goo.gl/gk5xXbGANTx2dAer9',
    city: City.PUNE,
    specialty: ['Plastic Surgery', 'Hand Surgery']
  },
  {
    id: '25',
    name: 'ONP Hospital',
    address: '1671-75, Ganeshkhind Rd, Shivajinagar, Pune 411016',
    mapLink: 'https://maps.app.goo.gl/FoP3QUvbni5ZgxPcA',
    city: City.PUNE,
    specialty: ['Maternity', 'Gynaecology']
  },
  {
    id: '26',
    name: 'Mandapeshwar Nursing Home',
    address: 'Borivali West, Mumbai, Maharashtra 400092',
    mapLink: 'https://maps.app.goo.gl/16sUy5BHXMDHEkvb7',
    city: City.MUMBAI,
    specialty: ['Nursing Home']
  },
  {
    id: '27',
    name: 'Dr. Vishal Diddi',
    address: 'Lokhandwala Complex, Andheri West, Mumbai 400053',
    mapLink: 'https://share.google/7ZJmKLdTODUxUuUAY',
    city: City.MUMBAI,
    specialty: ['Specialist']
  },
  {
    id: '28',
    name: 'Dr Vicky Jain (Malad)',
    address: 'Corporate Corner, Sunder Nagar, Malad West, Mumbai 400064',
    mapLink: 'https://maps.app.goo.gl/ep6kGfWpxSJEpqED6',
    city: City.MUMBAI,
    specialty: ['Specialist']
  },
  {
    id: '29',
    name: 'Zenil Asthetics',
    address: '508, LBS Marg, Ghatkopar West, Mumbai 400086',
    mapLink: 'https://maps.app.goo.gl/BucFnaPHHCkCdueT8',
    city: City.MUMBAI,
    specialty: ['Aesthetics']
  },
  {
    id: '30',
    name: 'Vighnaharta Multispeciality Hospital',
    hindiName: 'विघ्नहर्ता मल्टीस्पेशलिटी हॉस्पिटल',
    address: 'Durga Nagar, Kalyan West, Maharashtra 421301',
    mapLink: 'https://maps.app.goo.gl/oW1c1q5CDQQegCg4A',
    city: City.MUMBAI,
    specialty: ['Multispeciality']
  },
  {
    id: '31',
    name: 'NewEra Hospital',
    address: 'Sector 7, Vashi, Navi Mumbai, Maharashtra 400703',
    mapLink: 'https://maps.app.goo.gl/WgwHo77pv8W1D9T26',
    city: City.MUMBAI,
    specialty: ['Multispeciality']
  },
  {
    id: '32',
    name: 'Infinity Care Clinic',
    address: 'Plot no. 6, Sector 20, Kharghar, Navi Mumbai 410210',
    mapLink: 'https://maps.app.goo.gl/j1XcVUYUivzt644R9',
    city: City.MUMBAI,
    specialty: ['Clinics']
  },
  {
    id: '33',
    name: 'Global Piles Clinic',
    address: 'Rd No. 1, Chembur Gaothan, Mumbai 400071',
    mapLink: 'https://maps.app.goo.gl/iZZAycVSHkriZXZG9',
    city: City.MUMBAI,
    specialty: ['Piles Treatment']
  },
  {
    id: '34',
    name: 'Swayam Hospital',
    address: 'Pokharan Rd No. 2, Vasant Vihar, Thane 400610',
    mapLink: 'https://maps.app.goo.gl/G8jMoyjd9u2orJMQ7',
    city: City.MUMBAI,
    specialty: ['Multispeciality']
  },
  {
    id: '35',
    name: 'Life Care Annexe Hospital',
    address: 'Ghodbunder Rd, Manpada, Thane West 400607',
    mapLink: 'https://maps.app.goo.gl/QUMiTDNtPB5NT5bc9',
    city: City.MUMBAI,
    specialty: ['Multispeciality']
  },
  {
    id: '36',
    name: 'Hiranandani Hospital',
    address: 'Hillside Avenue, Powai, Mumbai 400076',
    mapLink: 'https://maps.app.goo.gl/YPpURF989UWd2dNr8',
    city: City.MUMBAI,
    specialty: ['Multispeciality', 'NABH Accredited']
  },
  {
    id: '37',
    name: 'Aarogya Hastha Hospitals',
    address: 'Kasavanahalli Main Rd, Bengaluru, Karnataka 560035',
    mapLink: 'https://maps.app.goo.gl/AbqDts6xdcGTWzzd8',
    city: City.BENGALURU,
    timings: '11:00 AM - 3:00 PM',
    specialty: ['Multispeciality']
  },
  {
    id: '38',
    name: 'UMC (United Medical Center)',
    address: '240, 27th Main Rd, HSR Layout, Bengaluru 560102',
    mapLink: 'https://maps.app.goo.gl/6mVuq5WaC2M9ym348',
    city: City.BENGALURU,
    timings: '4:00 PM - 5:00 PM',
    specialty: ['Medical Center']
  },
  {
    id: '39',
    name: 'Kanva Sri Sai Hospital',
    hindiName: 'ಕಣ್ವ ಶ್ರೀ ಸಾಯಿ ಆಸ್ಪತ್ರೆ',
    address: '227, Nandini Layout Main Rd, Bengaluru 560096',
    mapLink: 'https://maps.app.goo.gl/ioGWEh79DixQQyNS7',
    city: City.BENGALURU,
    specialty: ['Multispeciality']
  },
  {
    id: '40',
    name: 'Minnerva Superspeciality Hospital',
    hindiName: 'मिन्नेरवा सुपेर्स्पेसिअलिटी हॉस्पिटल',
    address: 'Viram Khand 5, Gomti Nagar, Lucknow, UP 216012',
    mapLink: 'https://maps.app.goo.gl/Ddnj5XcDnHs5uFtC6',
    city: City.LUCKNOW,
    specialty: ['Superspeciality']
  },
  {
    id: '41',
    name: 'Intimate Laser Clinic',
    address: 'LIG Link Rd, Shree Nagar Ext, Indore, MP 452011',
    mapLink: 'https://maps.app.goo.gl/jM7HfAs3kM8qJn676',
    city: City.INDORE,
    specialty: ['Laser Clinic']
  },
  {
    id: '42',
    name: 'Abhyudaya Piles Laser Hospital',
    hindiName: 'अभ्युदय हॉस्पिटल',
    address: 'Shatabdi Square, Badil Kheda, Nagpur, Maharashtra 440027',
    mapLink: 'https://maps.app.goo.gl/nUUH3zNV6BwjJG7H9',
    city: City.NAGPUR,
    specialty: ['Piles Treatment', 'Laser Surgery']
  },
  {
    id: '43',
    name: 'Dr. Ramesh Orthopaedic & Plastic Surgery Center',
    address: 'Ganesh Nagar Colony, Chengicherla, Secunderabad 500092',
    mapLink: 'https://maps.app.goo.gl/DCeZNT25PpwRjWad8',
    city: City.HYDERABAD,
    specialty: ['Orthopaedics', 'Plastic Surgery']
  }
];

export const CITIES = Object.values(City);
