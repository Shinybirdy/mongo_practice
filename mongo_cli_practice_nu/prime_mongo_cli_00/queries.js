// /Users/tracey/Desktop/mongo_cli_practice_nu/prime_mongo_cli_00/bios.js
> db.bios.find({awards:{$exists:true}});
// 1. Create a file, `queries.js` that will contain the queries that correctly address the criteria in the
// steps that follow.
// 2. Find documents that have awards.


{ "_id" : 1, "name" : { "first" : "John", "last" : "Backus" }, "birth" : ISODate("1924-12-03T05:00:00Z"), "death" : ISODate("2007-03-17T04:00:00Z"), "contribs" : [ "Fortran", "ALGOL", "Backus-Naur Form", "FP" ], "awards" : [ { "award" : "W.W. McDowell Award", "year" : 1967, "by" : "IEEE Computer Society" }, { "award" : "National Medal of Science", "year" : 1975, "by" : "National Science Foundation" }, { "award" : "Turing Award", "year" : 1977, "by" : "ACM" }, { "award" : "Draper Prize", "year" : 1993, "by" : "National Academy of Engineering" } ] }
{ "_id" : ObjectId("51df07b094c6acd67e492f41"), "name" : { "first" : "John", "last" : "McCarthy" }, "birth" : ISODate("1927-09-04T04:00:00Z"), "death" : ISODate("2011-12-24T05:00:00Z"), "contribs" : [ "Lisp", "Artificial Intelligence", "ALGOL" ], "awards" : [ { "award" : "Turing Award", "year" : 1971, "by" : "ACM" }, { "award" : "Kyoto Prize", "year" : 1988, "by" : "Inamori Foundation" }, { "award" : "National Medal of Science", "year" : 1990, "by" : "National Science Foundation" } ] }
{ "_id" : 3, "name" : { "first" : "Grace", "last" : "Hopper" }, "title" : "Rear Admiral", "birth" : ISODate("1906-12-09T05:00:00Z"), "death" : ISODate("1992-01-01T05:00:00Z"), "contribs" : [ "UNIVAC", "compiler", "FLOW-MATIC", "COBOL" ], "awards" : [ { "award" : "Computer Sciences Man of the Year", "year" : 1969, "by" : "Data Processing Management Association" }, { "award" : "Distinguished Fellow", "year" : 1973, "by" : " British Computer Society" }, { "award" : "W. W. McDowell Award", "year" : 1976, "by" : "IEEE Computer Society" }, { "award" : "National Medal of Technology", "year" : 1991, "by" : "United States" } ] }
{ "_id" : 4, "name" : { "first" : "Kristen", "last" : "Nygaard" }, "birth" : ISODate("1926-08-27T04:00:00Z"), "death" : ISODate("2002-08-10T04:00:00Z"), "contribs" : [ "OOP", "Simula" ], "awards" : [ { "award" : "Rosing Prize", "year" : 1999, "by" : "Norwegian Data Association" }, { "award" : "Turing Award", "year" : 2001, "by" : "ACM" }, { "award" : "IEEE John von Neumann Medal", "year" : 2001, "by" : "IEEE" } ] }
{ "_id" : 5, "name" : { "first" : "Ole-Johan", "last" : "Dahl" }, "birth" : ISODate("1931-10-12T04:00:00Z"), "death" : ISODate("2002-06-29T04:00:00Z"), "contribs" : [ "OOP", "Simula" ], "awards" : [ { "award" : "Rosing Prize", "year" : 1999, "by" : "Norwegian Data Association" }, { "award" : "Turing Award", "year" : 2001, "by" : "ACM" }, { "award" : "IEEE John von Neumann Medal", "year" : 2001, "by" : "IEEE" } ] }
{ "_id" : 6, "name" : { "first" : "Guido", "last" : "van Rossum" }, "birth" : ISODate("1956-01-31T05:00:00Z"), "contribs" : [ "Python" ], "awards" : [ { "award" : "Award for the Advancement of Free Software", "year" : 2001, "by" : "Free Software Foundation" }, { "award" : "NLUUG Award", "year" : 2003, "by" : "NLUUG" } ] }
{ "_id" : ObjectId("51e062189c6ae665454e301d"), "name" : { "first" : "Dennis", "last" : "Ritchie" }, "birth" : ISODate("1941-09-09T04:00:00Z"), "death" : ISODate("2011-10-12T04:00:00Z"), "contribs" : [ "UNIX", "C" ], "awards" : [ { "award" : "Turing Award", "year" : 1983, "by" : "ACM" }, { "award" : "National Medal of Technology", "year" : 1998, "by" : "United States" }, { "award" : "Japan Prize", "year" : 2011, "by" : "The Japan Prize Foundation" } ] }
{ "_id" : 8, "name" : { "first" : "Yukihiro", "aka" : "Matz", "last" : "Matsumoto" }, "birth" : ISODate("1965-04-14T04:00:00Z"), "contribs" : [ "Ruby" ], "awards" : [ { "award" : "Award for the Advancement of Free Software", "year" : "2011", "by" : "Free Software Foundation" } ] }
{ "_id" : 9, "name" : { "first" : "James", "last" : "Gosling" }, "birth" : ISODate("1955-05-19T04:00:00Z"), "contribs" : [ "Java" ], "awards" : [ { "award" : "The Economist Innovation Award", "year" : 2002, "by" : "The Economist" }, { "award" : "Officer of the Order of Canada", "year" : 2007, "by" : "Canada" } ] }
>
≈
// 3. Find documents that don't have awards.
db.bios.find({awards:{$exists:false}});
{ "_id" : 10, "name" : { "first" : "Martin", "last" : "Odersky" }, "contribs" : [ "Scala" ] }
>

