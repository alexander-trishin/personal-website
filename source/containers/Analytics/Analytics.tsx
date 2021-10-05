import type { FC } from 'react';

import { Helmet } from 'react-helmet';

import useUmamiTracking from './useUmamiTracking';

interface AnalyticsProps {
    uri?: string;
    id?: string;
}

const Analytics: FC<AnalyticsProps> = props => {
    const { uri, id } = props;

    const isEnabled = !!uri && !!id;

    useUmamiTracking(isEnabled);

    if (!isEnabled) {
        return null;
    }

    return (
        <Helmet>
            <script async defer data-website-id={id} src={uri}></script>
        </Helmet>
    );
};

export default Analytics;
