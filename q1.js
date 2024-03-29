db = connect('mongodb://127.0.0.1:27017/test');
//Deletes the db so se can restart from the beginning each time
db.test.deleteMany({});
//Initial Insert from Example Collection
db.test.insertMany([
    {
        "_id" : 1,
        "name" : {
            "first" : "John",
            "last" : "Backus"
        },
        "birth" : ISODate("1924-12-03T05:00:00Z"),
        "death" : ISODate("2007-03-17T04:00:00Z"),
        "contribs" : [
            "Fortran",
            "ALGOL",
            "Backus-Naur Form",
            "FP"
        ],
        "awards" : [
            {
                "award" : "W.W. McDowell Award",
                "year" : 1967,
                "by" : "IEEE Computer Society"
            },
            {
                "award" : "National Medal of Science",
                "year" : 1975,
                "by" : "National Science Foundation"
            },
            {
                "award" : "Turing Award",
                "year" : 1977,
                "by" : "ACM"
            },
            {
                "award" : "Draper Prize",
                "year" : 1993,
                "by" : "National Academy of Engineering"
            }
        ]
    },
    {
        "_id" : ObjectId("51df07b094c6acd67e492f41"),
        "name" : {
            "first" : "John",
            "last" : "McCarthy"
        },
        "birth" : ISODate("1927-09-04T04:00:00Z"),
        "death" : ISODate("2011-12-24T05:00:00Z"),
        "contribs" : [
            "Lisp",
            "Artificial Intelligence",
            "ALGOL"
        ],
        "awards" : [
            {
                "award" : "Turing Award",
                "year" : 1971,
                "by" : "ACM"
            },
            {
                "award" : "Kyoto Prize",
                "year" : 1988,
                "by" : "Inamori Foundation"
            },
            {
                "award" : "National Medal of Science",
                "year" : 1990,
                "by" : "National Science Foundation"
            }
        ]
    },
    {
        "_id" : 3,
        "name" : {
            "first" : "Grace",
            "last" : "Hopper"
        },
        "title" : "Rear Admiral",
        "birth" : ISODate("1906-12-09T05:00:00Z"),
        "death" : ISODate("1992-01-01T05:00:00Z"),
        "contribs" : [
            "UNIVAC",
            "compiler",
            "FLOW-MATIC",
            "COBOL"
        ],
        "awards" : [
            {
                "award" : "Computer Sciences Man of the Year",
                "year" : 1969,
                "by" : "Data Processing Management Association"
            },
            {
                "award" : "Distinguished Fellow",
                "year" : 1973,
                "by" : " British Computer Society"
            },
            {
                "award" : "W. W. McDowell Award",
                "year" : 1976,
                "by" : "IEEE Computer Society"
            },
            {
                "award" : "National Medal of Technology",
                "year" : 1991,
                "by" : "United States"
            }
        ]
    },
    {
        "_id" : 4,
        "name" : {
            "first" : "Kristen",
            "last" : "Nygaard"
        },
        "birth" : ISODate("1926-08-27T04:00:00Z"),
        "death" : ISODate("2002-08-10T04:00:00Z"),
        "contribs" : [
            "OOP",
            "Simula"
        ],
        "awards" : [
            {
                "award" : "Rosing Prize",
                "year" : 1999,
                "by" : "Norwegian Data Association"
            },
            {
                "award" : "Turing Award",
                "year" : 2001,
                "by" : "ACM"
            },
            {
                "award" : "IEEE John von Neumann Medal",
                "year" : 2001,
                "by" : "IEEE"
            }
        ]
    },
    {
        "_id" : 5,
        "name" : {
            "first" : "Ole-Johan",
            "last" : "Dahl"
        },
        "birth" : ISODate("1931-10-12T04:00:00Z"),
        "death" : ISODate("2002-06-29T04:00:00Z"),
        "contribs" : [
            "OOP",
            "Simula"
        ],
        "awards" : [
            {
                "award" : "Rosing Prize",
                "year" : 1999,
                "by" : "Norwegian Data Association"
            },
            {
                "award" : "Turing Award",
                "year" : 2001,
                "by" : "ACM"
            },
            {
                "award" : "IEEE John von Neumann Medal",
                "year" : 2001,
                "by" : "IEEE"
            }
        ]
    },
    {
        "_id" : 6,
        "name" : {
            "first" : "Guido",
            "last" : "van Rossum"
        },
        "birth" : ISODate("1956-01-31T05:00:00Z"),
        "contribs" : [
            "Python"
        ],
        "awards" : [
            {
                "award" : "Award for the Advancement of Free Software",
                "year" : 2001,
                "by" : "Free Software Foundation"
            },
            {
                "award" : "NLUUG Award",
                "year" : 2003,
                "by" : "NLUUG"
            }
        ]
    },
    {
        "_id" : ObjectId("51e062189c6ae665454e301d"),
        "name" : {
            "first" : "Dennis",
            "last" : "Ritchie"
        },
        "birth" : ISODate("1941-09-09T04:00:00Z"),
        "death" : ISODate("2011-10-12T04:00:00Z"),
        "contribs" : [
            "UNIX",
            "C"
        ],
        "awards" : [
            {
                "award" : "Turing Award",
                "year" : 1983,
                "by" : "ACM"
            },
            {
                "award" : "National Medal of Technology",
                "year" : 1998,
                "by" : "United States"
            },
            {
                "award" : "Japan Prize",
                "year" : 2011,
                "by" : "The Japan Prize Foundation"
            }
        ]
    },
    {
        "_id" : 8,
        "name" : {
            "first" : "Yukihiro",
            "aka" : "Matz",
            "last" : "Matsumoto"
        },
        "birth" : ISODate("1965-04-14T04:00:00Z"),
        "contribs" : [
            "Ruby"
        ],
        "awards" : [
            {
                "award" : "Award for the Advancement of Free Software",
                "year" : "2011",
                "by" : "Free Software Foundation"
            }
        ]
    },
    {
        "_id" : 9,
        "name" : {
            "first" : "James",
            "last" : "Gosling"
        },
        "birth" : ISODate("1955-05-19T04:00:00Z"),
        "contribs" : [
            "Java"
        ],
        "awards" : [
            {
                "award" : "The Economist Innovation Award",
                "year" : 2002,
                "by" : "The Economist"
            },
            {
                "award" : "Officer of the Order of Canada",
                "year" : 2007,
                "by" : "Canada"
            }
        ]
    },
    {
        "_id" : 10,
        "name" : {
            "first" : "Martin",
            "last" : "Odersky"
        },
        "contribs" : [
            "Scala"
        ]
    }

] );
//1. Inserts into the collection
db.test.insertMany([
        {
            "_id":20,
            "name":
                {
                    "first" : "Alex",
                    "last" : "Chen"
                },
            "birth" : ISODate("1933-08-27T04:00:00Z"),
            "death" : ISODate("1984-11-07T04:00:00Z"),
            "contribs" : [
                "C++",
                "Simula",
            ],
            "awards" : [
                {
                    "award" : "WPI Award",
                    "year" : 1977,
                    "by" : "WPI"
                }
            ]
        },
        {
            "_id" : 30,
            "name" :
                {
                    "first" : "David",
                    "last" : "Mark"
                },
            "birth" : ISODate("1911-04-12T04:00:00Z"),
            "death" : ISODate("2000-11-07T04:00:00Z"),
            "contribs" : [
                "C++",
                "FP",
                "Lisp",
            ],
            "awards" : [
                {
                    "award" : "WPI Award",
                    "year" : 1963,
                    "by" : "WPI"
                },
                {
                    "award": "Turing Award",
                    "year": 1966,
                    "by": "ACM"
                }
            ]
        }
        ]);

