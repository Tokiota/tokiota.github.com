---
published: true
date: 2020-10-20 00:00:00 +0100
layout: post
title: "Guía de estilos para los artículos"
summary: "Este es un resumen largo del artículo que se usará de entradilla en la pantalla Home. aquí tambien se admiten tags html para palabras en <b>negrita</b>, en <i>cursiva</i>, enlaces a alguna <a href='https://tokiota.com'>página web</a> y mismo emojis ⛩😃⛩.<p> Si no sabes como ponerlos es tan fácil como pulsar dos teclas [WIN]+[.] y de saldrá un menú donde elegir (al menos en Windows10)."
excerpt: "Una guía para hacer que nuestros artículos del blog brillen como es debido."
categories: [Tokiota] # Desarrollo, Infraestructura, Bizpro, Management, Tokiotas, Eventos
tags: [blog] # siempre en minisculas
featured_image: /public/uploads/draft/guia-de-estilos-para-articulos/blog.jpg
pathToPublicFolder: "public/uploads/draft/guia-de-estilos-para-articulos"
author:
  name: "Tokiota"
  image: tokiota.jpg
  signText: "Tokiota Team"
---
{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder %}

{% include code_image_cab_post.html path=pathPublicFolder 
image='imagen-01.jpg'
title='Como descargar la imagen desde outlook web'
style=''
%}


Esta entrada de blog sirve a modo de guía de estilos y recursos a usar para hacer que los artículos brillen correctamente.
Para ver como se escribe cada sección, accede al código de este fichero <b>00_Guía-estilo.artículos.md</b>. 
Este mismo fichero no deja de ser un artículo en sí mismo para usar de modelo.

<b>Aquí tienes un índice de la guía:</b>
<!-- TOC -->

