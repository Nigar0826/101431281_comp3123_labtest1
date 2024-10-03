// comp3123 lab test1
// Nigar Ahmadova
// 101431281
// question3_ add


const fs = require('fs');
const path = require('path');

// Function to create log files in the Logs directory
async function createLogs() {
    const logDir = path.join(__dirname, 'Logs');

    // Create Logs directory if it doesn't exist
    try {
        await fs.promises.access(logDir);
    } catch {
        try {
            await fs.promises.mkdir(logDir);
        } catch (error) {
            console.error('Error creating Logs directory:', error);
            return;
        }
    }

    // Change working directory to Logs
    process.chdir(logDir); 

    // Create 10 log files
    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        try {
            await fs.promises.writeFile(fileName, `This is log file ${i}.`);
            console.log(`Created file: ${fileName}`);
        } catch (error) {
            console.error(`Error creating file: ${fileName}`, error);
        }
    }
}

createLogs();