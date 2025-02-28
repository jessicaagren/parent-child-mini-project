import { useState } from 'react';
import './ChooseAColorBox.scss';

type ColorBox = {
  id: number;
  color: string;
};

function ChooseAColorBox() {
  const [colorBoxes, setColorBoxes] = useState<ColorBox[]>([]);

  const addColorBox = () => {
    setColorBoxes([...colorBoxes, { id: Date.now(), color: '#ffffff' }]);
  };

  const updateColor = (id: number, newColor: string) => {
    setColorBoxes(
      colorBoxes.map((box) =>
        box.id === id ? { ...box, color: newColor } : box
      )
    );
  };

  return (
    <div className='ChooseAColorBox'>
      <h2>Add color</h2>

      <button onClick={addColorBox} className='AddColorBoxButton'>
        Add color box
      </button>
      <div className='ColorBoxes'>
        {colorBoxes.map((box) => (
          <div key={box.id} className='ColorBoxContainer'>
            <input
              type='color'
              value={box.color}
              onChange={(e) => updateColor(box.id, e.target.value)}
              className='ColorPicker'
            />
            <div
              className='ChooseAColorItem'
              style={{ backgroundColor: box.color }}>
              <p>Color: {box.color}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseAColorBox;
