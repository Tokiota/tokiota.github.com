---
published: true
date: 2021-03-16 01:00:00 +0100
layout: post
title: "Mejoras Swagger parte 3"
summary: " "
excerpt: "A"
categories: [Desarrollo]
tags: [swagger]
featured_image: /public/uploads/2021/03/16-Mejoras-Swagger-Parte3/swagger-banner.png
pathToPublicFolder: "public/uploads/2021/03/16-Mejoras-Swagger-Parte3"
author:
  name: "Antonio Cárdenas García"
  image: antonio_cardenas-garcia.jpg
  signText: "Consultant"
  linkedin: https://www.linkedin.com/in/
  twitter: https://twitter.com/
  github: https://github.com/
---

{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder %}

{% include code_image.html path=pathPublicFolder
image='swagger-banner.png'
title='Mejoras Swagger parte 1'
style=''
%}

Ya tenemos el tercer post de la serie, ya hemos visto comentarios XML y los ISchemaFilter. Hoy veremos content-type y headers.	

Recordamos que tenemos una API en asp.net core 3.1 y con la versión de Swashbuckle.AspNetCore 5.0.0.

### **Fijar content type application/json**

Si nuestra API solo va a aceptar y devolver contenido de tipo json, es recomendar fijar estos parámetros. Para ello utilizamos los atributos ‘Consumes’ y ‘Produces’ de Microsoft.AspNetCore.Mvc.

<pre data-enlighter-language="csharp">  
/// <summary>
/// Get example info.
/// </summary>
/// <param name="id">Example id.</param>
/// <param name="request">Request example</param>
/// <returns></returns>
[HttpPatch("/example/{id}")]
[Consumes("application/json")]
[Produces("application/json")]
public ActionResult<ExampleResponse> GetExample(int id, [FromBody] ExampleRequest request) 
    => Ok(new ExampleResponse());
</pre>

En este caso se han aplicado a nivel de método como caso de prueba, sería más habitual aplicarlos a toda la API.

### **Añadir Headers personalizados**

En ocasiones tenemos que construir una API que tiene que contar con un header propio, en este caso hemos utilizado un IOperationFilter y lo aplicamos a todos los endpoints.

<pre data-enlighter-language="csharp">  
public class CustomHeaderFilter : IOperationFilter
{
    public void Apply(OpenApiOperation operation, OperationFilterContext context)
    {
        if (operation.Parameters == null)
            operation.Parameters = new List<OpenApiParameter>();

        operation.Parameters.Add(new OpenApiParameter
        {
            Name = "x-header",
            In = ParameterLocation.Header,
            Description = "Custom header for our application.",
            Required = true,
            Schema = new OpenApiSchema
            {
                Type = "string",
                Example = new OpenApiString(CustomHeader.Xyz.ToString()),
                Enum = Enum
                    .GetValues(typeof(CustomHeader))
                    .Cast<CustomHeader>()
                        .Select(x => OpenApiAnyFactory.CreateFor(new OpenApiSchema() { Type = "string" }, x.ToString()))
                        .ToList()
            }
        });
    }
}
</pre> 

Para guardar los valores del CustomHeader se ha utilizado un enum:

<pre data-enlighter-language="csharp">  
public enum CustomHeader
{
    Xyz,
    Abc
}
</pre> 

Y ya que tenemos un Enum, podemos ajustar NewtonsoftJson para serializar los enums como string. Para ello desde el Startup, en el método ConfigureServices podemos añadir:

<pre data-enlighter-language="csharp">  
services
    .AddControllers()
    .AddNewtonsoftJson(options =>
    {
        options.SerializerSettings.Converters.Add(new StringEnumConverter());
    });
</pre> 

Una vez creado el IOperationFilter, igual que el resto de filtros de swagger, es necesario registraro como hemos hecho con el filtro anterior:

<pre data-enlighter-language="csharp">  
services.AddSwaggerGen(c =>
{
    //[...]

    c.OperationFilter<CustomHeaderFilter>();

    //[...]
});
</pre> 

De esta forma, cuando swagger se encuentre el enum de CustomHeader nos facilitará un desplegable con los distintos valores:

{% include code_image.html path=pathPublicFolder
image='despValores1.png'
title='imagen despValores1'
style=''
%}

{% include code_image.html path=pathPublicFolder
image='despValores2.png'
title='imagen despValores2'
style=''
%}