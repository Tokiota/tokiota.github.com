---
published: true
date: 2021-03-29 04:00:00 +0100
layout: post
title: "Sacando provecho de Swagger - parte 1"
summary: "Comenzamos una serie de artículos dedicados a sacar el máximo partido de Swagger sobre nuestros proyectos y conseguir darle más valor a nuestras API"
excerpt: "Sacando el máximo partido a nuestras APIs con Swagger - parte 1"
categories: [Desarrollo]
tags: [swagger, aspnet, netcore]
featured_image: /public/uploads/2021/03/29-Mejoras-Swagger-Parte1/swagger-banner.png
pathToPublicFolder: "public/uploads/2021/03/29-Mejoras-Swagger-Parte1"
author:
  name: "Antonio Cárdenas García"
  image: antonio_cardenas_garcia.jpg
  signText: "Consultant"
  linkedin: https://www.linkedin.com/in/acardenasdotnet/
  twitter: 
  github: https://github.com/toni90acg
---
{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder %}

{% include code_image.html path=pathPublicFolder
image='swagger-banner.png'
title='Mejoras Swagger parte 1'
style=''
%}

Vamos a empezar una serie de posts dedicados a sacar más provecho a Swagger y darle más valor a nuestra API.

Una vez hemos creado nuestra API y ya tenemos swagger instalado y funcionando, es buen momento para añadir más información y hacerlo más útil y usable. En concreto, el ejemplo se ha realizado con Visual Studio 2019, con una API en asp.net core 3.1 y con la versión de Swashbuckle.AspNetCore 5.0.0.

### **Comentarios XML**

El primer paso sería habilitar los comentarios XML. Esto nos servirá para añadir a cada endpoint información adicional:

<pre data-enlighter-language="csharp">  
    /// <summary>
    /// Get example info.
    /// </summary>
    /// <param name="id">Example id.</param>
    /// <returns></returns>
    [HttpGet("/example/{id}")]
    public IActionResult GetExample(int id) => Ok(id);
</pre>

Para que se lean y muestren los summaries en swagger primero tenemos que agregar unas líneas en el csproj del projecto de la API:

<pre data-enlighter-language="xml">  
  <PropertyGroup>
    <GenerateDocumentationFile>true</GenerateDocumentationFile>
  </PropertyGroup>
</pre>

No obstante, esto nos provocará un incómodo warning en cada método que no tenga summary:

{% include code_image.html path=pathPublicFolder
image='warning.png'
title='Imagen warning'
style=''
%}

Para que no aparezcan estos warngins los podemos deshabilitar añadiendo una línea más al anterior código del PropertyGroup:

<pre data-enlighter-language="xml">  
  <PropertyGroup>
    <GenerateDocumentationFile>true</GenerateDocumentationFile>
    <NoWarn>$(NoWarn);1591</NoWarn>
  </PropertyGroup>
</pre>

Ahora que hemos configurado la generación de los xml, tenemos que añadirlos en la configuración del swagger.

Para ello, en el Startup al configurar AddSwaggerGen añadiremos las siguientes líneas:

<pre data-enlighter-language="csharp">  
services.AddSwaggerGen(c =>
{
    //[...]
    
    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    c.IncludeXmlComments(xmlPath);
    
    //[...]
});
</pre>

De esta forma, nos aparecerá está información cuando vayamos a llamar al endpoint en cuestión:

{% include code_image.html path=pathPublicFolder
image='InfoEndpoint.png'
title='Imagen InfoEndpoint'
style=''
%}

En este punto, es interesante aprovechar para especificar las respuestas de dicho endpoint. Para ello podemos utilizar el atributo ProducesResponseTypeAttribute especificando los HttpStatusCodes que devolvemos. Adicionalmente, también se puede especificar un mensaje concreto para cada código de respuesta añadiendo tags ‘response’ en el summary:

<pre data-enlighter-language="csharp">  
    /// <summary>
    /// Get example info.
    /// </summary>
    /// <param name="id">Example id.</param>
    /// <returns></returns>
    /// <response code="200">Ok response.</response>
    /// <response code="403">Custom response for 403.</response>
    [HttpGet("/example/{id}")]
    [ProducesResponseType(typeof(int), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.BadRequest)]
    [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.Unauthorized)]
    [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.Forbidden)]
    [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.NotFound)]
    public IActionResult GetExample(int id) => Ok(id);
</pre>

Con esto, ahora swagger nos mostrará, además de la response (200 - Success) que hemos visto antes, un ErrorResponse para los códigos 400, 401, 403 y 403. Y en concreto, un mensaje personalizado para el código 200 y para el 403. . 

A las respuestas de error, le hemos añadido un tipo de respuesta propio (ErrorResponse) no es obligatorio, pero es recomendable.

{% include code_image.html path=pathPublicFolder
image='responses.png'
title='Imagen responses'
style=''
%}