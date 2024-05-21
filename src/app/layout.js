import { Fira_Code } from 'next/font/google'
import './globals.css'

const fira = Fira_Code({
  variable: "--body-font",
  subsets: ['latin'],
});

// const ibm = IBM_Plex_Mono({
//   variable: "--body-font",
//   subsets: ['latin'],
//   weight: ['400'],
// });


export const metadata = {
  title: 'Mihir Seth',
  description: 'My Developer Portfolio',
  icons: {
    icon: "/public/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fira.variable}`}>
      
      <body className={fira.className} >
        <link rel="icon" href="public/favicon.ico" sizes="any" />

        {children}
      
      </body>
    </html>
  )
}
