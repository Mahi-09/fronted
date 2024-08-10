import React from 'react'
import  aboutImg from '../images/about.png';

const Home = () => {
    return (
        <div>
         <section className='py-5 hero-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className='m-2 py-5'>
                            <h1  className='text-white primary-heading' >Don't forget to take your MEDS</h1>
                            <p className='text-white lead'>Medication Web App For Better and Healthy Society</p>
                            <a href='#' className='btn btn-outline-light px-5 py-2 text-btn rounded-pill my-3'>Know More</a>
                        </div>
                    </div>
                </div>
            </div>
         </section>
         {/* end of the hero section */}
           {/*end of the section */}
           <section className='py-5'>
            <div className='container'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                        <div className='my-2'>
                        <h1 className='secondary-heading text-primary text-start fw-bold' style={{fontSize:'3rem'}}>
                        Leading healthcare providers
                            </h1>
                            <p className='text-dark'>
                                <div className='py-1'>
                                Medication reminder APP provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
in the solutions we deliver
                                </div>
                            </p>
                            <div className='my-2'>
                                <a href='/sign-up' className='btn btn-primary px-4 py-2 rounded-pill border-0'>Register Now</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                        <div className='my-2'>
                            <img src='https://healthsolutions.fitbit.com/wp-content/uploads/hero-healthcare-providers-desktop-1.png' className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
         </section>
         {/* end of the section */}
        <section className='py-5 bg-light'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <div className='my-2'>
                            <h1 className='secondary-heading text-primary text-center fw-bold' style={{fontSize:'3rem'}}>
                            Virtual healthcare <br></br>
for you
                            </h1>
                            <p className='text-dark py-2 text-center'>
                            Medication reminder APP provides progressive, <br></br>and affordable 
healthcare, <br></br>accessible on mobile and online 
for everyone
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
       
         {/* end of the section*/}
      
     
        </div>
    )
}


export default Home;