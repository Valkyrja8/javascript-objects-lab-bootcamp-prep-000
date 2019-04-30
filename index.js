var recipes={}

function updateObjectWithKeyAndValue(object, key, value){
<<<<<<< HEAD
 var newObj = Object.assign({}, object,{[key]: value})
 return newObj;
=======
 return Object.assign({}, object,{[key]: value});
>>>>>>> 47fa6051990b2638baa7b00ad2f6db8697d60464
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
<<<<<<< HEAD
}

function deleteFromObjectByKey(newObj, key){
return delete newObj.key
  }
  
function destructivelyDeleteFromObjectByKey(object, key){
 return delete object[key]
=======
>>>>>>> 47fa6051990b2638baa7b00ad2f6db8697d60464
}