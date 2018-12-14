import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const ShowUs = (props) => {
  return (
    <div class="container">
      <Jumbotron>
        <h1 className="display-3">Green Miners!</h1>
        <p className="lead">Are you looking for the best emerald for your jewelry</p>
        <hr className="my-2" />
        <p>Green miners is an app that can help selecting the best from Colombia mines</p>
        <p className="lead">
          <Button color="primary">Who we are</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default ShowUs;