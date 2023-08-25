interface IConfig {
    db_Url: string,
}

const config: IConfig = {
  db_Url: import.meta.env.VITE_URL || import.meta.env.VITE_URL_DEV,
};

export default config;