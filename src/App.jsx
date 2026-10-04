import Navbar from './components/layout/Navbar';
import CustomCursor from './components/animation/CustomCursor';
import ScrollProgress from './components/animation/ScrollProgress';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Academics from './components/sections/Academics';
import Life from './components/sections/Life';
import Stories from './components/sections/Stories';
import Admissions from './components/sections/Admissions';
import Footer from './components/layout/Footer';
import { useTheme } from './hooks/useTheme';

export default function App(){
 const [theme,setTheme]=useTheme();
 return <><ScrollProgress/><CustomCursor/><Navbar theme={theme} onToggle={()=>setTheme(theme==='light'?'dark':'light')}/><main><Hero/><About/><Academics/><Life/><Stories/><Admissions/></main><Footer/></>;
}
