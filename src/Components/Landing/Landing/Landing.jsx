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

        <div id="domesticPackageCarousel" className="carousel carousel-dark slide " data-bs-ride="carousel">
          <h3>DEMOSTIC PACKAGES</h3>

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#domesticPackageCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#domesticPackageCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>

          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
              <div className="row">

                {/* Package 1 */}
                <div className="col-md-3 package-item">
                  <p>Amazing Kashmir</p>
                  <img src={companyimg} alt="Kashmir" />
                  <div><button type="button" className='button_04'><strong>4N/5D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Train ticket</li>
                      <li>3-time food</li>
                    </ul>
                  </div>
                </div>

                {/* Package 2 */}
                <div className="col-md-3 package-item">
                  <p>Exotic Manali</p>
                  <img src={companyimg} alt="Manali" />
                  <div><button type="button" className='button_04'><strong>5N/6D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Hotel stay</li>
                      <li>Breakfast & dinner</li>
                    </ul>
                  </div>
                </div>

                {/* Package 3 */}
                <div className="col-md-3 package-item">
                  <p>Beautiful Goa</p>
                  <img src={companyimg} alt="Goa" />
                  <div><button type="button" className='button_04'><strong>3N/4D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Airfare</li>
                      <li>Beach tour</li>
                    </ul>
                  </div>
                </div>

                {/* Package 4 */}
                <div className="col-md-3 package-item">
                  <p>Mesmerizing Kerala</p>
                  <img src={companyimg} alt="Kerala" />
                  <div><button type="button" className='button_04'><strong>6N/7D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Houseboat stay</li>
                      <li>Breakfast & dinner</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Slide */}
            <div className="carousel-item">
              <div className="row">
                {/* Package 5 */}
                <div className="col-md-3 package-item">
                  <p>Majestic Delhi</p>
                  <img src={companyimg} alt="Delhi" />
                  <div><button type="button" className='button_04'><strong>5N/6D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Train ticket</li>
                      <li>Mountain tour</li>
                    </ul>
                  </div>
                </div>

                {/* Package 6 */}
                <div className="col-md-3 package-item">
                  <p>Majestic Delhi</p>
                  <img src={companyimg} alt="Delhi" />
                  <div><button type="button" className='button_04'><strong>5N/6D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Train ticket</li>
                      <li>Mountain tour</li>
                    </ul>
                  </div>
                </div>
                {/* Package 7 */}
                <div className="col-md-3 package-item">
                  <p>Majestic Delhi</p>
                  <img src={companyimg} alt="Delhi" />
                  <div><button type="button" className='button_04'><strong>5N/6D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Train ticket</li>
                      <li>Mountain tour</li>
                    </ul>
                  </div>
                </div>

                {/* Package 8 */}
                <div className="col-md-3 package-item">
                  <p>Majestic Delhi</p>
                  <img src={companyimg} alt="Delhi" />
                  <div><button type="button" className='button_04'><strong>5N/6D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Train ticket</li>
                      <li>Mountain tour</li>
                    </ul>
                  </div>
                </div>


                {/* More packages can be added here following the same structure */}
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#domesticPackageCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#domesticPackageCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div id="internationalPackageCarousel" className="carousel carousel-dark slide " data-bs-ride="carousel">
          <h3>INTERNATIONAL  PACKAGES</h3>

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#internationalPackageCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#internationalPackageCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>

          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
              <div className="row">
                {/* Package 1 */}
                <div className="col-md-3 package-item">
                  <p>Amazing Kashmir</p>
                  <img src={companyimg} alt="Kashmir" />
                  <div><button type="button" className='button_04'><strong>4N/5D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Train ticket</li>
                      <li>3-time food</li>
                    </ul>
                  </div>
                </div>

                {/* Package 2 */}
                <div className="col-md-3 package-item">
                  <p>Exotic Manali</p>
                  <img src={companyimg} alt="Manali" />
                  <div><button type="button" className='button_04'><strong>5N/6D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Hotel stay</li>
                      <li>Breakfast & dinner</li>
                    </ul>
                  </div>
                </div>

                {/* Package 3 */}
                <div className="col-md-3 package-item">
                  <p>Beautiful Goa</p>
                  <img src={companyimg} alt="Goa" />
                  <div><button type="button" className='button_04'><strong>3N/4D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Airfare</li>
                      <li>Beach tour</li>
                    </ul>
                  </div>
                </div>

                {/* Package 4 */}
                <div className="col-md-3 package-item">
                  <p>Mesmerizing Kerala</p>
                  <img src={companyimg} alt="Kerala" />
                  <div><button type="button" className='button_04'><strong>6N/7D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Houseboat stay</li>
                      <li>Breakfast & dinner</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Slide */}
            <div className="carousel-item">
              <div className="row">
                {/* Package 5 */}
                <div className="col-md-3 package-item">
                  <p>Majestic Delhi</p>
                  <img src={companyimg} alt="Delhi" />
                  <div><button type="button" className='button_04'><strong>5N/6D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Train ticket</li>
                      <li>Mountain tour</li>
                    </ul>
                  </div>
                </div>

                {/* Package 6 */}
                <div className="col-md-3 package-item">
                  <p>Majestic Delhi</p>
                  <img src={companyimg} alt="Delhi" />
                  <div><button type="button" className='button_04'><strong>5N/6D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Train ticket</li>
                      <li>Mountain tour</li>
                    </ul>
                  </div>
                </div>

                {/* Package 7 */}
                <div className="col-md-3 package-item">
                  <p>Majestic Delhi</p>
                  <img src={companyimg} alt="Delhi" />
                  <div><button type="button" className='button_04'><strong>5N/6D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Train ticket</li>
                      <li>Mountain tour</li>
                    </ul>
                  </div>
                </div>

                {/* Package 8 */}
                <div className="col-md-3 package-item">
                  <p>Majestic Delhi</p>
                  <img src={companyimg} alt="Delhi" />
                  <div><button type="button" className='button_04'><strong>5N/6D</strong></button></div>
                  <div>
                    <p>It includes:</p>
                    <ul>
                      <li>Train ticket</li>
                      <li>Mountain tour</li>
                    </ul>
                  </div>
                </div>

                {/* More packages can be added here following the same structure */}
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#internationalPackageCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#internationalPackageCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>

      <div className='bottomLanding'>
        <div className='bottomLanding-2'>
          <div className='first'>
            <div className='companydetails'>
              <h5><strong>CompanyName </strong></h5>
            </div>
            <p>
            </p>
          </div>
          <div className='Second'>
            <h5><strong>Address</strong> </h5>
            <div>my yathra</div>
            <p>ernakum</p>
          </div>
          <div className='Third'>
            <h5><strong>Contact</strong></h5>
            <div>
              <div>9756000700</div>
              <div>Email</div>
            </div>
          </div>
        </div>
        <div className='bottomLanding-1'>
          <img alt="linkedin" title='linkedin' />
          <img alt="website" title='website' />
        </div>
      </div>

    </div>
  );
}

export default Landing;


