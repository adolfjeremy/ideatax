const About = {
    async render() {
        return `
        <section id="aboutUsHeader" class="p-60">
            <div class="container">
                <div class="row d-flex flex-column-reverse flex-md-row text-center text-md-start">
                    <div class="col-12 col-md-7 d-flex flex-column justify-content-center">
                        <img src="images/about-us-header.jpg" class="w-100 custom-border-radius shadow" alt="">
                    </div>
                    <div class="col-12 col-md-5 d-flex flex-column justify-content-center mb-4 mb-lg-0">
                        <h1>We Are The Best Tax Consultant</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus pariatur quod quo rem beatae vero saepe sequi exercitationem, harum debitis.</p>
                        <div>
                            <a type="button" class="btn btn-warning btn-lg px-4 me-md-2 shadow">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="whyWorkWithUs" class="p-60">
            <div class="container">
                <div class="row d-flex flex-column-reverse flex-md-row text-center text-md-start">
                    <div class="col-12 col-md-5 d-flex flex-column justify-content-center">
                        <h2>Why work with us?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque doloremque maxime dolores ipsa fugiat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia porro illum dolores vel quidem quisquam dolorem fuga, eligendi assumenda rem.</p>
                    </div>
                    <div class="col-12 col-md-7 d-flex flex-column justify-content-center mb-4 mb-lg-0">
                        <img src="images/why-work-with-us-image.jpg" class="w-100 custom-border-radius-2 shadow" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section id="ourTeam" class="p-60">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2>Meet Our Team</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id molestiae sed. In similique ipsa tenetur ipsum. Possimus, itaque maxime.</p>
                    </div>
                </div>
                <div class="row p-md-5">
                    <div class="col-12 col-md-6 col-lg-3 p-4 shadow rounded-2">
                        <img class="profile-img rounded-2" src="images/women-2.jpg" alt="Celine Houston">
                        <h4>Celine Houston</h4>
                        <p>Managing Partner</p>
                        <div class="social mt-1">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="images/instagram.png" alt="Instagram">
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="images/twitter.png" alt="twitter">
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="images/linkedin.png" alt="linkedin">
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 p-4 shadow rounded-2">
                        <img class="profile-img rounded-2" src="images/man-2.jpg" alt="Steve Robinson">
                        <h4>Steve Robinson</h4>
                        <p>Partner</p>
                        <div class="social mt-1">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="images/instagram.png" alt="Instagram">
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="images/twitter.png" alt="twitter">
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="images/linkedin.png" alt="linkedin">
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 p-4 shadow rounded-2">
                        <img class="profile-img rounded-2" src="images/women-1.jpg" alt="Steve Robinson">
                        <h4>katy Williams</h4>
                        <p>Partner</p>
                        <div class="social mt-1">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="images/instagram.png" alt="Instagram">
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="images/twitter.png" alt="twitter">
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="images/linkedin.png" alt="linkedin">
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 p-4 shadow rounded-2">
                        <img class="profile-img rounded-2" src="images/man-1.jpg" alt="Steve Robinson">
                        <h4>Robert Johnson</h4>
                        <p>Partner</p>
                        <div class="social mt-1">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="images/instagram.png" alt="Instagram">
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="images/twitter.png" alt="twitter">
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="images/linkedin.png" alt="linkedin">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    },
};

export default About;