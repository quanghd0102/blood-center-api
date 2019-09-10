
```zsh
###Basic api query use for getAll resources. Only support normal query if need complex or advanced use cases(fulltextsearch, geolocation...) contact server developers to support more.
$ Paginate with limit and offset. Ex: ?limit=5&offset=5
$ Order by fields and order reverse use prefix "-". Ex: ?orderBy=age,-name
$ Include other relate models(rare case caution on use). Ex: users?includes=books (user has many books)
$ Select field on query (Only use in single models). Ex: ?fields=age,name
$ Filter equal ?filter={"name": "Hoang"}
$ Filter less than ?filter={"age": {"$lt": 40}}
$ Filter greater than ?filter={"age": {"$gt": 20}}
$ Filter less than and equal ?filter={"age": {"$lte": 40}}
$ Filter greater than equal ?filter={"age": {"$gte": 20}}
$ Filter field in many choice ?filter={"name": {"$in": ["Hoang", "MMMM"]}}
$ Filter array field is subset of parent array ?filter={"tags": {"$all": ["JAV", "Lesbian"]}}
```