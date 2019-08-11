# restfulApi
restfull api based on express and mongodb

first install packages
```
npm install
```

start your mongodb
```
mongod --dbpath YOUR_D_DIR
```

start your server
```
node index.js
```

request for sources use url like
```
get http://localhost:3389/api/stocks //get all stocks
put http://localhost:3389/api/stocks //put one stock, you should send params
search http://localhost:3389/api/stocks/list?ticker=aapl //search for aapl stocks list
get http://localhost:3389/api/stocks/5d3af0b6284b1c04706431a2 //get stock data which's id equal to 5d3af0b6284b1c04706431a2
delete http://localhost:3389/api/stocks/5d3af0b6284b1c04706431a2 //delete stock data which's id equal to 5d3af0b6284b1c04706431a2
put http://localhost:8080/api/stocks/5d3af0b6284b1c04706431a2 //update stock data which's id equal to 5d3af0b6284b1c04706431a2
```

