import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
    return (
        <div className=" flex justify-center h-[50vh] items-center">
            <div className="bg-white w-[60%]  py-10 rounded-lg px-5">
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        </div>
        </div>

    );
}