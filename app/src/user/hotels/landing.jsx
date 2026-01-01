function Landing({afficher,sh}) {
  return ( 
    <>

      <section class="vh-40 d-flex align-items-center py-5">
        <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-8 text-center">


        <h1 class="fw-bold mb-3 text-light">Trouver votre Prochain Séjour</h1>
        <p class=" mb-4 fs-5 text-light">
        Recherchez des offres sur des hôtels, des hébergements indépendants et plus
        </p>

        <div class="input-group input-group-lg shadow-sm">
        <input
        ref={sh}
        type="text"
        class="form-control"
        placeholder="Entrez votre destination..."
        />
        <button class="btn btn-primary px-4" onClick={afficher} type="button">Rechercher</button>
        </div>


        </div>
        </div>
        </div>
</section>
    
    </>
  );
}

export default Landing;