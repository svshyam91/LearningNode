const fs = require("fs");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.write(
      `
        <html>
            <head><title>Get Message</title></head>
            <body>
                <form action='/message' method='post'>
                    <input type='text' name='message' />
                    <button>Submit</button>
                </form>
            </body>
        </html>`
    );
    return res.end();
  }
  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("close", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      fs.writeFile("message.txt", parsedBody, (err) => {
        res.write("You have reached the end of the response !!");
        return res.end();
      });
    });
  }
};

module.exports = requestHandler;
