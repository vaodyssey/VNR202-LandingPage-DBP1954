import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import './App.css';
import AppBarSection from './sections/AppBarSection';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
function App() {

  return (
    <div>
      <AppBarSection />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default App
