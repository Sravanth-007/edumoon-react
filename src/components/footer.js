import React, { Component } from 'react'



export default class Footer extends Component {
    render() {
        return (
         <div>


<footer className="footer-area">
                <div className="footer-wave-box">
                    <div className="footer-wave footer-animation"></div>
                </div>
                <div className="main">
                    <div className="footer">
                        <div className="single-footer">
                            <h4>about us</h4>
                            <p>Edumoon provides one step solution to students.</p>
                            <div className="footer-social">
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="single-footer">
                            <h4>main menu</h4>
                            <ul>
                                <li><a href=""><i className="fas fa-chevron-right"></i> home</a></li>
                                <li><a href=""><i className="fas fa-chevron-right"></i> about us</a></li>
                                <li><a href=""><i className="fas fa-chevron-right"></i> courses</a></li>
                                <li><a href=""><i className="fas fa-chevron-right"></i> events</a></li>
                                <li><a href=""><i className="fas fa-chevron-right"></i> blog</a></li>
                            </ul>
                        </div>
                        <div className="single-footer">
                            <h4>quick links</h4>
                            <ul>
                                <li><a href=""><i className="fas fa-chevron-right"></i> privacy policy</a></li>
                                <li><a href=""><i className="fas fa-chevron-right"></i> terms & conditions</a></li>
                                <li><a href=""><i className="fas fa-chevron-right"></i> disclaimer</a></li>
                            </ul>
                        </div>
                        <div className="single-footer">
                            <h4>contact us</h4>
                            <ul>
                                <li><a href=""><i className="fas fa-map-marker-alt"></i> ANDHRA UNIVERSITY, maddilipalem, India</a></li>
                                <li><a href=""><i className="fas fa-mobile-alt"></i> +88 0123 456 789</a></li>
                                <li><a href=""><i className="far fa-envelope"></i> edumoon@gmail.com</a></li>
                                <li><a href=""><i className="fas fa-globe-europe"></i> www.edumoon.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copy">
                        <p>&copy; 2020 all rights reserved</p>
                    </div>
                </div>
            </footer>

         </div>
        );
    }
}
