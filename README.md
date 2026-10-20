#### Testdatei von NM
# testset
# Das ist ein Test zum Reinarbeiten und Ausprobieren

## Ziel dieser Datei ist es, das Arbeiten mit Softwareprogrammen (Git, VSC u.a.) und entsprechenden Online-Plattformen (z.B. Git-hub) kennenzulernen und sich so einzuarbeiten, dass die Umsetzung der Modulaufgabe(n) gelingt.

## Der Anfang besteht darin, die folgende Anleitung zu lesen, zu verstehen und auszuprobieren: https://bit.ly/3WBRHAg

## Dann ist es sinnvoll, sich relevantes Vokabular anzueignen:

#### version control—Versionsverwaltung
#### version control system (VCS)—Versionsverwaltungssystem
#### repository (repo)—Projektarchiv mit Versionshistorie
#### local repository—Lokales Repository
#### remote repository—Entferntes Repository
#### working tree—Arbeitsverzeichnis
#### staging area—Bereich vorgemerkter Änderungen
#### commit—Gespeicherter Versionsstand
#### commit—message	Commit-Nachricht
#### history—Versionshistorie
#### snapshot—Momentaufnahme

## Und dann gibt es ja noch Git-Befehle:

##### git init	   —Neues lokales Repository erstellen
##### git clone	   —Repository kopieren
##### git status	 —Status der Änderungen anzeigen
##### git add	    —Änderungen für einen Commit vormerken
##### git commit	—Vorgemerkte Änderungen speichern
#####  git log	   —Commit-Historie anzeigen
#####  git diff	   —Änderungen vergleichen
#####  git show	  —Details eines Commits anzeigen
#####  git branch	 —Branches anzeigen oder verwalten
#####  git switch	 —Branch wechseln oder erstellen
#####  git checkout —Historischer, vielseitiger Befehl zum Wechseln bzw. Wiederherstellen
#####  git merge	   —Branches zusammenführen
#####  git rebase	 —Commit-Reihe auf eine neue Basis setzen
#####  git fetch	—Änderungen vom Remote abrufen, ohne sie direkt zu integrieren
#####  git pull	   —Remote-Änderungen abrufen und integrieren
#####  git push	   —Lokale Commits zum Remote übertragen
#####  git remote	 —Remote-Verbindungen verwalten
#####  git stash	  —Änderungen vorübergehend beiseitelegen
#####  git restore	—Dateien wiederherstellen bzw. Änderungen verwerfen
#####  git reset	  —HEAD und gegebenenfalls den Index zurücksetzen
#####  git revert	 —Einen früheren Commit durch einen Gegen-Commit rückgängig machen
#####  git rm	     —Dateien aus dem Arbeitsverzeichnis und der Versionsverwaltung entfernen
#####  git mv	     —Datei umbenennen oder verschieben
#####  git tag	     —Versionsmarkierungen verwalten
#####  git blame	  —Anzeigen, welcher Commit einzelne Zeilen zuletzt geändert hat
#####  git clean	   —Nicht versionierte Dateien entfernen
#####  git config	 —Git-Einstellungen konfigurieren

# Aber was ist Git überhaupt und warum sollte es verwendet werden?

#### Git ist ein sog. Versionsverwaltungssystem für Dateien und Code. Hier werden Änderungen in der Bearbeitung von Code gespeichert, sodass jede Version des Quellcodes bzw. der Codeblöcke nachvollziehbar bleibt. Anstelle immer wieder ein neues Doc abzuspeichern und es in die "aktuellste" Version umzubenennen, hat man einfach allle Versionen gespeichert und kann in allen jeweils arbeiten, Fehler beheben und/oder Inhalte optimieren ohne sich zu verzetteln. Git = eine Art Trackingtool für die eigenen Arbeitsetappen.


# Warum ist Git sinnvoll?

##### Änderungen verfolgen: Immer ersichtlich, was sich verändert hat.
##### Sicherheit: Frühere Versionen sind jederzeit verfügbar und können als Grundgerüst für Optimierungen dienen.
##### Branches: Funktionen können getestet/ausprobiert werden, ohne dass der Hauptstand zu verändert und/oder verloren geht.
##### Zusammenarbeit: Mehrere Personen können am selben Projekt arbeiten oder einander hineinzupfuschen.
##### Kurz gesagt: Git hilft, Änderungen zu organisieren und den Überblick über ein Projekt zu behalten.

# Was sind Branches, wie werden diese genutzt und was passiert bei sog. Merge-Konflikten?

