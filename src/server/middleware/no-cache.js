
export default (request, response, next) => {
  response.set('Cache-Control', 'no-cache, max-age=0, must-revalidate, no-store');
  next();
};
