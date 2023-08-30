import React from 'react';

export default function Home() {
  const backgroundImageUrl = "/public/img/fondo.jpg"; 

  const containerStyle = {
    position: "relative",
    minHeight: "180vh",
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const overlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.6)", 
    padding: "1rem",
    color: "white", 
    borderRadius: "10px",
    textAlign: "center", 
  };
 
  

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <h1 className='d-flex justify-content-center'>Bicicletas de Montaña</h1>
        <div className='d-flex justify-content-center'>
          <div className="card" style={{ width: '18rem', margin: '0.5rem' }}>
            <img src="/img/montaña1.avif" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Modelo Elite 1</h5>
              <p className="card-text" style={{color:'blue'}}>$1200</p>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', margin: '0.5rem' }}>
            <img src="/img/mon2.avif" className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Modelo Elite 2</h5>
            <p className="card-text" style={{color:'blue'}}>$1000</p>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', margin: '0.5rem' }}>
          <img src="/img/mon3.avif" className="card-img-top" style={{width:'18rem', height:'12rem'}} alt="" />
            <div className="card-body">
            <h5 className="card-title">Modelo Elite 3</h5>
            <p className="card-text" style={{color:'blue'}}>$1300</p>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', margin: '0.5rem' }}>
            <img src="/img/mon4.avif" className="card-img-top" style={{width:'18rem', height:'12rem'}} alt="..." />
            <div className="card-body">
            <h5 className="card-title">Modelo Elite 4</h5>
            <p className="card-text" style={{color:'blue'}}>$1500</p>
            </div>
          </div>
        </div>

        <h1 className='d-flex justify-content-center'>Bicicletas BMX</h1>
        <div className='d-flex justify-content-center'>
          <div className="card" style={{ width: '18rem', margin: '0.5rem' }}>
            <img src="/img/bmx1.avif" className="card-img-top" style={{width:'18rem', height:'12rem'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Megamo Blazer</h5>
              <p className="card-text" style={{color:'blue'}}>$500</p>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', margin: '0.5rem' }}>
            <img src="/img/bmx2.avif" className="card-img-top"  style={{width:'18rem', height:'12rem'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title"> Bmx Monty Fobos</h5>
              <p className="card-text" style={{color:'blue'}}>$550</p>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', margin: '0.5rem' }}>
            <img src="/img/bmx3.avif" className="card-img-top"   style={{width:'18rem', height:'12rem'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bmx Monty 301</h5>
              <p className="card-text" style={{color:'blue'}}>$300</p>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', margin: '0.5rem' }}>
            <img src="/img/bmx4.avif" className="card-img-top"  style={{width:'18rem', height:'12rem'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bmx Monty Deymos</h5>
              <p className="card-text" style={{color:'blue'}}>$350</p>
            </div>
          </div>
        </div>

        <h1 className='d-flex justify-content-center'>Bicicletas Híbridas</h1>
        <div className='d-flex justify-content-center'>
          <div className="card" style={{ width: '18rem', margin: '0.5rem' }}>
            <img src="/img/hibri1.avif" className="card-img-top" style={{width:'18rem', height:'12rem'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Carrera Subway</h5>
              <p className="card-text" style={{color:'blue'}}>$1000</p>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', margin: '0.5rem' }}>
            <img src="/img/hibri2.avif" className="card-img-top"  style={{width:'18rem', height:'12rem'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Marin Fairfax</h5>
              <p className="card-text" style={{color:'blue'}}>$1200</p>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', margin: '0.5rem' }}>
            <img src="/img/hibri3.avif" className="card-img-top"   style={{width:'18rem', height:'12rem'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Giant Escape 2 Disc</h5>
              <p className="card-text" style={{color:'blue'}}>$1500</p>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', margin: '0.5rem' }}>
            <img src="/img/hibri4.avif" className="card-img-top"  style={{width:'18rem', height:'12rem'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title"> B’Twin Triban RC500</h5>
              <p className="card-text" style={{color:'blue'}}>$1200</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}