import React, { useReducer, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Capstone from '../components/Capstone.css';
import Footer from './Footer';
import Navbar from './Navbar';



function Faq() {
  return (
    <div>
      <Navbar />

      {/* FAQ Content */}
      <section className="py-2 my-5">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h1 className="fw-bolder">Frequently Asked Questions</h1>
            <p className="lead fw-normal text-muted mb-0">How can we help you?</p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-xl-8">
              <div className="accordion mb-5" id="accordionExample">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How can I be certain of confidentiality when using  the platform?</button></h3>
                  <div className="accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit accumsan volutpat non quis. Non cursus diam ultrices a massa. Urna, et iaculis eleifend velit magna in. Diam habitant tortor viverra nunc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">In what capacity can one volunteer on the platform?</button></h3>
                  <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit accumsan volutpat non quis. Non cursus diam ultrices a massa. Urna, et iaculis eleifend velit magna in. Diam habitant tortor viverra nunc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">I’m outside Nigeria, can I report a case of abuse?</button></h3>
                  <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit accumsan volutpat non quis. Non cursus diam ultrices a massa. Urna, et iaculis eleifend velit magna in. Diam habitant tortor viverra nunc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Can victims of abuse be connected to support groups?</button></h3>
                  <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit accumsan volutpat non quis. Non cursus diam ultrices a massa. Urna, et iaculis eleifend velit magna in. Diam habitant tortor viverra nunc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How can I be certain of confidentiality when using  the platform</button></h3>
                  <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit accumsan volutpat non quis. Non cursus diam ultrices a massa. Urna, et iaculis eleifend velit magna in. Diam habitant tortor viverra nunc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How can I be certain of confidentiality when using  the platform</button></h3>
                  <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit accumsan volutpat non quis. Non cursus diam ultrices a massa. Urna, et iaculis eleifend velit magna in. Diam habitant tortor viverra nunc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How can I be certain of confidentiality when using  the platform</button></h3>
                  <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit accumsan volutpat non quis. Non cursus diam ultrices a massa. Urna, et iaculis eleifend velit magna in. Diam habitant tortor viverra nunc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How can I be certain of confidentiality when using  the platform</button></h3>
                  <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit accumsan volutpat non quis. Non cursus diam ultrices a massa. Urna, et iaculis eleifend velit magna in. Diam habitant tortor viverra nunc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How can I be certain of confidentiality when using  the platform</button></h3>
                  <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit accumsan volutpat non quis. Non cursus diam ultrices a massa. Urna, et iaculis eleifend velit magna in. Diam habitant tortor viverra nunc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How can I be certain of confidentiality when using  the platform</button></h3>
                  <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit accumsan volutpat non quis. Non cursus diam ultrices a massa. Urna, et iaculis eleifend velit magna in. Diam habitant tortor viverra nunc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How can I be certain of confidentiality when using  the platform</button></h3>
                  <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit accumsan volutpat non quis. Non cursus diam ultrices a massa. Urna, et iaculis eleifend velit magna in. Diam habitant tortor viverra nunc.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>





  );
}

export default Faq;
