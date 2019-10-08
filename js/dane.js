/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var dane = [
    {
        rok: "2019",
        miesiac: "maj",
        czynsz: "700",
        woda: "1886",
        gaz: "287"
    },
    {
        rok: "2019",
        miesiac: "czerwiec",
        czynsz: "700",
        woda: "1891",
        gaz: "292"
    },
    {
        rok: "2019",
        miesiac: "lipiec",
        czynsz: "700",
        woda: "1899",
        gaz: "300"
    },
];

function wyswietlanieDanych(dane) {

    // tworzy listę z miesiącami

    var lista = document.getElementById("lista");
    var ilosc = dane.length;
    for (i = 0; i < ilosc; i++) {
        var x = document.createElement("li");
        x.className = "list-group-item";
        var y = document.createElement("div");
        y.className = "alert alert-info";
        y.role = "alert";
        var napis = document.createTextNode(dane[i].rok + "/" + dane[i].miesiac);
        y.appendChild(napis);
        x.appendChild(y);
        lista.appendChild(x);

        // koniec tworzenia listy z miesiącami
    }

    // najechanie na button
    document.getElementsByClassName("alert alert-info").onclick = function () {
        myFunction()
    };

    function myFunction() {
      alert( 'Hello, world!' );
    }

}
