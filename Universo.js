document.getElementsByName (parseInt, 'planetita');
document.getElementsByName (parseFloat, 'pesito');
boton.addEventListener('button');
var peso = 'pesito';
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_neptuno = 11;
var g_mercurio = 3.7;
var g_urano = 8.69;
var g_saturno = 8.96;
var planetita = 
{
    1:'Saturno',
    2:'Jupiter',
    3:'Neptuno',
    4:'Mercurio',
    5:'Urano',
    6:'Saturno',
}
var peso_final;

function peso_final()
{
switch (planetita)
{
    case 1:
        nombre = ('Saturno');
        peso_final = peso * g_marte / g_tierra
        break; 
    case 2:
        nombre = ('Jupiter');
        peso_final = peso * g_jupiter / g_tierra
        break;
    case 3: 
        nombre = ('Neptuno');
        peso_final = peso * g_neptuno / g_tierra
        break;
    case 4: 
        nombre = ('Mercurio');
        peso_final = peso * g_mercurio / g_tierra
        break;
    case 5: 
        nombre = ('Urano');
        peso_final = peso * g_urano / g_tierra
        break;
    case 6: 
        nombre = ('Saturno');
        peso_final = peso * g_saturno / g_tierra
        break;
    default:
        document.write('<br/>')
        document.write('<br/>')
        document.write('<br/>')
        peso_final = document.write ('Tienes que seleccionar un planeta válido =)');
        break;
}
}
document.write('<br/>')
document.write('<br/>')
document.write('<br/>')
document.write ("En " + nombre + " tu peso sería <strong>" + peso_final.toFixed('2') + "</strong> kg");
