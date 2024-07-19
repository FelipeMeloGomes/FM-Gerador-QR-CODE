async function permittedCharacters() {
    let permitted = [];
    if (process.env.UPPERCASE_LETTERS === "true") {
        permitted.push(..."ASDADFVRVRVEVERVVERV");
    }

    if (process.env.LOWERCASE_LETTERS === "true") {
        permitted.push(..."qwertyuiopasdfghjklzxcvbnm");
    }

    if (process.env.NUMBERS === "true") {
        permitted.push(..."0123456789");
    }

    if (process.env.ESPECIAL_CHARACTERS === "true") {
        permitted.push(..."*&%@!)(:;");
    }

    return permitted;
}

export default permittedCharacters;
