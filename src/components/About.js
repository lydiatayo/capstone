// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import arrow from './images/arrow.jpg';
import Footer from './Footer';
import vision from './images/vision.png'
import mission from './images/mission.png';
import trust from './images/trust.png';
import Navbar from './Navbar';


const About = () => {
  return (
    <div>
        <Navbar />
      {/* About Header */}


 <header class="py-5 my-5 bg-white">
                <div class="container px-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-xxl-6">
                            <div class="text-center my-5">
                                <h1 class="fw-bolder mb-3">Who we are.</h1>
                                <p class="lead fw-normal text-muted mb-4">Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone. Use our open source, free products, or support us by purchasing one of our premium products or services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mission */}

            <section class="py-5 bg-light">
                <div class="container px-5 my-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6"><img class="img-fluid rounded mb-5 mb-lg-0" src={mission} style={{width:'200px', height:'200px'}} alt="..." /></div>
                        <div class="col-lg-6">
                            <h2 class="fw-bolder">Mission</h2>
                            <p class="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision */}

            <section class="py-5">
                <div class="container px-5 my-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6 order-first order-lg-last"><img class="img-fluid rounded mb-5 mb-lg-0" src={vision} style={{width:'200px', height:'200px'}} alt="..." /></div>
                        <div class="col-lg-6">
                            <h2 class="fw-bolder">Vision</h2>
                            <p class="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why trust us */}

            <section class="py-5 bg-light">
                <div class="container px-5 my-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6"><img class="img-fluid rounded mb-5 mb-lg-0" src={trust} style={{width:'200px', height:'200px'}}alt="..." /></div>
                        <div class="col-lg-6">
                            <h2 class="fw-bolder">Why trust us?</h2>
                            <p class="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
    </div>
  )
}

export default About;