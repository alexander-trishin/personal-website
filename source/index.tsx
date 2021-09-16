import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { StrictMode } from 'react';

import { hydrate, render } from 'react-dom';

import { Application } from 'app';

const rootElement = document.getElementById('root');
const renderer = rootElement?.hasChildNodes() ? hydrate : render;

renderer(
    <StrictMode>
        <Application />
    </StrictMode>,
    rootElement
);
