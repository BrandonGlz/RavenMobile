import React, { useState } from 'react';

const DaysOfWeek = () => {

  //Manejo de cantidad de veces que se va a el inserto del horario
  const [blockCount, setBlockCount] = useState(1);//Iniciamos en 1 para que solo muestre una vez el llenado de datos
  const addFormBlock = () => {
    setBlockCount(blockCount + 1);//Indicamos que cada que se presione el boton se añada un nuevo inserto
  };

  return (
    <div className="container">
      <form>
        <div className="label">
          <p>Select the day and time</p>
        </div>


        {[...Array(blockCount)].map((_, index) => (
          <div key={index} className="input">
            <div>
              <label htmlFor={`dayOfWeek-${index}`}>Day of Week:</label>
              <select id={`dayOfWeek-${index}`} name={`dayOfWeek-${index}`} required>
                <option value="">Select a day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </select>
            </div>
            <br />

            <div>
              <label htmlFor={`time-${index}`}>Time:</label>
              <input type="time" id={`time-${index}`} name={`time-${index}`} required />
            </div>
            <br />
          </div>
        ))}

          <button type="button" className="add-button" onClick={addFormBlock}>+</button>
          
      </form>
    </div>
  );
};

export default DaysOfWeek;