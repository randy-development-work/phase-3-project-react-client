// import { Nav } from 'react-bootstrap';

// function Home() {
//   return(
//     <section className='home-p'>
//     <div className="content" style={{  height: '30%', width: '40%',position: "absolute", marginTop: "5%", marginLeft: "2%", fontSize: "160px",color: "#fff", fontWeight: "600"}}>
//          <h1 style={{ textAlign:'center',fontStyle: "italic", fontSize: "160px",fontWeight: "600"}}>Donate It</h1>

//          <Nav.Link style={{ textDecoration: "none",display: "inline-block", color: "#fff", fontSize: "24px", border: "2px solid #fff", padding: "14px 70px", borderRadius: "50px", marginTop: ""}} href="/charities">"Don't use it? Donate It"</Nav.Link>
//     </div>
  
//     <div>
//         {/* <video autoPlay loop muted playsInline className="backVideo" style={{ position: 'fixed', right: '0', bottom: '0', zIndex: '-1' }}>
//             <source src="./videoplayback.mp4" type="video/mp4" style={{ width: '100%', height: '100%' }} />
//         </video> */}
//         <img className ="backVideo" style={{ width: '100%', height: '100%' }} src = "https://images.unsplash.com/photo-1603827457577-609e6f42a45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvbmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
//         <div className="about">
//         <h2>About Us</h2>
//         <p>We are a nonprofit organization dedicated to supporting a variety of causes around the world. Our mission is to make it easy for people to donate to causes they care about and make a difference in the world.</p>
//         <p>With your support, we can continue to fund important research, provide humanitarian aid, and improve the lives of people in need.</p>
//       </div>
//       <div className="contacts">
//         <h2>Contact Us</h2>
//         <p>If you have any questions or concerns, please feel free to reach out to us via email or phone:</p>
//         <p>Email: info@donationwebsite.com</p>
//         <p>Phone: +1 (555) 123-4567</p>
//       </div>
        
//     </div>
    
//     <style jsx>
//      {`
//      h1:hover{-webkit-text-stroke:2px #fff;color:transparent;
//     }
//      `}
//     </style>
//     <div>
//     </div>
//   </section>
// )
// }

// export default Home

import { Nav } from 'react-bootstrap';

function Home() {
  return (
    <section className='home'>
      <div >
      <div className="content">
        <h1 className='title'>Donate It</h1>
        <h1>Donate to Support a Cause</h1>
        <p>Make a difference by donating to a cause you care about.</p>
        
        <Nav.Link className="btn btn-primary" href="/charities">Donate Now</Nav.Link>
        
        <div className='stuff'>
        <div className="about">
        <h2>About Us</h2>
        <p>We are a nonprofit organization dedicated to supporting a variety of causes around the world. Our mission is to make it easy for people to donate to causes they care about and make a difference in the world.</p>
        <p>With your support, we can continue to fund important research, provide humanitarian aid, and improve the lives of people in need.</p>
      </div>
      <div className="contacts">
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns, please feel free to reach out to us via email or phone:</p>
        <p>Email: info@donateit.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        </div>
        </div>
      </div>
      </div>
      
      {/* <img className ="background-image" src="https://images.unsplash.com/photo-1591276625440-d50e6618dfd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVscGluZyUyMGhhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Donate Now"></img> */}
      {/* <div className="about">
        <h2>About Us</h2>
        <p>We are a nonprofit organization dedicated to supporting a variety of causes around the world. Our mission is to make it easy for people to donate to causes they care about and make a difference in the world.</p>
        <p>With your support, we can continue to fund important research, provide humanitarian aid, and improve the lives of people in need.</p>
      </div> */}
      <style jsx>{`

        .home {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          position: relative;
        }

        body{
          background-image: url('https://images.unsplash.com/photo-1603827457577-609e6f42a45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvbmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
          background-size: cover;
          background-repeat: no-repeat;
        }

        .content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 1;
        }
        
        .title {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 1rem;
          margin-top: 100px;
          color: #007bff;
          text-shadow: 2px 2px #fff;
        }

        .background-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .stuff {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        
        .about,
        .contacts {
          flex-basis: calc(50% - 1.5rem);
          background-color: #fff;
          padding: 3rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
          max-width: 800px;
          margin-top: 3rem;
        }
        

        h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .btn {
          font-size: 1.5rem;
          padding: 0.5rem 1.5rem;
          border-radius: 1rem;
          margin-top: 2rem;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        .btn-outline-primary {
          color: #007bff;
          border-color: #007bff;
        }

        .btn-outline-primary:hover {
          background-color: #007bff;
          color: #fff;
        }
      `}</style>
    </section>
  );
}

export default Home;
// import { Nav } from 'react-bootstrap';

// function Home() {
//   return(
    // <section className='home-p'>
      // <div className="content" style={{ height: '30%', width: '40%', position: "absolute", marginTop: "5%", marginLeft: "2%", fontSize: "160px", color: "#fff", fontWeight: "600"}}>
      //   <h1 style={{ textAlign:'center', fontStyle: "italic", fontSize: "160px", fontWeight: "600"}}>Donate It</h1>

      //   <Nav.Link style={{ textDecoration: "none", display: "inline-block", color: "#fff", fontSize: "24px", border: "2px solid #fff", padding: "14px 70px", borderRadius: "50px", marginTop: ""}} href="/charities">"Don't use it? Donate It"</Nav.Link>
      //   <div className="about">
      //     <h2>About Us</h2>
      //     <p>We are a nonprofit organization dedicated to supporting a variety of causes around the world. Our mission is to make it easy for people to donate to causes they care about and make a difference in the world.</p>
      //     <p>With your support, we can continue to fund important research, provide humanitarian aid, and improve the lives of people in need.</p>
      //   </div>
      //   <div className="contacts">
      //     <h2>Contact Us</h2>
      //     <p>If you have any questions or concerns, please feel free to reach out to us via email or phone:</p>
      //     <p>Email: info@donationwebsite.com</p>
      //     <p>Phone: +1 (555) 123-4567</p>
      //   </div>
      // </div>
    //   <style jsx global>
//         {`
//         body {
//           background-image: url('https://images.unsplash.com/photo-1603827457577-609e6f42a45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvbmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
//           background-size: cover;
//           background-repeat: no-repeat;
//         }

//         .home-p {
//           position: relative;
//           height: 100%;
//         }

//         .content {
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//         }

//         .about {
//           margin-top: 30%;
//         }

//         .contacts {
//           margin-top: 0%;
//         }

//         h1:hover{-webkit-text-stroke:2px #fff;color:transparent;
//         `}
//       </style>
//     </section>
//   )
// }

// export default Home;

