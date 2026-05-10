export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Serwuj pliki statyczne z folderu ./static
    return env.ASSETS.fetch(request);
  },
};
