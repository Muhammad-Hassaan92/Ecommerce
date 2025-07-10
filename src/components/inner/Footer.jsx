import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid">
        <div className="container-fluid bg-dark rounded my-3 text-light p-0">
            <div className="row py-5 px-md-0 px-4">
                <div className="col-md-4 col-12">
                    <img className="img-fluid" src="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/4.png" alt=""></img>
                </div>
                <div className="col-md-4 col-12">
                    <p className="display-4">About Us</p>
                    <p className="text-secondary fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className="py-3 fs-3">
                        <i className="p-1 text-dark rounded-circle bg-secondary me-3 fa-brands fa-facebook"></i>
                        <i className="p-1 text-dark rounded-circle bg-secondary me-3 fa-brands fa-instagram"></i>
                        <i className="p-1 text-dark rounded-circle bg-secondary me-3 fa-brands fa-twitter"></i>
                        <i className="p-1 text-dark rounded-circle bg-secondary me-3 fa-brands fa-whatsapp"></i>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="my-3">
                        <p className="display-6">Get in Touch</p>
                        <div className="py-1 fs-4 text-secondary">
                            <i className="p-1 fas fa-user rounded me-3"></i>
                            John Doe
                        </div>
                        <div className="py-1 fs-4 text-secondary">
                            <i className="p-1 fas fa-map-marker-alt rounded me-3"></i>
                            Lorem Ipsum, Pakistan
                        </div>
                        <div className="py-1 fs-4 text-secondary">
                            <i className="p-1 fas fa-envelope rounded me-3"></i>
                            loremipsum@gmail.com
                        </div>
                        <div className="py-1 fs-4 text-secondary">
                            <i className="p-1 fas fa-globe rounded me-3"></i>
                            www.loremipsum.com
                        </div>
                    </div>
                    <div className="my-3">
                        <p className="display-6">Useful Links</p>
                        <div className="text-secondary fs-5 m-0 p-0">
                            <p className="m-0">About Us</p>
                            <p className="m-0">Lorem Ipsum</p>
                            <p className="m-0">Contact Us</p>
                            <p className="m-0">About Us</p>
                            <p className="m-0">Lorem Ipsum</p>
                            <p className="m-0">Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary py-4 fs-4 d-flex align-items-center justify-content-center text-dark" id="header">©
                2023 All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer