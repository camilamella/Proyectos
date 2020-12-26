# -*- coding: utf-8 -*-
from odoo import models, fields, api
from datetime import datetime

class Proyecto(models.Model):
    _name = 'proyectos.proyecto'
    _description = 'Proyecto'

    name = fields.Char('Descripción', required=True)
    is_done = fields.Boolean('Listo?')
    active = fields.Boolean('Activo?', default=True)
    
    fecha = fields.Datetime(default=fields.Datetime.now) 
    promesa = fields.Float() 
    mdh_selection = fields.Selection([
        ('minutos', 'Minutos'), 
        ('horas','Horas'),
        ('dias' ,'Días')], default='minutos')  

    # Para el widget gauge 
    progress_rate = fields.Integer(string='Progreso', store=True, compute='write_progress_bar')
    maximum_rate = fields.Integer(string='Maximum Rate', default=100)

    @api.multi
    def do_toggle_done(self):
        for task in self:
            task.is_done = not task.is_done
        return True
    
    @api.multi
    def do_clear_done(self):
        dones = self.search([('is_done', '=', True)], limit=1)
        dones.write({'active': False})
        return True 

    @api.model
    def get_all_data(self):
        result = {}
        datas = self.env['proyect.task'].search([], order='create_date desc', limit=1)
        for d in datas:
            #result['id'] = d.id
            result['numero_promesa'] = d.promesa
            result['fecha_creacion'] = d.fecha
            result['seleccion'] = d.mdh_selection
 
        return result


    def write(self,values):
        #values = {}
        #values['progress_rate'] = self.progress_rate 
        #campo = super(ProyectTask, self).write(values)
        print("Probando sobreescritura de Write")
        return super(Proyecto, self).write(values)
        # rec.write({'state': 'done'})
        #return campo

    def write_progress_rate(self, val):
        val['progress_rate'] = self.progress_rate 
        return super(Proyecto, self).write(val)