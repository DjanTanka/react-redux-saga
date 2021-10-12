const getInfoSwapi = async (type) => {
  let response = await fetch(`http://swapi.dev/api/${type}`);
  const data = await response.json()
  return data
};

export default getInfoSwapi;