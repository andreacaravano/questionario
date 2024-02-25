const CONTASINGOLE = 10;
const CONTAMULTIPLE = 10;
const CONTAASSOCIAZIONE = 5;
var domandeSingola = [];
var corretteSingola = [];
var domandeMultipla = [];
var risposteMultipla = [];
var corretteMultipla = [];
var domandeAssociazione = [];
var risposteAssociazione = [];
var corretteAssociazione = [];
domandeSingola[0] = "Per riempire una vasca, un rubinetto impiega 2 ore e un secondo rubinetto impiega 3 ore. <br />Quanto tempo impiegano a riempire la vasca i due rubinetti, se aperti insieme ?";
domandeSingola[1] = "In piano riferito a coordinate cartesiane ortogonali, l'equazione \\( x+y^{2}-4y+3=0 \\) rappresenta...";
domandeSingola[2] = "Si considerino i seguenti sottoinsiemi dell’insieme  \\( Z \\)  dei numeri interi:</br></br>" + "\\[ A= x :x \\in N, x<4  \\]" + "\\[ B= y :y  \\in Z, y^{2}=1  \\]" + " \\[ C= s :s \\in N, s \v è \v pari \\]" + "L’insieme  \\(  \\left( A \\cap C \\right)  \\cup B \\)  è uguale a:";
domandeSingola[3] = "Vogliamo scegliere 2 persone tra 5 donne e 6 uomini per un importante incarico.</br>In quanti modi lo possiamo fare, se vogliamo che ci sia almeno una donna?";
domandeSingola[4] = "Quanti numeri posso scrivere utilizzando una ed una sola volta ogni cifra tra le cifre 8, 2, 4, 5, 9, se in ultima posizione ci deve essere un 8 oppure un 9?";
domandeSingola[5] = "Un negozio accetta pagamenti con le carte di credito di tipo A o di tipo B. Un 24% dei clienti ha una carta di tipo A, il 61% una carta di tipo B, l'11%  ha entrambe i tipi di carte. Che percentuale di clienti ha una carta accettata dal negozio?";
domandeSingola[6] = "L’equazione  \\( 2x^{2}-ax+a=0 \\) , al variare del parametro reale a...";
domandeSingola[7] = "Nel piano cartesiano, i punti  \\(  \\left( x, y \\right)  \\)  che verificano le condizioni  \\(  \\left( x+y \\right) ^{2}=1 \\) ,  \\( x^{2}+y^{2}=1 \\)  e  \\( y \\geq 0 \\)  sono:";
domandeSingola[8] = "La disequazione  \\(  \\vert log_{\\frac{1}{10}}x \\vert < 1 \\)  ha come soluzione:";
domandeSingola[9] = "Un gatto e mezzo mangiano un topo e mezzo in un minuto e mezzo. Quanti gatti servono per mangiare 60 topi in 30 minuti?";
var risposteSingola = [
    ["92 minuti",
        "72 minuti",
        "80 minuti",
        "Due ore e mezzo",
        "Un'ora"],

    ["Un’iperbole di centro C (-3; 0)",
        "Una funzione \\( y=f \\left( x \\right) \\) simmetrica rispetto all’asse X",
        "Una funzione \\( y=f \\left( x \\right) \\) definita per ogni valore di X",
        "Una funzione \\( y=f \\left( x \\right) \\) simmetrica rispetto alla retta \\( x=1 \\)",
        "Una parabola di vertice V (1; 2)"],

    ["\\( -1, 0, 1, 2 \\)",
        "\\( -1, 1 \\)",
        "\\( -1, 0, 2, 3 \\)",
        "\\( Insieme vuoto  \\left(  \\varnothing  \\right)  \\)",
        "\\( 1 \\)"],

    ["50",
        "40",
        "30",
        "55",
        "15"],

    ["48",
        "24",
        "26",
        "10",
        "7"],

    ["85%",
        "50%",
        "74%",
        "13%",
        "96%"
    ],

    ["Ha sempre soluzioni reali",
        "Ha soluzioni reali se e solo se \\( a \\geq 16 \\)",
        "Ha soluzioni reali se e solo se \\( a \\geq 0 \\)",
        "Ha soluzioni reali se e solo se \\( a \\geq 8 \\) oppure \\( a \\leq 0 \\)",
        "Ha soluzioni reali se e solo se  \\( a<0 \\)"
    ],

    ["Infiniti",
        "Nessuno",
        "2",
        "3",
        "4"],

    ["Tutti gli  \\( x \\)  tali che  \\( 10 < x \\)",
        "\\( \\frac{1}{10} < x < 10 \\)",
        "\\( x < \\frac{1}{10} \\)  e tutti gli altri  \\( x \\)  tali che  \\( x > 10 \\)",
        "Nessun valore di  \\( x \\)",
        "\\( \\frac{1}{10} < x \\)"
    ],
    ["20",
        "30",
        "3",
        "2",
        "4"
    ]
];
corretteSingola = [1, 4, 0, 1, 0, 2, 3, 3, 1, 2];
domandeMultipla[0] = "Quali dei seguenti grafici sono associati ad una funzione pari?";
domandeMultipla[1] = "Un esagono regolare è stato circoscritto ad una circonferenza di raggio pari a 2 cm.</br>Determinare quali dei seguenti valori rappresentano la distanza tra i due vertici V<sub>1</sub> e V<sub>2</sub> dell'esagono (Selezionare due risposte).<img src='materiale-test-caravano/multipla-2/esagono-circ.png' alt='Figura' height='400px' width='450px'></br>";
domandeMultipla[2] = "Di una famiglia, si sa che:</br><ul><li>Almeno un maschio non è celibe</li><li>Tutti i laureati sono celibi</li><li>Non è vero che almeno un maschio non è maggiorenne</li></ul>Solamente due delle seguenti proposizioni sono deducibili dalle premesse. Quali?";
domandeMultipla[3] = "L’equazione nell’incognita <u>razionale</u>  \\( x \\) </br> \\[  \\left( 4x^{2}-36 \\right)  \\left( x^{3}-9 \\right) =0 \\] </br>ha le seguenti soluzioni (selezionare il numero di risposte ritenuto opportuno):";
domandeMultipla[4] = "Dal punto A, Aldo vede il vertice V di un palo verticale sotto un angolo di 30&deg;. </br>Se Aldo si avvicina di 5 m al palo, spostandosi quindi nel punto B, l’angolo diventa di 60&deg;.</br>Quali delle seguenti espressioni rappresenta l’altezza del palo?</br><img src='materiale-test-caravano/multipla-5/palo.gif' alt='Figura'></br>Quali valori, tra i seguenti, indicano l'altezza del palo?";
domandeMultipla[5] = "Sia  \\(  \\alpha  \\)  un angolo compreso tra  \\( 0 \\)  e  \\(  \\pi  \\). Allora, le soluzioni dell’equazione</br>\\[ tan \\left( 2 \\alpha  \\right) =-tan \\left( \\frac{ \\pi }{3} \\right)  \\]</br>sono rappresentate da:";
domandeMultipla[6] = "Siano  \\(  \\alpha ,  \\beta ,  \\gamma  \\)  gli angoli interni di un triangolo. Se si verificano</br>\\[ tan \\ \\alpha =\\frac{1}{2}, tan \\ \\beta =\\frac{3}{2} \\]</br>Allora:";
domandeMultipla[7] = "Al variare dell’indeterminata  \\( x \\), la seguente equazione:</br>\\[ \\sqrt[]{4 \\left( x-2 \\right) ^{2}} \\]</br>Assume i valori:";
domandeMultipla[8] = "Il seguente grafico rappresenta una funzione sinusoidale avente periodo pari a  \\(  \\pi  \\).</br><img src='materiale-test-caravano/multipla-9/grafico.gif' alt='Grafico'></br>Quali equazioni, tra le seguenti, ne indicano il comportamento?";
domandeMultipla[9] = "Per quali valori del parametro reale  \\( a \\), le equazioni:</br></br>\\[ x^{3}+ax+2=0 \\]</br>e</br>\\[ x^{3}+x+2a=0 \\]</br>Hanno almeno una radice reale in comune?";
var risposteMultipla = [
    ["<img src='materiale-test-caravano/multipla-1/g1.png' alt='Grafico 1'>",
        "<img src='materiale-test-caravano/multipla-1/g2.png' alt='Grafico 2'>",
        "<img src='materiale-test-caravano/multipla-1/g3.png' alt='Grafico 3'>",
        "<img src='materiale-test-caravano/multipla-1/g4.png' alt='Grafico 4'>",
        "<img src='materiale-test-caravano/multipla-1/g5.png' alt='Grafico 5'>"],

    ["\\( \\sqrt[]{\\frac{16}{3}} \\)",
        "\\( \\frac{4\\sqrt[]{3}}{3} \\)",
        "\\( \\sqrt[]{\\frac{4}{3}} \\)",
        "\\( \\frac{2\\sqrt[]{3}}{3} \\)",
        "\\( \\sqrt[]{\\frac{8}{3}} \\)"
    ],

    ["Nessun maggiorenne non è coniugato",
        "Tutti i celibi sono laureati",
        "Almeno un maggiorenne è coniugato",
        "Almeno un celibe non è maggiorenne",
        "Almeno un laureato non è coniugato"
    ],

    ["\\( -3 \\)",
        "\\( -\\sqrt[3]{9} \\)",
        "\\( 3 \\)",
        "\\( \\sqrt[3]{9} \\)",
        "\\( \\frac{3}{2} \\)"
    ],

    ["\\( \\frac{5\\sqrt[]{3}}{2}m \\)",
        "\\( 10\\sqrt[]{3} m \\)",
        "\\( 10 \\times sin \\left( \\frac{ \\pi }{3} \\right) m \\)",
        "\\( \\frac{10\\sqrt[]{3}}{2}m \\)",
        "\\( \\frac{10  \\times  tan \\left( \\frac{ \\pi }{3} \\right) }{4}m \\) "
    ],

    ["\\( \\frac{ \\pi }{3} \\)",
        "\\( \\frac{ \\pi }{6} \\)",
        "\\( \\frac{5}{3} \\pi  \\)",
        "\\( \\frac{5}{6} \\pi  \\)",
        "\\( \\frac{4}{3} \\pi  \\)",
    ],

    ["\\( tan \\ \\gamma =2 \\)",
        "\\(  \\alpha  \\ e \\  \\beta  \\) sono angoli acuti",
        "\\( tan \\ \\gamma =-8 \\)",
        "\\(  \\gamma  \\)  è un angolo retto",
        "\\( tan \\ \\gamma >0 \\)"
    ],

    ["\\( 2x-4 \\)",
        "\\( 4x-8 \\)",
        "\\( 8-4x \\)",
        "\\( 4-2x \\)",
        "\\( 4x+8 \\)"
    ],

    ["\\( y=\\frac{sin \\left( 2x \\right) }{2} \\)",
        "\\( y=cos \\left( 2x \\right)  \\)",
        "\\( y=\\frac{1}{2}sin \\left( 4x \\right)  \\)",
        "\\( y=sin \\left( x \\right) cos \\left( x \\right)  \\)",
        "\\( y=\\frac{1}{2}sin \\left( 3x \\right)  \\)"
    ],

    ["\\( a=-1 \\)",
        "\\( a=1 \\)",
        "\\( a=-4 \\)",
        "\\( a=-5 \\)",
        "\\( a=4 \\)"
    ]
];
corretteMultipla = ["FFVFV", "VVFFF", "FFVFV", "VFVFF", "VFFFV", "VFFVF", "FVVFF", "VFFVF", "VFFVF", "FVFVF"];
domandeAssociazione[0] = "Associa i seguenti valori al numero di combinazioni possibili per i 5 eventi di seguito descritti. (Uno degli eventi non ha corrispondenza)</br>NB: Per la risoluzione di questo quesito, è concesso l’utilizzo della calcolatrice.<ol><li>Modi in cui poter scegliere 5 numeri dal sacchetto della tombola (90 numeri complessivi)</li><li>Modi in cui scegliere esattamente una donna in un gruppo di 5 donne e 6 uomini</li><li>Modi in cui scegliere esattamente due donne in un gruppo di 5 donne e 6 uomini</li><li>Modi in cui formare il podio (primi 3 classificati) di una gara con 30 partecipanti</li><li>Modi in cui scegliere 4 spezie in una scatola contenente 9 spezie</li></ol>";
domandeAssociazione[1] = "Completare correttamente le seguenti definizioni.</br>(Una delle definizioni non ha corrispondenza)<ol><li>Per tre punti complanari e non allineati passa una ed una sola...</li><li>Per due punti complanari passa una ed una sola...</li><li>Per quattro punti non allineati, di cui 3 complanari, passa una ed una sola...</li><li>Due angoli, la cui somma è pari ad un angolo retto si dicono...</li><li>Due angoli, la cui somma è pari ad un angolo giro si dicono...</li></ol>";
domandeAssociazione[2] = "Sia  \\(  \\alpha  \\)  un angolo compreso tra  \\( 0 \\)  e  \\( \\frac{ \\pi }{2} \\), inclusi</br>Associare le seguenti relazioni alla corretta corrispondenza. Una relazione non ha corrispondenza)<ol><li>\\( sin \\alpha = ? \\)</li><li>\\( cos \\alpha = ? \\)</li><li>\\( tan \\left( - \\alpha  \\right) = ? \\)</li><li>\\( sin \\alpha +cos \\alpha = ? \\)</li><li>\\( cot \\alpha = ? \\) </li></ol>";
domandeAssociazione[3] = "Dato un quadrato di lato  \\( l \\) , indicare, al variare del lato, la dimensione della diagonale.</br>(È presente un valore senza corrispondenza).</br>NB: Per la risoluzione del quesito, (come di consueto) <u>NON</u> è consentito l’utilizzo della calcolatrice.<ol><li>\\( 3l=2 \\)</li><li>\\( 5l=5 \\)</li><li>\\( 45l=9 \\)</li><li>\\( l^{2}=400 \\)</li><li>\\( l^{10}=1024 \\) </li></ol>";
domandeAssociazione[4] = "Associare ad ogni figura solida di seguito elencata, il rispettivo volume, sulla base delle caratteristiche dimensionali indicate. </br>(Un valore non ha corrispondenza).<ol><li>Cilindro avente raggio di base pari a 5 m ed altezza pari a 12 m</li><li>Prisma retto avente area di base pari a 7 m ed altezza pari alla metà del quadrato della sua area di base</li><li>Cubo avente lato pari a 3 m</li><li>Cono avente raggio di base pari a 3 m ed altezza pari a 8 m</li><li>Sfera avente raggio pari a 2 m</li></ol>";
var risposteAssociazione = [
    ["24360",
        "10",
        "30",
        "126"
    ],

    ["Sfera",
        "Circonferenza",
        "Complementari",
        "Esplementari"
    ],

    ["\\( cos \\left( \\frac{ \\pi }{2}- \\alpha  \\right)  \\)",
        "\\(  \\geq 1 \\)",
        "\\( sin \\left( \\frac{ \\pi }{2}- \\alpha  \\right)  \\)",
        "\\( -tan \\alpha  \\)"
    ],

    ["\\( \\frac{\\sqrt[]{2}}{5} \\)",
        "\\( \\frac{\\sqrt[]{8}}{3} \\)",
        "\\( \\sqrt[]{800} \\)",
        "\\( \\sqrt[]{8} \\)",
    ],

    ["\\( \\frac{32}{3} \\pi  m^{3} \\)",
        "\\( 171,5 m^{3} \\)",
        "\\( 300  \\pi  m^{3} \\)",
        "\\( 72  \\pi  m^{3} \\)"
    ]
];
corretteAssociazione = ["4325", "3145", "1423", "3145", "5214"];