import { ERRORS } from "../constants";

export const validator = (city) => {
    const trimmedCity = city?.trim();

    if (!trimmedCity) {
        return ERRORS.REQUIRED;
    }

    if (trimmedCity.length < 3) {
        return ERRORS.MIN_LENGTH;
    }

    const cityRegex = /^[a-zA-Z\s]+$/;
    if (!cityRegex.test(trimmedCity)) {
        return ERRORS.INVALID_CHARS;
    }

    return null;
}