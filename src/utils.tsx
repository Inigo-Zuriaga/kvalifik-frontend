export function transformToArray(data: any) {
  const toReturn = [];
  for (let key in data) {
    const temp = {
      ...data[key],
      id: key,
    };
    toReturn.push(temp);
  }
  return toReturn;
}
