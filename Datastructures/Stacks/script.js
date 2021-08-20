class Stack{
    constructor(){
        this.count = 0;
        this.items = {};
    }

    push(element){
        this.items[this.count] = element;
        this.count++;
    }

    pop() {
        if(this.isEmpty()){
            return undefined;
        }
        this.count --;
        const results = this.items[this.count];
        delete this.items[this.count];
        return results;
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count - 1];
    }

    isEmpty(){
        return this.count === 0;
    }

    size(){
        return this.count;
    }

    clear(){
        this.items = {};
        this.count = 0;
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[0]}`;
        for(let i = 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

const stack = new Stack();

console.log('stack.isEmpty() => ', stack.isEmpty());  // output: true

stack.push(5);
stack.push(8);

console.log('stack after pushing values => ', stack.toString());

console.log('stack.peek() => ', stack.peek());

console.log('stack.size() after pushing values => ', stack.size());

stack.push(12);

console.log('stack after pushing values => ', stack.toString());

console.log('stack.peek() => ', stack.peek());

console.log('stack.size() after pushing values => ', stack.size());

console.log('stack.isEmpty() => ', stack.isEmpty());  // output: false

stack.push(16);

console.log('stack.size() after pushing values => ', stack.size());

stack.pop();
stack.pop();

console.log('stack.size() after pushing values and popping => ', stack.size());


/**
 *   output:
 *      stack.isEmpty() =>  true
        stack after pushing values =>  5,8
        stack.peek() =>  8
        stack.size() after pushing values =>  2
        stack after pushing values =>  5,8,12
        stack.peek() =>  12
        stack.size() after pushing values =>  3
        stack.isEmpty() =>  false
        stack.size() after pushing values =>  4
        stack.size() after pushing values and popping =>  2
 */