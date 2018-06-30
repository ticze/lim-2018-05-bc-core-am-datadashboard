# Data Dashboard

## Preámbulo

En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la
mayor cantidad de datos posibles respecto al progreso de las estudiantes para
apoyarlas en su aprendizaje.

La principal medida de progreso de una estudiante en Laboratoria es su avance
completando los proyectos de la [Ruta de Aprendizaje](https://docs.google.com/spreadsheets/d/1AoXQjZnZ5MTPwJPNEGDyvn5vksiOUoPr932TjAldTE4/edit#gid=536983970)
y su desempeño en función a la [Rúbrica de Niveles Esperados](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml).
Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos
de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que
llamamos LMS (Learning Management System). El LMS acumula data sobre quién
leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.

A pesar de que la data de progreso del LMS (ej. lecturas leídas, ejercicios
  completados, nota en quizzes, etc.) no impacta directamente en la evaluación
  de una estudiante, sí es una pieza de información relevante que las TMs
  quisieran visualizar para tener un mejor entendimiento de cómo va cada
  estudiante en su proceso de aprendizaje.

Así, el reto de este proyecto es crear una interfaz donde las TMs puedan
_ver_ y _usar_ la data de progreso del LMS. Para ello, proponemos crear un
**data dashboard** (_tablero de visualización de datos_).

## Introducción

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada en los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

Sin embargo, los datos por sí solos son de poca utilidad. Para transformar datos
en **información** necesitamos procesarlos y entenderlos. Una manera muy
sencilla de hacerlo es creando _visualizaciones_. Las
empresas líderes de hoy generan visualizaciones dinámicas de su data
que les permiten entender mejor su negocio y tomar decisiones apropiadas.

En este proyecto tendrás tu primer acercamiento a transformar data en
información creando tu primer **data dashboard**.

Si pensamos en un _dashboard_ podemos pensar en el tablero de control de un auto
o el de un avión. Un espacio desde el cual un usuario puede tener acceso a la
información y controles más relevantes, en este caso, del vehículo que está
utilizando. El _dashboard_ de un auto le permite a quien conduce saber a qué
velocidad está yendo, qué cambio/velocidad está utilizando, cuánto combustible
tiene disponible, cuál es la temperatura del motor, cuántas revoluciones por
minuto dan las ruedas, cuánta distancia ha recorrido, etc.

![car dashboard](https://img.buzzfeed.com/buzzfeed-static/static/2017-02/7/12/enhanced/buzzfeed-prod-fastlane-03/original-17515-1486490056-3.jpg?crop=2041:1068;80,248)

## Aplicaciones en el mundo real

En el mundo de la web es muy común el uso de _dashboards_. De hecho, [wikipedia](https://goo.gl/P7PF4y)
nos dice que un _dashboard_ puede ser un resumen gráfico de varias piezas de
información importante, generalmente utilizadas para dar una visión general de
una empresa o de un servicio. Así, tenemos dashboards como los de:

* [Google Analytics](https://assets.econsultancy.com/images/resized/0003/3813/mobile_commerce_dashboard-blog-full.png)
  para visualizar la data de tráfico de sitios web.

* [Mailchimp](https://blog.mailchimp.com/wp-content/uploads/2016/11/Dashboard-view-3-Copy-1008x768.jpg)
  para visualizar el desempeño de campañas de mercadeo digital por correo
  electrónico.

* [Quickbooks](https://quickbooks.intuit.com/content/dam/intuit/quickbooks/branding/make-organization-easy-visual.png)
  para visualizar la información financiera de una empresa.

Seguramente, a lo largo de tu carrera como diseñadora o desarrolladora, te
tocará crear un _data dashboard_. Quizás sea para visualizar la data de un
negocio de delivery de comida, o las rutas históricas de un negocio de
transporte, o simplemente los indicadores clave de tu propio emprendimiento ;)

## Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
_interfaz web_ donde podamos visualizar y manipular data.

Esperamos que puedas pensar en el usuario, entender cuál es la mejor manera de visualizar la data según sus necesidades, y plasmar todo eso en tu diseño
en la web.

Además, este proyecto se debe "resolver" en parejas, por lo que un objetivo
importante es ganar experiencia en trabajos colaborativos con entrega grupal.

## Tópicos a cubrir

Tendrás que familiarizarte con conceptos como:
_arrays_,_objects_, _dom_, _xhr_ y _visual design_.

Además, reforzarás lo aprendido en el proyecto anterior: _valores, tipos,
variables_, _control de flujo_ y _tests unitarios_.

## Consideraciones generales

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) usando el
comando `npm test`.

Para comenzar tendrás que hacer un _fork_ y _clonar_ este repositorio que
contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── data
│   ├── cohorts
│   │   └── lim-2018-03-pre-core-pw
│   │       ├── progress.json
│   │       └── users.json
│   └── cohorts.json
├── package.json
├── src
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    ├── data.spec.js
    ├── fixtures.js
    ├── headless.js
    └── index.html
```

La carpeta `data/` dentro del _boilerplate_ incluye un extracto de la data que
podemos usar tanto en los tests como en la interfaz en sí.


### User Experience Design

#### 1) Definición del producto

* Para iniciar con el desarrollo de este proyecto descidimos realizar preguntas a nuestra cliente , y para ello lo desarrollamos en la conferencia que dio nuestra TNMg en las isntalaciones de laboratoria .
* Por cual tomamos todas sus respuestas ; en cuanto a lo que espera visualizar en el Proyecto , como primeros indicadores para prototipar el steck de baja fidelidad.

#### 1.2) Sketch de la solución (prototipo de baja fidelidad)


* Con esto dimos inicio a nuestro diseño de interfaz , el cual desarrollariamos  si tuvieramos el tiempo indicado para realizarlo. 
Para ello hicimos huso de la herramienta **FIGMA** : Se trata de una conocida aplicación de diseño de interfaces que permite la colaboración en tiempo real entre varias personas, lo que ayuda a que varios usuarios trabajen en el diseño de una nueva app, por ejemplo, de forma remota y simultánea, comunicándose entre ellos y avanzando en el resultado.
#### 1.3) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

 [Figma](https://www.figma.com/file/Xfx8PbNcuM1Su99kQtcTSwOB/DATADASHBORA)
 
 ![datadashboard_prototipo_alta](..\img\data 1.png)

 ![datadashboard_prototipo_alta](..\img\data 2.png)

 ![datadashboard_prototipo_alta](..\img\data 3.png)

 ![datadashboard_prototipo_alta](..\img\data 4.png)


### COLABORADORXS :

1. Zarela Zanabria
2. Leyla Ticze Huaman

## Detalles de Implementación

- Javascript ES6
- HTML5
- CSS3
- Figma
- Web server for chrome