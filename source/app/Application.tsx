import { Suspense, lazy } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Environment, EnvironmentMode } from 'common/constants';
import { Analytics } from 'containers';
import { LoadingOverlay } from 'elements';
import { sleep } from 'utils';

import 'assets/styles/index.pcss';

const PersonalModule = lazy(async () => {
    await sleep(500);

    const imported = await import('modules/personal');

    return { default: imported.PersonalModule };
});

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
                    <Switch>
                        <Route component={PersonalModule} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </>
    );
};

export default Application;
