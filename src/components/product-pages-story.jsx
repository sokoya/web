import React from "react";

const ProductStories = () => {
    return (
        <div>
            <div className="homepage-story black-bg py_5">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <h5>Service You Can Rely On</h5>
                            <h2>Your Experience, Our Priority: Reliability and Support You Can Trust</h2>
                            <p>Our service is built on reliability and efficiency. We know how important it is for your financial transactions
                                to be smooth and stress-free. With advanced technology and a user-friendly interface, we ensure that your
                                transfers are secure and seamless every time.</p>
                            <p className="second">Security and support are just as important as speed. That's why our platform uses top-tier 
                                encryption, and our dedicated team is ready to assist you whenever needed. We’re here to make sure your 
                                experience is safe and worry-free, with help available whenever you need it.</p>
                            <div>
                                <ul className="break">
                                    <li>
                                        <h4>5mins</h4>
                                        <p>Support Response Time</p>
                                    </li>
                                    <li>
                                        <h4>98%</h4>
                                        <p className="no-margin">Transaction Success Rate</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="story-img"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductStories;