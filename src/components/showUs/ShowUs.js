import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const ShowUs = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Planea, disfruta y ahorra !</h1>
        <p className="lead">Plenty es un app que te ayuda a identificar tus gastos, teniendo control de ellos.</p>
        <hr className="my-2" />
        <p>Prueba la versión demo que te ayuda a estimar cual puede ser el ahorro diario que tendras.</p>
        <p className="lead">
          <Button color="primary">Conoce más</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default ShowUs;