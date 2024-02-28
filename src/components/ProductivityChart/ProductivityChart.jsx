// ProductivityChart.js
import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Label } from "recharts";
import './ProductivityChart.scss';
const ProductivityChart = () => {
  const tasks = useSelector((state) => state.todos.tasks); // Assuming your tasks are stored in Redux state

  // Count completed and incomplete tasks
  const completedTasks = tasks.filter((task) => task.completed).length;
  const incompleteTasks = tasks.length - completedTasks;

  // Calculate percentage of completed tasks
  const percentageCompleted = Math.floor((completedTasks / tasks.length) * 100);

  // Prepare data for the chart
  const data = [
    { name: "Completed Tasks", value: completedTasks },
    { name: "Incomplete Tasks", value: incompleteTasks },
  ];

  // Define colors for the chart
  const colors = ["#13c90f", "#000000"];

  return (

   tasks.length>0?(  <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
          {/* Custom label for displaying percentage */}
          <Label
            value={() => `${percentageCompleted}% completed tasks`}
            position="center"
            content={({ viewBox }) => {
              const { cx, cy } = viewBox;
              return (
                <text
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={7}
                  fill="#000"
                >
                  {`${percentageCompleted}%  completed tasks`}
                </text>
              );
            }}
          />
        </Pie>
      </PieChart>):(
        <div className="productivity__message">
            <p>Add some tasks to see the magic🪄!</p>
        </div>
      )


  
  );
};

export default ProductivityChart;
