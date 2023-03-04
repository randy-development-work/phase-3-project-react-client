import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

function EachCharity({charity}) {
    // destructuring the charity prop for easier access
    const {id, name, image, location, description, year_established} = charity

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
      setHover(true);
    };
  
    const handleMouseLeave = () => {
      setHover(false);
    };

    return (
        <Card
        className={`my-3 mx-2 ${hover ? "shadow-lg" : "shadow"}`}
        style={{ width: "18rem", cursor: "pointer" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
            {/* <Image src={image} wrapped ui={true} /> */}
            <Link to={`/charities/${id}/donate`} className="rounded-top" style={{
                height: 240,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`,
                backgroundcolor:  "rgba(255, 255, 255)"
              
            }}
            
            ></Link>
            <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{location}</Card.Meta>
            <Card.Description>
                {description}
            </Card.Description>
            <br />
            <Card.Description>
                {/* {date} | {time} */}
                <br />
                <p className='money-bill'>
                {/* <Icon name="calendar times"/> */}
                <p>Year Established: </p>{year_established}
                </p>
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Link to={`/charities/${id}/edit`} className="ms-3">
                        {/* <i className="h2 bi bi-pencil-square"></i> */}
                        <p><Icon name="edit"/>Edit</p>
                </Link>
                
                {/* <Button primary style={{
                  color: color,
                  background: background
                }}
                onClick={updateAttend}
                >
                  <Icon name={willAttend ? 'paper plane outline' : 'time'} />{willAttend ? "RSVP'd" : "Attend"}
                  </Button>
                <Button secondary onClick={handleDelete}><Icon name='delete calendar' />Delete</Button> */}
            </a>
            </Card.Content>
        </Card>
    )
}

export default EachCharity