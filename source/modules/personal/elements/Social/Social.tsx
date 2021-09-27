import type { FC, HTMLAttributes } from 'react';

import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { Button } from 'elements';

const links = [
    { icon: faLinkedinIn, address: 'https://www.linkedin.com/in/trishinalexander' },
    { icon: faGithub, address: 'https://github.com/alexander-trishin' },
    { icon: faInstagram, address: 'https://www.instagram.com/effecto.exe' }
];

interface SocialProps extends HTMLAttributes<HTMLUListElement> {
    size: 'small' | 'large';
}

const Social: FC<SocialProps> = props => {
    const { size, ...rest } = props;

    return (
        <ul {...rest}>
            {links.map(({ icon, address }, index) => (
                <li
                    key={index}
                    className={clsx('inline-block', {
                        'mx-3': size === 'small',
                        'mx-5': size === 'large'
                    })}
                >
                    <Button to={address}>
                        <FontAwesomeIcon icon={icon} />
                    </Button>
                </li>
            ))}
        </ul>
    );
};

export default Social;
