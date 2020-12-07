---
published: false
date: 2021-01-18 01:00:00 +0100
layout: post
title: "Arrancando SQL Server en docker linux"
summary: "Te contamos lo fácil que resulta arrancar un contenedor de SQLServer y tener nuestro propio servidor de base de datos en cuestión de segundos. Se acabaron las esperas de instalaciones en tu equipo de desarrollo. "
excerpt: "Arrancando SQLServer en docker linux para nuestro entorno desarrollo."
categories: [Desarrollo]
tags: [docker, sqlserver, linux]
featured_image: /public/uploads/2021/01/18-arrancando-sql-server-docker/sqlserver_docker_min.png
pathToPublicFolder: "public/uploads/2021/01/18-arrancando-sql-server-docker"
author:
  name: "David Gonzalo"
  image: david_gonzalo_pena.jpg
  signText: "Team Lead & Cloud Developer Consultant"
  linkedin: https://www.linkedin.com/in/dagope/
  twitter: https://twitter.com/dagope
  github: https://github.com/dagope
---
{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder %}

{% include code_image.html path=pathPublicFolder
image='sqlserver_docker_min.png'
title='SQL Server + Docker'
style=''
%}
Si quieres arrancar rápidamente un SQL Server lo mejor es usar docker. Y con más razón si ya tienes WSL2 instalado 😀, y si todavía no lo tienes échale un vistazo a la [guía de instalación](https://docs.microsoft.com/es-es/windows/wsl/install-win10).
Esto puede resultar muy útil para no tener que instalar un entorno completo localmente.
En la [documentación oficial](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-bash) tienes toda la info. Yo lo he resumido con algunos cambios aquí:

<pre data-enlighter-language="bash">
docker run 
  --name sql1 
  -h sql1 
  -e 'ACCEPT_EULA=Y' 
  -e 'SA_PASSWORD=MiPa$$w0rd' 
  -e 'MSSQL_PID=Enterprise' 
  -p 11433:1433 
  -d 
  mcr.microsoft.com/mssql/server:2019-latest
</pre>

Yo ya tenía el puerto 1433 ocupado en mi máquina por lo que he mapeado la imagen al puerto 11433.

Para conectarte usando el Management Studio:
- Server: 127.0.0.1,11433  (el puerto se indica separando con una coma)
- User: SA
- Password: la que hayáis indicado al arrancar el contenedor.
- Vamos a Options y en la *Additional Connection Parameters* debemos añadir `TrustServerCertificate=True`.

{% include code_image.html path=pathPublicFolder
image='mmssqlserver_connections.png'
title='Instrucciones para conectar Management Studio'
style=''
%}

Todo funcionando.

Ahora cuando no lo necesites puedes detener el contenedor con `docker stop sql1` de esta manera no te consume recursos de la máquina. 
<br/>Y lo arrancas con `docker start sql1`.

Fácil y sencillo.

Happy codding!