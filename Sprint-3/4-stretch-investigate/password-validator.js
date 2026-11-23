function passwordValidator(password, previousPasswords = []) {
    if (typeof password !== "string" || !Array.isArray(previousPasswords)) {
        return false;
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasAllowedSymbol = /[!#$%.*&]/.test(password);

    return (
        password.length >= 5 &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasAllowedSymbol &&
        !previousPasswords.includes(password)
    );
}


module.exports = passwordValidator;