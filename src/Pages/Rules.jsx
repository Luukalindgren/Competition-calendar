import React from "react";
import Footer from "../components/nav/Footer.jsx";
import "../App.css";

const Rules = () => {
  return (
    <div className="Main">
      <div className="Main-item">
        <h2>Säännöt Lyhyesti</h2>
        <p>
          Frisbeegolfissa on tarkoitus kiertää rata läpi mahdollisimman vähin
          heitoin. Peli alkaa ensimmäisen väylän avauspaikalta ja jatkuu aina
          viimeisen väylän väylämaaliin saakka. Väylämaalina käytetään
          useimmiten tarkoitusta varten tehtyä maalikoria, mutta myös muita
          esinemaaleja (kuten puita ja pylväitä) voidaan käyttää.
        </p>
      </div>
      <div className="Main-item">
        <h2>Pelin kulku</h2>
        <p>
          Peli alkaa ensimmäisen väylän avauspaikalta, eli tiiltä. Ryhmän
          jäsenet heittävät vuorollaan jonka jälkeen siirrytään kiekkojen
          luokse. Seuraava heitto lähtee siitä mihin ensimmäinen kiekko on
          pysähtynyt. Kauimpana korista oleva pelaaja heittää ensimmäisenä,
          muiden on hyvä pysyä heittävän pelaajan takana. Muista laskea
          heittosi. Heittämistä jatketaan kunnes kiekko lepää maalikorissa.
          Kiekon tulee olla korin sisällä eikä esim. korin katolla. Väylän
          jälkeen siirrytään seuraavan väylän avauspaikalle ja käytetyt heitot
          merkitään ylös. Radan vähimmillä heitoilla suorittanut on voittaja.
          Pelaamisen vaikeuttamiseksi radoilla on puita, pensaita ja muita
          luonnollisia esteitä. Nämä esteet ovat oleellinen osa lajia, eikä
          niitä saa siirtää tai poistaa – saati vahingoittaa – kierroksen
          aikana. Joillakin radoilla on myös pelikelvottomia alueita, eli ns. OB
          (Out of Bounds) -alueita. Nämä on usein merkitty kepeillä tai
          naruilla. Usein myös jotkut polut, tiet ja ojat muodostavat OB-rajan.
          Mikäli heittosi päätyy tällaiselle pelikelvottomalle alueelle,
          lisätään tulokseesi yksi rangaistusheitto. Peliä jatketaan siitä,
          mistä kohtaa heittosi meni pelikelvottomalle alueelle. Voit myös
          halutessasi heittää uudelleen samasta paikasta, kuin mistä heitit
          edellisen heittosi, mutta edelleen rangaistuspisteen kera.
        </p>
      </div>
      <div className="Main-item">
        <a href="https://frisbeegolfliitto.fi/frisbeegolfin-virallinen-saantokirja-ja-kilpailuopas/">
          Frisbeegolfin virallinen sääntökirja ja kilpailuopas
        </a>
      </div>
      <Footer/>
    </div>
  );
};

export default Rules;
