import React from "react";

const Jumbotron = () =>{
  const nombre = "Alexander"
    return ( <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container">
          <h1 class="display-5 fw-bold">A Warm  Welcome!
            {nombre}
          </h1>
          <p class="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa expedita impedit modi, maiores veniam, officia aspernatur nesciunt quos architecto, saepe esse. Necessitatibus numquam veniam excepturi aliquam beatae, neque reiciendis alias.</p>
          <button class="btn btn-primary btn-lg" type="button"> Call to action!</button>
        </div>
      </div>
      

    );
};
export default Jumbotron;
