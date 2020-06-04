import React, { useEffect, useState, useCallback } from "react";
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

  useEffect(() => {
    async function loadDataBrazil() {
      await api.get("/v2/countries/BRAZIL").then((response) => {
        setDataBrazil(response.data);
      });
    }

    async function loadDataGlobal() {
      await api.get("/v2/all").then((response) => {
        setDataGlobal(response.data);
      });
    }

    loadDataBrazil();
    loadDataGlobal();
  }, []);

  const loadDataSearch = useCallback(async (url) => {
    if (url) {
      await api.get(`/v2/countries/${url}`).then((response) => {
        setDataSearch(response.data);
        setContrySearch(url);
      });
    }
  }, []);

  return (
    <Container>
      <Content>
        <div>
          <header>
            <h2>Brasil</h2>
            <LinkStyle
              to={{
                pathname: "/charts",
                data: dataBrazil,
              }}
            >
              <span>Gráficos</span>
              <FaArrowRight color="#4e73df" size={18} />
            </LinkStyle>
          </header>

          <Cart data={dataBrazil} />
        </div>

        <div>
          <header>
            <h2>Mundo</h2>
          </header>

          <Cart data={dataGlobal} />
        </div>

        <div>
          <header>
            <h2>Pesquise um país</h2>
          </header>
          <Search searchCountries={loadDataSearch} />
          <h1>{contrySearch ? contrySearch : "---"}</h1>
          <Cart data={dataBrazilSearch ? dataBrazilSearch : null} />
        </div>
      </Content>
    </Container>
  );
}

export default Home;
