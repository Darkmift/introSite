module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
          @import "@/styles/setup/_variables.scss";
          @import "@/styles/setup/_mixins.scss";
          @import "@/styles/setup/_functions.scss";
        `,
            },
        },
    },
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = 'Avi Koenig';
            return args;
        });
    },
};
