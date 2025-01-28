import { Poppins,  Open_Sans} from "next/font/google"

export const OpenSans = Open_Sans({
  subsets: ['latin'],
  weight: ['700'], 
  style: ['normal', 'italic'], 
});

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400'], 
    style: ['normal', 'italic'], 
  });
