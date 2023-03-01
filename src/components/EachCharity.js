import { Link } from 'react-router-dom';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

function EachCharity({charity}) {
    // destructuring the charity prop for easier access
    const {id, name, image, location, description, year_established} = charity

    return (
        <Card className='card-style'>
            {/* <Image src={image} wrapped ui={true} /> */}
            <Link to={`/charities/${id}/donate`} className="rounded-top" style={{
                height: 240,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`
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
            {/* <Card.Content extra>
            <a>
                
                <Button primary style={{
                  color: color,
                  background: background
                }}
                onClick={updateAttend}
                >
                  <Icon name={willAttend ? 'paper plane outline' : 'time'} />{willAttend ? "RSVP'd" : "Attend"}
                  </Button>
                <Button secondary onClick={handleDelete}><Icon name='delete calendar' />Delete</Button>
            </a>
            </Card.Content> */}
        </Card>
    )
}

export default EachCharity