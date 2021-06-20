import {useState, useEffect} from "react"

export default () => {

    const [temps, settemps] = useState(null);
    
    useEffect(() => {
       
        fetch('https://www.el-tiempo.net/api/json/v2/provincias/08', {
        method: "GET",
        headers: {
        Accept: "application/json",
        },
      })

      .then(quote => quote.json())
      .then(data => settemps(data.ciudades[6].stateSky.description)); 

    }, []); 
    

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light py-1">
          <p id="weather" className="weather">El temps d'avuí: {temps} </p>
        </nav>
      </header>
    );
};