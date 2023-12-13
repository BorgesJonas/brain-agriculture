export function generateColors(length) {
  const colors = [];

  for (let i = 1; i <= length; i++) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
  }

  return colors;
}

export function findInputError(errors, name) {
  const filtered = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] });
    }, {});
  return filtered;
}

export function isFormInvalid(error) {
  return Object.keys(error).length > 0;
}
