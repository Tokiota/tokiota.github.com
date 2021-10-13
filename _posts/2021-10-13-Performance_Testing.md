---
published: true
date: 2021-10-13 04:00:00 +0100
layout: post
title: "Performance Test"
summary: "Hoy en día cualquier aplicación debe ser medida en todos los parámetros posibles. Desde la infraestructura hasta la capacidad de repuestas admitidas. Existen herramientas que muchas veces se pasan por alto y nos sirven para medir los límites de nuestra aplicación. Veamos que herramienta usamos en Tokiota y para que fin."
excerpt: "Hoy en día cualquier aplicación debe ser medida en todos los parámetros posibles. Desde la infraestructura hasta la capacidad de repuestas admitidas. Existen herramientas que muchas veces se pasan por alto y nos sirven para medir los límites de nuestra aplicación. Veamos que herramienta usamos en Tokiota y para que fin."
categories: [Desarrollo]
tags: [devops, cli, azure, test]
featured_image: /public/uploads/2021/10/13-Performance-Test/performance-test.png
pathToPublicFolder: "public/uploads/2021/10/13-Performance-Test"
author:
  name: "Jose María Flores Zazo"
  image: jose_maria_flores_zazo.jpg
  signText: "Development & Cloud Consultant"
  linkedin: https://www.linkedin.com/in/jmfloreszazo/
  twitter: https://www.twitter.com/jmfloreszazo/
  github: https://github.com/jmfloreszazo
onTop: true
pined: false
pinedOrder: 0
---
{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder %}

{% include code_image.html path=pathPublicFolder
image='performance-test.png'
title='Azure CLI'
style=''
%}

Podemos haber creado la API con los mejores patrones, con el codigo más limpio y reutilizable que quieras, que va muy fina, pero cuando llega el momento y sale a producción, puede ocurrir que se produzcan time-out, y no es culpa de tu magnifico desarrollo, es culpa de no haber previsto una infraestructura y escalado adecuado. Puede que operaciones esté allí a pie de cañón para escalar vertical u horizontalmente. Pero qué necesidad tienes de esa incertidumbre.

En el cloud, podemos crear reglas de escalado si conocemos los límites de nuestra arquitectura. Y no sirve que cuando llegue al 80% de CPU escale, esto puede estar bien a corto plazo, pero a largo supone un coste economico. Si hubieras realizado pruebas de stress, sabrías que quizá tu servicio aguanta muy bien hasta el 92%, aquí es cuando debes desplegar un nuevo nodo. Esto del 92% no es apurar, es acotar gastos. Es decir, medir y medir. Si no has realizado performace test, no podrás optimizar costes con los SKUs de los recursos adecuadamente.

A parte del anterior ejemplo, podemos preguntarnos que más nos dan las pruebas de rendimiento:

1. Mejorar el rendimiento de la aplicación es mejorar el resultado final.

2. Nos ayuda a un optimizar y ser eficiente con los recursos.

3. Hoy en día los usuarios somos muy exigentes y un entorno lento, con lags, que nos deja esperando, nos exaspera y nos vamos a otro entorno. En un producto empresarial interno, no se traduce en pérdida de clientes, si no productividad.

Por eso en Tokiota, nos preocupamos de introducir y formar a nuestros compañeros en cosa como esta. Y es  [JMeter](https://jmeter.apache.org/) nuestra herramienta de batalla.

Pero existen otras que también pueden acoplarse a tu entorno, ya sean de pago o gratuitas:

* [Gatlin](Gatlin)
* [Vegeta](https://github.com/tsenart/vegeta)
* [WebLoad](https://www.radview.com/)
* [K6S](https://k6.io/)
* Etc.

Una de las cosas que podemos hacer con estas herramientas es medir el stress, la carga máxima sostenida y ver cómo se comporta el escalado, test de pico, resistencia, ... de una aplicación. Con todos estos atributos medidos, sabemos el marco de trabajo y bajamos la incertidumbre, que siempre existe, pero reducida a la mínima expresión.

Si bien es cierto que para hacer las cosas bien, necesitas un entorno muy controlado, no es lo mismo probarlo en tu máquina, que hacerlo en maquina dedicada exclusivamente para ello. Debemos tener mucho cuidado y evaluar siempre bajo las mismas condiciones, es como un experimento debemos controlar los factores exógenos. Las mediciones serían erróneas.

Cuando tengas todo medido, tendrás tu base line, tu linea base donde comparas siguientes iteraciones de pruebas. Y como no, este tipo de pruebas entran en el ciclo de DevOps.

Por eso nuestra recomendación, es que dediques un tiempo a formarte en esta área. Intenta hacer proselitismo de estas acciones, ya que la inversión inicial garantiza un retorno inmediato.

Espero que estas pocas lineas hayan despertado tu interés y evalúes la posibilidad de hacer cada vez más robusta tu aplicación.