module.exports = {
  beforeCreate(event) {
    const { data } = event.params;

    if (data.Title && !data.Slug) {
      data.Slug = data.Title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    }
  },

  beforeUpdate(event) {
    const { data } = event.params;

    if (data.Title && !data.Slug) {
      data.Slug = data.Title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    }
  }
};
