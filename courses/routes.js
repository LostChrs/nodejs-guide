const fs = require("fs");

const requestHandle = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My first app</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send<button></input></form></body>');
        res.write('</html');
        return res.end();
    }
    
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on("data",(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
    
        req.on("end",()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split("=")[1];
            fs.writeFileSync("saveData.txt",message);
        })
    
        res.statusCode = 302;
        res.setHeader("Location","/");
        return res.end();
    }
}

module.exports = requestHandle;