// 4. Find documents that have contribs for OOP or UNIX.

db.bios.find({$or:[{"contribs":"OOP"},{"contribs":"UNIX"}]});
{ "_id" : 4, "name" : { "first" : "Kristen", "last" : "Nygaard" }, "birth" : ISODate("1926-08-27T04:00:00Z"), "death" : ISODate("2002-08-10T04:00:00Z"), "contribs" : [ "OOP", "Simula" ], "awards" : [ { "award" : "Rosing Prize", "year" : 1999, "by" : "Norwegian Data Association" }, { "award" : "Turing Award", "year" : 2001, "by" : "ACM" }, { "award" : "IEEE John von Neumann Medal", "year" : 2001, "by" : "IEEE" } ] }
{ "_id" : 5, "name" : { "first" : "Ole-Johan", "last" : "Dahl" }, "birth" : ISODate("1931-10-12T04:00:00Z"), "death" : ISODate("2002-06-29T04:00:00Z"), "contribs" : [ "OOP", "Simula" ], "awards" : [ { "award" : "Rosing Prize", "year" : 1999, "by" : "Norwegian Data Association" }, { "award" : "Turing Award", "year" : 2001, "by" : "ACM" }, { "award" : "IEEE John von Neumann Medal", "year" : 2001, "by" : "IEEE" } ] }
{ "_id" : ObjectId("51e062189c6ae665454e301d"), "name" : { "first" : "Dennis", "last" : "Ritchie" }, "birth" : ISODate("1941-09-09T04:00:00Z"), "death" : ISODate("2011-10-12T04:00:00Z"), "contribs" : [ "UNIX", "C" ], "awards" : [ { "award" : "Turing Award", "year" : 1983, "by" : "ACM" }, { "award" : "National Medal of Technology", "year" : 1998, "by" : "United States" }, { "award" : "Japan Prize", "year" : 2011, "by" : "The Japan Prize Foundation" } ] }


// 5. Find documents with "Turing Award" awards.
db.bios.find({"awards.award":"Turing Award"});
{ "_id" : 1, "name" : { "first" : "John", "last" : "Backus" }, "birth" : ISODate("1924-12-03T05:00:00Z"), "death" : ISODate("2007-03-17T04:00:00Z"), "contribs" : [ "Fortran", "ALGOL", "Backus-Naur Form", "FP" ], "awards" : [ { "award" : "W.W. McDowell Award", "year" : 1967, "by" : "IEEE Computer Society" }, { "award" : "National Medal of Science", "year" : 1975, "by" : "National Science Foundation" }, { "award" : "Turing Award", "year" : 1977, "by" : "ACM" }, { "award" : "Draper Prize", "year" : 1993, "by" : "National Academy of Engineering" } ] }
{ "_id" : ObjectId("51df07b094c6acd67e492f41"), "name" : { "first" : "John", "last" : "McCarthy" }, "birth" : ISODate("1927-09-04T04:00:00Z"), "death" : ISODate("2011-12-24T05:00:00Z"), "contribs" : [ "Lisp", "Artificial Intelligence", "ALGOL" ], "awards" : [ { "award" : "Turing Award", "year" : 1971, "by" : "ACM" }, { "award" : "Kyoto Prize", "year" : 1988, "by" : "Inamori Foundation" }, { "award" : "National Medal of Science", "year" : 1990, "by" : "National Science Foundation" } ] }
{ "_id" : 4, "name" : { "first" : "Kristen", "last" : "Nygaard" }, "birth" : ISODate("1926-08-27T04:00:00Z"), "death" : ISODate("2002-08-10T04:00:00Z"), "contribs" : [ "OOP", "Simula" ], "awards" : [ { "award" : "Rosing Prize", "year" : 1999, "by" : "Norwegian Data Association" }, { "award" : "Turing Award", "year" : 2001, "by" : "ACM" }, { "award" : "IEEE John von Neumann Medal", "year" : 2001, "by" : "IEEE" } ] }
{ "_id" : 5, "name" : { "first" : "Ole-Johan", "last" : "Dahl" }, "birth" : ISODate("1931-10-12T04:00:00Z"), "death" : ISODate("2002-06-29T04:00:00Z"), "contribs" : [ "OOP", "Simula" ], "awards" : [ { "award" : "Rosing Prize", "year" : 1999, "by" : "Norwegian Data Association" }, { "award" : "Turing Award", "year" : 2001, "by" : "ACM" }, { "award" : "IEEE John von Neumann Medal", "year" : 2001, "by" : "IEEE" } ] }
{ "_id" : ObjectId("51e062189c6ae665454e301d"), "name" : { "first" : "Dennis", "last" : "Ritchie" }, "birth" : ISODate("1941-09-09T04:00:00Z"), "death" : ISODate("2011-10-12T04:00:00Z"), "contribs" : [ "UNIX", "C" ], "awards" : [ { "award" : "Turing Award", "year" : 1983, "by" : "ACM" }, { "award" : "National Medal of Technology", "year" : 1998, "by" : "United States" }, { "award" : "Japan Prize", "year" : 2011, "by" : "The Japan Prize Foundation" } ] }
>

