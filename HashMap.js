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
    has(key) {
        for (let i = 0; i < this.hashList.length; ++i) {
            for (let j = 0; j < this.hashList[i].size(); ++j) {
                const propertyNames = Object.keys(this.hashList[i].at(j).nodeValue);
                if (propertyNames[0] == key) {
                    return true;
                }
            }
        }
        return false;
    }
    remove(key) {
        for (let i = 0; i < this.hashList.length; ++i) {
            for (let j = 0; j < this.hashList[i].size(); ++j) {
                const propertyNames = Object.keys(this.hashList[i].at(j).nodeValue);
                if (propertyNames[0] == key) {
                    this.hashList[i].removeAt(j);
                    return true;
                }
            }
        }
        return false;
    }
    length() {
        let numberOfKeys = 0;
        for (let i = 0; i < this.hashList.length; ++i) {
            numberOfKeys += this.hashList[i].size();
        }
        return numberOfKeys;
    }
    clear() {
        for (let i = 0; i < this.hashList.length; ++i) {
            while (this.hashList[i].size() != 0) {
                this.hashList[i].pop();
            }
        }
        console.log("length now is", this.length());
    }
    keys() {
        const keyArray = [];
        for (let i = 0; i < this.hashList.length; ++i) {
            for (let j = 0; j < this.hashList[i].size(); ++j) {
                const propertyNames = Object.keys(this.hashList[i].at(j).nodeValue);
                keyArray.push(propertyNames[0]);
            }
        }
        return keyArray
    }
    values() {
        const valuesArray = [];
        for (let i = 0; i < this.hashList.length; ++i) {
            for (let j = 0; j < this.hashList[i].size(); ++j) {
                const propertyNames = Object.keys(this.hashList[i].at(j).nodeValue);
                const key = propertyNames[0];
                valuesArray.push(this.hashList[i].at(j).nodeValue[key]);
            }
        }
        return valuesArray;
    }
    entries() {
        const entriesArray = [];
        for (let i = 0; i < this.hashList.length; ++i) {
            for (let j = 0; j < this.hashList[i].size(); ++j) {
                const propertyNames = Object.keys(this.hashList[i].at(j).nodeValue);
                const key = propertyNames[0];
                const entry = {};
                entry[key] = this.hashList[i].at(j).nodeValue[key];
                entriesArray.push(entry);
            }
        }
        return entriesArray;
    }
}

export { HashMap };