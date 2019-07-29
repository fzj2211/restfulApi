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
get http://localhost:8080/api/contacts //get all contacts
put http://localhost:8080/api/contacts //put one contact, you should send params

get http://localhost:8080/api/contacts/5d3af0b6284b1c04706431a2 //get contact data which's id equal to 5d3af0b6284b1c04706431a2
delete http://localhost:8080/api/contacts/5d3af0b6284b1c04706431a2 //delete contact data which's id equal to 5d3af0b6284b1c04706431a2
put http://localhost:8080/api/contacts/5d3af0b6284b1c04706431a2 //update contact data which's id equal to 5d3af0b6284b1c04706431a2
```

