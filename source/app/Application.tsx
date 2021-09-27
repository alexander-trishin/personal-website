import { BrowserRouter } from 'react-router-dom';

import { Environment } from 'common/constants';
import { PersonalModule } from 'modules';

import 'assets/styles/index.pcss';

const Application = () => {
    return (
        <BrowserRouter basename={Environment.PublicUrl}>
            <PersonalModule />
        </BrowserRouter>
    );
};

export default Application;
