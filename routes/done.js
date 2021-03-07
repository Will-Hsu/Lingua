var data = require("../data.json");

exports.view = function(request, response) {   
    var name = request.params.name;
    var newquizdatabase;
    var oldquizdatabase;

    if(name.substring(0, 8).toLowerCase() === "beginner"){
        newquizdatabase = data.newquiz;
        oldquizdatabase = data.oldquiz;
        name = name.substring(8);
    }
    else if(name.substring(0, 12).toLowerCase() === "intermediate"){
        newquizdatabase = data.newquizInt;
        oldquizdatabase = data.oldquizInt;
        name = name.substring(12);
    }else{
        newquizdatabase = data.newquizAdv;
        oldquizdatabase = data.oldquizAdv;
        name = name.substring(8);
    }

    var completed = {
        "name": name,
        "image": "redo.svg",
        "id": "quizcompleted"
    }
    var alreadyCompleted = false;
    for(var i = 0; i < oldquizdatabase.length; i++) {
        var obj = oldquizdatabase[i];
        if(obj.name === name)
            alreadyCompleted = true;
    }
    if(!alreadyCompleted)
        oldquizdatabase.push(completed);

    for(var i = 0; i < newquizdatabase.length; i++) {
        var obj = newquizdatabase[i];
        if(obj.name === name)
            newquizdatabase.splice(i, 1);
    }
}