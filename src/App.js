import Slider from './components/Slider';
import SliderData from './components/SliderData';
import Menu from './components/Menu';
import './App.css';
import Arrow from './components/Arrow';
import { useState } from 'react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderLength = SliderData.length - 1;

  //for custume slider
  const [customise, setCustomise] = useState({
    dots: true,
    loop: true
  })
  
  const prevFunction = () => {
    setCurrentIndex(cur => cur <= 0 ? customise.loop ? sliderLength : 0 : cur - 1)
  }
  const nextFunction = () => {
    setCurrentIndex(cur => cur >= sliderLength ? customise.loop ? 0 : sliderLength : cur + 1)

  }

  return (
    <div className='wrapper'>
      <Menu customise={customise} setCustomise={setCustomise}/>
      <Arrow position="left" moveSlide = {prevFunction}/>
      <Slider currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} customise={customise}/>
      <Arrow position="right" moveSlide = {nextFunction}/>
    </div>
  );
}

export default App;
