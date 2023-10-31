import React from 'react';
import { Slider } from '@material-tailwind/react';

const sliderClasses = 'w-full';
const thumbClasses = 'bg-black';
const railClasses = 'bg-gray-400';
const trackClasses = 'bg-black';

function SliderProton({ value, changePrice }) {
  return (
    <div className="w-full">
      <Slider
        min={1000}
        max={5000}
        value={value}
        onChange={changePrice}
        color="gray"
      />
    </div>
  );
}

export default SliderProton;