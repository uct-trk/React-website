import { useState } from 'react';
import DropDown from './componets/DropDown/DropDown';
import Hero from './componets/Hero/Hero';
import InfoSection from './componets/InfoSection/InfoSection';
import Navbar from './componets/Navbar/Navbar';
import { InfoData } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
     setIsOpen(!isOpen)
  }

  return (
   <>
   <GlobalStyle/>
   <Navbar toggle={toggle}/>
   <DropDown isOpen={isOpen} toggle={toggle}/>
   <Hero slides={SliderData}/>
   <InfoSection {...InfoData}/>
   </>
  );
}

export default App;
