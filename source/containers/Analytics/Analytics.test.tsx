import { render } from '@testing-library/react';
import { Helmet } from 'react-helmet';

import { Analytics } from '.';

describe('<Analytics />', () => {
    it('should do nothing when analytics info is missing', () => {
        const wrapper = render(<Analytics />);

        expect(Helmet.peek()).toBeUndefined();
        expect(wrapper.container).toBeEmptyDOMElement();
    });

    it('should render script node when analytics data provided', () => {
        render(<Analytics uri="test-uri" id="test-id" />);

        const actual = Helmet.peek();

        expect(actual.scriptTags[0].src).toBe('test-uri');
    });
});
