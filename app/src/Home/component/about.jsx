

function About() {
  return ( 
    <>

    <section id="about" class=" bg-light pt-5 pb-5">
    <h1 class="fw-bold text-center text-dark">About</h1>
    <p class="text-body-secondary text-center mb-5">Our website allows users to search, compare, and book hotels in different cities.</p>
    <div class="container mt-4">
      <div class=" w-75 container mx-auto d-flex justify-content-center gap-5 align-items-center">
      
        <img src="./imghotels/about.jpg" class="img rounded-5 d-none d-md-block" alt=""/>
        
          <div class="content">
            <p class="text-center lh-lg text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, autem laborum. Quisquam atque optio et amet labore? Maxime distinctio nulla nostrum incidunt fugiat suscipit unde? Et dicta fuga ipsa quasi vel dolore iste? Veritatis expedita, laudantium esse perspiciatis totam aliquam porro at perferendis nulla odio enim. Nihil odio fugit quaerat?</p>
              <div class="d-flex justify-content-center align-items-center mt-3">
                <button  class="btn btn-primary text-center d-inline">Read More</button>
              </div>
          </div>
        
      </div>
    </div>
   </section>

    </>
  );
}

export default About;