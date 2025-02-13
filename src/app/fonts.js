import { DM_Sans, Nunito_Sans, Open_Sans, Bricolage_Grotesque} from "next/font/google"

export const dm_sans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '700', '800', "900"], 
    style: ['normal', 'italic'], 
    display: 'swap', 
  });
export const nunito_sans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['400', '700', '800'], 
    style: ['normal', 'italic'], 
    display: 'swap', 
  });
export const open_sans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '700', '800'], 
    style: ['normal', 'italic'],
    display: 'swap', 
  });

export const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});
