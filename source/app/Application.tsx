import { Suspense, lazy } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Environment, EnvironmentMode } from 'common/constants';
import { Analytics } from 'containers';
import { LoadingOverlay } from 'elements';

import 'assets/styles/index.pcss';

const PersonalModule = lazy(async () => import('modules/personal'));

const Application = () => {
    const {
        Analytics: { Uri, Id },
        Mode,
        PublicUrl
    } = Environment;

    return (
        <>
            {Mode === EnvironmentMode.Production && <Analytics uri={Uri} id={Id} />}
            <BrowserRouter basename={PublicUrl}>
                <Suspense fallback={<LoadingOverlay />}>
                    <Routes>
                        <Route path="*" element={<PersonalModule />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
};

export default Application;
