const ALPHA_NUMERIC_SEED = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function getAlphaNumericValue(length) {
    const chars = [];
    for (let i = 0; i < length; i++) {
        chars.push(ALPHA_NUMERIC_SEED[Math.floor(Math.random() * ALPHA_NUMERIC_SEED.length)]);
    }
    return chars.join('');
}
