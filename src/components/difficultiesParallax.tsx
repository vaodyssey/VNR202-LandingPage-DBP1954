
import { animated, config, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';
import { InView, useInView } from 'react-intersection-observer';
import { DifficultyContents } from '../content/difficulties';
import '../styles/difficultiesParallax.css';
export default function DifficultiesParallax() {
    const [image, setImage] = useState<string>(DifficultyContents[0].image);
    const changeImage = (index: number) => {
        const img = DifficultyContents[index].image;
        setImage(img)
    }
    return (
        <div id='difficulties-parallax-container'>
            <div id='sticky-section'>
                <StickyCard image={image} key={image} />
            </div>
            <div id='parallax-section'>
                <InView>
                    {DifficultyContents.map((content, index) => {
                        return (
                            <ParallaxCard content={content.content} index={index} changeImage={changeImage} />
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
        <animated.div style={styles} id='sticky-card-img-wrapper'>
            <img src={image} id='sticky-card-img' />
        </animated.div>
    )

}
type ParallaxCardProps = {
    content: string,
    index: number,
    changeImage: (cardIndex: number) => void;
}
function ParallaxCard({ content, index, changeImage }: ParallaxCardProps) {
    const handleEnter = (index: number) => {
        console.log(`Div ${index} entered the viewport`);
        changeImage(index)
    };

    const { ref, inView } = useInView({
        triggerOnce: false, // To keep observing
        threshold: 0.5, // Adjust this threshold as needed
    });

    useEffect(() => {
        if (inView) {
            handleEnter(index); // Pass index + 1 for better readability
        }
    }, [inView]);

    return (
        <div id='parallax-card-text-container' key={index}
            ref={ref} >
            <p id='parallax-card-text'>{content}</p>
        </div >

    )
}