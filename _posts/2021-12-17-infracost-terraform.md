---
published: false
date: 2021-12-17 04:00:00 +0100
layout: post
title: "Infracost Terraform"
summary: "La gestión de los costes de nuestra infraestructura con cambios o nuevos despliegues, puede ser un dolor de cabeza. Conoce la solución que desde Tokiota te presentamos, Infracost."
excerpt: "La gestión de los costes de nuestra infraestructura (IaC). #post #azure #terraform #cost"
categories: [Infraestructura]
tags: [terraform, cloud, cost, cli, azure]
featured_image: /public/uploads/2021/12/17-infracost/logo.png
pathToPublicFolder: "public/uploads/2021/12/17-infracost"
author:
  name: "Adrià Belmonte"
  image: adria_belmonte.jpg
  signText: "Infrastructure & Cloud Consultant"
onTop: false
pined: true
pinedOrder: 0
---

{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder %}

{% include code_image_cab_post.html path=pathPublicFolder
image='logo.png'
title='infracost'
style=''
%}

{% include
code_data_post.html
%}

La gestión de los costes de nuestra infraestructura con cambios o nuevos despliegues, puede ser un dolor de cabeza.


En la entrada de hoy, os hablaré de una herramienta open source la cual si utilizamos Terraform para hacer nuestros despliegues, puede ayudarnos en dicha tarea.

La herramienta es **[Infracost](https://www.infracost.io/)**.

**Infracost**, tal y como la web indica, calcula los costes de la nube basándose en Terraform. Las estimaciones de costes pueden mostrarse en el terminal o ponerse en pull requests utilizando nuestras integraciones CI/CD.
En el articulo de hoy, nos centraremos en la primera parte; es decir, en el terminal o cli.


La instalación de la herramienta es sencilla e incluso disponemos de una imagen docker. En nuestro caso, haremos las pruebas por terminal y en un entorno Linux.

## Instalación

1. Con el siguiente comando obtendremos e instalaremos la última versión disponible

<pre data-enlighter-language="csharp">

curl -fsSL https://raw.githubusercontent.com/infracost/infracost/master/scripts/install.sh | sh

</pre>

2. Es necesario registrar la herramienta para obtener una **free Api Key**.

<pre data-enlighter-language="csharp">
infracost register
</pre>

{% include code_image_cab_post.html path=pathPublicFolder
image='infra_01.png'
title='infracost register'
style=''
%}

3. Por último, configuraremos infracost para que nos muestre los costes en nuestra moneda (€) ya que por defecto utiliza el $.

<pre data-enlighter-language="csharp">

# Cambiar la moneda
infracost configure set currency EUR

# Comprobar la moneda
infracost configure get currency 
</pre>

{% include code_image_cab_post.html path=pathPublicFolder
image='infra_04.png'
title='infracost configure'
style=''
%}

## Test

Una vez tengamos la herramienta instalada y configurada, podemos empezar con las pruebas.

<pre data-enlighter-language="csharp">

# Descargaremos los archivos de ejemplo
git clone https://github.com/infracost/example-terraform.git
cd example-terraform/sample3

# En el caso de Azure, es necesario realizar un "az login" antes de ejecutar el comando infracost.
az login
apt-get install azure-cli # En el caso que no tengamos el paquete instalado

# Revisará el código de nuestro terraform para saber los costes de nuestra infraestructura
infracost breakdown --path .
</pre>

{% include code_image_cab_post.html path=pathPublicFolder
image='infra_02.png'
title='infracost breakdown'
style=''
%}

<pre data-enlighter-language="csharp">
# Comprobaremos la diferencia de costes mensuales con el nuevo código
infracost diff --path . --sync-usage-file --usage-file infracost-usage.yml
</pre>
{% include code_image_cab_post.html path=pathPublicFolder
image='infra_03.png'
title='infracost diff'
style=''
%}

## End

Como habéis podido comprobar, de una forma fácil y rápida, podemos llegar a tener una estimación aproximada del coste de nuestra Infraestructura.
En el siguiente artículo, podremos ver cómo incluir este proceso en nuestro CI/CD y delegar la aprobación de costes.


