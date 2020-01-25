import { writable } from 'svelte/store';

function createViewData() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}

export const viewData = writable(0);
export const collectionData = writable(0);
export const categoryData = writable(0);
