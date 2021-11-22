import { useState, useEffect, useMemo } from 'react'
import DataGrid, { TextEditor } from 'react-data-grid';

const columns = [
    { key: 'id', name: 'ID', width: 15 },
    { key: 'criteria', name: 'Критерій', width: 250 },
    { key: 'weights', name: 'Вагові коефіцієнти' },
    { key: 'circlePart', name: 'Частка круга' },
    { key: 'degreeAngle', name: 'Градусна міра вектора' },
    { key: 'radianAngle', name: 'Радіана міра вектора' },
    { key: 'chvk', name: 'Частка вагового коефіцієнту' },
    { key: 'a', name: 'A' },
    { key: 'b', name: 'B' },
    { key: 'c', name: 'C' }
];


const DataTable = ({ weights, weightCoefs, estimates, setDiagramData, diagramData, setTotalSurface}) => {

    const [rows, setRows] = useState([
        { id: 1, criteria: 'Точність управління та обчислень' },
        { id: 2, criteria: 'Ступінь стандартонсті інтерфейсів' },
        { id: 3, criteria: 'Функціональна повнота' },
        { id: 4, criteria: 'Стійкість до помилок' },
        { id: 5, criteria: 'Можливість розширення' },
        { id: 6, criteria: 'Зручність роботи' },
        { id: 7, criteria: 'Простота роботи' },
        { id: 8, criteria: 'Відповідність чинним стандартам' },
        { id: 9, criteria: 'Переносність між програнмими(апаратними) засобами' },
        { id: 10, criteria: 'Зручність навчання' }
    ]);

    const [tempDiaData, setDiaData] = useState({ angles: [], distance: [] });

    useEffect(() => {
        if (JSON.stringify(tempDiaData) !== JSON.stringify(diagramData)) {
            setDiagramData({ ...tempDiaData })
        }
    }, [tempDiaData])

    function rowKeyGetter(row) {
        return row.id;
    }

    useEffect(() => {
        if (weights === undefined) {
            return;
        }

        let tr = [...rows];
        let tempWeightsSum = weights.reduce((a, e) => { return a + e }, 0);

        //idk just copying weights
        tr = tr.map((e, index) => {
            return { ...e, weights: weights[index] };
        });

        //calculating circle segment angle
        tr = tr.map((e, index) => {
            return { ...e, circlePart: parseFloat((weights[index] / tempWeightsSum * 360).toFixed(4)) };
        });


        //calculating vector angle in degrees
        let degreeAccumulator = -1 * tr[0].circlePart / 2;
        tr = tr.map((e, index) => {
            degreeAccumulator += e.circlePart;
            return { ...e, degreeAngle: parseFloat((degreeAccumulator - e.circlePart / 2).toFixed(4)) };
        });

        //calculating vector angle in radians
        tr = tr.map((e) => {
            return { ...e, radianAngle: parseFloat((e.degreeAngle * Math.PI / 180).toFixed(4)) };
        });


        //calculating Частка вагового коефіцієнту
        tr = tr.map((e, index) => {
            return { ...e, chvk: weightCoefs * weights[index] * estimates[index] };
        });

        //calculating A and B;
        tr = tr.map((e, index) => {
            return { ...e, a: e.chvk * Math.sin(e.radianAngle), b: e.chvk * Math.cos(e.radianAngle) };
        });

        //calculating C;
        tr = tr.map((e, index) => {
            return { ...e, c: Math.sqrt(e.a ** 2 + e.b ** 2) };
        });

        let tempDiagramData = {
            angles: tr.map(e => e.degreeAngle),
            distance: tr.map(e => e.c)
        };
        setDiaData({ ...tempDiagramData });

        setRows(JSON.parse(JSON.stringify(tr)));

        let tempcol1 = [];
        let tempcol2 = [];

        for (let i = 0; i < tr.length; i++) {
            tempcol1.push(tr[i].a * tr[(i + 1) % tr.length].b)
            tempcol2.push(tr[i].b * tr[(i + 1) % tr.length].a)
        }
       
        const tempcol1sum = tempcol1.reduce((acc, e) => acc + e, 0);
        const tempcol2sum = tempcol2.reduce((acc, e) => acc + e, 0);
        
        //alert(Math.abs(tempcol1sum - tempcol2sum) / 2);
        setTotalSurface(Math.abs(tempcol1sum - tempcol2sum) / 2);

    }, [weights]);


    useEffect(() => {
        console.log("🚀 ~ file: DataTable.js ~ line 100 ~ DataTable ~ weights", weights)
    }, [weights]);

    return (<div>
        <DataGrid
            columns={columns}
            rows={rows}
            rowKeyGetter={rowKeyGetter}
            onRowsChange={setRows}
            style={{ height: '28em' }}
        />
    </div>);
}

export default DataTable;