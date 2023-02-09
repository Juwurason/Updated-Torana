import React from 'react';
import { Link } from 'react-router-dom';

const HomeTwoSingleService = ({ icon, number, title, content, link }) => {
   return (
      <>
         <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service-box service-box-2 mb-30 pos-rel">
               <div className="service-thumb">
                  <img src={`img/services/service-icon-${icon}.png`} alt="" />
               </div>
               <div className="service-content service-content-2">
                  {/* <h6 className="green-color text-up-case letter-spacing mb-20">Older & Children</h6> */}
                  <h4><Link to={`${link}`}>{title}</Link></h4>
                  <p>{content}</p>
                  <Link className="service-link" to={`${link}`}><i className="fas fa-arrow-right"></i>Read More</Link>
               </div>
               <div className="service-number">
                  <h1 className="service-big-number">{`0${number}`}</h1>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleService;