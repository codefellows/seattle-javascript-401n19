class UnsupportedMethodError extends Error {
    constructor(message) {
        super(message);
        this.name = "UnsupportedMethodError";
    }
}

module.exports = UnsupportedMethodError;