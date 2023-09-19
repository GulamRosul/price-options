import { LineChart as LChart, Line, XAxis,YAxis } from "recharts";
const LineChart = () => {
    const studentMarksData = [
        { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 92 },
        { id: 2, name: "Bob", math: 68, physics: 75, chemistry: 80 },
        { id: 3, name: "Charlie", math: 98, physics: 96, chemistry: 90 },
        { id: 4, name: "David", math: 58, physics: 65, chemistry: 70 },
        { id: 5, name: "Emma", math: 68, physics: 72, chemistry: 78 },
        { id: 6, name: "Frank", math: 80, physics: 88, chemistry: 85 },
        { id: 7, name: "Grace", math: 75, physics: 82, chemistry: 78 },
        { id: 8, name: "Hannah", math: 86, physics: 90, chemistry: 92 },
        { id: 9, name: "Ian", math: 77, physics: 80, chemistry: 85 },
        { id: 10, name: "Jack", math: 79, physics: 82, chemistry: 88 },
    ];
    

  return (
    <div>
          <LChart width={800} height={400} data={studentMarksData}>
              <XAxis dataKey="name" />
              <YAxis></YAxis>
              <Line dataKey="math" stroke="red"></Line>
              <Line dataKey={'physics'} stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
