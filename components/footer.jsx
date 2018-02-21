import React from 'react';

export default class Footer extends React.Component {

  render() {
    // extra padding on divs
    var pad={
      'padding': '1rem'
    }
    var pad2={
      'padding': '3rem'
    }
    return (
      <footer>
        <div className="container-fluid text-center">
        {/*-- Split into 3 Columns that can be changed --*/}
          <div className="row text-white" style={pad2}>
            {/*-- Column 1 [Left] --*/}
            <div className="col-sm">
              Location
            </div>
            {/*-- Column 2 [Center] --*/}
            <div className="col-sm">
              <h2>Social Media</h2>
              <a href="#"><i className="fa fa-social fa-2x fa-facebook-square"></i></a>&nbsp;
              <a href="#"><i className="fa fa-social fa-2x fa-google-plus-square"></i></a>&nbsp;
              <a href="#"><i className="fa fa-social fa-2x fa-twitter-square"></i></a>&nbsp;
              <a href="#"><i className="fa fa-social fa-2x fa-linkedin-square"></i></a>&nbsp;
              <a href="http://www.github.com/hex28/" target="_blank">
                <i className="fa fa-social fa-2x fa-github-square"></i></a>&nbsp;
            </div>
            {/*-- Column 3 [Right] --*/}
            <div className="col-sm">
              <a href="#" className="text-white">Link</a><br/>
              <a href="#" className="text-white">Link</a><br/>
              <a href="#" className="text-white">Link</a><br/>
              <a href="#" className="text-white">Link</a><br/>
            </div>
        </div>
        <div className="row">
          <div className="bg-dark copyright">
                                                  {/*-- Can add Copyright here --*/}
            <div className="container" style={pad}>Copyright © Your Website 2018</div>
            </div>
          </div>
       </div>
     </footer>
    );
  }
}
