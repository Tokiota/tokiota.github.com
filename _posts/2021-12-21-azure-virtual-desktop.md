---
published: true
date: 2021-12-21 04:00:00 +0100
layout: post
title: "Azure Virtual Desktop (AVD)"
summary: "Azure Virtual Desktop es una plataforma cloud en Azure basada en escritorios virtuales que facilita una experiencia de usuario corporativo pudiendo acceder desde cualquier tipo de dispositivo, independientemente del sistema operativo y desde cualquier navegador."
excerpt: "En Tokiota llevamos más de un año ejecutando proyectos con Azure Virtual Desktop y transformando múltiples experiencias de usuario. Nuestro compañero Dani Camacho te cuenta qué es AVD? #post #azure #avd"
categories: [Infraestructura]
tags: [avd, azure ]
featured_image: /public/uploads/2021/12/21_Azure_Virtual_Desktop/2021_12_azure_virtual_desktop_portada.png
pathToPublicFolder: "public/uploads/2021/12/21_Azure_Virtual_Desktop"
author:
  name: "Daniel Camacho Rodríguez"
  image: daniel_camacho_rodriguez.jpg
  signText: "Infrastructure & Cloud Consultant"
onTop: true
pined: false
pinedOrder: 0
---
{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder %}

{% include code_image_cab_post.html path=pathPublicFolder
image='2021_12_azure_virtual_desktop_portada.png'
title='AVD'
style=''
%}

{% include
code_data_post.html
%}

Azure Virtual Desktop es una plataforma cloud en Azure basada en escritorios virtuales que facilita una experiencia de usuario corporativo pudiendo acceder desde cualquier tipo de dispositivo, independientemente del sistema operativo y desde cualquier navegador. 

AVD crea el Sistema operativo **Windows 10/11 Enterprise multi-user**, un Sistema Operativo que aúna lo mejor de los Sistema Operativo destinado a escritorios virtuales Windows Server 2019 Desktop Enterprise y Windows 10/11 Enterprise. La ventaja de múltiples sesiones de usuario en un mismo servidor de Windows Server 2019 Desktop Experience. La ventaja de uso de aplicaciones **Win32 y UWP** de Windows 10/11 Enterprise, como por ejemplo Microsoft Office 365. La gran ayuda en seguridad de **actualizaciones** con carácter **semi-anuales**.

Una de las razones por las que muchas plataformas de empresas se están migrando a Cloud es por la tranquilidad que ofrece de **alta disponibilidad** y el **bajo mantenimiento** que requiere. No es distinto con AVD, despreocupándonos del mantenimiento y de los problemas derivados del servicio de Brokering, del servicio de hosting, de las licencias de usuario y máquina/s, de las comunicaciones entre nodos del clúster y hosts, de los problemas derivados del hardware y de la gestión y remplazo de éste. Las únicas preocupaciones que tendremos serán la definición y la gestión de imágenes corporativas.


En Tokiota llevamos más de un año ejecutando proyectos con AVD y transformando múltiples experiencias de usuario. Las cargas de trabajo más destacables o comunes: 

-	**Elasticidad de capacidad**, habilitando gran cantidad de puestos de trabajo en unos sencillos pasos con experiencia única y empresarial.
-	**Trabajos remotos**, trabajar con la misma experiencia empresarial sin necesidad de conexiones VPN, instalación de certificados etc.
-	**Entornos aislados y seguros**, ofreciendo experiencias con limitaciones de acceso por seguridad o control
-	**Cargas de trabajo específicas**, añadiendo un extra de hardware en la experiencia de usuarios para poder correr cargas de GPU, alto nivel de computación, Inteligencia Artificial sin necesidad de tener un gran hardware.

Todas las cargas de trabajo comentadas anteriormente y las que tengáis en mente, se tendrán que reflejar en los dos tipos de escritorios. **Pooled desktops**, un conjunto de máquinas virtuales se asigna a un conjunto de usuarios. La asignación unitaria de máquina se ejecuta en base a la carga de usuarios en los hosts en el momento de la conexión. Escritorios diseñados para entornos multiusuario. **Personal desktops**, un conjunto de máquinas virtuales iguales, asignando una máquina específica a un usuario específico. Experiencia diseñada para entornos single user.

{% include code_image.html path=pathPublicFolder 
image='2021_12_azure_virtual_desktop_1.png'
title=''
style=''
%}


Uno de nuestros puntos favoritos de los entornos AVD es la transparencia que tiene el usuario en el uso de la máquina asignada, sin identificar el cambio de máquina. FSLogix nace para facilitar el movimiento de perfiles de usuario entre máquinas, los antiguos perfiles móviles. Además, FSLogix nos permite poder separar el perfil de usuario del perfil de Office365, mejorando el rendimiento en caso de necesitarlo en alguno de estos perfiles.

{% include code_image.html path=pathPublicFolder 
image='2021_12_azure_virtual_desktop_2.png'
title=''
style=''
%}

No tenemos que olvidarnos de que AVD ofrece poder customizar las experiencias unitarias de cada usuario. **MSIX** nos ofrece la elasticidad de poder añadir diferentes aplicaciones y/o programas dependiendo del usuario que se conecte. Nos gusta pensar en MSIX como un Puzle, teniendo una pieza principal que es el SO, pudiendo añadir diferentes piezas (aplicaciones y/o programas) dependiendo el usuario que acceda a AVD.

Uno de los grandes miedos para ir a cloud, no solo en AVD, es el “sablazo a final de mes”. En el caso de AVD, el coste de este servicio viene de las **licencias de M365** y de los **recursos en Azure**. Usando M365 ya estaremos familiarizados con los diferentes tipos de licencias por usuario. Para utilizar AVD los usuarios deben tener una de las conocidas licencias Microsoft365 E3/E5, Microsoft365 A3/A5, Microsoft 354 F3 o Microsoft 365 Business. El grueso del coste de AVD proviene de las máquinas virtuales desplegadas para poder correr estos escritorios. Aun así, en Tokiota ofrecemos estrategias para conseguir reducir, como mínimo, un 66% del coste.

Feliz 2022 🎄🎊.
