// how many times a request has been requested:
// this.cache[key] = [value, requested]

let LRUCache = function(capacity) {
    this.cache = [];
    this.capacity = capacity;
    this.cacheLength = 0;
};

LRUCache.prototype.get = function(key) {
    for (let cacheKey in this.cache) {
        if (cacheKey === key) {
            return this.cache[cacheKey][0];
        }
    }
    return -1;
};

LRUCache.prototype.put = function(key, value) {
    if (this.cache[key]) {
        this.cache[key] = [ value, this.cache[key][1]++ ];
        return this.cache[key][0];
    }


};

let lruCache = new LRUCache(2);
lruCache.put(1,1);
lruCache.put(2,2);
lruCache.get(1); // 1
lruCache.put(3,3);
lruCache.get(2); // -1
lruCache.put(4,4); // evicts 1;
lruCache.get(1); // -1
lruCache.get(3);
lruCache.get(4);
