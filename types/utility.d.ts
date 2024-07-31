type MergeLeft<T1, T2> = T1 & Omit<T2, keyof T1>;

type MergeRight<T1, T2> = T2 & Omit<T1, keyof T2>;

type NonNullableDeep<T> = {
    [K in keyof T]: NonNullable<T[K]> extends object ? NonNullableDeep<NonNullable<T[K]>> : NonNullable<T[K]>;
};
