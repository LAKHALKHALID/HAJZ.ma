

function Contact() {
  return ( 
    <>

    <section id="contact" className="bg-light  pt-5 pb-5">
    <h1 className="fw-bold text-center text-dark ">Cantact Us</h1>
    <p className="text-body-secondary text-center mb-5 ">Have a question? Contact us and we’ll be happy to help you.</p>

    <div className="container">
      <div className="row mt-3">

        <div className="col-lg-6 col-md-6 my-3">
          <div className="content d-flex justify-content-center align-items-center">
            <div>
                <p className="text-center lh-lg text-dark">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, debitis officia doloribus et unde laboriosam dicta consectetur modi ad cumque eaque ipsum at, 
                officiis beatae dolor assumenda quaerat! Quisquam quas quos nesciunt voluptas illo aliquam ut, inventore soluta voluptatum pariatur. Quisquam, id assumenda doloremque ipsum illo eligendi enim, maiores dolor, rerum porro quam.
                 Distinctio nisi itaque non fuga ipsam culpa, eveniet praesentium voluptates aut quos magnam, dolorem animi earum? Fugiat!
              </p>
              <div className="d-flex justify-content-center align-items-center gap-4">
                <i className="bi bi-facebook fs-3 text-primary"></i>
                <i className="bi bi-instagram fs-3 text-danger"></i>
                <i className="bi bi-linkedin fs-3 text-info-emphasis"></i>
                <i className="bi bi-twitter-x fs-3"></i>

              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 my-3">
          <div className="content d-flex flex-column gap-4">
            <div className="d-flex flex-lg-row flex-md-row justify-content-center align-items-center flex-column gap-3">
              <div className="input-group  ">
                <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                <input type="text" placeholder="First Name" className="form-control"/>
              </div>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                <input type="text" placeholder="Last Name" className="form-control"/>
              </div>
            </div>
            <div>
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-envelope-fill"></i></span>
                <input type="email" placeholder="Write your Email" class="form-control"/>
              </div>
            </div>

            <div>
              <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                <label for="floatingTextarea2"><i className="bi bi-chat-dots-fill"></i> Comments</label>
              </div>
            </div>

            <div>
              <button className="btn btn-primary">Send a message</button>
            </div>

          </div>
        </div>

        

      </div>
    </div>
  </section>

    </>
  );
}

export default Contact;