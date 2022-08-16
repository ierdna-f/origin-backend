# Instructions
This project was built using Node.js  

## Pre-Requirements  
```
node,
npm
```

## Install requirements dependencies by doing 
```
$ npm install
```

### After configurating run in the root
```
$ node .
```

### Using Postman/Insomnia (or any other you like) make a POST request to the route '/insurance/risk-analysis'
```JSON
{
  "age": 65,
  "dependents": 2,
  "house": {"ownership_status": "owned" },
  "income": 100,
  "marital_status": "single",
  "risk_questions": [0, 1, 1],
  "vehicle": {"year": 2019}
}
```

### Expected Response : 
```JSON
{
    "auto": "responsible",
    "disability": "ineligible",
    "home": "regular",
    "life": "ineligible"
}
```

### Tests created using Postman Collection
```
To run tests locally, simply download and import this collection : https://www.getpostman.com/collections/3431cd4aa2e16f9ceb83 
Open and hit send, all payloads and tests are pre-built
```