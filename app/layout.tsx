import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from "@/components/Provider";
import Nav from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '1Community Global Business Link',
  description: "Welcome to our classified, Business Link and ads platform powered by Google Place/Business and facebook API! Our platform provides a seamless user experience with fast loading times and dynamic content rendering. Browse through a wide range of listings and find what you're looking for with ease. Our intuitive search and filter system ensures that you can quickly find the listings that match your needs. Whether you're looking to buy or sell, our platform offers a secure and reliable way to connect with potential buyers and sellers. Join our community today and start exploring the possibilities!",
}



const RootLayout = ({ children }) => (
<html>

  <body className={inter.className}>
 
  
      <Provider>
      <div> <Nav />
      <Header/>
      {children}
      <Footer />
      </div>
      </Provider>

    </body>
  </html>
);

export default RootLayout;