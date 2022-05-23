interface IObserver<T> {
    refresh(value: T): void;
}

interface ISubject<T> {
    observers: IObserver<T>[];

    subscribe(observer: IObserver<T>): void;
    unsubscribe(observer: IObserver<T>): void;
    notify(value: T): void;
}

class SubjectTS<T> implements ISubject<T>{
    observers: IObserver<T>[];

    constructor() {
        this.observers = [];
    }

    subscribe(observer: IObserver<T>) {
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver<T>) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(value: T) {
        this.observers.forEach(obs => obs.refresh(value));
    }
}

class ObserverTS<T> implements IObserver<T> {
    private fn: (value: T) => void;

    constructor(fn: (value: T) => void) {
        this.fn = fn;
    }

    refresh(value: T): void {
        this.fn(value);
    }
}

const subjectTS = new SubjectTS<number>();
const subjectString = new SubjectTS<string>();
const obs1 = new ObserverTS<number>((n) => {
    console.log(`Observer 1: ${n}`);
});
const obs2 = new ObserverTS<number>((n) => {
    console.log(`Observer 2: ${n}`);
});
subjectTS.subscribe(obs1);
subjectTS.subscribe(obs2);
subjectTS.notify(1);
subjectTS.notify(1.2);

const obs1String = new ObserverTS<string>((s) => {
    console.log(`Observer 2: ${s.toUpperCase()}`);
})

const obs2String = new ObserverTS<string>((s) => {
    console.log(`Observer 2: ${s.toLowerCase()}`);
})

subjectString.subscribe(obs1String);
subjectString.subscribe(obs2String);
subjectString.notify("Yuzmhar");