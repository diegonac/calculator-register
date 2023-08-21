interface IConfig {
    db_Url: string,
    api_Key: string,
}

const config: IConfig = {
  db_Url: import.meta.env.VITE_URL || import.meta.env.VITE_URL_DEV,
  api_Key: import.meta.env.VITE_API_KEY,
};

export default config;