import React, { useEffect, useState } from "react";
import api from "../../Services/api";

import { Container, Content, LinkStyle } from "./styles";

import { FaArrowRight } from "react-icons/fa";

import Cart from "../../components/Cart";
import Search from "../../components/Search";

function Home() {
  const [dataGlobal, setDataGlobal] = useState([]);
  const [dataBrazil, setDataBrazil] = useState([]);
  const [dataBrazilSearch, setDataSearch] = useState([]);
  const [contrySearch, setContrySearch] = useState("");

  function callApi(response) {
    const {
      cases,
      casesPerOneMillion,
      todayCases,
      deaths,
      todayDeaths,
      deathsPerOneMillion,
      recovered,
      recoveredPerOneMillion,
    } = response;

    const data = {
      cases,
      casesPerOneMillion,
      todayCases,
      deaths,
      todayDeaths,
      deathsPerOneMillion,
      recovered,
      recoveredPerOneMillion,
    };
    // console.log(data);
    return data;
  }

  useEffect(() => {
    async function loadDataBrazil() {
      const response = await api.get("/v2/countries/BRAZIL");
      const data = callApi(response.data);
      setDataBrazil(data);
    }

    async function loadDataGlobal() {
      const response = await api.get("/v2/all");
      const data = callApi(response.data);
      console.log(data);

      setDataGlobal(data);
    }

    loadDataBrazil();
    loadDataGlobal();
  }, []);

  async function loadDataSearch(url) {
    if (url) {
      const response = await api.get(`/v2/countries/${url}`);
      const data = callApi(response.data);

      setDataSearch(data);
      setContrySearch(url);
    }
  }

  return (
    <Container>
      <Content>
        <div>
          <h2>Brasil</h2>
          <Cart data={dataBrazil} />
        </div>

        <div>
          <h2>Mundo</h2>
          <Cart data={dataGlobal} />
        </div>

        <div>
          <h2>Pesquise um país</h2>
          <Search searchCountries={loadDataSearch} />
          <h2>{contrySearch ? contrySearch : "---"}</h2>
          <Cart data={dataBrazilSearch ? dataBrazilSearch : null} />
        </div>

        <LinkStyle
          to={{
            pathname: "/charts",
            data: dataBrazil,
          }}
        >
          <span>Gráficos</span>
          <FaArrowRight color="#4e73df" size={18} />
        </LinkStyle>
      </Content>
    </Container>
  );
}

export default Home;
