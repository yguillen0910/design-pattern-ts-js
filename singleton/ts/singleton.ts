class SingletonTS {
    private static instance: SingletonTS;
    random: number;

    private constructor() {
        this.random = Math.random();
    }

    public static getInstance(): SingletonTS {
        if (!this.instance) {
            this.instance = new SingletonTS();
        }
        return this.instance;
    }
}

const singletonTS = SingletonTS.getInstance();
console.log(singletonTS.random);
const singletonTS2 = SingletonTS.getInstance();
console.log(singletonTS2.random);
console.log(singletonTS === singletonTS2);
singletonTS.random = 9;
console.log(singletonTS.random)
console.log(singletonTS2.random);
