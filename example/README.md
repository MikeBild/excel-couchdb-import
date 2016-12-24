# Example import

* `movies.xlsx` imports 2 sheets (Film, Genre) into 1 CouchDB/PouchDB database
* Creates relations film.genresIds to genre._id between Film- and Genre-Documents (;; as separator)
* Creates an additional doctype field (Film, Genre) in every document