- [Antes de empezar](#antes-de-empezar)
- [Cómo empiezo](#cómo-empiezo)
- [Metadatos del artículo](#metadatos-del-artículo)
- [Qué foto pongo para el autor](#qué-foto-pongo-para-el-autor)
  - [Cómo obtengo la foto](#cómo-obtengo-la-foto)
- [Cómo se ponen los títulos](#cómo-se-ponen-los-títulos)
- [Cómo añadir un enlace](#cómo-añadir-un-enlace)
- [Cómo añadir una imágen](#cómo-añadir-una-imágen)
  - [Donde subir las imágenes](#donde-subir-las-imágenes)
- [Cómo añadir notas](#cómo-añadir-notas)
- [Cómo añadir fragmentos de código](#cómo-añadir-fragmentos-de-código)
- [Cómo escribir una tabla de datos](#cómo-escribir-una-tabla-de-datos)

<!-- /TOC -->

## Antes de empezar
<b>Escribe el artículo</b>
Olvídate de esta guía y de la maquetación en *Markdown*. Escribe el artículo en un Word, sin faltas de ortografía, envíaselo a tu TeamLead o responsable (porque dos ojos siempre ayudan). Cuando lo tengas listo, vuelve aquí y lo maquetamos.

## Cómo empiezo
Bien, si has llegado hasta aquí, es que ya tienes tu artículo escrito y revisado.

Crea un fichero en blanco sobre la carpeta _post con la siguiente nomenclatura:
<br/><b>yyyy-MM-dd-mi-titulo-del-articulo.md</b>.

## Metadatos del artículo
Todo artículo necesita especificar unos datos que se sitúan al inicio del fichero y se delimitan entre dos líneas con tres guiones.
<pre data-enlighter-language="raw">
---
published: false
date: 2100-12-12 00:00:00 +0100
layout: post
title: "Guía de estilos para los artículos"
summary: "Este es un resumen largo del artículo que se usará de entradilla en la pantalla Home. aquí tambien se admiten tags html para palabras en <b>negrita</b>, en <i>cursiva</i>, enlaces a alguna <a href='https://tokiota.com'>página web</a> y mismo emojis ⛩😃⛩.<p> Si no sabes como ponerlos es tan fácil como pulsar dos teclas [WIN]+[.] y de saldrá un menú donde elegir (al menos en Windows10).</p>"
excerpt: "Una guía para hacer que nuestros artículos del blog brillen como es debido."
categories: [Tokiota] # Desarrollo, Infraestructura, Bizpro, Management, Tokiotas, Eventos
tags: [blog] # siempre en minúsculas
featured_image: /public/uploads/2020/10/20-guia-de-estilos-para-articulos/blog.jpg
pathToPublicFolder: "public/uploads/2020/10/20-guia-de-estilos-para-articulos"
author:
  name: "Tokiota"
  image: tokiota.jpg
  signText: "Tokiota Team"
---
{{ "{% assign pathPublicFolder = site.baseurl | append: page.pathToPublicFolder " }}%}
</pre>

A continuación explico cada uno:
- <b>published</b>: Acepta los valores <i>true</i> o <i>false</i>. S
  - true: será procesado y publicado el artículo.
  - false: si quieres que sea ignorado y no publicado.
- <b>date</b>: La fecha que se establezca será la de publicación. Es decir si pones una futura el artículo se procesará para publicarse ese día. <b>Poner el formato fecha como en el ejemplo.</b>
- <b>layout</b>: su valor es siempre <b>post</b>
- <b>title</b>: aquí escribe tu título del articulo
- <b>excerpt</b>: una descripción breve. este texto será usado cuando se comparta tu artículo en redes sociales.
- <b>categories</b>: están delimitadas en 4 categorías que son las siguientes <b>respetar el texto exacto</b>: 
  - Desarrollo
  - Infraestructura
  - Business Productivity
  - Tokiota
  - Eventos
- <b>tags</b>: array de las tecnologías que quieran detallarse. <b>Se escriben en minúsculas</b>.
- <b>featured_image</b>: es la ruta a la imágen que se visualizará en la entradilla de inicio y en las tarjetas de visualización al compartir en redes sociales. Crea la carpeta siguiendo la misma regla y nomenclatura. Más detalle en la sección [Donde subir las imágenes](#donde-subir-las-imágenes)].
- <b>pathToImages</b>: "es la ruta a la carpeta donde se alojarán las imágenes de este blog."

- <b>summary</b>: Este es un resumen largo del artículo que se usará de entradilla en la pantalla Home. aquí tambien se admiten tags html para palabras en <b>negrita</b>, en <i>cursiva</i>, enlaces a alguna <a href='https://tokiota.com'>página web</a> y mismo emojis ⛩😃⛩. Si no sabes como ponerlos es tan fácil como pulsar dos teclas [WIN]+[.] y de saldrá un menú donde elegir (al menos en Windows10).
- <b>author name</b>: Nombre de la persona autora del artículo.
- <b>author image</b>: Foto del autor/a. Debe alojarse en la carpeta <b>public/img/authors</b>. [Ver aquí más detalle.](#¿qué-foto-pongo-para-el-autor?)
- <b>author signText</b>: texto que

## Variables de página 
Tras los `---` tenemos definido una variable de página:
- <b>pathPublicFolder</b>: será usada para incluir una imágen o cualquier enlace a fichero ya que es una url a la carpeta donde se alojar imágenes o ficheros adjuntos usados en artículo.

## Qué foto pongo para el autor
Primero busca la imagen en <b>public/img/authors</b>, puede que ya exista.

Si hay que añadir una nueva, mi consejo es descargar la imagen que sale con tu usuario en Teams.
## Cómo obtengo la foto
- Entra con tu cuenta de Tokiota en [https://outlook.office.com/people/](https://outlook.office.com/people/).
- Buscas a la persona y la seleccionas.
- Botón derecho en la imagen
- Guardar como, a la carpeta <b>public/img/authors</b>. Nombramos al fichero con **nombre_apellido1_apellido2.jpg**.


{% include code_image.html path=pathPublicFolder 
image='obtener_imagen_autor.png'
title='Como descargar la imagen desde outlook web'
style=''
%}

## Cómo se ponen los títulos
Así se escriben los títulos
<pre data-enlighter-language="markdown">
# Esto es un Título 1
## Esto es un Título 2
### Esto es un Título 3
#### Esto es un Título 4
##### Esto es un Título 5
###### Esto es un Título 6
</pre>
y así salen:
# Esto es un Título 1
## Esto es un Título 2
### Esto es un Título 3
#### Esto es un Título 4
##### Esto es un Título 5
###### Esto es un Título 6
<br>
<br>

## Estilos de letras
Hay dos maneras
- Formato Markdown
<pre data-enlighter-language="markdown">
*Cursiva*
**Negrita**
</pre>

- Formato HTML:
<pre data-enlighter-language="html">
<i>Cursiva</i>
<b>Negrita</b>
</pre>

## Cómo añadir un enlace
Esto lo haremos por nomenclatura Markdown. 
Pero intentaremos seguir lo siguiente:
<pre data-enlighter-language="markdown">
[Nuestro texto aquí](https://nuestroenlace.com/aquui){:target="_blank"}.
</pre>


## Cómo añadir una imágen
La forma más facil de insertar una imágen es haciendo uso del siguietne fragmento de código indicando el fichero de la imagen y el texto alternativo:
<pre data-enlighter-language="markdown">
{{ "
{% include code_image.html path=pathPublicFolder
image='tokiota_foto.jpg'
title='Texto alternativo a la imagen'
style=''
" }}%}
</pre>
Y se verá esto:

{% include code_image.html path=pathPublicFolder
image='tokiota_foto.jpg'
title='Texto alternativo a la imagen'
style=''
%}

## Donde subir las imágenes
Las imágenes deberán ser alojadas en la carpeta indicada en la sección de configuración <b>pathToPublicFolder</b>. 
Tendremos que crear la carpeta siguiendo la regla y la nomenclatura:
<br/><b>public/uploads/yyyy/MM/dd-mi-titulo-del-articulo</b>.

Es importante que el nombre de la carpeta sea en <b>minúsculas</b> y <b>sin espacios en en blanco</b>, usando guiones.

{% include code_note.html 
content='Siempre puedes hacer uso de código html para incluir imágenes de urls externas pero evitaremos esta práctica en la medida de lo posible porque si la url externa cambia o desaparece el artículo pierde valor. Sería mejor hacer una copia a nuestra carpeta y citar fuente/autor.'
%}

## Cómo añadir notas
Para insertar una nota como esta:

{% include code_note.html 
content='En el texto a incluir puedes poner palabras en <b>negrita</b>, en <i>cursiva</i>, emojis😉, etc.. lo que sea pero haciendo uso de tags HTML. 
<p style="text-decoration: underline;">En este texto no se puede usar la nomenclatura Markdown, por ejemplo para poner esto en **negrita**.</p>'
%}

<pre data-enlighter-language="markdown">
{{ "
{% include code_note.html 
content='Aquí escribe el texto.' 
" }}%}
</pre>

## Cómo añadir fragmentos de código

Para visualizar un fragmento de código así:
<pre data-enlighter-language="csharp">
using static System.Console;
class Program
{
  static void Main(string[] args)
  {
      string s = null;
      WriteLine($"The first letter of {s} is {s[0]}"); //Se produce un error porque s es null ---> NullReferenceException
  }
}
</pre>

pondremos lo siguiente:
<pre data-enlighter-language="raw">
<pre data-enlighter-language="csharp">
  
  /* aquí el código */
</pre>
</pre>

En el atributo *data-enlighter-language* pondremos uno de los valores disponibles en la siguiente tabla:
<table class="simpleTable">
  <thead>
    <th>Lenguaje</th>
    <th>valores (solo uno)</th>
    <th>detalle</th>
  </thead>
  <tbody>
    <tr><td>AVR Assembly 	</td><td>avrassembly, avrasm	</td><td></td></tr>
    <tr><td>C/C++ 			  </td><td>c,cpp, c++				    </td><td></td></tr>
    <tr><td>C# 				    </td><td>csharp					      </td><td></td></tr>
    <tr><td>CSS 			    </td><td>css					        </td><td></td></tr>
    <tr><td>Cython 			  </td><td>cython					      </td><td></td></tr>
    <tr><td>CordPro 		  </td><td>cordpro				      </td><td></td></tr>
    <tr><td>diff 			    </td><td>diff					        </td><td></td></tr>
    <tr><td>Dockerfile 		</td><td>docker, dockerfile		</td><td></td></tr>
    <tr><td>Generic 		  </td><td>generic, standard		</td><td>default highlighting scheme</td></tr>
    <tr><td>Groovy 			  </td><td>groovy					      </td><td></td></tr>
    <tr><td>Go 				    </td><td>go, golang				    </td><td></td></tr>
    <tr><td>HTML 			    </td><td>html			      		  </td><td></td></tr>
    <tr><td>Ini 			    </td><td>ini, conf			    	</td><td></td></tr>
    <tr><td>Java 			    </td><td>java					        </td><td></td></tr>
    <tr><td>Javascript 		</td><td>js, javascript, jquery, mootools, ext.js</td><td></td></tr>
    <tr><td>JSON 			    </td><td>json					        </td><td></td></tr>
    <tr><td>Kotlin 			  </td><td>kotlin				        </td><td></td></tr>
    <tr><td>LESS 		  	  </td><td>less					        </td><td></td></tr>
    <tr><td>LUA 		  	  </td><td>lua					        </td><td></td></tr>
    <tr><td>Markdown 		  </td><td>gfm, md, markdown		</td><td></td></tr>
    <tr><td>Matlab/Octave </td><td>octave, matlab	  		</td><td></td></tr>
    <tr><td>NSIS 		  	  </td><td>nsis			      	  	</td><td></td></tr>
    <tr><td>PHP 			    </td><td>php					        </td><td></td></tr>
    <tr><td>Powerhsell 		</td><td>powershell				    </td><td></td></tr>
    <tr><td>Prolog 		  	</td><td>prolog					      </td><td></td></tr>
    <tr><td>Python 		  	</td><td>py, python				    </td><td></td></tr>
    <tr><td>PureBasic 		</td><td>purebasic, pb			  </td><td></td></tr>
    <tr><td>RAW 		    	</td><td>raw					        </td><td>raw code without highlighting with EnlighterJS container styles!</td></tr>
    <tr><td>Ruby 	    		</td><td>ruby					        </td><td></td></tr>
    <tr><td>Rust 			    </td><td>rust					        </td><td></td></tr>
    <tr><td>SCSS 			    </td><td>scss, sass				    </td><td></td></tr>
    <tr><td>Shellscript 	</td><td>shell, bash			    </td><td></td></tr>
    <tr><td>SQL 			    </td><td>sql					        </td><td></td></tr>
    <tr><td>Squirrel 	  	</td><td>squirrel				      </td><td></td></tr>
    <tr><td>Swift 			  </td><td>swift					      </td><td></td></tr>
    <tr><td>Typescript 		</td><td>typescript				    </td><td></td></tr>
    <tr><td>VHDL 			    </td><td>vhdl				        	</td><td></td></tr>
    <tr><td>VisualBasic 	</td><td>visualbasic, vb	  	</td><td></td></tr>
    <tr><td>Verilog 		  </td><td>verilog			      	</td><td></td></tr>
    <tr><td>XML 			    </td><td>xml				        	</td><td></td></tr>
	  <tr><td>YAML 		     	</td><td>yaml				       	  </td><td></td></tr>
  </tbody>  
</table>

Esta info está sacada de la version v3 del proyecto [EnlighterJS en Github](https://github.com/EnlighterJS/EnlighterJS){:target="_blank"}.

{% include code_note.html 
content='Existe otra manera de indicar código con Markdown pero no se hará uso en este blog porque EnlighterJS es más potente.'
%}

Es recomendable no usar [Gist](https://gist.github.com/){:target="_blank"} para fragmentos de código porque la información del artículo queda dependiente de otra plataforma y puede perderse.
Es por ello que él código que se quiera explicar <b>debe incluirse en el artículo.</b> 
Si queremos dejar un ejemplo completo de un proyecto es recomendable abrir uno en  GitHub sobre la cuenta de organización de Tokiota.

## Cómo escribir una tabla de datos
La recomendación es hacerlo en formato html porque el markdown a veces no renderiza por culpa de algun carácter.
<pre data-enlighter-language="html">
<table class="simpleTable">
  <thead>
    <th>Cabecera 1</th>
    <th>Cabecera 2</th>
    <th>Cabecera 3</th>
  </thead>
  <tbody>
    <tr><td>texto</td><td>texto</td><td>texto</td></tr>
    <tr><td>texto</td><td>texto</td><td>texto</td></tr>
    <tr><td>texto</td><td>texto</td><td>texto</td></tr>
  </tbody>
</table>
</pre>

Si crees que puedes mejorar la guía bienvenido sea. Toda mejora será bienvenida.

Saludos!