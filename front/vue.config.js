module.exports = {
   devServer: {
    proxy: {

               target: 'http://oopss.test/',
                ws: true,
                changeOrigin: true

    }
},
};