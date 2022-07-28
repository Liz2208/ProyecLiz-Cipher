var cipher = cipher|| (function() {
  var doStaff = function (txt, desp, action) {
    var replace = (function() { //llamando funciones
      var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //aqui llamo las letraspara reemplazar
      var l = abc.length; //asignando la variable, length es la longitud de la palabra
      return function(c) { //nombramos esta funcion como  c para llamarla mas abajo
        var i = abc.indexOf(c.toLowerCase()); //devuelve en mayusculas el valor de la cadena
        if (i != -1) {
          var pos = i;
          if (action) {
            pos += desp;
            pos -= (pos >= l)?l:0;
          } else {
            // backward
            pos -= desp;
            pos += (pos < 0)?l:0; //condicion de posiciones si esta vacia o con texto
          }
          return abc[pos];//aqui llamamos la variable aabc que son las letras a reemplazar
        }
        return c; //devuelve el valor de la funcion c
      };
    })();
    var re = (/([a-z])/ig); //formula para reemplazar
    return String(txt).replace(re, function (match) { //metodo replace
      return replace(match);
    });
  };

  return {
      encode: function(txt, desp) { //reemplaza todos los caracteres excepto los reservados
      return doStaff(txt, desp, true);
    },
      decode: function(txt, desp) {
      return doStaff(txt, desp, false);
    }
  };
})();


function encode() //imprimimos el resultado
{
  document.getElementById("resultado").innerHTML=cipher.encode(document.getElementById("cadena").value, document.getElementById("offset").value);
  console.log("Este es el espacio a mover", offset.value);
  console.log("Este es el texto", cadena.value);
  console.log("Este es el resultado", resultado.value);

}
function decode()
{
  document.getElementById("resultado2").innerHTML=cipher.decode(document.getElementById("cadena").value, 0);
}
