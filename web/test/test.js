Object.prototype.contain = function(neddle){
    for(var name in this){
        if(this[name] === neddle){
            return true;
        }
    }
    return false;
}

var o = {'name': 'jw'};
console.log(o.contain('jw'));

for (var name in o){
    console.log(name);
}