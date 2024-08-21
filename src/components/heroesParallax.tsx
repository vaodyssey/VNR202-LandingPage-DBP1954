
import { animated, config, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';
import { InView, useInView } from 'react-intersection-observer';

import { HeroContent, HeroContents } from '../content/heroes';
import '../styles/heroesParallax.css';
export default function HeroesParallax() {
    const [image, setImage] = useState<string>(HeroContents[0].image);
    const changeImage = (index: number) => {
        const img = HeroContents[index].image;
        setImage(img)
    }
    return (
        <div id='heroes-parallax-container'>
            <div id='heroes-sticky-section'>
                <StickyCard image={image} key={image} />
            </div>
            <div id='heroes-parallax-section'>
                <InView>
                    {HeroContents.map((content, index) => {
                        return (
                            <ParallaxCard content={content} index={index} changeImage={changeImage} />
                        )
                    })}
                </InView>

            </div>
        </div>
    )
}

type StickyCardProps = {
    image: string
}
function StickyCard({ image }: StickyCardProps) {
    const styles = useSpring({
        config: config.gentle,
        from: { opacity: 0, transform: 'translateY(30px)' },
        opacity: 1,
        transform: 'translateY(0)',
        delay: 100
    });
    return (
        <animated.div style={styles} id='heroes-sticky-card-img-wrapper'>
            <img src={image} id='heroes-sticky-card-img' />
        </animated.div>
    )

}
type ParallaxCardProps = {
    content: HeroContent,
    index: number,
    changeImage: (cardIndex: number) => void;
}
function ParallaxCard({ content, index, changeImage }: ParallaxCardProps) {
    const handleEnter = (index: number) => {
        changeImage(index)
    };

    const { ref, inView, entry } = useInView({
        triggerOnce: false, // To keep observing
        threshold: 0.5, // Adjust this threshold as needed
    });

    useEffect(() => {
        if (inView) {
            handleEnter(index); // Pass index + 1 for better readability
        }
    }, [inView]);

    return (
        <div id='heroes-parallax-card-text-container' key={index}
            ref={ref} >
            <div id='heroes-parallax-card-title'>{content.title}</div>
            <p id='heroes-parallax-card-text'>{content.content}</p>
        </div >

    )
}