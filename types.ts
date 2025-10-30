import React from 'react';

export interface Service {
  // Fix: The type for icon was too broad (`React.ReactNode`). By specifying it as a React.ReactElement
  // that can accept a `className`, we enable type-safe prop cloning and fix the error in `Services.tsx`.
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
}

export interface CoreValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}
