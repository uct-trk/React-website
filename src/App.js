import { useState } from 'react';
import Divider from './componets/Divider/Divider';
import DropDown from './componets/DropDown/DropDown';
import Footer from './componets/Footer/Footer';
import Hero from './componets/Hero/Hero';
import InfoSection from './componets/InfoSection/InfoSection';
import InfoSection2 from './componets/InfoSection2/InfoSection2';
import Navbar from './componets/Navbar/Navbar';
import { FooterContainer } from './containers/footer';
import { DividerData, DividerData2 } from './data/DividerData';
import { InfoData, InfoDataTwo } from './data/InfoData';
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
   <Divider {...DividerData} {...DividerData2}/>
   <InfoSection2 {...InfoDataTwo}/>
   <FooterContainer/>
   </>
  );
}

export default App;
