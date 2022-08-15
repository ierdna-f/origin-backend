# Instructions
This project was built using Node.js  

## Install requirements dependencies by doing 
```
$ npm init -y
```

### After configurating run node . in the root
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
https://www.getpostman.com/collections/c79bb26b8cddd588f07e