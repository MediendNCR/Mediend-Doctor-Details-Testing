
export interface Hospital {
  id: string;
  name: string;
  hindiName?: string;
  address: string;
  mapLink: string;
  city: string;
  timings?: string;
  specialty?: string[];
  phone?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  groundingLinks?: { title: string; uri: string }[];
}

export enum City {
  ALL = 'All Cities',
  NOIDA = 'Noida',
  DELHI = 'Delhi',
  GURUGRAM = 'Gurugram',
  PUNE = 'Pune',
  MUMBAI = 'Mumbai',
  BENGALURU = 'Bengaluru',
  LUCKNOW = 'Lucknow',
  INDORE = 'Indore',
  NAGPUR = 'Nagpur',
  HYDERABAD = 'Hyderabad'
}
