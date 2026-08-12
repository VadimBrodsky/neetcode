class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.data = new Map();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.data.has(key)) {
            const val = this.data.get(key);
            this.data.delete(key);
            this.data.set(key, val);
            return val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.data.has(key)) {
            this.data.delete(key);
            this.data.set(key, value);
            return;
        }

        if (this.data.size === this.capacity) {
            const [head] = this.data.entries().next().value;
            this.data.delete(head);
        }

        this.data.set(key, value);
    }
}
