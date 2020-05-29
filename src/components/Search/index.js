import React, { useState } from "react";

import { Container } from "./styles";
import { FaSearch } from "react-icons/fa";

function Search({ searchCountries }) {
  const [valueInput, setvalueInput] = useState("");
  return (
    <Container>
      <input type="text" onChange={(e) => setvalueInput(e.target.value)} />
      <button type="button" onClick={() => searchCountries(valueInput)}>
        <FaSearch color="#FFF" size={24} />
      </button>
    </Container>
  );
}

export default Search;
