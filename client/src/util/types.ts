export class Queue<T>{
    _queue: T[];

    constructor(queue?: T[]) {
        this._queue = queue || [];
    }

    enqueue(item: T) {
        this._queue.push(item);
    }

    dequeue(): T | any {
        return this._queue.shift();
    }

    clear() {
        this._queue = [];
    }

    get count(): number {
        return this._queue.length;
    }
}

export interface IChoice {
    body: String,
    correct: Boolean
}

export interface IQuestion {
    body: String,
    choices: IChoice
}

