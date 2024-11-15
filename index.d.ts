export function genSaltSync(rounds: number, seed_length: number): string;
export function compareSync(s: string, hash: string): boolean;
export function hashSync(s: string, salt: number|string): string;