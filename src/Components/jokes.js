import {useState} from "react"

export default () => {
    const [joke, setjoke] = useState("");

    const acudit = () => {
        let random = Math.ceil(Math.random()*2)
        let url;
          
          if (random == 1) {
              url = "https://v2.jokeapi.dev/joke/Programming";
        } else if (random == 2) {
          url = "https://v2.jokeapi.dev/joke/Programming";
      
        } else if (random == 3) {
          url = "https://api.chucknorris.io/jokes/random";
        
        }

        fetch(url, {
        method: "GET",
        headers: {
        Accept: "application/json",
      },
    })
    
      .then(quote => quote.json())
        .then(data => setjoke(data.joke)); 
    };

    return (
        <main>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="card text-center">
                            <div className="card-body">
                            <h5 >Preparat per riure? &#128514;</h5>
                            <p id="text" class="text">{joke}</p> 
                            <a href="#" id= "btn" className="btn btn-info btn-lg" onClick={() => acudit()}>Següent acudit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};