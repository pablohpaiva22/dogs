import React from "react";
import styles from "./AccountStaticsGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const AccountStaticsGraph = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (data.length !== 0) {
      const graphData = data.map((item) => {
        return { x: item.title, y: +item.acessos };
      });

      setGraph(graphData);

      setTotal(
        data
          .map((item) => {
            return +item.acessos;
          })
          .reduce((a, b) => {
            return a + b;
          })
      );
    }
  }, [data]);

  return (
    <section className={styles.graph}>
      <div className={styles.total}>Total de acessos: {total}</div>

      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>

      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default AccountStaticsGraph;
