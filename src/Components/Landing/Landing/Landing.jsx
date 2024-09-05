// import React, { useState } from 'react'
// import LandingNav from '../Landing-Nav/LandingNav';
// import './landing.css'
// import companyimg from '../../Assets/my-yathra/WhatsApp Image 2024-09-04 at 4.26.16 PM.jpeg'


// function Landing() {

//     return (
//         <div className='landing-page'>
//             <LandingNav />

//             <div class="scrolling-text-container">
//                 <div class="scrolling-text"> Welcome To My Yathra</div>
//             </div>

//             <div className='TripDetails'>

//                 <div className='CompamyMainImg'>
//                     <img src={companyimg} alt="" />
//                 </div>

//                 <div className='package-1'>
//                     <div className='package-img-details'>
//                         <p>amazing kashmeer</p>
//                         <img src={companyimg} alt="" />
//                         <div>
//                             <p>its include</p>
//                             <li>trin tickt</li>
//                             <li>3 time food</li>
//                         </div>
//                     </div>
//                     <div className='package-img-details'>
//                         <p>amazing kashmeer</p>
//                         <img src={companyimg} alt="" />
//                         <div>
//                             <p>its include</p>
//                             <li>trin tickt</li>
//                             <li>3 time food</li>
//                         </div>
//                     </div>
//                     <div className='package-img-details'>
//                         <p>amazing kashmeer</p>
//                         <img src={companyimg} alt="" />
//                         <div>
//                             <p>its include</p>
//                             <li>trin tickt</li>
//                             <li>3 time food</li>
//                         </div>
//                     </div>
//                     <div className='package-img-details'>
//                         <p>amazing kashmeer</p>
//                         <img src={companyimg} alt="" />
//                         <div>
//                             <p>its include</p>
//                             <li>trin tickt</li>
//                             <li>3 time food</li>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Landing

import React from 'react';
import LandingNav from '../Landing-Nav/LandingNav';
import './landing.css';
import companyimg from '../../Assets/my-yathra/WhatsApp Image 2024-09-04 at 4.26.16 PM.jpeg';

function Landing() {
    return (
        <div className='landing-page'>
            <LandingNav />

            <div className="scrolling-text-container">
                <div className="scrolling-text">Welcome To My Yathra</div>
            </div>

            <div className='TripDetails'>
                <div className='CompanyMainImg'>
                    <img src={companyimg} alt="Company" />
                </div>

                <div className='package-list'>
                    <div className='package-item'>
                        <p>Amazing Kashmir</p>
                        <img src={companyimg} alt="Kashmir" />
                    
                        <div><button type="button" className='button_04'  ><strong>4N/5D</strong></button> </div>
                        <div>
                            <p>It includes:</p>
                            <ul>
                                <li>Train ticket</li>
                                <li>3-time food</li>
                            </ul>
                        </div>
                    </div>
                    <div className='package-item'>
                        <p>Amazing Kashmir</p>
                        <img src={companyimg} alt="Kashmir" />
                        <div><strong>4N/5D</strong></div>

                        <div>
                            <p>It includes:</p>
                            <ul>
                                <li>Train ticket</li>
                                <li>3-time food</li>
                            </ul>
                        </div>
                    </div>
                    <div className='package-item'>
                        <p>Amazing Kashmir</p>
                        <img src={companyimg} alt="Kashmir" />
                        <div><strong>4N/5D</strong></div>

                        <div>
                            <p>It includes:</p>
                            <ul>
                                <li>Train ticket</li>
                                <li>3-time food</li>
                            </ul>
                        </div>
                    </div>
                    <div className='package-item'>
                        <p>Amazing Kashmir</p>
                        <img src={companyimg} alt="Kashmir" />
                        <div><strong>4N/5D</strong></div>

                        <div>
                            <p>It includes:</p>
                            <ul>
                                <li>Train ticket</li>
                                <li>3-time food</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
