import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from '@/App';
import { DataProvider } from "@/context";
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(DataProvider, { children: _jsx(App, {}) }) }));
