var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = []; // []

  if (typeof startEl === "undefined") {
    startEl = document.body;
    }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){
    resultSet.push(startEl)
  }

  for(let i=0; i<startEl.children.length; i++){
    let elements = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...elements]
  }

  return resultSet;

};


// startEl = <body></body>
// selector = 'img'
// matchFunc = function(elemento){
              // return selector.toUpperCase() === elemento.tagName }
// 



// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  return selector[0] === '#'? 'id' : selector[0] === '.'? 'class': selector.includes(".")? 'tag.class' : 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) { // BODY id = "photo" #photo ---> id
  var selectorType = selectorTypeMatcher(selector); // 'class'
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(elemento){
      return '#' + elemento.id === selector
      // return elemento.id === selector.slice(1)//? true : false
    }
  } else if (selectorType === "class") {
    matchFunction = function(elemento){
      return elemento.classList.contains(selector.slice(1))// ? true : false
    }
  } else if (selectorType === "tag.class") { // tag 
/*     matchFunction = function(elemento){
      let tagName = selector.split('.')[0].toUpperCase() //  'IMG'
      let selectorName = selector.split('.')[1]
      return tagName === elemento.tagName && elemento.classList.contains(selectorName)// ? true : false
    } */
    matchFunction = function(elemento){
      let [t, c] = selector.split('.')// [img , photo]
      //let t = selector.ssplit('.')[0]
      //let c = selector.ssplit('.')[1]
      return matchFunctionMaker(t)(elemento) && matchFunctionMaker("." + c)(elemento)
    }

} else if (selectorType === "tag") { // 'div' 'DIV'
    matchFunction = function(elemento){
      return selector.toUpperCase() === elemento.tagName//? true : false
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};


