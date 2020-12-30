export const welcome = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      'Yokoso'
    ),
  };
};
