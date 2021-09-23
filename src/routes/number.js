const { Router } = require("express");

const router = Router();



router.get("/:number", (req, res) => {
   var valoresAceptados = /^[0-9]+$/;
       if (req.params.number.match(valoresAceptados)){
        var c = req.params.number;
        var j = 2;
        var numerosPrimos = [];
        
        for (; j < c; j++) {
        
          if (primo(j)) {
            numerosPrimos.push(j);
          }
          
        }
        
        
        
        function primo(numero) {
        
          for (var i = 2; i < numero; i++) {
        
            if (numero % i === 0) {
              return false;
            }
        
          }
        
          return numero !== 1;
        }
        
        
       return  res.status(200).json(numerosPrimos);
       } else {
        return res.status(404).json("Debe ingresar un numero");
      }
  

});





module.exports = router;
