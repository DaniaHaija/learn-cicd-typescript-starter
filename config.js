const config = {
    api: {
        port: process.env.PORT || "8080",
        filepathRoot: process.env.FILEPATH_ROOT || "./static",
    },
    db: {
        url: process.env.DATABASE_URL || "",
    },
};
export default config;