//2. Reports people who got less than 3 awards or have contribution FP
print("People with less than 3 awards or have contribution FP")
printjson(db.test.find({
    $or: [
        {
            awards: {
                $exists: true,
                $type: "array",
                $lt: [ { $size: "$awards" }, 3 ]
            }
        },
        { contribs: "FP" }
    ]
}));

//3. Updates Alex Chen with 3 comments
print("New Alex Chen with 3 comments")
db.test.updateOne(
    { "name.first": "Alex", "name.last":"Chen" },
    { $set: { comments: ["He taught in 3 universities", "died from cancer", "lived in CA"] } }
);

printjson(db.test.find({
    _id:20
}));

//4. For each contribution of Alex Chen, say the list of people who have contribution X
print("For each contribution of Alex Chen, print the first and last names with people who have the same contribution");
contributions = db.test.findOne(
    {_id:20},
    {_id:0, contribs: 1});

contributions.contribs.forEach(function(contribution) {
    peopleWithContribution = db.test.find(
        {contribs: contribution},
        {_id:0, name:1}
    );
    printjson(contribution);
    printjson(peopleWithContribution);
});

//5. Reports the distinct organization that game awards
print("Reports the distinct organization that gave awards");

printjson(db.test.distinct("awards.by"));

print("-----------------We are in Q2-----------------------------")

print("Group by award name and report the count");
printjson(db.test.aggregate(
    [
        {$unwind: "$awards"},
        {$group: {_id: "$awards.award", count: {$sum: 1}}}
    ]
));

print("Group by birth year and report an array of _ids of each birth year");
printjson(db.test.aggregate(
    [
        {$group: {_id: {$year: "$birth"}, ids: {$push: "$_id"}}}
    ]
));

print("Group by awards year and report the count of people who recieved awards in this year");
printjson(db.test.aggregate(
    [
        {$unwind: "$awards"},
        {$group: {_id: "$awards.year", count_people: {$sum: 1}}}
    ]
));
