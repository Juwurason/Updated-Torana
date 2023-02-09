import React from 'react';
import { Link } from 'react-router-dom';
import HomeTwoSingleAppoinment from '../../../components/HomeTwoSingleAppoinment/HomeTwoSingleAppoinment';

const HomeTwoAppoinmentArea = () => {
   return (
      <>
         <section className="appoinment-area gray-bg pb-15">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="appoinment-box-2">
                        <div className="row no-gutters">
                           <div className="col-xl-8 col-lg-12">
                              <div className="appoinment-box-content">
                                 <div className="about-title mb-40">
                                    <h5 className="pink-color">Free Consultation</h5>
                                    <h1>Get An Appointment</h1>
                                 </div>
                                 <div className="row">

                                    <HomeTwoSingleAppoinment icon="3" name="Name" />
                                    <HomeTwoSingleAppoinment icon="4" name="Email" />

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                       <div className="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                                          <div className="appoint-ment-icon">
                                             <img src="img/icon/caregive-option-icon-2.png" alt="" />
                                          </div>
                                          <form className="appointment-form-2" action="#">
                                             <label htmlFor="input">select your services</label>
                                             <select name="lc" id="lc" className="postform">
                                                <option defaultValue="-1">Choose A Service</option>
                                                <option className="level-0"> Accommodation</option>
                                                <option className="level-0"> Assistive Support</option>
                                                <option className="level-0"> Household Task Support</option>
                                                <option className="level-0"> Social Services</option>
                                                <option className="level-0"> Therapeutic Support</option>
                                                <option className="level-0"> Community Nursing</option>
                                                <option className="level-0"> Complex Health Care</option>
                                                <option className="level-0"> Support Coordination</option>
                                                <option className="level-0">  Specialist Support</option>
                                             </select>
                                          </form>
                                       </div>
                                    </div>

                                    <HomeTwoSingleAppoinment icon="5" name="Phone" />

                                    <div className="col-xl-6 col-lg-12">
                                       <div className="appoint-button">
                                          <Link to="/contact" className="primary_btn green-bg-btn">Make Appointment</Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-4">
                              <div className="appoinment-right f-right">
                                 {/* <img src="img/appoinment/torana-white-pt2.png" width={'25%'} alt="" /> */}
                                 <img src="img/appoinment/torana-pink.png" alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoAppoinmentArea;