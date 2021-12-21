import React from 'react';
import {Route, Routes} from 'react-router-dom'
import IntroductionMainComponent from "./introduction/components/IntroductionMainComponent";

const RouteMain = () => {
    return (
        <Routes>
            <Route path="/*" element={<IntroductionMainComponent/>}/>
        </Routes>
    );
}

export default RouteMain;
