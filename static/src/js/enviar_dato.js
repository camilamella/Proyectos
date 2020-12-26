odoo.define('prueba_modulo.enviar_dato',function (require) { 

    "use strict";
    console.log("Dentro de enviar_dato.js");
    var rpc = require('web.rpc');
    var dato_porcentaje = require('prueba_modulo.escribir');
   var dato = rcp.dato_porcentaje;
  var rpc = require('web.rpc');
    console.log("RPC", rpc);
    var dato_porcentaje = 10;
    console.log("rpc de enviar_datos", rpc);
    console.log("self",self);
    var percent = self.porcentaje;
    console.log("porcentaje_enviar_datos", percent);
  model('proyectos.proyecto').call('write',[dato_porcentaje]).then(function(result){
       console.log("Result_enviar_dato", result);
        return result;
     });
    //this.field_manager.
    // args: [{

    //     'progress_rate': percent,

    // }]
//     //this.call('write', [[self.id], { 'progress_rate': percent }]).done(function() {

//     //    console.log("Revisar Write");
    rpc.query({

            model: 'proyectos.proyecto',
        method: 'write',
        args: [[],[percent]],
        fields: ['progress_rate'],

        }).then(function(result){
            
            console.log("result_enviar_datos",result);
        })  
                
});

