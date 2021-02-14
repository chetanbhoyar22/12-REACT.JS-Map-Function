import  './Chetan.css';
import Extra from './Extra.js';

function App()
{
  const allowedState = 
  [
    { MyCar: "BMW", Owner : "ABC" },
    { MyCar: "TESLA", Owner : "ELON " },
    { MyCar: "TATA", Owner : "RATAN TATA " },
   
  ];

  return(
    <div>
      <h2>Select Tag (Dropdown) -</h2>

      <select>
              {allowedState.map((i, index) => (
                <option key={i.id}>{i.MyCar}</option>
              ))}
      </select>
     
      <h2>ol Tag (Ordered List) -</h2>

      <ol>
              {allowedState.map((i, index) => (
                <li key={i.id}>{i.MyCar}</li>
              ))}
      </ol>

      <h2>ul Tag (Unordered List) -</h2>

      <ul>
              {allowedState.map((i, index) => (
                <li >{i.MyCar}</li>
              ))}
      </ul>

      <h2>Table Tag -</h2>

      <table className="MyTable">
                <tr>
                   
                    <td>Sr. No.</td>
                    <td>Name</td>
                    <td>Owner Name</td>
                </tr>
                
                {allowedState.map((i, index) => (
                  <tr>
                <td key={i.id}>{index+1}</td>
                <td key={i.id}>{i.MyCar}</td>
                <td key={i.id}>{i.Owner}</td>
                </tr>
              ))}  
      </table>
      <Extra/>
    </div>
  );
}
export default App;