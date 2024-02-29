import React from "react";
import { useState, useEffect } from "react";
import { Progress, ButtonGroup, Button, Row, Col } from 'rsuite';


const Progres = () => {
  const [percentage, setPercentage] = useState(100);


  const status = percentage === 100 ? 'success' : null;
  const color = percentage === 100 ? '#52c41a' : '#3385ff';
  const trailColor = '#D3D3D3';

  useEffect(() => {
    // Assuming you have an API call to fetch data
    // Replace the API call with your actual implementation
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thingspeak.com/channels/2449850/feeds/last.json?api_key=30VOJ2TIWYNRRKYE&results=1"
        );
        const data = await response.json();
        console.log(data);

        // Update state based on the fetched data
        setPercentage(Math.ceil((((((31-data.field1)+(31-data.field2))) * 1.61)))); 
        console.log(percentage)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Set up an interval to fetch data every 15 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 15000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <div className="h-lvh flex flex-col justify-center items-center gap-3 border-2 rounded-xl py-2 px-8">
      <div className="" >Inventory</div>
      <div style={{ width: 200,}}>
            <Progress.Circle trailWidth={8} strokeWidth={8} showInfo={false} percent={percentage} strokeColor={color} status={status} trailColor={trailColor}/>
        </div>
        <div className="">{percentage}%</div>
    </div>
  );
};

export default Progres;
