interface Strategy {
    login(user: string, password: string): boolean;
}

class LoginContext {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log(`LoginDBStrategy: ${user}`)
        // login logic
        if (user === 'admin' && password === 'admin') {
            return true;
        }
        return false;
    }
}

class LoginServiceStrategy implements Strategy {
    login(user: string, password: string): boolean {
        // login logic
        console.log(`LoginServiceStrategy: ${user}`)
        if (user === 'admin' && password === 'admin') {
            return true;
        }
        return false;
    }
}

class LoginGoogleStrategy implements Strategy {
    login(user: string, password: string): boolean {
        // login logic
        console.log(`LoginGoogleStrategy: ${user}`)
        if (user === 'admin' && password === 'admin') {
            return true;
        }
        return false;
    }
}

const auth = new LoginContext(new LoginDBStrategy());
const resp = auth.login('admin', 'admin');
console.log(resp);
auth.setStrategy(new LoginServiceStrategy());
auth.login('admin', 'admin');
auth.setStrategy(new LoginGoogleStrategy());
auth.login('admin', 'admin');
