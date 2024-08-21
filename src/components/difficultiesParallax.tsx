import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useEffect, useRef, useState } from 'react'
import { DifficultyContents } from '../content/difficulties'
import '../styles/difficultiesParallax.css'
export default function DifficultiesParallax() {
    const alignCenter = { display: 'flex', alignItems: 'center' }
    const parallaxRef = useRef<IParallax>(null)
    const [currentImage, setCurrentImage] = useState<string>(DifficultyContents[0].image);
    const listLength = DifficultyContents.length
    let offset = -1;
    let offsetDifference = 1;



    const scrollListener = () => {
        const container = parallaxRef.current?.container
            .current as HTMLDivElement

        container.onscroll = () => {
            console.log('Current index:', parallaxRef.current?.content)
        }
        return () => {
            container.onscroll = null
        }
    };
    useEffect(scrollListener, []);
    return (
        <div id='difficulties-parallax-container'>
            <Parallax pages={listLength} id='difficulties-parallax' ref={parallaxRef}>
                <ParallaxLayer sticky={{ start: 0, end: listLength - 1 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                    {/* <div className='card sticky'>
                        <p>I'm a sticky layer</p>
                    </div> */}
                    <StickyCard image={currentImage} />
                </ParallaxLayer>
                {DifficultyContents.map((content) => {
                    offset += offsetDifference
                    return (
                        <ParallaxLayer offset={offset} speed={0.1} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                            <ParallaxCard content={content.content} />
                        </ParallaxLayer>

                    )
                })}
            </Parallax>
        </div>
    )
}

type StickyCardProps = {
    image: string
}
function StickyCard({ image }: StickyCardProps) {
    return (
        <div id='sticky-card'>
            <img src={image} id='sticky-card-img' />
        </div>)
}
type ParallaxCardProps = {
    content: string
}
function ParallaxCard({ content }: ParallaxCardProps) {
    return (
        <div id='parallax-card'>
            <p id='parallax-card-text'>{content}</p>

        </div>
    )
}