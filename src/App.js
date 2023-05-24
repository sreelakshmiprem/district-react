import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






export default function App() {





  let districts=[
    {
      id:"1",
      name:"kasargode",
      dicription:"City paradise",
      Image:"https://theprimetime.in/wp-content/uploads/2021/11/Kasaragod-Kerala.jpg"
    },
    {
      id:"2",
      name:"kannur",
      dicription:"Red Salute",
      Image:"https://i.ytimg.com/vi/GIDUcSN7OB8/maxresdefault.jpg"
    },
    {
      id:"3",
      name:"kozhikode",
      dicription:"S M STREET",
      Image:"https://img.veenaworld.com/wp-content/uploads/2021/07/12-Best-Tourist-Places-in-Kozhikode-Calicut-scaled.jpg"
    },
    {
      id:"4",
      name:"malappuram",
      dicription:"GULF",
      Image:"https://upload.wikimedia.org/wikipedia/commons/4/49/Malappuram_DownHill_Aerial_View.jpg"
    },
    {
      id:"5",
      name:"wayanad",
      dicription:"KERALA FOREST",
      Image:"https://www.wayanad.com/files/slides/7110478409.jpg"
    },
    {
      id:"6",
      name:"Palakkad",
      dicription:"Temple festival",
      Image:"https://upload.wikimedia.org/wikipedia/commons/d/de/Govt_Victoria_College_Palakkad_Entrance.JPG"    
    },
    {
      id:"7",
      name:"Thrissur",
      dicription:"HUB",
      Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Kudamatom_at_thrissur_pooram_2013_7618.JPG/800px-Kudamatom_at_thrissur_pooram_2013_7618.JPG"
    },
    {
      id:"8",
      name:"ERNAKULAM",
      dicription:"cyber Hub",
      Image:"https://upload.wikimedia.org/wikipedia/commons/4/4a/INS_Vikrant_under_construction_at_Cochin_Shipyard.png"
    },
    {
      id:"9",
      name:"Idukki",
      dicription:"Cardamom Hills",
      Image:"https://static.theprint.in/wp-content/uploads/2018/08/2018_8img10_Aug_2018_PTI8_10_2018_000227B.jpg?compress=true&quality=80&w=376&dpr=2.6"    
    },
    {
      id:"10",
      name:"Pathanamthitta",
      dicription:"Central Travancore region",
      Image:"https://chaloghumane.com/wp-content/uploads/2021/08/Pathanamthitta-Kerala.jpeg"
    },
    {
      id:"11",
      name:"Kottayam",
      dicription:"Western Ghats on the east",
      Image:"data:image/jpeg;base64,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"
    },
    {
      id:"12",
      name:"Kollam",
      dicription:" fourth largest city in Kerala",
      Image:"https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/Jatayu-Earth-Centre-Kollam-Kerala.jpg?resize=1024%2C576&ssl=1"    
    },
    {
      id:"13",
      name:"Alappuzha",
      dicription:"A town with canals, backwaters, beaches, and lagoons,",
      Image:"https://assets-news.housing.com/news/wp-content/uploads/2022/08/24003539/ALLEYPPEY-FEATURE-compressed.jpg"
    },
    {
      id:"14",
      name:"Thiruvananthapuram",
      dicription:"capital of the Indian state of Kerala",
      Image:"https://gumlet.assettype.com/swarajya/2020-07/80fd68d5-1dd8-40bf-80f5-81f785e91dec/378119_padmanabhaswamy_temple.jpg"
    },


  ]
  
  return (
    <Container>
    <Row>
      {
        districts.map((districts,index)=>{
          return(





    
    <Col xs={6} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={districts.Image}/>
  <Card.Body>
    <Card.Title>{districts.name}</Card.Title>
    <Card.Text>{districts.dicription}
    </Card.Text>
    <Button variant="primary">click!</Button>
 </Card.Body>
</Card>
</Col>
          )
        }
        )
      }
</Row>
</Container>
);
}