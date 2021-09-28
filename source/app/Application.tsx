import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import { Environment, EnvironmentMode } from 'common/constants';
import { PersonalModule } from 'modules';

import 'assets/styles/index.pcss';

const Application = () => {
    return (
        <>
            {Environment.Mode === EnvironmentMode.Production && (
                <Helmet>
                    <script
                        async
                        defer
                        data-website-id={Environment.Analytics.Id}
                        src={Environment.Analytics.Uri}
                    ></script>
                </Helmet>
            )}
            <BrowserRouter basename={Environment.PublicUrl}>
                <PersonalModule />
            </BrowserRouter>
        </>
    );
};

export default Application;