// 6. Find documents with IDs between 3 and 7.
db.bios.find({_id:{$in:[3, 7]}});
{ "_id" : 3, "name" : { "first" : "Grace", "last" : "Hopper" }, "title" : "Rear Admiral", "birth" : ISODate("1906-12-09T05:00:00Z"), "death" : ISODate("1992-01-01T05:00:00Z"), "contribs" : [ "UNIVAC", "compiler", "FLOW-MATIC", "COBOL" ], "awards" : [ { "award" : "Computer Sciences Man of the Year", "year" : 1969, "by" : "Data Processing Management Association" }, { "award" : "Distinguished Fellow", "year" : 1973, "by" : " British Computer Society" }, { "award" : "W. W. McDowell Award", "year" : 1976, "by" : "IEEE Computer Society" }, { "award" : "National Medal of Technology", "year" : 1991, "by" : "United States" } ] }
>
// 7. Find documents with awards that were awarded before the year 2000.
db.bios.find({"awards.year":{$lt:2000}});
{ "_id" : 1, "name" : { "first" : "John", "last" : "Backus" }, "birth" : ISODate("1924-12-03T05:00:00Z"), "death" : ISODate("2007-03-17T04:00:00Z"), "contribs" : [ "Fortran", "ALGOL", "Backus-Naur Form", "FP" ], "awards" : [ { "award" : "W.W. McDowell Award", "year" : 1967, "by" : "IEEE Computer Society" }, { "award" : "National Medal of Science", "year" : 1975, "by" : "National Science Foundation" }, { "award" : "Turing Award", "year" : 1977, "by" : "ACM" }, { "award" : "Draper Prize", "year" : 1993, "by" : "National Academy of Engineering" } ] }

// 8. Find documents with birth dates, but no death dates.
db.bios.find({$and:[{birth:{$exists:true}},{death:{$exists:false}}]});
{ "_id" : 6, "name" : { "first" : "Guido", "last" : "van Rossum" }, "birth" : ISODate("1956-01-31T05:00:00Z"), "contribs" : [ "Python" ], "awards" : [ { "award" : "Award for the Advancement of Free Software", "year" : 2001, "by" : "Free Software Foundation" }, { "award" : "NLUUG Award", "year" : 2003, "by" : "NLUUG" } ] }
{ "_id" : 8, "name" : { "first" : "Yukihiro", "aka" : "Matz", "last" : "Matsumoto" }, "birth" : ISODate("1965-04-14T04:00:00Z"), "contribs" : [ "Ruby" ], "awards" : [ { "award" : "Award for the Advancement of Free Software", "year" : "2011", "by" : "Free Software Foundation" } ] }
{ "_id" : 9, "name" : { "first" : "James", "last" : "Gosling" }, "birth" : ISODate("1955-05-19T04:00:00Z"), "contribs" : [ "Java" ], "awards" : [ { "award" : "The Economist Innovation Award", "year" : 2002, "by" : "The Economist" }, { "award" : "Officer of the Order of Canada", "year" : 2007, "by" : "Canada" } ] }
> 

//
