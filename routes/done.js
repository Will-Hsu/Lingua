var data = require("../data.json");

exports.view = function(request, response) {   
    var name = request.params.name;
    console.log("this is the name " + name);
    var completed = {
        "name": name,
        "image": "redo.svg",
        "id": "quizcompleted"
    }
    data.oldquiz.push(completed);
    console.log(data.newquiz);

    for(var i = 0; i < data.newquiz.length; i++) {
        var obj = data.newquiz[i];
        if(obj.name === name)
            data.newquiz.splice(i, 1);
    }
    
    console.log(data.newquiz);
}