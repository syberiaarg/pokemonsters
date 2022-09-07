export const getUserEmail = () => localStorage.getItem("user" ?? null);

export const setUserEmail = (email) => localStorage.setItem("user", email);

export const isSignedUp = () => localStorage.getItem("user") !== null;
