---
published: true
date: 2021-03-01 04:01:00 +0100
layout: post
title: "Qué es Swagger y cómo añadirlo a tu Api de NetCore"
summary: "Te contamos qué es Swagger y cómo podemos usar esta fantástica herramienta que nos ayuda a documentar y testear nuestras APIs. Cuatro sencillos pasos sobre en nuestro proyecto NetCore."
excerpt: "Qué es Swagger y cómo añadir a tu Api de NetCore esta fantástica herramienta."
categories: [Desarrollo]
tags: [swagger, netcore, api]
featured_image: /public/uploads/2021/03/01-Add-Swagger-To-Net-Core-Api/swaggerandcore.jpg
pathToPublicFolder: "public/uploads/2021/03/01-Add-Swagger-To-Net-Core-Api"
author:
  name: "Francisco Javier Lafuente"
  image: francisco_javier_lafuente_martinez.jpg
  signText: "Development & Cloud Consultant"
---
{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder %}

{% include code_image_cab_post.html path=pathPublicFolder
image='swaggerandcore.jpg'
title='Add Swagger to Net Core Api'
style=''
%}

{% include
code_data_post.html
%}

### ¿Qué es swagger?

Swagger es una serie de reglas, especificaciones y herramientas que nos ayudan a documentar nuestras APIs. En otras palabras, al instalarlo, y ejecutar la API se nos generará una interfaz de usuario que nos permite navegar sobre los diferentes endpoints que tenga nuestra API de manera fácil e intuitiva. Es una herramienta muy útil a la hora de testear nuestras aplicaciones.


### ¿Cómo lo usamos?
Para utilizar swagger lo primero que debemos hacer es instalarlo, obviamente.

Vamos al gestor de Nuget de nuestra API (Manage Nuget Packages) y buscamos el nuget Swashbuckle.AspNetCore:

{% include code_image.html path=pathPublicFolder
image='nuget.png'
title='Imagen nuget'
style=''
%}

Lo siguiente que debemos hacer es registrar el servicio de swagger en nuestra ServiceCollection (clase Startup.cs, método ConfigureServices) añadiendo éstas líneas.

{% include code_image.html path=pathPublicFolder
image='registerService.png'
title='Imagen register service'
style=''
%}

También tendremos que añadir una breve configuración (clase Startup, método Configure) para indicar la ruta donde se ejecutará el swagger, así como también un nombre para la documentación que se nos va a generar.

En mi caso quiero que se ejecute en el directorio raíz de la aplicación y por lo tanto configuraré la propiedad RoutePrefix como cadena vacía.

{% include code_image.html path=pathPublicFolder
image='configure.png'
title='Imagen configure'
style=''
%}

Llegados a este punto ya podemos ejecutar nuestra API y comprobar lo de lo que es capaz nuestro asistente para documentación y testing.

En las siguientes imágenes podemos ver un ejemplo paso a paso:

- Vista preliminar:
{% include code_image.html path=pathPublicFolder
image='ej1.png'
title='Imagen ejemplo1'
style=''
%}


- Método Get Simple:
{% include code_image.html path=pathPublicFolder
image='ej2.png'
title='Imagen ejemplo2'
style=''
%}


- Método Post con asistente de creación del objeto:
{% include code_image.html path=pathPublicFolder
image='ej3.png'
title='Imagen ejemplo3'
style=''
%}



Fácil y sencillo. 
<br>Hasta la próxima.