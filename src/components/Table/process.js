export const process =
[ 
    {
        "name" : "getReqBody",
        "proces" : []
    }, 
    {
        "name" : "JoiValidasi",
        "proces" : [ 
            "index 0", 
            {
                "type" : "object",
                "properties" : {
                    "email" : {
                        "type" : "string",
                        "minLength" : 6,
                        "format" : "email"
                    },
                    "username" : {
                        "type" : "string",
                        "minLength" : 5
                    },
                    "password" : {
                        "type" : "string",
                        "minLength" : 6
                    },
                    "fullname" : {
                        "type" : "string",
                        "minLength" : 7
                    }
                },
                "required" : [ 
                    "email", 
                    "username", 
                    "password", 
                    "fullname"
                ]
            }
        ]
    }, 
    {
        "name" : "destructingData",
        "proces" : [ 
            "email", 
            "index 0", 
            1
        ]
    }, 
    {
        "name" : "MongoMultiQuery",
        "proces" : [ 
            {
                "scema" : "users",
                "type" : "findOne"
            }, 
            "index 2"
        ]
    }, 
    {
        "name" : "validasiAcceptNull",
        "proces" : [ 
            "index 3", 
            "Success", 
            "User Already Exist"
        ]
    }, 
    {
        "name" : "destructingData",
        "proces" : [ 
            "password", 
            "index 0", 
            1
        ]
    }, 
    {
        "name" : "encryptfiledObject",
        "proces" : [ 
            "index 5"
        ]
    }, 
    {
        "name" : "marge2json",
        "proces" : [ 
            "index 0", 
            "index 6"
        ]
    }, 
    {
        "name" : "marge2json",
        "proces" : [ 
            "index 7", 
            {
                "role" : "2",
                "picture" : "default.png"
            }
        ]
    }, 
    {
        "name" : "MongoMultiQuery",
        "proces" : [ 
            {
                "scema" : "users",
                "type" : "create"
            }, 
            "index 8"
        ]
    }, 
    {
        "name" : "destructingData",
        "proces" : [ 
            "_id", 
            "index 9", 
            1
        ]
    }, 
    {
        "name" : "JwtCreateToken",
        "proces" : [ 
            "index 10"
        ]
    }
]
