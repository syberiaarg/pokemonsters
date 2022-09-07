export const firstLetterUpper = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const wordSpace = (name) => {
  return name.replace("-", " ")
};
