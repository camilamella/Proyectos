# -*- coding: utf-8 -*-
{
    'name': "Modulo proyectos ",

    'summary': """
        almacena y mide el cumplimiento de los proyectos dentro de la organización""",

    'description': "Módulo de proyectos",

    'author': "Camila Mella",
    'website': "https://github.com/MNMFgeforce/ProyectoOdoo",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/11.0/odoo/addons/base/module/module_data.xml
    # for the full list
    'category': 'Proyecto desarrollo de aplicaciones Web 2',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        #'views/views.xml',
        #'views/templates.xml',
        'views/proyect_menu.xml',
        'views/proyect_view.xml',
        'views/task_view.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],

    'js': [
        'static/src/js/diferencia.js',
        'static/src/js/escribir.js',
        'static/src/js/enviar_dato.js',
    ],
}