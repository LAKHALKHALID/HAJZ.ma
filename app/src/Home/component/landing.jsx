

function Landing() {
  return ( 

    <>
      <header>

        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active c-item h-100">
              <img src="./imghotels/img1.jpg" class="d-block w-100 c-img img-fluid" alt="..."/>
              <div class="carousel-caption top-0 mt-5 d-none d-md-block parent-carsousel">
                <h1 class="text-capitalize fw-bolder display-3">Book Your Perfect Stay</h1>
                <p class="fs-5 my-4">Find hotels, apartments, and resorts all over the world. Choose the best place that fits your budget and your travel plans.</p>
                <button class="btn btn-primary">Click Here</button>
              </div>
            </div>
            <div class="carousel-item c-item">
              <img src="./imghotels/img2.jpg" class="d-block w-100 c-img img-fluid" alt="..."/>
              <div class="carousel-caption top-0 mt-5 d-none d-md-block parent-carsousel">
                <h1 class="text-capitalize fw-bolder display-3">Easy and Fast Reservations</h1>
                <p class="fs-5 my-4">Book your room in just a few clicks. No complicated steps, no stress, and instant confirmation.</p>
                <button class="btn btn-primary">Click Here</button>
              </div>
            </div>
            <div class="carousel-item c-item">
              <img src="./imghotels/img3.jpg" class="d-block w-100 c-img img-fluid" alt="..."/>
              <div class="carousel-caption top-0 mt-5 d-none d-md-block parent-carsousel">
                <h1 class="text-capitalize fw-bolder display-3">Best Prices & Trusted Reviews</h1>
                <p class="fs-5 my-4">Compare prices and read real reviews from travelers. Get the best deals and book with confidence.</p>
                <button class="btn btn-primary">Click Here</button>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
  </header>
    </>
  );
}

export default Landing;