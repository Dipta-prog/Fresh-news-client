import React from 'react';

const SlideBusinessInfo = () => {
    return (
        <div className="container mt-5">
            <div className="section-header">
                <h2>We Make Your Device Repair <br /> <span className="text-success"> Stress free!</span></h2>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://image.freepik.com/free-photo/closeup-fixing-disassembled-laptop_1098-14875.jpg" alt="First slide" />

                        <div class="carousel-caption d-none d-md-block" style={{ color: 'black' }}>
                            <h5>PROFESSIONAL SERVICE</h5>
                            <p>We repair your device with great care</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://image.freepik.com/free-photo/technician-repairing-computer-computer-hardware-repairing-upgrade-technology_1150-8859.jpg" alt="Second slide" />

                        <div class="carousel-caption d-none d-md-block" style={{ color: '' }}>
                            <h4>FASTER SERVICE</h4>
                            <p>We Can Fix it Almost As Fast As You Can Break It</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://image.freepik.com/free-photo/technician-wearing-white-antistatic-gloves-plaid-shirt-sitting-his-desk-using-precision-screwdriver-remove-screws-back-faulty-mobile-phone_343059-487.jpg" alt="Third slide" />

                        <div class="carousel-caption d-none d-md-block" style={{ color: 'white' }}>
                            <h4>RELIABLE SERVICE</h4>
                            <p>Your device in safe hands with Our Professional Repair Technicians</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default SlideBusinessInfo;