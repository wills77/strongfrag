export type ProductCategory = 'homme' | 'femme' | 'huile';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  notes: {
    head: string[];
    heart: string[];
    base: string[];
  };
  duration: string; // duration of sillage (e.g. "12h+", "24h")
  composition?: string; // especially for oils
  benefits?: string[]; // especially for oils
  usage?: string; // usage tips
  image: string;
  price: string;
  rating: number;
  isNew?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  favoriteFragrance: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
