import { useState } from 'react';

interface Pet {
  id: number;
  name: string;
  type: string;
}

const ArraysEx = () => {
  const [colors, setColors] = useState<string[]>(['red', 'orange', 'yellow']);

  const addColor = (color: string): void => {
    setColors([...colors, color]);
  };

  const [pets] = useState<Pet[]>([
    { id: 1, name: 'Zaki', type: 'Cat' },
    { id: 2, name: 'AirBud', type: 'Dog' },
    { id: 3, name: 'Tweety', type: 'Bird' },
  ]);

  return (
    <div>
      <h2>Colors</h2>
      <ol>
        {colors.map((color, index) => (
          <li key={index} className="color-item">
            <span>{index + 1}.</span> <span>{color}</span>
          </li>
        ))}
      </ol>

      <button onClick={() => addColor('green')}>Add Green</button>
      <button onClick={() => addColor('blue')}>Add Blue</button>
      <button onClick={() => addColor('violet')}>Add Violet</button>

      <h2>Pets</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArraysEx;

