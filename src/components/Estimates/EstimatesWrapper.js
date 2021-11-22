import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import UserEstimates from './UserEstimates';
import EveryoneEstimates from './EveryoneEstimates';

const EstimatesWrapper = ({setEstimates}) => {
    const [currentlyShowing, setCurrentlyShowing] = useState(0);

    return (<div>
        <hr />
        <Stack direction="row" spacing={2} style={{ margin: '1em' }}>
            <Button size="large" variant={currentlyShowing == 0 ? "outlined" : ""} onClick={() => setCurrentlyShowing(0)}>
                Оцінки користувачів
            </Button>

            <Button variant={currentlyShowing == 1 ? "outlined" : ""} size="large" onClick={() => setCurrentlyShowing(1)}>
                Оцінки всіх
            </Button>
        </Stack>
        <hr />
        <div style={{ display: currentlyShowing == 0 ? '' : 'none' }} >
            <UserEstimates />
        </div>


        <div style={{ display: currentlyShowing == 1 ? '' : 'none' }}>
            <EveryoneEstimates setEstimates={setEstimates}/>
        </div>

    </div>);
}

export default EstimatesWrapper;