import React, { useState, useEffect } from 'react'
import { Url } from 'url'
import pushuprow from '../img/pushuprow.jpg'
import fullbacksquat from '../img/fullbacksquat.jpg'
import deadlift from '../img/deadlift.jpg'
import stretch from '../img/stretch.jpg'

type img = {
    url: Url,
    title: string
}

const ImageSlider = () => {
    const slides: img[] = [
        { url: pushuprow, title: 'pushup' },
        { url: fullbacksquat, title: 'fullbacksquat' },
        { url: deadlift, title: 'deadlift' },
        { url: stretch, title: 'stretch' }
    ]
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            gotoNext()
        }, 8000)
        return () => {
            // 👇️ clear timeout when component unmounts
            clearTimeout(timeOut);
        };
    }, [currentIndex])

    // const gotoPrevious = () => {
    //     const isFirstSlide = currentIndex === 0
    //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    //     setCurrentIndex(newIndex)
    // }

    const gotoNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const gotoSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div className='imageSlider'>
            <div className='slider' style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
                <div className='layer'>
                    <article className='quickInfo'>
                        <h2>Crossfit La Muralla</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et venenatis nulla. Sed nec ex vel lorem tincidunt dignissim. Vivamus varius, libero et elementum vestibulum, lacus diam congue sapien, cursus viverra purus nulla sit amet justo.</p>
                    </article>
                    <div className='dots'>{
                        slides.map((slide, index) => {
                            return (
                                <p className='dot' key={index} onClick={() => gotoSlide(index)}>&bull;</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider
