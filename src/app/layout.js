import Footer from './component/footer/page'
import Navbar from './component/navbar/page'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'khatashop',
  description: 'khatashop, customer, customer detail, shop,shopdetail',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
    
      <body className={inter.className} style={{ maxHeight:"100vh"}}>
       <Navbar></Navbar>
      {children}</body>

      <footer style={{marginBottom:"0px",marginTop:"21rem"}}><Footer ></Footer></footer>

    </html>
  )
}
