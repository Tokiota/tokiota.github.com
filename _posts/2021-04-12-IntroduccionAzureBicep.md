---
published: true
date: 2021-04-12 04:00:00 +0100
layout: post
title: "Introducción a Azure Bicep"
summary: "Podria decirse que Bicep es el sucesor nativo de ARM. Logrará que nuestra IaC sea más sencilla, amigable y fácil de mantener."
excerpt: "Azure ARM tiene sucesor y se llama Bicep. Descubre por qué."
categories: [Desarrollo]
tags: [iac, arm, bicep, azure]
featured_image: /public/uploads/2021/04/12-Introduccion-Azure-Bicep/logo.png
pathToPublicFolder: "public/uploads/2021/04/12-Introduccion-Azure-Bicep"
author:
  name: "Jose María Flores Zazo"
  image: jose_maria_flores_zazo.jpg
  signText: "Development & Cloud Consultant"
  linkedin: https://www.linkedin.com/in/jmfloreszazo/
  twitter: https://www.twitter.com/jmfloreszazo/
  github: https://github.com/jmfloreszazo
---
{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder %}

{% include code_image.html path=pathPublicFolder
image='logo.png'
title='Azure Bicep'
style=''
%}

En el momento de la publicación de este artículo el desarrollo del producto esta en una fase inicial, pero con soporte por parte de Azure.

Desde la versión 0.3.1, los puntos destacables son:

•	Integración con Az CLI y Az PS.
•	Deja de ser una herramienta experimental.
• Compatible con los planes de soporte de Microsoft

El propósito de Azure Bicep el siguiente:

* Usar un lenguaje más amigable para un desarrollador que los JSON de ARM.
* Producir una sola plantilla de ARM para evitar el uso de una cuenta de almacenamiento o cualquier otro sistema para almacenar plantillas vinculadas.
  
A diferencia de [Terraform](https://www.terraform.io/) o [Pulumi](https://www.pulumi.com/), Bicep es específico de Azure. Podríamos pensar que Microsoft están creando una nueva generación de ARM.

Si ya tienes esperiencia con Terraform o con Pulumi, podrás observar que el propósito de Bicep es similar a las ventajas que tenemos con Terraform o Pulumi: 

* Menor número de líneas de código necesarias para crear un recurso en Azure que usando ARM.
* Usan lenguajes o bien propios como Terraform (HCL) o bien el casi más te guste con Pulumi (puedes usar C#, JS, TS, Go …).

Parece que el propósito de Bicep es darnos a los desarrolladores una alternativa similar a Terraform o Pulumi nativa de Microsoft.

El proyecto Biceps está en: [https://github.com/Azure/bicesp](https://github.com/Azure/bicesp){:target="_blank"}, suscríbete para estar al día.

Supongo que alguna vez has visto un ARM para generar un recurso de Azure y si no, aquí tienes un extracto:

{% include code_image.html path=pathPublicFolder
image='img01.png'
title='Ejemplo de ARM'
style=''
%}

¿Qué necesitamos para poder hacer un ejemplo práctico?:

1.	Instalar la herramienta CLI de Bicep (seguir las instrucciones: [https://github.com/Azure/bicep/blob/main/docs/installing.md](https://github.com/Azure/bicep/blob/main/docs/installing.md)).
2.	Instalar la extensión de Visual Studio Code para Bicep. Es un paso opcional, pero mejora mucho nuestro trabajo con Bicep.
3.	Abrir el fichero pack.bicep disponible en el repot de GitHub.

{% include code_image.html path=pathPublicFolder
image='img02.png'
title='Ejemplo de Bicep'
style=''
%}

En el ejemplo anterior, donde creamos una Web App, para ARM usamos 68 líneas mientras que para Bicep solamente estamos en 31 líneas Es **más conciso**.

Podrás observar que la Web App no necesita que se declare explícitamente la dependencia con el Service Plan, basta con usar plan.id para inferir la dependencia. **Es más legible**.

Por desgracia, aun no existe logiuna integración oficial de Bicep con Azure DevOps (solo algunas cosas experimentales). Pero todo hace pensar que seguirá la logica que se está aplicando con Terraform o Pulumi, ya que los comandos son muy parecidos a lo que ejecutan ambos sistemas:

{% include code_image.html path=pathPublicFolder
image='img03.png'
title='Ejemplo de Terraform'
style=''
%}

Por tanto vamos a usar de momento Bicep para crear un fichero _.json_ de ARM a partir de un fichero _.bicep_:

{% include code_image.html path=pathPublicFolder
image='img04.png'
title='De Bicep a ARM'
style=''
%}

Tras la ejecución de la build ya tendremos una plantilla de ARM:

{% include code_image.html path=pathPublicFolder
image='img05.png'
title='Salida de la build de Bicep en ARM'
style=''
%}

Con esta plantilla podemos probar nuestro ejemplo usando **Azure CLI** desde el terminal de VS Code:

{% include code_note.html 
content='Usar --confirm-with-what-if exige tener la última versión de Azure CLI, puedes optar a probar el ARM desde DevOps, por ejemplo.' 
%}

<pre data-enlighter-language="Powerhsell">  
az deployment group create --resource-group 'tokiotajmfztest'
   --template-file main.json --confirm-with-what-if
</pre>  

Generando como resultado:

{% include code_image.html path=pathPublicFolder
image='img06.png'
title='Salida de la build de Bicep en ARM'
style=''
%}

Solo te faltaría escribir _y_ para desplegar la infraestructura.

Como podrá haber visto es más secillo, fácil de leer y es nativo para Azure. Podria decirse que Bicep es el sucesor nativo de ARM. No pierdas de vista esta herramienta.