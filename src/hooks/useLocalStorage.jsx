import { useEffect, useState } from "react";

const PREFIX = "codepen-clone-";

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key;

    // Create the value to be stored in local storage
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey);

        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof initialValue === "function") {
            return initialValue();
        } else {
            return initialValue;
        }
    });

    // Saving the value in local storage
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [prefixedKey, value]);

    return [value, setValue];
}
