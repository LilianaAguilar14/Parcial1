import React from 'react'

export default function Contac() {
  const backgroundImageUrl = "/img/contac.jpg"; 

  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)", 
    position: "absolute",
    top: "40%",
    left: "20%",
    transform: "translate(-50%, -50%)",
    padding: "1rem",
    color: "white", 
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <h1 className="fuente" style={{fontSize:'80px'}}>Contactanos</h1>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Sugerencias</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <br/>
          <p class="d-flex justify-content-center text-white">info@bikeshop.com</p>
        </div>

      </div>
    </div>
  );
}

