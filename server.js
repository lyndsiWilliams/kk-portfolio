const express = require('express');
const app = express();
const PORT = process.env.PORT || 5309;
app.listen(PORT, () => console.log(`\n.: The server is running on port: ${PORT} :.\n`));