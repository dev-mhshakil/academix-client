import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Doughnut, Bar, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);

const Dashboard = () => {
  return (
    <div className="p-4">
      <div className="w-full md:w-[calc(100vw-350px)] h-[400px] bg-secondary/20 p-4 border border-primary flex items-center justify-center">
        <Doughnut
          data={{
            labels: ["Web Development", "SEO", "UI/UX"],
            datasets: [
              {
                label: "Enrollment",
                data: [300, 50, 100],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-5">
        <div className="w-full h-[400px] bg-secondary/20 p-4 border border-primary flex items-center justify-center">
          <Bar
            data={{
              labels: ["January", "February", "March"],
              datasets: [
                {
                  label: "Revenue",
                  data: [200000, 300000, 400000],
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  beginAtZero: true,
                },
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
        <div className="w-full h-[400px] bg-secondary/20 p-4 border border-primary flex items-center justify-center">
          <Line
            data={{
              labels: ["January", "February", "March", "April"],
              datasets: [
                {
                  label: "Sales",
                  data: [6500, 5900, 8000, 8100],
                  fill: false,
                  borderColor: "#742774",
                  tension: 0.1, // Adds a slight curve to the lines
                  pointBackgroundColor: "#742774",
                  pointBorderColor: "#742774",
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  beginAtZero: true,
                },
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
