import { useState, useEffect } from 'react';
import Select from 'react-select';
import DataTable from './DataTable';
import DiagramComponent from './DiagramComponent';

const options = [
    { value: 'areaExperts', label: 'Експерти галузі' },
    { value: 'useabilityExperts', label: 'Експери юзабіліті' },
    { value: 'devExperts', label: "Експерти з прогамування" },
    { value: 'potentialUsers', label: "Потенційні користувачі" },
];

const DiagramsWrapper = ({ weights, estimates, weightCoefs }) => {
    const [currentDiagram, setDiagram] = useState(options[0]);
    const [diagramData, setDiagramData] = useState({angles: [], distance: []});
    const [totalSurface, setTotalSurface] = useState(0);

    useEffect(() => {
        console.log("🚀 ~ file: DiagramsWrapper.js ~ line 18 ~ DiagramsWrapper ~ currentDiagram", currentDiagram)
    }, [currentDiagram]);

    useEffect(() => {
        console.log("🚀 ~ file: DiagramsWrapper.js ~ line 25 ~ DiagramsWrapper ~ diagramData", diagramData)
    }, [diagramData]);

    return (<div style={{ display: 'flex', alignItems: 'center', padding: '2em' }}>
        <div style={{ width: '60%', height: '29em' }}>
            <DataTable
                weights={weights === undefined ? [] : weights.map(e => parseFloat(e[currentDiagram.value]))}
                weightCoefs={weightCoefs === undefined ? 0 : weightCoefs[options.indexOf(currentDiagram)]===undefined ? 0: weightCoefs[options.indexOf(currentDiagram)].relativeCoef}
                estimates={estimates === undefined ? [] : estimates.map(e => parseFloat(e[currentDiagram.value]))}
                setDiagramData={setDiagramData}
                diagramData = {diagramData}
                setTotalSurface = {setTotalSurface}
            />
            <h5>Загальна площа багатокутника: {totalSurface.toFixed(5)}</h5>
        </div>
        <div style={{ width: '35%' }}>
            

            <Select
                value={currentDiagram}
                onChange={(e) => {
                    setDiagram(e);
                }}
                options={options}
            />
            <DiagramComponent 
                diagramData = {diagramData}
            />

        </div>
    </div>);
}

export default DiagramsWrapper;