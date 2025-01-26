import {Merriweather, Poppins, Inter_Tight} from "next/font/google"

export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['900'], // Select weights as needed
  style: ['normal', 'italic'], // Optional styles
});

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400'], // Select weights as needed
    style: ['normal', 'italic'], // Optional styles
  });
export const inter = Inter_Tight({
    subsets: ['latin'],
    weight: ['400', "700"], // Select weights as needed
    style: ['normal', 'italic'], // Optional styles
  });