##### Branches sind die einzelnen Entwicklungszweige in Git. In jedem Branche (Zweig) können Änderungen unabhängig vom Hauptzweig (main) bearbeitet und getestet werden.
##### Ein neuer Branch wird erstellt, um neue Funktionen auszuprobieren sowie Tests und Nachbesserungen durchzuführen. Wenn die Änderungen fertig und getestet sind, führt man sie per Merge mit main als finale bzw. aktuellste Version zusammen. Dabei können sog. Merge-Konflikte entstehen. Das passiert wenn zwei ohner mehr einzelne Branches an derselben Stelle einer Datei Unterschiede aufweisen. Git kann dann nicht automatisch entscheiden, welche Änderung übernommen werden soll. Die Stelle muss also manuell angepasst, also vereinheitlicht werden auf allen relevanten Branches. Beispielsweise kann es auch nur ein Typo sein: Angenommen es sind drei Branches gegeben mit ein und demselben Text. In Branch 1+2 steht in einer der Zeilen das Wort "nämlich". In Branch 3 steht "nähmlich". Das alleine löst einen Merge-Konflikt aus.


# Git + IntelliJ/PyCharm/VS Code = Local und Remote Repositories

##### IntelliJ und PySharm sind Entwicklungsprogramme. Ein anderes bekanntes ist ViSual Code. So ein Program wird benötigt, wenn von unterschiedlichen Standorten (zB aufgrund einer Gruppenarbeit) an einem Projekt gearbeitet wird. Lokal Repositories sind dann wie der Name sagt lokal auf dem eigenen Computer erstell und bearbeitbar. Remote repositories hingegen remote unabhängig von der Vom Endgerät. 


# Welche nützlichen Git-Tools und Plattformen gibt es und... wofür eigentlich?

### Wichtige Tools sind u.a.:
###### GitHub: Speichert Repositorys online und ermöglicht die Zusammenarbeit mit anderen.
###### VS Code: Ein Editor, in dem Dateien wie README.md bearbeitet werden können. Git ist darin integriert!
###### GitHub Desktop: Ermöglicht die Nutzung von Git über eine grafische Oberfläche, ohne Befehle im Terminal eingeben zu müssen.
###### Git Bash / Terminal:	Hier werden Git-Befehle eingegeben, z.B. zum Erstellen von Branches oder Speichern von Änderungen. Auf dem Mac nutzt du normalerweise das Terminal.
###### GitKraken: Stellt Branches, Commits und Merges grafisch dar und erleichtert die Verwaltung komplexer Repositories.
###### Homebrew: Installiert und aktualisiert Programme auf dem Mac, bspw. Git. Es ist selbst kein Git-Tool.

# Wichtig: Git ≠ VS Code/IntelliJ/PyCharm etc.

## Git und Programme wie VS Code, IntelliJ und PyCharm haben unterschiedliche Aufgaben, arbeiten aber zusammen:

##### Git: Ein Versionsverwaltungssystem. Es dokumentiert Dateiänderungen, ermöglicht verschiedene Entwicklungszweige (Branches) und hilft, ältere Versionen wiederherzustellen.
##### VS Code: Ein Code-Editor, in dem Dateien erstellt, geschrieben und bearbeitet werden
##### IntelliJ IDEA: Eine Entwicklungsumgebung (IDE), die besonders für Java geeignet ist
##### PyCharm: Eine Entwicklungsumgebung (IDE=Integrated Development Environment), die speziell für Python entwickelt wurde

# Klonen in Git 
##### Klonen (git clone) bedeutet, eine lokale Kopie eines Repositorys von GitHub auf einen Computer herunterzuladen.
##### >>> GitHub: Repository liegt online. Lokaler Computer: Durch das Klonen wird eine Kopie der Dateien inklusive der Git-Versionsgeschichte erstellt
##### Verbindung: Git merkt sich, von welchem Online-Repository geklont wurde.
##### Synchronisierung: Mit "git pull": Änderungen von GitHub werden gezogen. Mit "git push": Letzte lokale Änderungen werden zu GitHub hochgeladen
Beispiel: Es ist eine README auf GitHub erstellt. Wenn das Repository auf einen Mac geklont wird, kann die README lokal in VS Code bearbeit und die Änderungen anschließend wieder zu GitHub übertragen werden. >>>> Klonen verbindet die lokale Arbeit auf einem Computer mit dem Online-Repository auf GitHub.

#
## ++++ Handout ENDE ++++
