
const responseHandle = (req,res)=>{
    const url = req.url;
    const method = req.method;
    console.log(url+"---"+method);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    
    if(url === '/'){
        const greeting = 'Hello Everyone~';
        res.write(`<head><title>${greeting}</title></head>`);
        res.write(`<body><h1>${greeting}</h1>
        <form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create<button></input></form>
        </body>`);
        res.write('</html');
        return res.end();
    }else if(url === '/users'){
        res.write(`<head><title>UserList</title></head>`);
        res.write(`<body>
        <ul>
            <li>User1</li>
            <li>User2</li>
            <li>User3</li>
            <li>User4</li>
            <li>User5</li>
        </ul></body>`);
        res.write('</html');
        return res.end();
    }else if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });

        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const username = parsedBody.split('=')[1];
            res.write(`<body><h1>${username},you create an account!</h1></body>`);
            res.write('</html');
            res.write('</html');
            return res.end();
        });
    }
    
}

module.exports = responseHandle;