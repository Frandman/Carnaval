var myDataRef = new Firebase('https://intense-inferno-3375.firebaseio.com/');
var fechasRef = myDataRef.child('fechas');
var eventosRef = myDataRef.child('eventos');
var agrupacionesRef = myDataRef.child('agrupaciones');


/* function fireInit(){
	fechas = [

    {
        name: 'Tortillá',
        fecha: new Date("March 6, 2014"),
        lugar: 'AAVV Bda. Antonio Vega',
        imagen: 'http://2.bp.blogspot.com/-7uza0MPRW54/UxNDzMQgWuI/AAAAAAAARuE/Rnbnjn_S7MQ/s1600/2014-03-02_154157.png',
        description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },
    {
	    name: 'Presentación oficial agrupaciones',
	    fecha: new Date("March 13, 2014"),
	    lugar: 'CEIP Francisco Fatou',
	    imagen: 'http://2.bp.blogspot.com/-7uza0MPRW54/UxNDzMQgWuI/AAAAAAAARuE/Rnbnjn_S7MQ/s1600/2014-03-02_154157.png',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
         },
    {
	    name: 'Chorizá',
	    fecha: new Date("March 20, 2014"),
	    lugar: 'Casco Antiguo',
	    imagen: 'http://2.bp.blogspot.com/-7uza0MPRW54/UxNDzMQgWuI/AAAAAAAARuE/Rnbnjn_S7MQ/s1600/2014-03-02_154157.png',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
         },
	{
	    name: 'Pasacalles',
	    fecha: new Date("March 13, 2014"),
	    lugar: 'Casco Antiguo',
	    imagen: 'http://2.bp.blogspot.com/-7uza0MPRW54/UxNDzMQgWuI/AAAAAAAARuE/Rnbnjn_S7MQ/s1600/2014-03-02_154157.png',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
         },
    {
        name: 'Entierro de la patacabra',
        fecha: new Date("March 13, 2014 11:13:00"),
        lugar: 'Casco Antiguo',
        imagen: 'http://2.bp.blogspot.com/-7uza0MPRW54/UxNDzMQgWuI/AAAAAAAARuE/Rnbnjn_S7MQ/s1600/2014-03-02_154157.png',
        description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        }
	];

	fechasRef.set(fechas);

	eventos = [

	    {
	    grupo: 'Los explotadores',
	    fecha: new Date("Enero 6, 2016 11:13:00"),
	    lugar: 'Casco Antiguo',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
         },

	    {
	    grupo: 'Lo de Maza',
	    fecha: new Date("Enero 6, 2016 11:13:00"),
	    lugar: 'Casco Antiguo',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
            }
    ];

    eventosRef.set(eventos);

	agrupaciones = [

	{
	    name: 'Los explotadores',
	    musica: 'Juan Mancilla',
	    letra: 'Juan Mancilla',
	    anterior:'Borreguito como tú',
	    imagen: 'http://2.bp.blogspot.com/-7uza0MPRW54/UxNDzMQgWuI/AAAAAAAARuE/Rnbnjn_S7MQ/s1600/2014-03-02_154157.png',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },

    {
	    name: 'Las niñas de la Beli',
	    musica: 'Daniel Menacho',
	    letra: 'Daniel Menacho',
	    anterior:'no participó',
	    imagen: 'http://2.bp.blogspot.com/-7uza0MPRW54/UxNDzMQgWuI/AAAAAAAARuE/Rnbnjn_S7MQ/s1600/2014-03-02_154157.png',
	    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },
    ];

    agrupacionesRef.set(agrupaciones);
} */