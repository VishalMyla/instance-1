import React from 'react'
import Patch01 from '../components/Landgin01'
import Patch02 from '../components/Landing02'
import Cards from '../components/Card'
import Footer from '../components/Footer'
import Services from '../components/Landin/Services'
import CustomerReviews from '../components/Landin/CustomerReview'
import './home.css'
function Home() {
  return (
    <div >
     
      <Patch01/>
      <Cards/>
      <section className='padding-x py-10'>
      <Services />
    </section>
    <section className='bg-pale-blue padding'>
    <CustomerReviews />
  </section>
      <Footer style={{
        width:'100vw',
        padding:'0'
      }}/>
    </div>
  )
}

export default Home