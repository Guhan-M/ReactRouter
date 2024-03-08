import React from 'react'
import Card from 'react-bootstrap/Card';
function Cards({imag,heading,content}) {
return<>
  <div className='continer'>
  <Card className='cards'>
      <Card.Img variant="top" className='image-c' src={imag} />
      <Card.Body>
        <Card.Title className='Heading-c'>{heading}</Card.Title>
        <Card.Text className='content-c'>{content}</Card.Text>
        <b> More details</b>
      </Card.Body>
    </Card>
  </div>
  </>
}

export default Cards
// style={{ width: '18rem' }}