// comp3123 lab test1
// Nigar Ahmadova
// 101431281
// question3_remove


const fs = require('fs');
const path = require('path');

// Function to remove log files and the Logs directory
async function removeLogs() {
    const logDir = path.join(__dirname, 'Logs');

    // Check if the Logs directory exists
    fs.access(logDir, fs.constants.F_OK, async (err) => {
        if (err) {
            console.log('Logs directory does not exist.');
            return;
        }

        try {
            // Read and delete all files in the Logs directory
            const files = await fs.promises.readdir(logDir);
            for (const file of files) {
                console.log(`Deleting file: ${file}`);
                await fs.promises.unlink(path.join(logDir, file)); 
            }

            // Remove the Logs directory
            await fs.promises.rmdir(logDir);
            console.log('Logs directory removed.');
        } catch (error) {
            console.error('Error during file or directory removal:', error);
        }
    });
}

removeLogs();