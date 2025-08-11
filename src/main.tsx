import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './App.css';

import App from '@/App';
import {DataProvider} from "@/context";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DataProvider>
            <App/>
        </DataProvider>
    </StrictMode>
);
