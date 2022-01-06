import React from 'react';
import {observer} from "mobx-react-lite";

export interface IStoreContentProps {
}

const StoreContentMainComponent = observer((props: IStoreContentProps) => {
        return (
            <>
                HELLO, React with Mobx!
            </>
        );
    })


;

export default StoreContentMainComponent;
