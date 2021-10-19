import { HTMLAttributes, forwardRef } from 'react';

import clsx from 'clsx';

import { Button } from 'elements';
import { Social } from 'modules/personal/elements';

const Footer = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
    const { children, className, ...rest } = props;

    return (
        <footer {...rest} ref={ref} className={clsx('font-poppins pt-6 pb-4', className)}>
            <div
                className={clsx(
                    'flex',
                    'flex-col-reverse justify-center',
                    'md:flex-row md:justify-between',
                    'max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto'
                )}
            >
                <div
                    className={clsx(
                        'flex text-sm',
                        'flex-col-reverse gap-y-2 text-center w-full',
                        'md:flex-row md:gap-x-3 md:w-2/3',
                        'px-5'
                    )}
                >
                    <span>© Alexander Trishin 2021.</span>
                    <span className="hidden md:inline-block">|</span>
                    <span>
                        Design by{' '}
                        <Button
                            to="https://www.styleshout.com/free-templates/kards"
                            className="text-white"
                        >
                            styleshout
                        </Button>
                    </span>
                </div>

                <div
                    className={clsx(
                        'w-full text-center mb-4 md:mb-0',
                        'md:w-1/3 md:text-right',
                        'px-5'
                    )}
                >
                    <Social className="text-white text-xl list-disc" size="small" />
                </div>

                {children}
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';

export default Footer;
