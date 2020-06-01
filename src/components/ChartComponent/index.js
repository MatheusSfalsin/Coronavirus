import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import { Line } from "react-chartjs-2";
// import { useLocation } from "react-router-dom";

// Labes - todos dados da parte de baixdo do grafico
// Datasets - Labes, qual o tipo de informação

function ChartComponent({ data, titleChart, colorLine, descriptionData }) {
  // let location = useLocation();
  // console.log(location);

  useEffect(() => {
    setDataChart({
      labels: Object.keys(data),

      datasets: [
        {
          label: descriptionData,
          data: Object.values(data),
          backgroundColor: ["rgba(255, 99, 132, 0.0)"],
          borderColor: [colorLine],
          borderWidth: 2,
          pointBorderColor: colorLine,
        },
      ],
    });
  }, [data, colorLine, descriptionData]);

  const [dataChart, setDataChart] = useState({});

  return (
    <Container>
      <Line
        data={dataChart}
        options={{
          title: {
            display: "chart",
            text: titleChart,
            fontSize: 18,
          },
          maintainAspectRatio: false,
        }}
      />
    </Container>
  );
}

export default ChartComponent;
