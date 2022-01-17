---
published: true
date: 2022-01-17 04:00:00 +0100
layout: post
title: "Infracost Terraform"
summary: "La gestión de los costes de nuestra infraestructura con cambios o nuevos despliegues, puede ser un dolor de cabeza. Conoce la solución que desde Tokiota te presentamos, Infracost."
excerpt: "La gestión de los costes de nuestra infraestructura (IaC). #post #azure #terraform #cost"
categories: [Infraestructura]
tags: [terraform, cloud, cost, cli, azure]
featured_image: /public/uploads/2021/12/17-infracost/logo3.jpg
pathToPublicFolder: "public/uploads/2021/12/17-infracost"
author:
  name: "Adrià Belmonte"
  image: adria_belmonte.jpg
  signText: "Infrastructure & Cloud Consultant"
onTop: true
pined: false
pinedOrder: 0
---

{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder %}

{% include code_image_cab_post.html path=pathPublicFolder
image='logo3.jpg'
title='infracost'
style=''
%}

{% include
code_data_post.html
%}

Gestionar los costes de nuestra infraestructura en Azure afectada por cambios o nuevos despliegues por IaC puede ser un dolor de cabeza.

------ La gestión de los costes de nuestra  infraestructura con cambios o nuevos despliegues, puede ser un dolor de cabeza.
Es por eso que hoy queremos hablaros de **Infracost**. Una herramienta Open Source que nos será de gran ayuda para nuestra gestión con despliegues de Terraform. 

-----En la entrada de hoy, os hablaré de una herramienta open source la cual si utilizamos **[Infracost](https://www.infracost.io/)** para hacer nuestros despliegues, puede ayudarnos en dicha tarea.

**Infracost**, tal y como la web indica, calcula los costes de la nube basándose en Terraform. Las estimaciones de costes pueden mostrarse en el terminal o ponerse en *Pull Requests* utilizando nuestras integraciones CI/CD.
Vamos a centraremos como ver esto desde el terminal o cli.


## Instalación
La instalación de la herramienta es sencilla e incluso disponemos de una imagen docker. En este ejemplo vamos a realizar las pruebas por terminal y en un entorno Linux.

Con el siguiente comando obtendremos e instalaremos la última versión disponible:
<pre data-enlighter-language="csharp">
curl -fsSL https://raw.githubusercontent.com/infracost/infracost/master/scripts/install.sh | sh
</pre>

Es necesario registrar la herramienta para obtener una **free Api Key**.
<pre data-enlighter-language="csharp">
infracost register
</pre>

{% include code_image_cab_post.html path=pathPublicFolder
image='infra_01.png'
title='infracost register'
style=''
%}

- Por último, configuraremos infracost para que nos muestre los costes en nuestra moneda (€) ya que por defecto utiliza el $.
<pre data-enlighter-language="shell">
infracost configure set currency EUR
</pre>

Para comprobar la moneda ejecutamos:
<pre data-enlighter-language="shell">
infracost configure get currency 
</pre>

{% include code_image_cab_post.html path=pathPublicFolder
image='infra_04.png'
title='infracost configure'
style=''
%}

## Test
Una vez tengamos la herramienta instalada y configurada, podemos empezar con las pruebas:

Descargaremos los archivos de ejemplo
<pre data-enlighter-language="shell">
git clone https://github.com/infracost/example-terraform.git
cd example-terraform/sample3
</pre>

En el caso de Azure, es necesario realizar un `az login` antes de ejecutar el comando infracost.
<br/>Y si no tenemos el AzureCli instalado podemos obtenerlo con `apt-get install azure-cli`

Revisaremos el código de nuestro terraform para saber los costes de nuestra infraestructura:
<pre data-enlighter-language="shell">
infracost breakdown --path .
</pre>

{% include code_image_cab_post.html path=pathPublicFolder
image='infra_02.png'
title='infracost breakdown'
style=''
%}

Comprobaremos la diferencia de costes mensuales con el nuevo código:
<pre data-enlighter-language="shell">
infracost diff --path . --sync-usage-file --usage-file infracost-usage.yml
</pre>

{% include code_image_cab_post.html path=pathPublicFolder
image='infra_03.png'
title='infracost diff'
style=''
%}

## Conclusiones
Como habéis podido comprobar, de una forma fácil y rápida, podemos llegar a tener una estimación aproximada del coste de nuestra Infraestructura.

En próximos artículo, podremos ver cómo incluir este proceso en nuestro CI/CD y delegar la aprobación de costes.


