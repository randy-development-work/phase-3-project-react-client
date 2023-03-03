import React from "react";

function About(){

    return(
        <section className="about">
             
    <div className='stuff'>
    <div className="about">
            <h2>About Us</h2>
            <p>We are a nonprofit organization dedicated to supporting a variety of causes around the world. Our mission is to make it easy for people to donate to causes they care about and make a difference in the world.</p>
            <p>With your support, we can continue to fund important research, provide humanitarian aid, and improve the lives of people in need.</p>
            </div>
      </div>
      <div className="contacts">
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns, please feel free to reach out to us via email or phone:</p>
        <p>Email: info@donateit.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        </div>
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

.about{
  flex-basis: calc(60% - 1.5rem);
  background-color: #000;
  color: white;
  padding: 3rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  max-width: 70%;
  margin-top: 3rem;
  margin-left:300px ;
}
.contacts {
  flex-basis: calc(60% - 1.5rem);
  background-color: #000;
  color: white;
  padding: 3rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  max-width: 70%;
  margin-top: 3rem;
  margin-left:230px ;
  text-align: center
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
    )

}

export default About
