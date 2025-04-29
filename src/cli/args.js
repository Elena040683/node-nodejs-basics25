const parseArgs = () => {
    const passedArgs = process.argv.slice(2);
    const parsedArgs = {};

    while (parseArgs.length > 0) {
        const argName = passedArgs.shift().slice(2);
        const argValue = passedArgs.shift();
        
        parseArgs[argName] = argValue;
    }

    const args = Object.entries(parsedArgs).map(([key, value]) => `${key} is ${value}`).join(", ");
    
    console.log(args);
};

parseArgs();