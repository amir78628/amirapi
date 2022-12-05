import React from 'react'
import img1 from '../../assets/Group 1.png'
import img2 from '../../assets/Group 2.png'
import img3 from '../../assets/Frame 19.png'
import img4 from '../../assets/Frame 39.png'
import img5 from '../../assets/Group 28.png'
import img6 from '../../assets/Group 29.png'
import img7 from '../../assets/Group 36.png'
import img9 from '../../assets/Group 40.png'
import img8 from '../../assets/rocket_launch.png'


import './Home.css'
const Home = () => {
    
    return (

        <>

            <section id="Home" className="">

                <div className="container section-padding">
                    <div className="row  justify-content-between align-items-center">
                        <div className="col-lg-6 " >
                            <h1 className='nvs'>PreneurBay</h1>
                            <h3 className='nvs1'>Live- Work -Explore -Connect</h3>
                            <h3 className='nvs2'>We are Building a place where people  <span className='styless'>Speak Business,</span> <br /> Live- Work Explore - Connect World In An Executive Way.</h3>
                        </div>
                        <div className="col-lg-6 " >
                            <h2 className='nvs3'>Are you a <span className='styles'>Solopreneur ?</span> </h2>
                            <p className='nvs4'>Willing to cross boundaries across world by creating impact <br /> through your ideas  !! <br /> You landed at the right space.👍</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="counter" className="section-padding" >
                <div className="overlay"></div>
                <div className="container child ms-5 mb-5">
                    <div className="row ">
                        <div className='pl pt-5'>
                            <h1 className='n1 text-center p-4'>PreneurBay</h1>
                            <p className='n2 text-center pt-5'>is a Liv-n Work space exclusive community giving you an all-around advantage of the pure business trips by sharing entrepreneurship cultural values within international cities connected through us. </p>
                        </div>

                    </div>
                </div>
            </section>

        
     <section id="counters" className=" d-flex align-items-center text-center mt-5 " >
        <div className="container border  p-4">
            <div className="row  ">
                <div className='col-lg-12'>
                <div className='nn'>
                <h1 className=''>PreneurBay</h1>
                <p className=''>is a Liv-n Work space exclusive community giving you an all-around advantage of the pure business trips by sharing entrepreneurship cultural values within international cities connected through us.
                
            </p>
            </div>
            </div>
                
            </div>

            <div className='line'></div>
        </div>
    </section>



    <section id="services" className="section-paddings">
        <div className="container up">
            <div className="row opo">
            <div className="col-lg-12 text-center" >
                    <div className="section-title">
                        <h1 className="display-4  styles">Our Bay Terminal</h1>
                    </div>
                    <div className="section-titles  d-flex align-items-center text-center mt-5">
                    <a href="#" class="btn btn-brand ms-lg-3">Aligarh-Hudson</a>
                    <a href="#" class="btns bts ms-lg-3">Agra-New York</a>
                    <a href="#" class="btns bts ms-lg-3">Lucknow</a>
                        
                    </div>
                </div>
            </div>
            </div>
    </section>

    <section id="mission" className="">
        <div className="container mar">
            <div className="row ">
             <div className='col-lg-4'>
                <div className='text'>
                    <h1 className='lives'>Live</h1>
                    <h2 className='par'>A stay where you feel energetic & motivated</h2>
                    <p className='pars'>We had build luxurious pleasant stay for our preneur’s to help them feel there true worth of being an executive and advocate of future economy so we always tries to give you best experiences ever of an executive class of living</p>
                </div>
                <div className='texts'>
                    <h1 className='lives'>Work</h1>
                    <h2 className='par'>An Office Where Great Minds Meet</h2>
                    <p className='pars'>We had build luxurious pleasant stay for our preneur’s to help them feel there true worth of being an executive and advocate of future economy so we always tries to give you best experiences ever of an executive class of living</p>
                </div>
                <div className='texts'>
                    <h1 className='lives'>Explore</h1>
                    <h2 className='par'>Preneur’s network- a community to engage  leaders</h2>
                    <p className='pars'>We had build luxurious pleasant stay for our preneur’s to help them feel there true worth of being an executive and advocate of future economy so we always tries to give you best experiences ever of an executive class of living</p>
                </div>
             </div>
            <div className='col-lg-4 col-sm-6 ms-5 ps-5'>
                
                    <div className='d-flex '>
                    <img src={img1}/>
                    
                    <div className='ms-5 ps-2'>
                    <img src={img2}/>
                    </div>
                    
                    </div>
                    <div className='mt-5'>
                        <h1 className='gest'>Gest checking</h1>
                    <img src={img3}/>
                    </div>
            </div>

           

            </div>
            </div>
    </section>
    

    <section id="vision" className=''>
        <div className='container-fluid k'>
            <div className='row '>
                <div className='col-lg-4'>
                    <img src={img4}/>
                </div>
                <div className='col-lg-8 '>
                    <h1 className='yy'>Build Great things @ Preneur Bay</h1>
                    <h3 className='yo'>Our Goal is to help early-stage business enthusiasts & professionals to ease business & leisure  making it a packed bleisure trip  through our bays to help them achieve the value of Live,Work,Explore at a single place.</h3>
            </div>
            </div>
        </div>

    </section>

    <section id='' className=''>
            <div className='container-fluid'>
                <div className='row'>
                    <img src={img5}  />
                </div>
            </div>
    </section>


    <section id='' className=''>
        <div className='container'>
            <div className='row pb-5 text-center'>
                <h1 className='styles klo'>How do we work?</h1>
            </div>

            <div className='row ps-5'>
                <div className='col-6'>
                <a href="#" class="btne btn-brands">PreneurBay’s Terminal</a>
                <h1 className='cont mt-5'>Connecting Cities <br/> Internationally</h1>
                </div>
                <div className='col-lg-6 pt-5 mt-5'>
                <p className=''>PreneurBay’s Terminal is a concept of connecting two individual cities together using our platform individuals from Bay’s Terminal can get to know more about each other leading to economic,educational and cultural growth between international cities.</p>
            </div>
            </div>

            <div className='row'>
                <div className='col-lg-6 p-5'>
                    <p className='lol justify-content-between align-items-center'>Our USP Is Connecting International Entrepreneurs and Professional Travelers with Local Entrepreneurs Community
                    Co-working space allows you to engage and build opportunities with co-workers and the international community
                    We are trying to build strong network of RnD to lead innovation creating bridge between corporates leaders and educational institutes
                    Our Modern Living Room Allows you to stay in peace on business travel
                    Our App Allows a more in-depth networking effect to explore more about our members and helps you connect with more people internationally
                    Gig on travel: it allows you to do gigs jobs posted by our members bringing your travel cost down
                    Attend Local and In House Events
                    Last but not least we know it costs you much in the early stage of business so we make our bay affordable to you as much as we can so we can leave good memories in your early preneurs life.</p>
                </div>
                <div className='col-lg-6 text-center p-4 mt-5'>
                    <div className='lp'>
                    <img src={img6}/>
                    </div>

                </div>
            </div>
            <div className='row text-center ols'>
                <div className=''>
                    <img className='pb-5' src={img7}/>
                </div>
            </div>
            <div className='row mis1 ml-5 '>
                <div className='col-lg-4'>
                <div className='pu '>
                   <img  className='m-5 kp' src={img8}/>
                </div>
                </div>
                <div className='col-lg-8 p-5'>
                        <h1 className='mis2'>Our mission</h1>
                        <p className='mis3'>We had an entrepreneurship mindset leveraging Business tourism in tier ,2,3 cities of India, by sharing cultural and economic bonding between the two international cities hubs for parallel growth.</p>
                </div>

           </div>

           <div className='row mist mt-5 ols1 '>
                <div className='col-lg-4'>
                <div className='pu1'>
                   <img  className='m-5 kp1' src={img8}/>
                </div>
                </div>
                <div className='col-lg-8 p-5 mt-5'>
                        <h1 className='mis2'>Our Vision</h1>
                        <p className='mis3'>We had an entrepreneurship mindset leveraging Business tourism in tier ,2,3 cities of India, by sharing cultural and economic bonding between the two international cities hubs for parallel growth.</p>
                </div>

           </div>
           
        </div>
        
    </section>

    <section id="" className="section-paddings">
        <div className='container'>
            <div className='row  justify-content-center'>
                <img className='pkm ' src={img9} />
            </div>
        </div>
    </section>



        </>
    )
}

export default Home