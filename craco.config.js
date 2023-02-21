const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@router": path.resolve(__dirname, "src/router"),
      "@components/atomic": path.resolve(__dirname, "src/components/atomic"),
      "@typography": path.resolve(
        __dirname,
        "src/components/atomic/typography"
      ),
      "@components/integrated": path.resolve(
        __dirname,
        "src/components/integrated"
      ),
      "@components/templates": path.resolve(
        __dirname,
        "src/components/templates"
      ),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@types": path.resolve(__dirname, "src/types"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@apolloConfig": path.resolve(__dirname, "src/apollo"),
    },
  },
};
