export function sum(a: number, b: number) {
    return a + b;
};

export function sumArray(arr: number[]) {
    return arr.reduce((acc, val) => acc + val, 0);
};