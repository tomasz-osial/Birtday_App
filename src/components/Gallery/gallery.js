import React, {Component} from "react";
import './gallery.scss';
import image1 from './Images/child-clouds-enjoyment-environment-552168.jpg';
import image2 from './Images/photo-of-children-playing-with-dry-leaves-1582736.jpg';
import image3 from './Images/4k-wallpaper-adorable-blur-boy-1148998.jpg';
import image4 from './Images/action-activity-balls-day-296302.jpg';
import image5 from './Images/action-activity-boy-children-296301.jpg';
import image6 from './Images/depth-of-field-photography-of-p-l-a-y-wooden-letter-decors-591652.jpg';
import image7 from './Images/sunglasses-girl-swimming-pool-swimming-61129.jpg';
import leftArrow from './Images/arrowhead-thin-outline-to-the-left.png';
import rightArrow from './Images/arrow-point-to-right.png';

class Gallery extends Component {

    state = {
        images: [image1, image2, image3, image4, image5, image6, image7],
        currentIndex: 0,
        leftArrow: leftArrow,
        rightArrow: rightArrow
    };

    goToPrevSlide = () => {
        const {currentIndex, images} = this.state;
            if (currentIndex === 0) {
                this.setState({
                    currentIndex: images.length - 1})
            } else {
                this.setState({
                    currentIndex: currentIndex -1})
            }
    };

    goToNextSlide = () => {
        const {currentIndex, images} = this.state;
        if (currentIndex === images.length - 1) {
            this.setState({
                currentIndex: 0
            })
        } else {
            this.setState({
                currentIndex: currentIndex +1})
        }
    };
    componentDidMount() {
        this.interval = setInterval(()=>{
            this.goToNextSlide()
        }, 4000)
    }

    render() {
        return (
            <>
                <div id='gallery' className='galleryTitle'>Galeria</div>
                <div className='slider'>
                    <LeftArrow
                        leftArrow = {this.state.leftArrow}
                        goToPrevSlide = {this.goToPrevSlide}
                    />
                        <Slide
                               image={this.state.images}
                               currentIndex={this.state.currentIndex}
                        />
                    <RightArrow
                        rightArrow = {this.state.rightArrow}
                        goToNextSlide = {this.goToNextSlide}
                    />
                </div>
            </>
        )
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
}
const Slide = (props) => {
    return (
        <>
            <img src={props.image[props.currentIndex]}
                 alt='obrazek'
                 className='slide'
            />
        </>
    )
};

const LeftArrow = (props) => {
    return (
            <>
                <img src={props.leftArrow}
                     alt='Left Arrow'
                     onClick={props.goToPrevSlide}
                     className='leftArrow'
                />
            </>
    )
};

const RightArrow = (props) => {
    return (
        <>
            <img src={props.rightArrow}
                 alt='Right Arrow'
                 onClick={props.goToNextSlide}
                 className='rightArrow'
            />
        </>
    )
};

export default Gallery;