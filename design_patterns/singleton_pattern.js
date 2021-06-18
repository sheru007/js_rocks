/*
Singleton pattern will be used to ensure a class has only one instance, and provide a global point of access to it.


*/

class Logger {
    constructor() {
        if (Logger._instance) {
            console.log("return previously created instance")
            return Logger._instance
        }
        console.log("return new created instance")
        Logger._instance = this
        return this;
    }

    log(...logs) {
        logs.forEach(log => console.log(log))
    }

    logWithTableFormat(...logs) {
        console.table(logs);
    }
}

const firstLogger = new Logger();
const secondLogger = new Logger();

console.log(`are firstLogger and secondLogger the same ? ${firstLogger === secondLogger}`);

firstLogger.log({userName: 'hieptl', job: 'Software Engineer'});
secondLogger.logWithTableFormat({userName: 'hieptl', job: 'Software Engineer'});