---
published: true
date: 2021-06-21 04:00:00 +0100
layout: post
title: "Hybrid File Server"
summary: "La acumulación de archivos y documentos en nuestros servidores de ficheros puede ser preocupante, pues implica la necesidad de eliminar o archivar documentos para liberar espacio y/o ampliar cabina/discos. Esto se suele traducir en malestar por parte del usuario y/o en un desembolso económico. Conoce la solución que desde Tokiota te presentamos Hybrid File Server."
excerpt: "Os traemos nuevo artículo donde conocer la solución Hybrid File Server. Olvídate de liberar espacio en tus servidores constantemente y de preocuparte por los backups, que Azure se encargue. #post #azuresync"
categories: [Infraestructura]
tags: [hybrid, fileserver, azure ]
featured_image: /public/uploads/2021/06/21-hybrid-fil-server/azure_file_sync.jpg
pathToPublicFolder: "public/uploads/2021/06/21-hybrid-fil-server"
author:
  name: "Daniel Camacho Rodríguez"
  image: daniel_camacho_rodriguez.jpg
  signText: "Infrastructure & Cloud Consultant"
---
{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder %}

{% include code_image.html path=pathPublicFolder
image='azure_file_sync.jpg'
title='Hybrid file Server'
style=''
%}
La acumulación de archivos y documentos en nuestros servidores de ficheros puede ser preocupante, pues implica la necesidad de eliminar o archivar documentos para liberar espacio y/o ampliar cabina/discos. Esto se suele traducir en malestar por parte del usuario y/o en un desembolso económico. Todo ello sin contar con la infraestructura a montar en el caso de tener diferentes sedes en diferentes lugares geográficos ni tampoco en las soluciones de *backup* a implementar.

Es cierto que existen diferentes tipos de infraestructuras para solucionar estos problemas. Desde Tokiota presentamos una solución para solventarlos y, además, tener una recuperación ante un desastre de nuestros servidores de ficheros rápido y sencillo. Nosotros la hemos llamado *Hybrid File Server*.

Utilizamos el concepto de *Hybrid File* Server al hecho de centralizar los datos de un servidor de ficheros en un servicio de almacenaje en Azure y tener en nuestra infraestructura *On Premise* uno o varios servidores de ficheros con el objetivo de utilizarlo/s como cache de archivos.

Este sistema consiste en guardar la totalidad de nuestros archivos en una cuenta de almacenamiento de Azure y tener un subconjunto de los documentos vivos, los más utilizados, en el servidor o servidores de ficheros estableciendo una sincronización activa y bidireccional. Esta sincronización puede realizarse con un total de 30 servidores de ficheros distintos.

Al utilizar la política de nube por niveles (*cloud tiering policy*), el espacio ocupado en nuestra infraestructura On Premise por el servidor de ficheros podrá verse reducido en un 50%, un 60% o incluso un 90%. El funcionamiento de esta política consiste en generar punteros de los documentos menos usados de nuestro servidor de ficheros. Estos punteros contendrán los metadatos del fichero y un enlace a nuestro fichero en Azure. En el momento de abrir el puntero, el fichero se descargará automáticamente en nuestro servidor de ficheros ocupando así la totalidad del tamaño del fichero y pudiendo ser utilizado por el usuario.

La arquitectura descrita es completamente transparente al usuario a nivel operacional, aunque sí que el usuario podrá detectar si un archivo está vivo o es un puntero.

{% include code_image.html path=pathPublicFolder 
image='diff_hybrid_file_server.jpg'
title='Carpeta con/sin Hybrid File Server configurado'
style=''
%}


Los usuarios experimentaran un pequeño retraso en el primer acceso al puntero, esta acción descargará la totalidad del fichero. A partir de este momento, el fichero pasará a ser un documento vivo, si no se vuelve a acceder al documento, se volverá a transformar en puntero.

En Azure Storage se mantendrá la totalidad de los ficheros, pudiendo así delegar la copia de seguridad del servidor de ficheros a Azure. Esta copia de seguridad puede ser programada y gestionada desde el portal de Azure, sin la necesidad de ninguna herramienta de terceros ni preocuparse por el tiempo de copia. Las opciones de recuperación permiten la recuperación granular, llegando a nivel de ficheros.

La recuperación ante desastres es uno de los puntos más fuertes de esta arquitectura. En el supuesto que el servidor de ficheros quedase inoperativo, independientemente del problema, la recuperación de este servicio es rápida y sencilla. Únicamente se tendrá que desplegar un nuevo servidor de ficheros, habilitar la sincronización con Azure y el servicio estará reestablecido. Con esta solución no es necesario la recuperación del servidor de ficheros de una copia de seguridad, lo que implica un gran ahorro de tiempo y esfuerzo.

Así de eficiente puede llegar a ser la solución de *Hybrid File Server*, ofreciendo grandes mejoras y facilitando la gestión de nuestro servidor de ficheros.