import React from "react";
import axios from "axios";

export default function Fetch() {
  const [data, setData] = React.useState(null); 

    React.useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => {
                setData(response.data); 
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

  return (  
    <div>   
        <h1>Fetched Data:</h1>
        {data ? (
            <div>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
  );
}