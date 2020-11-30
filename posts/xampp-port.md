---
title: 'Como liberar un puerto (problema tipico de XAMPP)'
date: '2020-29-11'
---



![img](https://www.rbjuarez.com/wp-content/uploads/2019/10/destacada-xampp-1024x538.jpg)

Si estas aprendiendo sobre servidores locales o tenes varios programas que usan los mismos puertos (VMware, MySQL, etc.), seguramente al abrir Xampp te marcó algunos errores y no te dejaba iniciar Apache o MySQL.

Una de las razones que no permite iniciar es que ese puerto esta siendo utilizado por otro programa. 

Hay varias maneras de habilitarlo, como detener el proceso desde el administrador de tareas. En mi caso no sabia cual era el programa asi no sabia con exactitud como liberar ese puerto.

Asi que buscando en internet encontré como liberar el puerto para usar MySQL, en mi caso el 3306, pero sirve para liberar cualquier otro.

## Pasos para habilitar el puerto 3306

* En el buscador de Windows escribir "Simbolo de sistema", te aparecerá una única opción arriba.

* Click derecho en el resultado y ejecutar como administrador.

* En la consola que se abre, ejecutar el siguiente comando (donde dice "3306" colocar el puerto que quieres liberar ) :

```
netstat -nao | findstr 0.0:3306
```

Me muestra el siguiente resultado: 

```
 TCP    0.0.0.0:3306           0.0.0.0:0              LISTENING       3716
```

Observemos el ultimo numero ( **3716** ), ese numero es el PID y lo usaremos para el siguiente comando. 

## Finalizar la actividad de ese PID

Conociendo el PID vamos a detener la actividad que no deja usar el puerto 3306.

```
taskkill /pid 3716 /f
```

Obtendremos el siguiente resultado: 

```
Correcto: se terminó el proceso con PID 3716.
``` 

Una vez finalizado ese proceso, ya podes ejecutar uno nuevo en el puerto 3306.


# Fin


---------------------------------



Si te quedaron dudas, comparto un video mostrando el proceso: [Link](https://www.youtube.com/watch?v=wUC-ERsRKco)

Comparto un articulo que explica con mas detalle que son los puertos: [Link](https://appdelante.com/blog/que-son-los-puertos-networking)

Si ves algun error tecnico o algo para mejorar puedes mandarme un mensaje a mi [Twitter](https://twitter.com/joaquinsolis93) . Todo feedback es bienvenido. 

Vale aclarar que hay otras maneras de iniciar MySQL o Apache si el puerto esta ocupado, como cambiarlo por otro que no este siendo usado, desde la configuracion de Xampp pero yo decidi irme por esta opcion.