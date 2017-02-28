require('express')().use((require('express')).static('.')).listen((process.env.PORT || 8000), () => { console.log("Listening on port 8000"); });
