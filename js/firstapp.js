var FIRSTAPP=(function(module){

module.doit = function(resultObject){
resultObject.prepend(Date() + '<br />');
};

return module;
}(FIRSTAPP || {}));