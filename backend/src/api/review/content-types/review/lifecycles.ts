module.exports = {
  beforeCreate(event) {
    const { data } = event.params;

    if (data.Review && !data.Slug) {
      data.Slug = data.Review
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    }
  },

  beforeUpdate(event) {
    const { data } = event.params;

    if (data.Review && !data.Slug) {
      data.Slug = data.Review
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    }
  }
};
