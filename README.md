# 📊 Wahrscheinlichkeit – Datenerfassung im Unterricht

Dieses Projekt dient zur digitalen Erfassung und Auswertung von Zufallsexperimenten im Mathematikunterricht der Grundschule.

Schülerinnen und Schüler tragen ihre Ergebnisse (z. B. Würfelziehungen) über ein Eingabeformular ein.  
Die Daten werden in Echtzeit gespeichert und anschließend im Dashboard visualisiert.

---

## 🚀 Funktionen

### 🧑‍🎓 Eingabeseite (`index.html`)
- Eingabe von:
  - Passwort (Stundencode)
  - Gruppennummer (nur Zahlen erlaubt)
  - Anzahl gezogener Farben (z. B. blau / gelb)
- Automatische Berechnung der Gesamtanzahl
- Eingabefelder:
  - „0“ verschwindet beim Klicken
  - wird automatisch wieder gesetzt, wenn nichts eingegeben wird
- Speicherung der Daten in Firebase

---

### 📊 Dashboard (`dashboard.html`)
- Anzeige aller Gruppenergebnisse
- Automatische Aktualisierung (Realtime-Daten)
- Visualisierung:
  - Säulendiagramm (blau / gelb)
- Übersicht:
  - Anzahl der Gruppen
  - Gesamtanzahl der Ziehungen
- Sortierung der Gruppen nach Gruppennummer

---

### 🔥 Firebase-Anbindung (`firebase-config.js`)
- Verbindung zur Firebase Realtime Database
- Speicherung der Datenstruktur:

```
Stunde2/
  └── [lessonCode]/
       └── groups/
            └── [groupNumber]/
                 ├── counts
                 ├── total
                 ├── updatedAt
```

---

## 🛠️ Installation & Nutzung

1. Firebase-Projekt erstellen
2. Zugangsdaten in `firebase-config.js` eintragen  
3. Dateien hochladen (z. B. Firebase Hosting):
   - index.html
   - dashboard.html
4. Webseite öffnen:
   - Eingabeseite für Schüler
   - Dashboard für Lehrkraft

---

## ⚠️ Wichtige Hinweise

- Gruppennummern sind nur als Zahlen erlaubt
- Passwort dient zur Trennung verschiedener Unterrichtsstunden
- Daten werden überschrieben, wenn gleiche Gruppe erneut speichert
- Internetverbindung erforderlich

---

## 🧠 Didaktischer Einsatz

Das Tool unterstützt:
- handlungsorientierten Mathematikunterricht
- Arbeit mit Zufallsexperimenten
- Vergleich von Häufigkeiten
- Förderung mathematischer Argumentation

---

## 🔧 Erweiterungsmöglichkeiten

- Weitere Farben / Kategorien hinzufügen
- Diagramm erweitern (Prozentwerte)
- Export als CSV
- Mehrere Unterrichtseinheiten parallel verwalten

---

## 👩‍🏫 Autorin

Leonie Auer  
Lehramtsanwärterin (Primarstufe)

---

## 📄 Lizenz

Nur für schulische und private Nutzung gedacht.
