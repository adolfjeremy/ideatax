const Home = {
    async render() {
        return `
        <section class="hero">
        <div class="overlay"></div>
        <div class="cta text-start">
            <div class="container d-flex align-items-center">
                <div class="row">
                    <h1 class="display-6 fw-bold mb-3">Grow Up<br>Finance With<br>Expert Consultant</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit ducimus dolorum eaque veniam obcaecati officia sed necessitatibus reiciendis nihil!</p>
                    <div class="d-grid gap-3 d-md-flex justify-content-md-center justify-content-lg-start buttons">
                    <a type="button" class="btn btn-warning btn-lg px-4 me-md-2">Contact Us</a>
                    <a type="button" class="btn btn-outline-light btn-lg px-4">Our Services</a>
                    </div>
                </div>
            </div>                
        </div>
    </section>
    <section id="aboutUs" class="py-5 my-4">
      <div class="container">
        <div class="row py-2">
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
            <img src="images/team-photo.jpg" class="w-100 custom-border-radius shadow-lg" alt="Ideatax team">
          </div>
          <div class="col-12 col-md-6 p-4 text-start d-flex flex-column justify-content-center">
            <div class="row">
              <div class="col-12">
                <h2 class="mb-3">About Idea<strong>tax</strong></h2>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum accusamus possimus dicta quos vel earum blanditiis ex eligendi dolore.</p>
                <hr>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At aut et fuga repudiandae quod!</p>
                <div class="d-grid d-md-flex justify-content-lg-start buttons">
                  <a type="button" class="btn btn-warning btn-md px-4 me-md-2">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="ourServices" class="py-5 my-4">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2>Services We Offer</h2>
            <p class="px-md-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam facilis vitae, nihil illum delectus suscipit sed similique laboriosam mollitia fugiat!</p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 col-lg-3 col-md-6 mb-5">
            <div class="card d-flex flex-column align-items-center p-3">
              <img src="images/tax-advisory.png" alt="">
              <h3 class="fs-6">Tax Advisory</h3>
              <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis hic iusto amet corrupti maiores quisquam expedita sapiente dolore autem perspiciatis.</p>
              <a type="button" class="btn btn-warning btn-md px-4 me-md-2 w-100">Read More</a>
            </div>
          </div>
          <div class="col-12 col-lg-3 col-md-6 mb-5">
            <div class="card d-flex flex-column align-items-center p-3">
              <img src="images/tax-disputes.png" alt="">
              <h3 class="fs-6">Tax Disputes</h3>
              <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis hic iusto amet corrupti maiores quisquam expedita sapiente dolore autem perspiciatis.</p>
              <a type="button" class="btn btn-warning btn-md px-4 me-md-2 w-100">Read More</a>
            </div>
          </div>
          <div class="col-12 col-lg-3 col-md-6 mb-5">
            <div class="card d-flex flex-column align-items-center p-3">
              <img src="images/tax-compliance.png" alt="">
              <h3 class="fs-6">Tax Compliance</h3>
              <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis hic iusto amet corrupti maiores quisquam expedita sapiente dolore autem perspiciatis.</p>
              <a type="button" class="btn btn-warning btn-md px-4 me-md-2 w-100">Read More</a>
            </div>
          </div>
          <div class="col-12 col-lg-3 col-md-6 mb-5">
            <div class="card d-flex flex-column align-items-center p-3">
              <img src="images/transfer-pricing.png" alt="">
              <h3 class="fs-6">Transfer Pricing</h3>
              <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis hic iusto amet corrupti maiores quisquam expedita sapiente dolore autem perspiciatis.</p>
              <a type="button" class="btn btn-warning btn-md px-4 me-md-2 w-100">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
        `;
    },
};

export default Home;