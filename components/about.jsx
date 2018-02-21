import React from 'react';

export default class About extends React.Component {

  render() {
    var padding={
      'paddingRight':'2rem'
    }
    return (
    <div class="jumbotron d-flex align-items-center">
      <div className="container text-center">
        <h1><i className="icon-layers sm-icons"></i></h1>
        <p className="lead">
        This is a simple Bootstrap starter template for creating a blog or perhaps something more. It uses React to componentize
        certain parts for reusability. Handlebars is used to allow for the creation of templates. This flexibility is offered
        to give the developer freedom to decide how they want to show their data. This will also allow the developer to create
        url routes through NodeJS/Express.
        </p>
        <br/>
        <h1>Technologies</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="30%"/>
        <img src="https://cdn.worldvectorlogo.com/logos/handlebars.svg" width="30%" style={padding}/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" width="30%"/>
      </div>
    </div>
    );
  }
}
