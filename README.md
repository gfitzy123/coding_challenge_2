# Coding Challenge

The objective of the coding challenge was to create an API endpoint through which a user could submit key and value pairs, some of which the value would be the summed, and retrieve these values with the appropriate endpoint.

The file db.js stores these values, and will the contents of the db.js will be reset every hour.

## Getting Started

Clone down the repo, and then npm install.

### Prerequisites

You may need to install the latest version of Node.js and a utility tool to hit endpoints (such as Postman).

### Installing

Clone down the repo and simply: 

```
npm install
```


## Deployment

To run the application:

```
node start.js
```

## API endpoint

POST
To hit the endpoint, make a request to '/metric/:key' with parameters as follows:

RESPONSE:
```
{ }
```

GET

Make a get request to retrieve the sum of a value with '/metric/:key/sum'

```
{ 
  value: 300
}
```


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on codes of conduct, and the process for submitting pull requests to me.


