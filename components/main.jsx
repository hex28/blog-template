import React from 'react';

export default class Main extends React.Component {
  
  limitStr(str){
    if (str.length > 100){
      return str.substring(0, 100) + '...' ;
   }
    return str;
  }

  mainDataFill(){
    var context = [
        {
          "title": "Title Here",
          "body": `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Nullam ac tortor vitae purus faucibus ornare suspendisse sed.
          `
        },
        {
          "title": "Title Here",
          "body": `
          Sed odio morbi quis commodo.
          Sem integer vitae justo eget magna fermentum iaculis eu.
          Massa tincidunt dui ut ornare lectus sit.
          Nibh sed pulvinar proin gravida hendrerit lectus.
          `
        },
        {
          "title": "Title Here",
          "body": `
          Nisl suscipit adipiscing bibendum est ultricies.
          Orci a scelerisque purus semper eget duis at.
          Vitae justo eget magna fermentum iaculis eu non diam phasellus.
          Felis imperdiet proin fermentum leo vel orci porta.
          Lorem ipsum dolor sit amet consectetur adipiscing.
          `
        },
        {
          "title": "Title Here",
          "body": `Vitae congue mauris rhoncus aenean vel.
          Curabitur gravida arcu ac tortor dignissim convallis aenean et.
          Vulputate odio ut enim blandit volutpat maecenas volutpat blandit.
          Arcu non sodales neque sodales ut etiam.
          Volutpat maecenas volutpat blandit aliquam etiam erat.
          `
        },
        {
          "title": "Title Here",
          "body": `
          Amet mattis vulputate enim nulla aliquet.
          Iaculis at erat pellentesque adipiscing commodo elit at.
          Aliquet nibh praesent tristique magna sit amet purus gravida quis.
          Dolor sit amet consectetur adipiscing elit duis.
          `
        },
        {
          "title": "Title Here",
          "body": `Lectus urna duis convallis convallis tellus id.
          Pellentesque dignissim enim sit amet venenatis urna.
          Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.
          Rhoncus mattis rhoncus urna neque.
          Bibendum est ultricies integer quis auctor elit sed vulputate mi.
          `
        }
    ];
    const contextData = context.map((index) =>
      <div className="col-sm-4" style={{"paddingBottom": '2rem'}}>
        <div className="card">
          <div className="card-block" style={{"margin": "2rem"}}>
            <h4 className="card-title"><strong>{index.title}</strong></h4>
            <p id="card-text" className="card-text">{this.limitStr(index.body)}</p>
            <a href="#" className="btn btn-dark">Read more</a>
          </div>
        </div>
      </div>
    );
    console.log(contextData);
    return contextData;
  }

  render(){
    return(
      <div className="row">
        {this.mainDataFill()}
      </div>
    );
  }
}
