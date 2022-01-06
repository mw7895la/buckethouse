import React from 'react';
import {Route, Routes} from 'react-router-dom'
import StoreContentMainComponent from "./introduction/components/StoreContentMainComponent";

const RouteMain = () => {
    return (
        <Routes>
            <Route path="/*" element={<StoreContentMainComponent/>}/>
        </Routes>
    );
}

export default RouteMain;
