import React, { useState, useEffect } from "react";

import { Container, Content } from "./styles";
import Chart from "../../components/ChartComponent";

import api from "../../Services/api";

function Charts() {
  const [dataBrazil, setDataBrazil] = useState({});
  const [dataBrazilCases, setDataBrazilCases] = useState({});
  const [dataBrazilDeaths, setDataBrazilDeaths] = useState({});
  const [dataBrazilrecovered, setDataBrazilrecovered] = useState({});

  useEffect(() => {
    async function loadDataBrazil() {
      const response = await api.get("/v2/historical/BRAZIL");
      const data = response.data.timeline;
      setDataBrazil(data);
      setDataBrazilCases(data.cases);
      setDataBrazilDeaths(data.deaths);
      setDataBrazilrecovered(data.recovered);
    }

    loadDataBrazil();
  }, []);
  return (
    <Container>
      <Content>
        {console.log(dataBrazil)}
        <Chart
          data={dataBrazilCases}
          colorLine={"rgb(214, 153, 0)"}
          titleChart={
            "Numero de casos confirmados nos últimos 30 dias - Brasil"
          }
          descriptionData={"Contaminados"}
        ></Chart>
        <Chart
          data={dataBrazilrecovered}
          colorLine={"rgb(28, 200, 138)"}
          titleChart={"Numero de pessoas curadas nos ultimos 30 dias - Brasil"}
          descriptionData={"Curados"}
        ></Chart>
        <Chart
          data={dataBrazilDeaths}
          colorLine={"rgb(133, 135, 150)"}
          titleChart={"Numero de mortes ultimos 30 dias - Brasil"}
          descriptionData={"Mortes"}
        ></Chart>
      </Content>
    </Container>
  );
}

export default Charts;
