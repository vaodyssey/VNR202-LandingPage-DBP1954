
import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
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
import Advancement from './sections/Advancement';
import AppBarSection from './sections/AppBarSection';
import Context from './sections/Context';
import Documentaries from './sections/Documentaries';
import Footer from './sections/Footer';
import Logistics from './sections/Logistics';
import Opening from './sections/Opening';
import Scale from './sections/Scale';
import Strategy from './sections/Strategy';

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
    <ParallaxProvider>
      <AppBarSection />
      <Opening />
      <Context />
      <Strategy />
      <Logistics />
      <Advancement />
      <Scale />
      <Documentaries />
      <Footer />
    </ParallaxProvider>
  )
}

export default App
