import Header from '@/app/Components/header'
import './globals.css'
import Providers from "./Providers";
import Navbar from './Components/Navbar';



export const metadata = {
  title: 'IMDb Clone Project',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>

          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />
         

          {/* SearchBox */}

         

          {children}
        </Providers>
      </body>
    </html>
  );
}
