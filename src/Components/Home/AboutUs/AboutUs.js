import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className="container-lg">
                <div className="text-center aboutUs-headeline">
                    <h2>About Us</h2>
                </div>
                <div className="row">
                    <div className="col-md d-flex align-items-center">
                        <div>
                            <h3 className="about-title">I imagine</h3>
                            <p className="aboutDetails">I imagine is a web app development company, working together with businesses and individuals to deal with the complexity of web development & catered solutions with excellence.</p>
                        </div>
                    </div>
                    <div className="col-md text-center">
                        <img className="img-fluid" src="https://media.istockphoto.com/vectors/website-interface-development-concept-vector-illustration-vector-id1209986142?b=1&k=6&m=1209986142&s=170667a&w=0&h=kdaWJblTfrhC0pPXiljYe9_SAOgR6txiTWYEpmznVzU=" alt="about img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;