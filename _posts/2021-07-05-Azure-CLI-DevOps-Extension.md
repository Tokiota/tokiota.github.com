---
published: true
date: 2021-07-05 04:00:00 +0100
layout: post
title: "Azure CLI extensión para Azure DevOps, continua documentando"
summary: "Además de documentar con Azure CLI, tema tratado con anterioridad; podemos trabajar con Azure DevOps a través de una extensión que nos permitirá documentar y automatizar todo nuestro ecosistema."
excerpt: "Poder generar a través de la linea de comando proyectos, variables y despliegues, etc. nos permitirá poder reproducir nuestro entorno en cuestión de minutos y reproducir el ecosistema con una certeza absoluta."
categories: [Desarrollo]
tags: [devops, cli, azure]
featured_image: /public/uploads/2021/07/05-Azure-CLI-DevOps/logo.png
pathToPublicFolder: "public/uploads/2021/07/05-Azure-CLI-DevOps"
author:
  name: "Jose María Flores Zazo"
  image: jose_maria_flores_zazo.jpg
  signText: "Development & Cloud Consultant"
  linkedin: https://www.linkedin.com/in/jmfloreszazo/
  twitter: https://www.twitter.com/jmfloreszazo/
  github: https://github.com/jmfloreszazo
onTop: false
pined: false
pinedOrder: 0
---
{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder %}

{% include code_image_cab_post.html path=pathPublicFolder
image='logo.png'
title='Azure CLI'
style=''
%}

{% include
code_data_post.html
%}

Parafraseando la apertura de mi [anterior artículo sobre Azure CLI]({{ site.baseurl }}2021/05/10/Azure-CLI/): *"El entorno gráfico del portal de Azure DevOps, cambia constantemente"*, es cierto que no tanto como el portal de Azure. Pero sirve para hacer hincapié en que estamos aproximadamente en la misma situación.

Esta vez no se trata de documentar cambios, si no, de documentar como preparar el entorno de nuestro proyecto y poder reproducirlo ante algún problema: borrado de una variable, modificación de alguna configuración de un despliegue, etc. o simplemente para moverlo de *tenant*.

Muy pocos desarrolladores conocen esta extensión para la herramienta Azure CLI que lleva con nosotros aproximadamente un año: [Azure DevOps CLI](https://docs.microsoft.com/en-us/azure/devops/cli/?view=azure-devops)

Para poder usarla primero debes tener instalado [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) y posteriormente añadir la extensión:

<pre data-enlighter-language="Powerhsell">  
az extension add --name azure-devops
</pre> 

A partir de este momento el trabajo es muy similar al que realizamos con Azure CLI:

<pre data-enlighter-language="Powerhsell">  
az login
</pre> 

Establecemos un proyecto por defecto:

<pre data-enlighter-language="Powerhsell">  
ORGANIZATION_URL=https://dev.azure.com/your-organization
PROJECT_NAME=your-project
az devops configure --defaults organization=$ORGANIZATION_URL project=$PROJECT_NAME
</pre> 

Podemos importar un proyecto desde GitHub o desde una cuenta de DevOps (supongamos que estamos moviendo el proyecto a otra organización):

<pre data-enlighter-language="Powerhsell">  
REPOSITORY_NAME=your-repository-name
REPOSITORY_URL=https://dev.azure.com/your-new-organizacion/$PROJECT_NAME
az repos create --name $REPOSITORY_NAME
az repos import create --git-source-url $REPOSITORY_URL --repository $REPOSITORY_NAME
</pre> 

Crear un grupo de variables:

<pre data-enlighter-language="Powerhsell">  
$SUBSCRIPTION_ID=your-subscription-id
$SERVICE_CONNECTION_NAME=your-service-connection-name
$VARIABLE_1=your-value-1
$VARIABLE_2=your-value-2
az pipelines variable-group create  --name MY_PROJECT_SETTINGS --authorize \
    --variables VARIABLE_1=$VARIABLE_1 \
    VARIABLE_2=$VARIABLE_2 \
    AZURE_SERVICE_CONNECTION_NAME="$SERVICE_CONNECTION_NAME" \
    AZURE_SUBSCRIPTION_ID=$SUBSCRIPTION_ID
</pre> 

Crear un Pipeline con variables:

<pre data-enlighter-language="Powerhsell">  
PIPELINE_NAME=your-pipeline-name
az pipelines create --name $PIPELINE_NAME --repository $REPOSITORY_NAME \
    --repository-type tfsgit --branch main --skip-first-run \
    --yml-path pipelines/your-pipeline-file.yml
az pipelines variable create --pipeline-name $PIPELINE_NAME --name PIPELINE_VAR_1 \
    --allow-override
</pre> 

También podrás lanzar el pipeline desde CLI:

<pre data-enlighter-language="Powerhsell">  
VAR_1=your-value
az pipelines run --name $PIPELINE_NAME \
    --variables PIPELINE_VAR_1=$VAR_1
</pre> 

Toda la información de la extensión podrás verla con el comando:

<pre data-enlighter-language="Powerhsell">  
az devops -h
</pre> 

Insisto, toda esta información debe estar incluida en el Readme del proyecto. Con unos comandos tan simples te ahorras ir navegando por las distintas opciones del entorno gráfico, tomado capturas y añadiendo anotaciones.

Espero que con esta breve introducción puedas dilucidar el potencial que ofrece usar la línea de comandos. Deliberadamente esta vez no he puesto ninguna captura de pantalla, ni siquiera para mostrar a que sección se corresponden en el portal de Azure DevOps.


{% include code_note.html 
content='Todos los ejemplo anteriores están preparados para usarlos con <a href="https://docs.microsoft.com/es-es/windows/wsl/install-win10">WSL</a>'
%}


