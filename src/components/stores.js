import { writable } from 'svelte/store';

export const serverIPStore = writable(0);
export const pepperConnectionID = writable(null);
export const motionsFetchNeeded = writable(true);
export const recording = writable(false);
export const motions = writable([]);
export const speaker = writable('');
export const instructionInProgress = writable(false);
