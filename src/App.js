//--------------------------------------------------------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import { csv } from 'd3';
import { useState, useEffect } from 'react';

const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 180;
const eyeOffsetY = 180;
const eyeRadius = 80;


const csvUrl = "https://raw.githubusercontent.com/mccallw23/DataViz/master/ToiletMap.csv"
const row = d => {
  d.Latitude = +d.Latitude;
  d.Longitude = +d.Longitude;
  return d;
};

export const useCities = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};

const App = () => (





  //background object tag
  <svg width={width} height={height}>


    {/* group for other containers*/}
  </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
// // --------------------------------------------------------------------------------------------------------------------------------

// MOUSEMOVE EXAMPLE

// import React, { useState, useCallback } from 'react';
// import ReactDOM from 'react-dom';
// //setting constants for use
// const width = 960;
// const height = 500;
// const circleRadius = 30;
// const initialMousePosition = { x: width / 2, y: height / 2 };

// const App = () => {
//   const [mousePosition, setMousePosition] = useState(initialMousePosition);

//   const handleMouseMove = useCallback(event => {
//     const { clientX, clientY } = event;
//     console.log({ clientX, clientY });
//     setMousePosition({ x: clientX, y: clientY });
//   }, [setMousePosition]);


//   //first let's look here.
//   return (
//     <svg width={width} height={height} onMouseMove={handleMouseMove}>
//       <circle
//         cx={mousePosition.x}
//         cy={mousePosition.y}
//         r={circleRadius}
//       />
//     </svg>
//   );
// };
// //the rootElement line basically takes all fo the React contents above and tells it where to go
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

// export default App;

// //--------------------------------------------------------------------------------------------------------------------------------

// import React, { useState, useCallback } from 'react';
// import ReactDOM from 'react-dom';
// import * as d3 from 'd3';
// //setting constants for use
// const width = 960;
// const height = 500;

// const csvUrl = 'https://raw.githubusercontent.com/katherinel09/socy34_module1-4/main/socy34_data_texas_m2_UPDATED.csv';

// const App = () => (

//   <head></head>

// );
// //the rootElement line basically takes all fo the React contents above and tells it where to go
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);


// d3.csv(csvUrl).then(data => {
//   let message = '';
//   message = message + (d3.csvFormat(data).length / 1024) + ' kB\n';
//   message = message + data.length + ' rows\n';
//   message = message + data.columns.length + ' columns';
// });

// export default App;

// //--------------------------------------------------------------------------------------------------------------------------------

// //NOW LET'S USE REACT INSTEAD OF JUST D3 to load in data
// import React, { useState, useCallback, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import * as d3 from 'd3';
// import { doExpression } from '@babel/types';

// const csvUrl =
//   'https://raw.githubusercontent.com/katherinel09/socy34_module1-4/main/socy34_data_texas_m2_UPDATED.csv';

// const message = data => {
//   let message = '';
//   message = message + d3.csvFormat(data).length / 1024 + ' kB\n';
//   message = message + data.length + ' rows\n';
//   message = message + data.columns.length + ' columns';
//   return message;
// };

// const App = () => {
//   //look, these are states just like useMousePositions
//   const [data, setData] = useState(null); //intial data is just null.

//   //If we didn't use useEffect, d3.csv(csvUrl).then(setData would run infinitely. that's what the empty array indicates.
//   //the then here simply takes the CSV and populated setData with it when it runs. UseEffect makes ir tun only once
//   useEffect(() => {
//     d3.csv(csvUrl).then(setData);
//   }, []);

//   return (message(data));
// };
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

// export default App;


// // --------------------------------------------------------------------------------------------------------------------------------

// // Let's make a bar graph in React and D3!
// import React, { useState, useCallback, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { csv, arc, pie, scaleBand, scaleLinear, max } from 'd3';



// const csvUrl =
//   'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

// // set up axis margins!
// const width = 960;
// const height = 500;
// // let's experiment with these
// const margin = { top: 20, right: 20, bottom: 20, left: 200 };


// const App = () => {
//   const [data, setData] = useState(null);


//   useEffect(() => {
//     const row = d => {
//       d.Population = +d['2020'];
//       return d;
//     };
//     csv(csvUrl, row).then(data => {
//       setData(data.slice(0, 10));
//     });
//   }, []);

//   if (!data) {
//     return <pre>Loading...</pre>;
//   }
//   // What is inner height and width? We're using margin conventions here. It's the space between our graph and the edges of 
//   // the window
//   const innerHeight = height - margin.top - margin.bottom;
//   const innerWidth = width - margin.left - margin.right;

//   const yScale = scaleBand()
//     //domain is our dataspcae, the actual raw values of data, forr Y this is country names
//     .domain(data.map(d => d.Country))
//     //range is the corresponding width for each name. For our needs it's just 0 to innerHeight.
//     .range([0, innerHeight]);

//   //linear scale is different. This is the ratio between our raw population data and our size on screen that we want.
//   const xScale = scaleLinear()
//     .domain([0, max(data, d => d.Population)])
//     .range([0, innerWidth]);

//   return (
//     <svg width={width} height={height}>
//       {/* transform here implements the margin space we made above, g is a group,
//        so everything in it will move according to the margin */}
//       <g transform={`translate(${margin.left},${margin.top})`}>
//         {/* This gives us the ticks on the X bar, which we use to make a line and manipulate it*/}
//         {xScale.ticks().map(tickValue => (
//           // we can set xvalue of both lines as equal to our xScale
//           <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
//             {/* deciding where line goes and color of line */}
//             <line y2={innerHeight} stroke="black" />
//             <text
//               // makes them centered
//               style={{ textAnchor: 'middle' }}
//               dy=".71em"
//               // makes them not rub into the line above
//               y={innerHeight + 3}
//             >
//               {tickValue}
//             </text>
//           </g>
//         ))}
//         {/* Ticks does not apply to bandScales, so we use domain instead, and we use map to decide what values the ticks will have */}
//         {yScale.domain().map(tickValue => (
//           <text
//             key={tickValue}
//             style={{ textAnchor: 'end' }} //aligns text to end
//             x={-3} // gives us a bit of space on the left
//             dy=".32em" // helps center
//             y={yScale(tickValue) + yScale.bandwidth() / 2}
//           >
//             {tickValue}
//           </text>
//         ))}
//         {data.map(d => (
//           <rect
//             key={d.Country}
//             x={0}//all bars start at x = 0
//             y={yScale(d.Country)} // all bars start at whatever country position they are, according to our YsCale
//             width={xScale(d.Population)} // self-explanatory
//             height={yScale.bandwidth()} // height of bar is the bandwidth we set.
//           />
//         ))}
//       </g>
//     </svg>
//   );
// };
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

// export default App;

// --------------------------------------------------------------------------------------------------------------------------------