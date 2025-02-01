import { DM_Sans,  Open_Sans, Nunito_Sans} from "next/font/google"

export const OpenSans = Open_Sans({
  subsets: ['latin'],
  weight: ['700'], 
  style: ['normal', 'italic'], 
});

export const dm_sans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '700', '800'], 
    style: ['normal', 'italic'], 
  });
export const nunito_sans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['400', '700', '800'], 
    style: ['normal', 'italic'], 
  });
