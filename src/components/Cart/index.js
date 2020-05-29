import React from "react";

import { Container, CartStyle } from "./styles";

import { formatNumber } from "../../util/format";

function Cart({ data }) {
  // useEffect(() => {
  //   format();
  // }, [data]);

  function format() {
    // console.log(data);
    try {
      if (data !== []) {
        console.log(data);
        data = {
          cases: formatNumber(data.cases),
          todayCases: formatNumber(data.todayCases),
          casesPerOneMillion: formatNumber(data.casesPerOneMillion),
          recovered: formatNumber(data.recovered),
          recoveredPerOneMillion: formatNumber(data.recoveredPerOneMillion),
          deaths: formatNumber(data.deaths),
          todayDeaths: formatNumber(data.todayDeaths),
          deathsPerOneMillion: formatNumber(data.deathsPerOneMillion),
        };
      }
    } catch (error) {}
  }

  format();

  return (
    <Container>
      <CartStyle colorCart="#D69900">
        <h3>Casos confirmados</h3>
        <div>
          <div>
            <span>Total</span>
            <p>{data ? data.cases : "---"}</p>
          </div>
          <div>
            <span>Novos casos</span>
            <p>{data ? data.todayCases : "---"}</p>
          </div>
          <div>
            <span>% mi/habitantes</span>
            <p>{data ? data.casesPerOneMillion : "---"}</p>
          </div>
        </div>
      </CartStyle>
      <CartStyle colorCart="#1CC88A">
        <h3>Casos curados</h3>
        <div>
          <div>
            <span>Total</span>
            <p>{data ? data.recovered : "---"}</p>
          </div>
          <div>
            <span>% mi/habitantes</span>
            <p>{data ? data.recoveredPerOneMillion : "---"}</p>
          </div>
        </div>
      </CartStyle>
      <CartStyle colorCart="#858796">
        <h3>Óbitos confirmados</h3>
        <div>
          <div>
            <span>Total</span>
            <p>{data ? data.deaths : "---"}</p>
          </div>
          <div>
            <span>Novos casos</span>
            <p>{data ? data.todayDeaths : "---"}</p>
          </div>
          <div>
            <span>% mi/habitantes</span>
            <p>{data ? data.deathsPerOneMillion : "---"}</p>
          </div>
        </div>
      </CartStyle>
    </Container>
  );
}

export default Cart;
