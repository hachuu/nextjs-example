import { NextPage } from "next";
import { Line } from "react-chartjs-2";



const Monitoring: NextPage = () => {
  return (
    <>
      <div>여기는 Monitoring 화면</div>
      <Line
        data={{
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "첫번째",
              data: [5, 6, 7, 0, 1, 2, 3, 4],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
            },
            {
              label: "두번째",
              data: [3, 2, 1, 9, 0, 8, 1, 2],
            },
          ],
        }}
      />
    </>
  );
};

export default Monitoring;
