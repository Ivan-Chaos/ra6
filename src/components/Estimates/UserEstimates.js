import { useState, useEffect } from 'react'
import DataGrid, { TextEditor } from 'react-data-grid';

const columns = [
    { key: 'id', name: 'ID' },
    { key: 'criteria', name: 'Критерій', width: 400 },
    { key: 'pers1', name: 'Користувач 1', editor: TextEditor},
    { key: 'pers2', name: 'Користувач 2', editor: TextEditor},
    { key: 'pers3', name: 'Користувач 3', editor: TextEditor},
    { key: 'pers4', name: 'Користувач 4', editor: TextEditor},
    { key: 'pers5', name: 'Користувач 5', editor: TextEditor},
    { key: 'pers6', name: 'Користувач 6', editor: TextEditor},
    { key: 'pers7', name: 'Користувач 7', editor: TextEditor},
    { key: 'pers8', name: 'Користувач 8', editor: TextEditor},
    { key: 'pers9', name: 'Користувач 9', editor: TextEditor},
    { key: 'pers10', name: 'Користувач 10', editor: TextEditor}
];

const UserEstimates = () => {
    
    const [rows, setRows] = useState([
        { id: 1, criteria: 'Точність управління та обчислень', pers1: 1, pers2: 2, pers3: 3, pers4: 4, pers5: 5, pers6: 6, pers7: 7, pers8: 8, pers9: 9, pers10: 10},
        { id: 2, criteria: 'Ступінь стандартонсті інтерфейсів', pers1: 1, pers2: 2, pers3: 3, pers4: 4, pers5: 5, pers6: 6, pers7: 7, pers8: 8, pers9: 9, pers10: 10},
        { id: 3, criteria: 'Функціональна повнота', pers1: 1, pers2: 2, pers3: 3, pers4: 4, pers5: 5, pers6: 6, pers7: 7, pers8: 8, pers9: 9, pers10: 10},
        { id: 4, criteria: 'Стійкість до помилок', pers1: 1, pers2: 2, pers3: 3, pers4: 4, pers5: 5, pers6: 6, pers7: 7, pers8: 8, pers9: 9, pers10: 10},
        { id: 5, criteria: 'Можливість розширення', pers1: 1, pers2: 2, pers3: 3, pers4: 4, pers5: 5, pers6: 6, pers7: 7, pers8: 8, pers9: 9, pers10: 10},
        { id: 6, criteria: 'Зручність роботи', pers1: 1, pers2: 2, pers3: 3, pers4: 4, pers5: 5, pers6: 6, pers7: 7, pers8: 8, pers9: 9, pers10: 10},
        { id: 7, criteria: 'Простота роботи', pers1: 1, pers2: 2, pers3: 3, pers4: 4, pers5: 5, pers6: 6, pers7: 7, pers8: 8, pers9: 9, pers10: 10},
        { id: 8, criteria: 'Відповідність чинним стандартам', pers1: 1, pers2: 2, pers3: 3, pers4: 4, pers5: 5, pers6: 6, pers7: 7, pers8: 8, pers9: 9, pers10: 10},
        { id: 9, criteria: 'Переносність між програнмими(апаратними) засобами', pers1: 1, pers2: 2, pers3: 3, pers4: 4, pers5: 5, pers6: 6, pers7: 7, pers8: 8, pers9: 9, pers10: 10},
        { id: 10, criteria: 'Зручність навчання', pers1: 1, pers2: 2, pers3: 3, pers4: 4, pers5: 5, pers6: 6, pers7: 7, pers8: 8, pers9: 9, pers10: 10},

    ]);

    function rowKeyGetter(row) {
        return row.id;
    }

    return <div>
        <DataGrid columns={columns} rows={rows} rowKeyGetter={rowKeyGetter} onRowsChange={setRows} style={{height: '27.5em'}}/>
    </div>;
}
 
export default UserEstimates;