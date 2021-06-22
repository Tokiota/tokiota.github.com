---
published: true
date: 2021-07-19 04:00:00 +0100
layout: post
title: "Agiliza la escritura de tests con AutoFixture"
summary: "Al escribir tests generalmente creamos objetos que representan el estado inicial y en algunas ocasiones crear estos objetos y sus dependencias se puede convertir en una tarea compleja y terminamos escribiendo código que no es relevante para el test, para optimizar esta tarea podemos apoyarnos en la librería AutoFixture cuyo principal beneficio es la creación de valores aleatorios e instancias con un mínimo esfuerzo."
excerpt: "AutoFixture reduce el código necesario para representar el estado inicial de nuestros tests."
categories: [Desarrollo]
tags: [autofixture, xunit, netcore, testing]
featured_image: /public/uploads/2021/07/19-Autofixture/autofixture.png
pathToPublicFolder: "public/uploads/2021/07/19-Autofixture"
author:
  name: "Hector Escalante"
  image: hector_samuel_escalante_albarran.jpg
  signText: "Development & Cloud Consultant"
---
{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder %}

{% include code_image_cab_post.html path=pathPublicFolder
image='autofixture.png'
title='Agiliza la escritura de tests con AutoFixture'
style=''
%}

{% include
code_data_post.html
%}

Al escribir tests generalmente creamos objetos que representan el estado inicial y **en algunas ocasiones crear estos objetos y sus dependencias se puede convertir en una tarea compleja**, terminamos escribiendo código que no es relevante para el test. **Para optimizar esta tarea podemos apoyarnos en la librería [AutoFixture](https://github.com/AutoFixture/AutoFixture)** cuyo principal beneficio es la creación de valores aleatorios e instancias con un mínimo esfuerzo.


### Instalación

Añadimos el paquete AutoFixture.Xunit2 a nuestro proyecto de pruebas.

{% include code_image.html path=pathPublicFolder
image='install_nuget_package.png'
title='Instalar el paquete nuget AutoFixture.Xunit2'
style=''
%}

### Ejemplo

Teniendo el siguiente test:

<pre data-enlighter-language="csharp">
[Theory]
[MemberData(nameof(Data))]
public void GivenNewDelivery_WhenDeliver_ThenAllProductsWereDelivered(List< AmazonProduct> products)
{
    //Arrange
    var sut = new AmazonDelivery(products);

    //Act
    sut.Deliver();

    //Assert
    Assert.NotEmpty(sut.Products);
    Assert.Equal(sut.Products.Count, sut.DeliveredProducts);
}

public static IEnumerable<object[]> Data()
{
    return new List<object[]>
    {
        new object[] { 
            new List< AmazonProduct>() 
            { 
                new AmazonProduct(123, "How to Cook the Perfect Paella", "Books", (decimal)34.00),
                new AmazonProduct(456, "Best Cities to Live in Spain", "Books", (decimal)48.00),
                new AmazonProduct(789, "Learn Catalan in 21 days", "Audio CDs", (decimal)26.00)
            }
        }
    };
}
</pre>

Podemos simplificarlo utilizando el atributo AutoData de AutoFixture para crear el SUT:

<pre data-enlighter-language="csharp">  
[Theory, AutoData]
public void GivenNewDelivery_WhenDeliver__ThenAllProductsWereDelivered(AmazonDelivery sut)
{
    //Act
    sut.Deliver();

    //Assert
    Assert.NotEmpty(sut.Products);
    Assert.Equal(sut.Products.Count, sut.DeliveredProducts);
}
</pre>

Hemos reducido drásticamente el código necesario ya que el método Data no es necesario porque AutoFixture se encarga de llenar las propiedades con valores aleatorios.

Una ventaja adicional es que **nuestros tests son más tolerantes a los cambios en nuestro código** y AutoFixture se encarga de resolver las dependencias de nuestras clases, de esta forma aunque cambiemos el constructor de la clase, el código del test seguirá funcionando sin necesidad de modificarlo.

### Más Información

También se integra con NUnit y tiene soporte para generar mocks a través de Moq y otras librerías. Puedes obtener más información revisando la <a href="https://autofixture.github.io/docs/quick-start/">documentación</a>.

Espero que este pequeño artículo te sea de utilidad y que puedas agilizar la escritura de tus tests. 😉👍👍
