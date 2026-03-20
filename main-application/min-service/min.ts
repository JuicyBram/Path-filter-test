export function min(a: number, b: number) {
    return a - b;
};

export function minArray(arr: number[]) {
    return arr.reduce((acc, val) => acc - val, 0);
};