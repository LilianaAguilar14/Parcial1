import React from 'react'

export default function About() {
  
    const backgroundImageUrl = "/img/estasi.avif"; 

    const containerStyle = {
      position: "relative",
      minHeight: "100vh",
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  
    const overlayStyle = {
      position: "absolute",
      backgroundColor: "rgba(0, 0, 0, 0.6)", 
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "1rem",
      color: "white", 
      borderRadius: "8px",
    };
  
    return (
      <div style={containerStyle}>
        <div style={overlayStyle}>
          <h1 className='d-flex justify-content-center fuente'style={{color:'white', fontSize:'80px'}}>BikeShop</h1>
          <div className='d-flex fuente'>
                <p className="card-text fuente" style={{color:'white', fontSize:'30px'}}>En BikeStore, somos más que una tienda de bicicletas. Nuestra pasión por el ciclismo nos impulsa a ofrecer una experiencia única para ciclistas de todos los niveles. Desde nuestros inicios modestos,
                    nos hemos convertido en un referente en la comunidad ciclista local.
                    Seleccionamos minuciosamente bicicletas de alta calidad para satisfacer las necesidades de cada ciclista, 
                    respaldados por un equipo de expertos apasionados. Ya seas un principiante emocionado, un amante del ciclismo de montaña o un ciclista experimentado, estamos aquí para brindarte apoyo y orientación personalizada.</p>
          </div>
        </div>
      </div>
    );
  }
 
