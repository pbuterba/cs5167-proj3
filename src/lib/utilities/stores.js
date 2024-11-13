import { writable } from 'svelte/store';

/**
 * Flyout store
 */
const flyoutStore = writable(new Map());

function open(id) {
    flyoutStore.update((map) => {
        map.set(id, true);
        return map;
    });
}

function close(id) {
    flyoutStore.update((map) => {
        map.delete(id);
        return map;
    });
}

function toggle(id) {
    flyoutStore.update((map) => {
        map.set(id, !map.get(id));
        // alert(JSON.stringify(map)); - the map is empty
        return map;
    });
}

export { close, flyoutStore, open, toggle };