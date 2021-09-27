import type {
    ComponentPropsWithRef,
    ComponentPropsWithoutRef,
    ElementType,
    JSXElementConstructor
} from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PropsOf<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
    JSX.LibraryManagedAttributes<T, ComponentPropsWithoutRef<T>>;

type AsProp<T extends ElementType> = {
    as?: T;
};

type ExtendableProps<
    ExtendedProps = Record<string, unknown>,
    OverrideProps = Record<string, unknown>
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

type InheritableElementProps<
    T extends ElementType,
    Props = Record<string, unknown>
> = ExtendableProps<PropsOf<T>, Props>;

type PolymorphicComponentProps<
    T extends ElementType,
    Props = Record<string, unknown>
> = InheritableElementProps<T, Props & AsProp<T>>;

export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];
export type PolymorphicComponentPropsWithRef<
    T extends ElementType,
    Props = Record<string, unknown>
> = PolymorphicComponentProps<T, Props> & { ref?: PolymorphicRef<T> };
