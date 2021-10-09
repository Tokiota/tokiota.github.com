---
published: true
date: 2021-04-26 04:00:00 +0100
layout: post
title: "Sacando provecho de Swagger - parte 2"
summary: "Continuamos la serie de artículos dedicados a Swagger con esta segunda parte añadiendo ejemplos a los esquemas de datos."
excerpt: "2ª de parte de artículos sobre Swagger y añadiendo ejemplos a nuestros esquemas"
categories: [Desarrollo]
tags: [swagger, aspnet, netcore]
featured_image: /public/uploads/2021/04/26-Mejoras-Swagger-Parte2/swagger-banner.png
pathToPublicFolder: "public/uploads/2021/04/26-Mejoras-Swagger-Parte2"
author:
  name: "Antonio Cárdenas García"
  image: antonio_cardenas_garcia.jpg
  signText: "Development & Cloud Consultant"
onTop: false
pined: false
pinedOrder: 0
---

{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder %}

{% include code_image_cab_post.html path=pathPublicFolder
image='swagger-banner.png'
title='Mejoras Swagger parte 1'
style=''
%}

{% include
code_data_post.html
%}

Continuamos con el segundo post de la serie enfocada a sacar más provecho a Swagger y darle más valor a nuestra API.

En el primer post vimos como añadir comentarios XML y hoy veremos como añadir ejemplos a los esquemas.

Recordamos que tenemos una API en asp.net core 3.1 y con la versión de Swashbuckle.AspNetCore 5.0.0.

### **¿Añadir ejemplos para los esquemas?**

Si añadimos ejemplos a los esquemas que tenemos mejoraremos mucho la usabilidad de los endpoints y ayudaremos a la interpretación de las respuestas.

Para ello hay varias formas, yo me he decantado por utilizar ISchemaFilter de forma que para cada esquema le añadimos un ejemplo predefinido:

<pre data-enlighter-language="csharp">  
public class ExampleSchemaFilter : ISchemaFilter
{
    public void Apply(OpenApiSchema schema, SchemaFilterContext context) => schema.Example = GetExampleOrNullFor(context.Type);

    private IOpenApiAny GetExampleOrNullFor(Type type)
    {
        switch (type.Name)
        {
            case nameof(ExampleRequest):
                return new OpenApiObject
                {
                    [ExampleRequest.ElementJsonProperty] = new OpenApiString("Some element request.")
                };
            case nameof(ExampleResponse):
                return new OpenApiObject
                {
                    [ExampleResponse.ResponseJsonProperty] = new OpenApiString("Any response."),
                    [ExampleResponse.ErrorsJsonProperty] = new OpenApiNull()
                };
            default:
                return null;
        }
    }
}
</pre>

Para acabar de entender el ejemplo muestro las clases de Request y Response utilizadas:

<pre data-enlighter-language="csharp">  
public class ExampleRequest
{
    public const string ElementJsonProperty = "element_json_custom_name";

    [JsonProperty(PropertyName = ElementJsonProperty, Required = Required.Always)]
    [StringLength(200, MinimumLength = 5)]
    public string Element { get; set; }
}
public class ExampleResponse
{
    public const string ResponseJsonProperty = "response_json_custom_name";
    public const string ErrorsJsonProperty = "errors_json_custom_name";

    [JsonProperty(PropertyName = ResponseJsonProperty, Required = Required.DisallowNull)]
    [StringLength(300)]
    public string Response { get; set; }

    [JsonProperty(PropertyName = ErrorsJsonProperty, Required = Required.AllowNull)]
    public string Errors { get; set; }
}
</pre>

En este caso, además de montar los ejemplos para peticiones y respuestas, he aprovechado para añadir ciertos atributos a los campos como el JsonProperty o el StringLenght, estos atributos al igual que otros atributos de Newtonsoft.Json o de System.ComponentModel.DataAnnotations son perfectamente reconocidos por swagger y añadirá las restricciones oportunas.

En este caso en hemos utilizado el JsonProperty por que nos puede interesar que el nombre del parámetro del Json sea uno concreto o para indicar si un campo es obligatorio, o si tiene que estar presente en el json pero puede ser nulo entre otros. De la misma forma también hemos especificado unos StringLength.

Centrándonos en el ISchemaFilter, el paquete de Swashbuckle ya se encarga de descubrir los endpoints y leer los parámetros de entrada y salida, en el ejemplo para cada esquema le asignamos un ejemplo.

Para que se aplique el scheme tenemos que registrarlo en la configuración del swagger:

<pre data-enlighter-language="csharp">  
services.AddSwaggerGen(c =>
{
    //[...] 

    c.SchemaFilter < ExamplesSchemaFilter >();

    //[...]
});
</pre>

Ahora al abrir swagger nos aparecerán estos ejemplos añadidos:

Creamos el siguiente endpoint de ejemplo:

<pre data-enlighter-language="csharp">  
/// <summary>
/// Get example info.
/// </summary>
/// <param name="id">Example id.</param>
/// <param name="request">Request example</param>
/// <returns></returns>
[HttpPatch("/example/{id}")]
[ProducesResponseType(typeof(ExampleResponse), (int)HttpStatusCode.NoContent)]
[ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.BadRequest)]
[ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.Unauthorized)]
[ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.Forbidden)]
[ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.NotFound)]
public ActionResult< ExampleResponse > GetExample(int id, [FromBody] ExampleRequest request) => Ok(new ExampleResponse());
</pre>

Y desde swagger veremos los esquemas asociados a Example Request y Response

{% include code_image.html path=pathPublicFolder
image='Esquemas.png'
title='imagen Esquemas'
style=''
%}