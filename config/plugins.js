module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", "dcjmcruvj"),
        api_key: env("CLOUDINARY_KEY", "493291779383164"),
        api_secret: env("CLOUDINARY_SECRET", "v5JId55a0KK0HkiIKPuuzzNfFJw"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
