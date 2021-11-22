import { useState, useEffect } from 'react'
import DataGrid, { TextEditor } from 'react-data-grid';

const columns = [
    { key: 'expertType', name: 'Типи експертів', width: 300 },
    { key: 'absoluteCoef', name: 'Абсолютний коефіцієнт' },
    { key: 'relativeCoef', name: 'Відносний коефіцієнт', editor: TextEditor }
];

const ImportanceCoef = ({ setWeightCoefs }) => {
    const [userData, setUserData] = useState(new Array(47).fill(new Array(10).fill(0)));

    const [er, setEr] = useState(new Array(47).fill(0));


    const [rows, setRows] = useState([
        { expertType: 'Експерти галузі', absoluteCoef: 7, relativeCoef: 0.7 },
        { expertType: 'Експерти юзабіліті', absoluteCoef: 8, relativeCoef: 0.8 },
        { expertType: 'Експерти з програмування', absoluteCoef: 9, relativeCoef: 0.9 },
        { expertType: 'Потенційні користувачі', absoluteCoef: 5, relativeCoef: 0.5 },
    ]);

    useEffect(() => {

        setWeightCoefs([...rows]);

        if (!rows.every(e => Math.abs(parseFloat(e.absoluteCoef) - parseFloat(e.relativeCoef) * 10)) < 1) {
            setRows(rows.map(e => { return { ...e, absoluteCoef: (parseFloat(e.relativeCoef) * 10).toFixed(1) } }));
        }

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
        <DataGrid columns={columns} rows={rows} rowKeyGetter={rowKeyGetter} onRowsChange={setRows} style={{ height: '12.5em' }} />
    </div>;
}

export default ImportanceCoef;