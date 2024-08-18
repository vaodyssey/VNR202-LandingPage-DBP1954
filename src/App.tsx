import { useEffect } from 'react';
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
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Section6 from './sections/Section6';
function App() {
  useEffect(() => {
    const script = document.createElement('script');
    initChatbot(script)
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const initChatbot = (script: any) => {
    script.src = 'https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.5/libs/oversea/index.js';
    script.async = true;

    script.onload = () => {
      if ((window as any).CozeWebSDK) {
        new (window as any).CozeWebSDK.WebChatClient({
          config: {
            bot_id: '7403270240769671176',
          },
          componentProps: {
            title: 'Coze',
            layout: 'pc',
          },
        });
      }
    };

    document.body.appendChild(script);
  }
  return (
    <div>
      <AppBarSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  )
}

export default App
