import { LinkedList } from "./LinkedList.js";
class HashMap {
    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.hashList = [];
        for (let i = 0; i < capacity; ++i) {
            this.hashList[i] = new LinkedList();
        }
    }

    hash(key) {
        let hashCode = 0;
        const modulo = this.capacity;
        const primeNumber = 31;
        for (let i = 0; i < key.length; ++i) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % modulo;
        }
        return hashCode;
    }
    set(key, value) {
        const index = this.hash(key);
        const indexOfKey = -1;
        let nodeValueObject = {};
        nodeValueObject[key] = `${value}`;
        for (let i = 0; i < this.hashList[index].size(); ++i) {
            const propertyNames = Object.keys(this.hashList[index].at(i).nodeValue);
            if (propertyNames[0] === key) {
                this.hashList[index].removeAt(i);
                this.hashList[index].insertAt(nodeValueObject, i);
                indexOfKey = i;
                break;
            }
        }
        if (indexOfKey === -1) {
            this.hashList[index].append(nodeValueObject);
        }
    }
    get(key) {
        for (let i = 0; i < this.hashList.length; ++i) {
            for (let j = 0; j < this.hashList[i].size(); ++j) {
                const propertyNames = Object.keys(this.hashList[i].at(j).nodeValue);
                if (propertyNames[0] == key) {
                    return this.hashList[i].at(j).nodeValue[key];
                }
            }
        }
        return null;
    }
}

export { HashMap };