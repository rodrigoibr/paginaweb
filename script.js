document.addEventListener("DOMContentLoaded", function(){
  const homeLink = document.getElementById("home-link");
  const playersLink = document.getElementById("players-link");
  const historyLink = document.getElementById("history-link");
  const contentDiv = document.getElementById("content");
  const HistoriaDiv =document.getElementById("Historia")


  homeLink.addEventListener("click", function(event) {
    event.preventDefault();
    contentDiv.innerHTML = "<h2>Bienvenido AL FC Barcelona </h2><p>El futbol club Barcelona es uno de los equipos mas reconocidos a nivel mundial en el deporte de futbol, por que de del salieron grandes leyendas como Leonel Messi y Neymar jr <p>El equipo es de Barcelona, España y su estadio es el<b>Camp Nou</b><p>EL equpo cuenta con:<p><b>27</b> titulos de \"La Liga\"<p><b>5</b> Trofeos de La \"Liga de Champios\"<p><b>3</b> Trofeos de \"Mundial de Clubs FIFA\"<p><b>31</b>Trofeos de la \"Copa del Rey ";
    HistoriaDiv.innerHTML="<audio src=\"Himno.mp3\" controls autoplay></audio>"});

  playersLink.addEventListener("click", function(event) {
    event.preventDefault();
    contentDiv.innerHTML = ["<h1>Jugadores</h1><p><h2>Porteros</h2><p>Marc-André ter Stegen #1<p>Iñaki Peña #13<p>Ander astralaga #26<p>Diego kochen #31<p>Áron Yaakobishvili #36<p><h2>Defensas</h2><p>João Cancelo #2(Lateral)<p>Alejandro Balde #3(Lateral)<p>Ronald Araujo #4(Defensa cental)<p>Iñigo Martìnez #5(Defensa cental)<p>Andreas Christensen #15(Defensa central)<p>Marcos Alonso #17(Lateral)<p>Sergio Roberto #20(Lateral)<p>Jules Koundé #23(Defenza central)<p>Pau Cubarsí #33(Defensa central)<p>Hector Fort #39(Lateral)<p> Mikayil Faye #41<p><h2>Centrocampistas</h2>Gavi #6(Mediocentro)<p>Pedri #8(EXtremo)<p>Fermin López #16(Mediocentro)<p>Oriol Romeu #18(Medio centro defensivo)<p>Frekie de Jong #21(medioCentro)<p>Ilhay Gundogan #22(Mediocentro)<p>Ángel Alarcón #29(Extremo)<p>Marc Casadó #30(Mediocentro defensivo)<p>Aleix Garrido #34(Mediocentro)<p>Unai Hernández #35(mediocentro)<p>Pau Pirm #43(Mediocentro defencivo)<p><h2>Delanteros</h2><p>Ferran Torres #7(Mediapunta)<p>Robert Lewandowski #9(Delantero centro)<p>Raphinha #11(Extremo)<p>João Félix #14(Segundo delantero)<p>Vitor Roque #19(Delantero centro)<p>Lamine Yamal #27(Extremo)<p>Pau Victor #37(Delantero centro)<p>Marc Guiu #38(Delantero centro)"];
    HistoriaDiv.innerHTML="<h2>Director tecnico</h2><p>Xavi Hernandez"});
  historyLink.addEventListener("click", function(event) {
    event.preventDefault();
    contentDiv.innerHTML = "<h2>Historia</h2><p>El Fútbol Club Barcelona, conocido popularmente como Barça, fue fundado el 29 de noviembre de 18991. El empresario suizo Hans Gamper, conocido en Cataluña como Joan, es el fundador del club.<p> Durante sus primeras dos décadas, el Barça tuvo que convivir con otros clubes de la ciudad de Barcelona hasta convertirse en el equipo de referencia junto a su eterno rival, el RCD Español.<p> El club fue registrado oficialmente el 5 de enero de 1903. Desde su fundación, el Barça ha crecido hasta convertirse en una de las entidades deportivas más reconocidas y exitosas del mundo. Es importante mencionar que el Barça es una entidad polideportiva con sede en Barcelona, Cataluña, España.<p> A nivel institucional, es uno de los cuatro clubes profesionales de fútbol del país más reconocidos</p>";
    HistoriaDiv.innerHTML="<img src=\"historia.png\">"});
});
//<p></p>//
//<p><b></b></p>//
//#2//
