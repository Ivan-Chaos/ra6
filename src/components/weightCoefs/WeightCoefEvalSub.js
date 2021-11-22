import { useState, useEffect } from 'react'
import DataGrid, { TextEditor } from 'react-data-grid';

const columns = [
    { key: 'id', name: 'ID' },
    { key: 'criteria', name: 'Критерій', width: 400 },
    { key: 'areaExperts', name: 'Експерти галузі', editor: TextEditor},
    { key: 'useabilityExperts', name: 'Експерти юзабіліті', editor: TextEditor },
    { key: 'devExperts', name: 'Експерти з програмування', editor: TextEditor },
    { key: 'potentialUsers', name: 'Потенційні користувачі', editor: TextEditor }
];

const WeightCoefEvalSub = ({setWeights}) => {
  
    
    const [rows, setRows] = useState([
        { id: 1, criteria: 'Точність управління та обчислень', areaExperts: 8, useabilityExperts: 5, devExperts: 9, potentialUsers: 9},
        { id: 2, criteria: 'Ступінь стандартонсті інтерфейсів', areaExperts: 4, useabilityExperts: 9, devExperts: 6, potentialUsers: 9},
        { id: 3, criteria: 'Функціональна повнота', areaExperts: 10, useabilityExperts: 6, devExperts: 9, potentialUsers: 9},
        { id: 4, criteria: 'Стійкість до помилок', areaExperts: 6, useabilityExperts: 5, devExperts: 10, potentialUsers: 9},
        { id: 5, criteria: 'Можливість розширення', areaExperts: 4, useabilityExperts: 5, devExperts: 10, potentialUsers: 9},
        { id: 6, criteria: 'Зручність роботи', areaExperts: 9, useabilityExperts: 9, devExperts: 7, potentialUsers: 9},
        { id: 7, criteria: 'Простота роботи', areaExperts: 9, useabilityExperts: 7, devExperts: 8, potentialUsers: 9},
        { id: 8, criteria: 'Відповідність чинним стандартам', areaExperts: 5, useabilityExperts: 5, devExperts: 10, potentialUsers: 9},
        { id: 9, criteria: 'Переносність між програнмими(апаратними) засобами', areaExperts: 8, useabilityExperts: 9, devExperts: 6, potentialUsers: 9},
        { id: 10, criteria: 'Зручність навчання', areaExperts: 7, useabilityExperts: 8, devExperts: 6, potentialUsers: 9},

    ]);

    useEffect(()=>{
        setWeights([...rows]);
    }, [rows])

  
    function rowKeyGetter(row) {
        return row.id;
    }

    return <div>
        <DataGrid columns={columns} rows={rows} rowKeyGetter={rowKeyGetter} onRowsChange={setRows} style={{height: '27.5em'}}/>
    </div>;
}
 
export default WeightCoefEvalSub
;