// src/app/layout.js

import { JetBrains_Mono } from 'next/font/google'; // Import the font
import './globals.css';

// Configure the font
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you'll use
  variable: '--font-jetbrains-mono' // Optional: for use with Tailwind
});

export const metadata = {
  title: "Syed Taher | Data Engineer Portfolio",
  description: "Interactive portfolio of Syed Taher, a Data Engineer specializing in scalable data pipelines, cloud architecture, and ETL processes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply the font's class name to the body */}
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  );
}
