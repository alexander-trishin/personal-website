import { BrowserRouter } from 'react-router-dom';

import { Environment, EnvironmentMode } from 'common/constants';
import { Analytics } from 'containers';
import { PersonalModule } from 'modules';

import 'assets/styles/index.pcss';

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
                <PersonalModule />
            </BrowserRouter>
        </>
    );
};

export default Application;
