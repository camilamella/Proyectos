odoo.define('prueba_modulo.escribir',function (require) { 

    "use strict";
    console.log("Dentro de escribir.js");
    //var percent = require('prueba_modulo.diferencia');

    // console.log("Percent", percent);
    var rpc = require('web.rpc');
    //var self = this;

//     //this.call('write', [[self.id], { 'progress_rate': percent }]).done(function() {

//     //    console.log("Revisar Write");
    return rpc.query({

        model: 'proyectos.proyecto',
        method: 'get_all_data',
        args: [[]],
        fields: ['promesa', 'fecha', 'mdh_selection'],
        context: self.context,

        }).then(function(result){
            
            console.log(result);    

            var num_promesa = result['numero_promesa'];
            var fecha_inicio = result['fecha_creacion'];  
            var seleccion = result['seleccion'];

            // crear otro .js que calcule el porcentaje
            var fecha_ahora = new Date();
            var fecha_creacion_tarea = new Date(fecha_inicio) - (5*60*60*1000);
            var tiempo_transcurrido = fecha_ahora - fecha_creacion_tarea; // queda en milisengundos
            
            // factor para convertir de ms a lo que se haya indicado en "seleccion"
            if (seleccion == "minutos"){
                var factor = 60*1000;
            } 
            else if (seleccion == "horas"){
                var factor = 60*60*1000;
            } 
            else if(seleccion == "dias"){
                var factor = 24*60*60*1000;
            } 
            var tiempo_diferencia = tiempo_transcurrido/factor;
            var porcentaje_transcurrido = tiempo_diferencia * (100/num_promesa);

            self.porcentaje = porcentaje_transcurrido;
            //rpc.porcentaje_transcurrido = porcentaje_transcurrido;

            console.log("Porcentaje: ", porcentaje_transcurrido);
            console.log("self_escribir", self);
            //return porcentaje_transcurrido;
            //return porcentaje_transcurrido;
        });
        
        //console.log("Porcentaje_escribir: ", porcentaje_transcurrido);
        //var importar = porcentaje_transcurrido;
        //console.log("RPC de escribir.js", rpc);
        //console.log("dato", dato);
        //return rpc;
        
});

// odoo.define('prueba_modulo.escribir_2',function (require) {

//     console.log("Self fuera de escribir", self);
//  })