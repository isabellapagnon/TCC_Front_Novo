/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
// import { colors, fonts } from 'src/styles/Theme';
import styled from 'styled-components';
// import DailyTable from '../components/tables/DailyTable';

const TeamName = styled.div`
position: fixed;
width: 920px;
height: 800px;
flex-shrink: 0;
color: #FFF;
font-family: Montserrat, sans-serif;
font-size: 50px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;


// const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

// function Daily() {
//   const [data, setData] = useState([]);

//   const handleInputChange = (event, dayIndex, field) => {
//     const newData = [...data];
//     newData[dayIndex][field] = event.target.value;
//     setData(newData);
//   };

//   const renderTableRows = () => {
//     return daysOfWeek.map((day, index) => (
//       <tr key={index}>
//         <td>{day}</td>
//         <td>
//           <input
//             type="text"
//             value={data[index]?.yesterday || ''}
//             onChange={(event) => handleInputChange(event, index, 'yesterday')}
//           />
//         </td>
//         <td>
//           <input
//             type="text"
//             value={data[index]?.today || ''}
//             onChange={(event) => handleInputChange(event, index, 'today')}
//           />
//         </td>
//         <td>
//           <input
//             type="text"
//             value={data[index]?.impediment || ''}
//             onChange={(event) => handleInputChange(event, index, 'impediment')}
//           />
//         </td>
//       </tr>
//     ));
//   };

//   return (
//     <div className="App">
//       <h1>Daily Scrum Table</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Dia</th>
//             <th>O que fiz ontem</th>
//             <th>O que farei hoje</th>
//             <th>Impedimentos</th>
//           </tr>
//         </thead>
//         <tbody>{renderTableRows()}</tbody>
//       </table>
//     </div>
//   );
// }

// export default Daily;

const Daily = () => {
  return (
    <div className='daily'>
    {/* <h1>Daily</h1> */}
    <TeamName>Swat Team - Daily</TeamName>
    {/* <DailyTable></DailyTable> */}
    </div>
  );
}

export default Daily;