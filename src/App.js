import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState();
  const [exception, setException] = useState('');
  const [total, setTotal] = useState(0);

  const delimiters = ["\n", "\\n", "'", '"', "`", "[", "]", "{", "}", "(", ")", "//", "*/", "/", "${", ":", ";"];

  function add(numbers) {

    if (!numbers) {
      return 0;
    }

    delimiters.forEach((value) => {
      const regex = new RegExp(`\\${value}`, 'g');
      numbers = numbers.replace(regex, ",");
    });

    const numberArray = numbers.split(",");

    let total = 0;
    let negatives = [];
    // Process each number
    numberArray.forEach(num => {
      if (num !== "") {
        const value = parseInt(num, 10);
        if (value < 0) {
          negatives.push(value);
        } else {
          total += value;
        }
      }
    });
    
    // Throw an exception if there are negative numbers
    if (negatives.length > 0) {
      setException(
        `\nNegative numbers not allowed: ${negatives.join(", ")}`
      )
    }

    setTotal(total);
  }

  return (
    <div className="container">
      <p>Enter a string of comma or delimiters separated numbers: </p>
      <input className='input' onChange={(e) => setInput(e?.target?.value?.trim())} />
      <button className='button' onClick={() => add(input)}>Calculate</button>
      <p>{exception}</p>
      <h3>Total Sum: {total}</h3>

      <p><span style={{fontWeight: 'bold'}}>Note:</span> Possible delimiters are \n, , ', ", `, [, ], (, ), //, */, /, :, ; {`{ }`}</p>
    </div>
  );
}

export default App;
