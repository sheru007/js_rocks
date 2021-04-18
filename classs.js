class MapListNode{
    constructor(data, next = null, prev = null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }

    setNext(key) {
        this.next = key;
    }

    setPrevious(key) {
        this.prev = key;
    }
}


class MapList extends Map {

    constructor() {
        super();
        this.head = null;
        this.next = null;
        this.previous = null;
    }

    set(key, value){
        if(value instanceof MapListNode) {
            try {
                super.set(key, value);
                if (!head) {
                    this.head = key;
                    this.next = null;
                    this.previous = null;
                } else {
                   super.get(this.previous).
                }
            } catch (e) {
                throw e;
            }
            
            

        } else {
            throw "MapList can only store MapListNode"
        }
    }

}

// function MapList(){
//     Map.call(this);
// }

// MapList.prototype = Object.create(Map.prototype);
// MapList.prototype.constructor = MapList;
// MapList.prototype.set = function(key, value){
    // if(value instanceof MapListNode){
    //     this[key] = value;
    // } else {
    //     throw "MapList can only store MapListNode"
    // }
// }