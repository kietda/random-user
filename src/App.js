import React, { useState, useEffect, useCallback } from "react";

import Loading from "./components/loading";
import Container from "./components/container";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/women/7.jpg";
function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data["results"][0]);
      const person = data["results"][0];
      const {
        name: { first, last },
        email,
        dob: { age },
        location: {
          street: { number, name },
        },
        phone,
        login: { password },
        picture: { large },
      } = person;
      const newPerson = {
        name: `${first} ${last}`,
        email,
        age,
        street: `${number} ${name}`,
        phone,
        password,
        imageUrl: large,
      };
      // console.log(newPerson);
      setPerson(newPerson);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <main>
      <div className="block darklight"></div>
      <div className="block">
        {loading ? (
          <Loading />
        ) : (
          <Container person={person} fetchUser={fetchUser} />
        )}
      </div>
    </main>
  );
}

export default App;
