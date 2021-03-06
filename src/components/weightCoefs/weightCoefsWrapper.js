import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import WeightCoefEvalSub from './WeightCoefEvalSub';
import ImportanceCoef from './ImportanceCoef';

const WeightCoefEvalSubj = ({setWeights, setWeightCoefs}) => {


    return (<>
            <hr></hr>
            <div style={{ display: 'flex', alignItems: 'center', paddingTop: '4em' }}>
                <div style={{ width: "60%" }}>
                    <h3>Вагові коефіцієнти суб'єктфів оцінювання</h3>
                    <WeightCoefEvalSub setWeights={setWeights}/>
                </div>

                <div style={{ width: '35%', paddingLeft: '5%' }}>
                    <h3>Коефіцієнти вагомості</h3>
                    <ImportanceCoef setWeightCoefs={setWeightCoefs}/>
                </div>
            </div>
    </>);
}

export default WeightCoefEvalSubj;