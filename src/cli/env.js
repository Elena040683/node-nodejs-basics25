const parseEnv = () => {
    const allEnvVars = Object.keys(process.env).filter(envVar => envVar.startsWith("RSS_"));
    const showEnvVars = allEnvVars.map(envVar => `${envVar}=${process.env[envVar]}`).join(";");
    console.log(showEnvVars);
};

parseEnv();