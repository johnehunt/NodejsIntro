// Comment out line 3 to run remaining lines

console.log(new Error('A standard error'))

class UserError extends Error {
    constructor(args){
        super(args);
        this.name = "UserError"
    }
}

console.log(new UserError('A standard error'))