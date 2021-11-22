import { useState, useEffect, useMemo } from 'react'
import DataGrid, { TextEditor } from 'react-data-grid';

const columns = [
    { key: 'id', name: 'ID', width: 30 },
    {
        key: 'criteria', name: 'Критерій', width: 800, summaryFormatter() {
            return <strong>Інтегральна оцінка</strong>;
        }
    },
    {
        key: 'areaExperts', name: 'Експерти галузі', type: 'number',
        summaryFormatter({ row }) {
            return <>{row.integral}</>;
        }
    },
    { key: 'useabilityExperts', name: 'Експерти юзабіліті' },
    { key: 'devExperts', name: 'Експерти з програмування' },
    { key: 'potentialUsers', name: 'Потенційні користувачі' },
    { key: 'average', name: 'Усереднені оцінки' }
];

const WeightedEstimates = ({ weights, estimates, weightCoefs }) => {



    const [rows, setRows] = useState([
        { id: 1, criteria: 'Точність управління та обчислень', areaExperts: 4, useabilityExperts: 5, devExperts: 6, potentialUsers: 9 },
        { id: 2, criteria: 'Ступінь стандартонсті інтерфейсів', areaExperts: 4, useabilityExperts: 5, devExperts: 6, potentialUsers: 9 },
        { id: 3, criteria: 'Функціональна повнота', areaExperts: 4, useabilityExperts: 5, devExperts: 6, potentialUsers: 9 },
        { id: 4, criteria: 'Стійкість до помилок', areaExperts: 4, useabilityExperts: 5, devExperts: 6, potentialUsers: 9 },
        { id: 5, criteria: 'Можливість розширення', areaExperts: 4, useabilityExperts: 5, devExperts: 6, potentialUsers: 9 },
        { id: 6, criteria: 'Зручність роботи', areaExperts: 4, useabilityExperts: 5, devExperts: 6, potentialUsers: 9 },
        { id: 7, criteria: 'Простота роботи', areaExperts: 4, useabilityExperts: 5, devExperts: 6, potentialUsers: 9 },
        { id: 8, criteria: 'Відповідність чинним стандартам', areaExperts: 4, useabilityExperts: 5, devExperts: 6, potentialUsers: 9 },
        { id: 9, criteria: 'Переносність між програнмими(апаратними) засобами', areaExperts: 4, useabilityExperts: 5, devExperts: 6, potentialUsers: 9 },
        { id: 10, criteria: 'Зручність навчання', areaExperts: 4, useabilityExperts: 5, devExperts: 6, potentialUsers: 9 },
        { criteria: 'Усереднені оцінки' },
        { criteria: 'Зважені оцінки' }

    ]);

    const summaryRows = useMemo(() => {
        if (rows[11].areaExperts !== undefined && weightCoefs!==undefined) {
            let avgWeigthed = parseFloat(rows[11].areaExperts)
                + parseFloat(rows[11].useabilityExperts)
                + parseFloat(rows[11].devExperts)
                + parseFloat(rows[11].potentialUsers);

            let weightCoefsSum = 
            parseFloat(weightCoefs[0].relativeCoef)
            +parseFloat(weightCoefs[1].relativeCoef)
            +parseFloat(weightCoefs[2].relativeCoef)
            +parseFloat(weightCoefs[3].relativeCoef);
            const summaryRow = {
                id: 'total_0',
                integral: (avgWeigthed/weightCoefsSum).toFixed(4)
            };
            return [summaryRow];
        }
        else{
            const summaryRow = {
                id: 'total_0',
                integral: 0
            };
            return [summaryRow];
        }

    }, [rows]);

    useEffect(() => {
        let tr = [...rows];
        if (weights === undefined || weightCoefs === undefined)
            return

        let tempAvgs = {
            areaExperts: 0,
            areaWeights: 0,

            useabilityExperts: 0,
            useabiltiyWeights: 0,

            devExperts: 0,
            devWeights: 0,

            potentialUsers: 0,
            potentialWeights: 0
        }

        weights.forEach((e, index) => {
            tr[index].average = 0;

            tr[index].areaExperts = parseFloat(e.areaExperts) * parseFloat(estimates[index].areaExperts);
            tempAvgs.areaExperts += tr[index].areaExperts;
            tempAvgs.areaWeights += parseFloat(e.areaExperts);
            tr[index].average += tr[index].areaExperts * parseFloat(weightCoefs[0].relativeCoef);

            tr[index].useabilityExperts = parseFloat(e.useabilityExperts) * parseFloat(estimates[index].useabilityExperts);
            tempAvgs.useabilityExperts += tr[index].useabilityExperts;
            tempAvgs.useabiltiyWeights += parseFloat(e.useabilityExperts);
            tr[index].average += tr[index].useabilityExperts * parseFloat(weightCoefs[1].relativeCoef);

            tr[index].devExperts = parseFloat(e.devExperts) * parseFloat(estimates[index].devExperts);
            tempAvgs.devExperts += tr[index].devExperts;
            tempAvgs.devWeights += parseFloat(e.devExperts);
            tr[index].average += tr[index].devExperts * parseFloat(weightCoefs[2].relativeCoef);

            tr[index].potentialUsers = parseFloat(e.potentialUsers) * parseFloat(estimates[index].potentialUsers);
            tempAvgs.potentialUsers += tr[index].potentialUsers;
            tempAvgs.potentialWeights += parseFloat(e.potentialUsers);
            tr[index].average += tr[index].potentialUsers * parseFloat(weightCoefs[3].relativeCoef);
            tr[index].average /= weightCoefs.reduce((accumulator, e) => {

                return accumulator + parseFloat(e.relativeCoef);
            }, 0);

            tr[index].average = tr[index].average.toFixed(3);
        });
        /*
        tempAvgs.areaWeights = tempAvgs.areaWeights / 10;
        tempAvgs.useabiltiyWeights = tempAvgs.useabiltiyWeights / 10;
        tempAvgs.devWeights = tempAvgs.devWeights / 10;
        tempAvgs.potentialWeights = tempAvgs.potentialWeights / 10;*/


        tempAvgs.areaExperts = tempAvgs.areaExperts / 10;
        tempAvgs.useabilityExperts = tempAvgs.useabilityExperts / 10;
        tempAvgs.devExperts = tempAvgs.devExperts / 10;
        tempAvgs.potentialUsers = tempAvgs.potentialUsers / 10;

        tr[10].areaExperts = (tempAvgs.areaWeights / tempAvgs.areaExperts).toFixed(3);
        tr[10].useabilityExperts = (tempAvgs.useabiltiyWeights / tempAvgs.useabilityExperts).toFixed(3);
        tr[10].devExperts = (tempAvgs.devWeights / tempAvgs.devExperts).toFixed(3);
        tr[10].potentialUsers = (tempAvgs.potentialWeights / tempAvgs.potentialUsers).toFixed(3);

        tr[11].areaExperts = (tr[10].areaExperts * parseFloat(weightCoefs[0].relativeCoef)).toFixed(3);
        tr[11].useabilityExperts = (tr[10].useabilityExperts * parseFloat(weightCoefs[1].relativeCoef)).toFixed(3);
        tr[11].devExperts = (tr[10].devExperts * parseFloat(weightCoefs[2].relativeCoef)).toFixed(3);
        tr[11].potentialUsers = (tr[10].potentialUsers * parseFloat(weightCoefs[3].relativeCoef)).toFixed(3);
        console.log("🚀 ~ file: WeightedEstimates.js ~ line 82 ~ useEffect ~ tr", tr)

        console.log("🚀 ~ file: WeightedEstimates.js ~ line 86 ~ WeightedEstimates ~ weightCoefs", weightCoefs)

        setRows(JSON.parse(JSON.stringify((tr))));
    }, [weights, estimates, weightCoefs])

    function rowKeyGetter(row) {
        return row.id;
    }

    return (<div style={{height: '75vh'}}>
        <DataGrid
            columns={columns}
            rows={rows}
            rowKeyGetter={rowKeyGetter}
            onRowsChange={setRows}
            style={{ height: '35.2em' }}
            summaryRows={summaryRows}
        />
    </div>);
}

export default WeightedEstimates;