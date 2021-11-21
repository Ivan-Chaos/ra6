import { useState, useEffect } from 'react'
import DataGrid, { TextEditor } from 'react-data-grid';

const columns = [
    { key: 'id', name: 'ID', width: 30 },
    { key: 'criteria', name: 'Критерій', width: 800 },
    { key: 'areaExperts', name: 'Експерти галузі', editor: TextEditor },
    { key: 'useabilityExperts', name: 'Експерти юзабіліті', editor: TextEditor },
    { key: 'devExperts', name: 'Експерти з програмування', editor: TextEditor },
    { key: 'potentialUsers', name: 'Потенційні користувачі', editor: TextEditor }
];

const EveryoneEstimates = () => {
    const [userData, setUserData] = useState(new Array(47).fill(new Array(10).fill(0)));

    const [er, setEr] = useState(new Array(47).fill(0));


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

    ]);

    useEffect(() => {

    }, [rows])

    useEffect(() => {
        /*let tempRows = rows.map((e, index)=>{
            let temp = [...er];
            er[index] = userData[index].reduce((a, b) => a + b, 0)/userData[0].length;
            setEr([...temp]);
            if(setIncomingEr!==undefined){
                setIncomingEr([...temp])
            }
                
            
            return {...e, avg: userData[index].reduce((a, b) => a + b, 0)/userData[0].length}
        })
        setRows(tempRows);*/
    }, [userData])


    useEffect(() => {
        console.log("🚀 ~ file: RiskChanceExperts.js ~ line 124 ~ RiskChanceExperts ~ er", er)
    }, [er])

    function rowKeyGetter(row) {
        return row.id;
    }

    return <div>
        <DataGrid columns={columns} rows={rows} rowKeyGetter={rowKeyGetter} onRowsChange={setRows} style={{ height: '27.5em' }} />
    </div>;
}

export default EveryoneEstimates;