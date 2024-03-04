import React, {useEffect, useReducer, useState} from 'react';

import { showToastError, showToastSuccess } from '../Utils/tools';
import { CircularProgress } from '@mui/material';
import { matchesCollection } from '../../firebase'; 

import LeagueTable from './tables';
import MatchesList from './matchesList';


const TheMatches = () => {
    const [matches, setMatches] = useState(null);

    useEffect(() => {
        // If we dont have matches then we should use useEffect, otherwise-  we shouldn't
        if (!matches) {
            matchesCollection.get().then(snapshot => {
                const matches = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setMatches(matches)
            }).catch(error => {
                showToastError(error)
            })
        }


    }, [matches]);

    console.log(matches);


    return (
        <>
            { matches ?  
            
                <div className="the_matches_container">
                    <div className="the_matches_wrapper">
                        <div className="left">

                            
                        </div>
                        <div className="right">
                            <LeagueTable />

                        </div>
                    </div>
                </div>
        
        
        
        
            : 
                <div className="progress">
                    <CircularProgress />
                </div>    

                }
        
        </>
    )
}

export default TheMatches;