# Digitale Datenerfassung und Visualisierung von Ergebnissen eines Zufallsexperiments

Diese Webanwendung dient der digitalen Erfassung und gemeinsamen Visualisierung von Gruppenergebnissen bei einem unterrichtlichen Zufallsexperiment mit zwei Kategorien.

## Bestandteile der Anwendung

Die Anwendung besteht aus drei Dateien:

- `index.html` – Eingabeseite für die Gruppen
- `dashboard.html` – Auswertungsseite zur gemeinsamen Anzeige der Ergebnisse
- `firebase-config.js` – Verbindungsdatei zur Firebase Realtime Database

## Funktionen

### Eingabeseite
Auf der Eingabeseite geben die Gruppen ihr Passwort, ihre Gruppennummer sowie die Anzahl der gezogenen blauen und gelben Würfel ein. Aus den beiden Eingabewerten wird automatisch die Gesamtzahl der Ziehungen berechnet und angezeigt. Nach dem Absenden werden die Daten in der Firebase Realtime Database gespeichert.

### Auswertungsseite
Die Auswertungsseite lädt die gespeicherten Gruppenergebnisse zu einem gewählten Passwort und stellt diese in zwei Formen dar:

- als Säulendiagramm mit zwei Balken
- als tabellarische Übersicht der einzelnen Gruppenergebnisse

Zusätzlich werden zwei Kennwerte angezeigt:

- Anzahl der Gruppen
- Gesamtzahl aller eingetragenen Ziehungen

## Datenstruktur

Für jede Gruppe werden folgende Informationen gespeichert:

- Passwort der Erhebung
- Gruppennummer
- Anzahl der Ziehungen in Kategorie 1
- Anzahl der Ziehungen in Kategorie 2
- Gesamtzahl der Ziehungen
- Zeitstempel der Speicherung

Die Daten werden unter dem jeweiligen Passwort in der Realtime Database gruppiert abgelegt.

## Visualisierung

Das Säulendiagramm zeigt die aufsummierten Ergebnisse aller Gruppen in zwei Balken:

- erster Balken: blau
- zweiter Balken: gelb

Die Höhe der Balken wird automatisch an die größte vorhandene Gesamthäufigkeit angepasst.

## Technische Grundlage

Die Anwendung ist als statische Webanwendung auf HTML-, CSS- und JavaScript-Basis umgesetzt. Die Datenspeicherung und Synchronisation erfolgt über Firebase Realtime Database. Änderungen an den eingegebenen Gruppendaten werden auf der Auswertungsseite in Echtzeit übernommen.
