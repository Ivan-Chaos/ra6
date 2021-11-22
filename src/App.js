import './App.css';
import { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeightCoefsWrapper from './components/weightCoefs/WeightCoefsWrapper';
import EstimatesWrapper from './components/Estimates/EstimatesWrapper';
import WeightedEstimates from './components/WeightedEstimates/WeightedEstimates';

function App() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    const [estimates, setEstimates] = useState();
    const [weights, setWeights] = useState();
    const [weightCoefs, setWeightCoefs] = useState();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Slider {...settings} style={{ width: '95vw', height: "90vh", padding: '3em', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <div>
                    <h1>Вагові коефіцієнти</h1>
                        <WeightCoefsWrapper setWeights={setWeights} setWeightCoefs={setWeightCoefs} />
                </div>

                <div>
                    <h1>Оцінки</h1>
                    <EstimatesWrapper setEstimates={setEstimates}/>
                </div>
                <div>
                    <h1>Зважені оцінки</h1>
                    <WeightedEstimates weights={weights} estimates={estimates} weightCoefs={weightCoefs}/>
                </div>

                <div>
                    <h1>Діагарми</h1>

                </div>

            </Slider>

        </div>
    );
}

export default App;
