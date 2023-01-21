export const randomString = (length = 10): string => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.toLowerCase();
};

export const uid = (): string => {
  return  `${randomString(8)}-${randomString(4)}-${randomString(4)}-${randomString(4)}-${randomString(12)}`
}

export const truncateString = (string = "", maxLength = 50): string => {
  if (string.length > maxLength) {
    return `${string.substring(0, maxLength)}..`;
  } else {
    return string;
  }
};
