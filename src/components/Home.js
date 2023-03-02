import { Nav } from 'react-bootstrap';

function Home() {
  return(
    <section className='home-p'>
    <div className="content" style={{  height: '30%', width: '40%',position: "absolute", marginTop: "5%", marginLeft: "2%", fontSize: "160px",color: "#fff", fontWeight: "600"}}>
         <h1 style={{ textAlign:'center',fontStyle: "italic", fontSize: "160px",fontWeight: "600"}}>Donate It</h1>
         <Nav.Link style={{ textDecoration: "none",display: "inline-block", color: "#fff", fontSize: "24px", border: "2px solid #fff", padding: "14px 70px", borderRadius: "50px", marginTop: ""}} href="/allcharities">"Don't use it? Donate It"</Nav.Link>
    </div>
    <div>
        {/* <video autoPlay loop muted playsInline className="backVideo" style={{ position: 'fixed', right: '0', bottom: '0', zIndex: '-1' }}>
            <source src="./videoplayback.mp4" type="video/mp4" style={{ width: '100%', height: '100%' }} />
        </video> */}
        <img className ="backVideo" style={{ width: '100%', height: '100%' }} src = "https://images.unsplash.com/photo-1603827457577-609e6f42a45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvbmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
    </div>
    <style jsx>
     {`
     h1:hover{-webkit-text-stroke:2px #fff;color:transparent;}
     `}
    </style>
    <div>
    </div>
  </section>
)
}

export default Home