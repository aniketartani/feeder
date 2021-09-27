//1. Create a new React app.-done
//2. Create a App.jsx component. -done
//3. Create a Header.jsx component that renders a <header> element  
//to show the Keeper App name in an <h1>.     -done
//4. Create a Footer.jsx component that renders a <footer> element -
//to show a copyright message in a <p> with a dynamically updated year. -done
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/
import React from "react";
import ReactDom  from "react-dom";
import App from "./components/app.jsx"

ReactDom.render(<App />,document.getElementById("root"));
//HINT: You will need to study the classes in teh styles.css file to appy styling.