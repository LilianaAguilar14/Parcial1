import React from 'react'

export default function Home() {
  
    const backgroundImageUrl = "/img/foondo.avif"; 

    const containerStyle = {
      position: "relative",
      minHeight: "100vh",
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  
    const overlayStyle = {
      position: "absolute",
      top: "40%",
      left: "30%",
      transform: "translate(-50%, -50%)",
      padding: "1rem",
      color: "white", 
      borderRadius: "8px",
    };
  
    return (
      <div style={containerStyle}>
        <div style={overlayStyle}>
          <h1 className="fuente" style={{fontSize:'80px'}}>Bienvenidos a BikeStore</h1>
          <h3 className="fuente" style={{fontSize:'40px'}}>Tu viaje comienza aquí.</h3>
          <h3 className="fuente" style={{fontSize:'40px'}}>Pedalea más allá con BikeStore.</h3>
        </div>
      </div>
    );
  }
 