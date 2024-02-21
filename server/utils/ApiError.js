class ApiError extends Error{
    constructor(
        // default values in case object didn't take any of the set values
        statusCode,
        message = "Something went wrong!",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message

        if(stack) {this.stack = stack; }
        else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

module.exports = {
    ApiError
}