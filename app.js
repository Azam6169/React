console.log('App is running');

//JSX-JavaScript XML
//var template =<p>This is JSX from app.js</p>;
var template = React.createElement("h1", {
    id: "Azam"
  }, "This is JSX from app.js");
var appRoot =document.getElementById('app');

ReactDOM.render(template, appRoot);
