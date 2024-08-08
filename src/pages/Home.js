import React, { useState, useEffect } from "react"; // Import React and hooks correctly
import "../App.css";
import CarosalComponent from "./Component/CarosalComponent";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

function Home() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("Ransima Kumarasiri");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        setName(data.name || "Ransima Kumarasiri"); // Default name if not provided
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch data.");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}>
      <MDBContainer className="container-fluid">
        <MDBRow>
          <CarosalComponent />
        </MDBRow>
      </MDBContainer>

      <div className="App" style={{ textAlign: "center", padding: "2rem" }}>
        <header className="App-header">
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {!loading && !error && (
            <>
              <h1>Welcome, {name}</h1>
              <p>{data}</p>
            </>
          )}
        </header>
      </div>
    </div>
  );
}

export default Home;
