import { useState, useEffect } from 'react'
import DataGrid, { TextEditor } from 'react-data-grid';

const columns = [
    { key: 'expertType', name: 'Типи експертів', width: 300 },
    { key: 'absoluteCoef', name: 'Абсолютний коефіцієнт', editor: TextEditor},
    { key: 'relativeCoef', name: 'Відносний коефіцієнт', editor: TextEditor }
];

const ImportanceCoef = ({setWeightCoefs}) => {
    const [userData, setUserData] = useState(new Array(47).fill(new Array(10).fill(0)));

    const [er, setEr] = useState(new Array(47).fill(0));

    
    const [rows, setRows] = useState([
        {expertType: 'Експерти галузі', absoluteCoef: 5.4, relativeCoef: 0.55},
        {expertType: 'Експерти юзабіліті', absoluteCoef: 7.8, relativeCoef: 0.78},
        {expertType: 'Експерти з програмування', absoluteCoef: 7.8, relativeCoef: 0.78},
        {expertType: 'Потенційні користувачі', absoluteCoef: 7.8, relativeCoef: 0.78},
    ]);

    useEffect(()=>{
        setWeightCoefs([...rows]);
    }, [rows])

    useEffect(()=>{
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


    useEffect(()=>{
        console.log("🚀 ~ file: RiskChanceExperts.js ~ line 124 ~ RiskChanceExperts ~ er", er)
    }, [er])

    function rowKeyGetter(row) {
        return row.id;
    }

    return <div>
        <DataGrid columns={columns} rows={rows} rowKeyGetter={rowKeyGetter} onRowsChange={setRows} style={{height: '12.5em'}}/>
    </div>;
}
 
export default ImportanceCoef;