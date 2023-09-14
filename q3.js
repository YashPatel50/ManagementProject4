db = connect('mongodb://127.0.0.1:27017/categories');
//Deletes the db so se can restart from the beginning each time
db.categories.deleteMany({});
db.children.deleteMany({});

db.categories.insertOne({_id: "MongoDB", parent: "Databases"});
db.categories.insertOne({_id: "dbm", parent: "Databases"});
db.categories.insertOne({_id: "Databases", parent: "Programming"});
db.categories.insertOne({_id: "Languages", parent: "Programming"});
db.categories.insertOne({_id: "Programming", parent: "Books"});
db.categories.insertOne({_id: "Books", parent: null});

print("All of the Nodes in the Parent tree");
printjson(db.categories.find());

//1. Report the ancestors of MongoDB with Level
print("Report the ancestors of MongoDB");
var ancestors = [];
var level = 0;
var stack = [];
var item = db.categories.findOne({_id: "MongoDB"});
stack.push(item);
while (stack.length > 0) {
    //Get the top of the stack
    var current = stack.pop();
    //Add it to our ancestors list
    if (level !== 0){
        ancestors.push({Name: current._id, Level: level});
    }

    //Find the parent of current node
    var ancestor = db.categories.findOne( {_id: current.parent});
    if (ancestor){
        stack.push(ancestor);
        //Increase the level by one
        level += 1;
    }

}
printjson(ancestors);


//2. Report height of tree
print("Height of tree");
var root = db.categories.findOne({_id: "Books"});

print(calculateHeight(root));

function calculateHeight(node){
    //Get the children of current node
    var children = db.categories.find( {parent: node._id});
    var childrenHeights = [];
    //Find the heights for each of the children
    while (children.hasNext() === true) {
        var child = children.next();
        childrenHeights.push(calculateHeight(child));
    }

    //If there are children then return the maximum height from the children + 1
    if (childrenHeights.length === 0) {
        return 1;
    } else {
        return 1 + Math.max.apply(Math, childrenHeights);
    }
}

//3. Get Descendants with Child-Reference Model
db.children.insertMany([
    {
        _id: "MongoDB", children: []
    },
    {
        _id: "dbm", children: []
    },
    {
        _id: "Databases", children: ["MongoDB", "dbm"]
    },
    {
        _id: "Languages", children: []
    },{
        _id: "Programming", children: ["Databases", "Languages"]
    },{
        _id: "Books", children: ["Programming"]
    }
    ]
);

print("All Nodes in Children Tree");
printjson(db.children.find());
var descendants = [];
stack = [];
root = db.children.findOne({_id: "Books"});
stack.push(root);

while (stack.length > 0) {
    //Get the top of the stack
    current = stack.pop();
    //Add it to our descendants list
    if(current._id !== root._id){
        descendants.push(current._id);
    }

    children = current.children;
    children.forEach(function(child){
        stack.push(db.children.findOne({_id: child}));
    })

}

print("All the descendants of Books");
print(descendants);
