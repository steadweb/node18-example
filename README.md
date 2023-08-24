# node18-example

A basic zero dependency NodeJS 18 example returning "Hello World!"

## Quick Start

Build the container:

```
 docker build -t nodejs-example .
```

Then run the container:

```
docker run -d -p 3000:3000 nodejs-example:latest
```

Finally, test by running:

```
curl localhost:3000
```

You should see `Hello World!`
