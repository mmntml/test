#### test von NM
# testset
# Das ist ein Testprojekt
## Ziel des Projekts ist es, das Arbeiten mit Softwareprogrammen kennenzulernen und sich so einzuarbeiten, dass die Umsetzung der Modulaufgabe(n) möglich wird.
## Der Anfang besteht darin, die folgende Anleitung zu lesen und zu verstehen und auszuprobieren: https://bit.ly/3WBRHAg
## Dann ist es sinnvoll, sich das relevante Vokabular anzueignen: 

version control	 Versionsverwaltung
version control system (VCS)	 Versionsverwaltungssystem
repository (repo)	 Projektarchiv mit Versionshistorie
local repository	Lokales Repository
remote repository	Entferntes Repository
working tree	Arbeitsverzeichnis
staging area	Bereich vorgemerkter Änderungen
commit	Gespeicherter Versionsstand
commit message	Commit-Nachricht
history	Versionshistorie
snapshot	Momentaufnahme

## Weitere wichtige Vocabs und Terms:

version control	Versionsverwaltung
version control system (VCS)	Versionsverwaltungssystem
repository (repo)	Projektarchiv mit Versionshistorie
local repository	Lokales Repository
remote repository	Entferntes Repository
working tree	Arbeitsverzeichnis
staging area	Bereich vorgemerkter Änderungen
commit	Gespeicherter Versionsstand
commit message	Commit-Nachricht
history	Versionshistorie
snapshot	Momentaufnahme

## Und dann gibt es ja noch Git-Befehle, schau:

Befehl	     Bedeutung
git init	   Neues lokales Repository erstellen
git clone	   Repository kopieren
git status	 Status der Änderungen anzeigen
git add	     Änderungen für einen Commit vormerken
git commit	 Vorgemerkte Änderungen speichern
git log	     Commit-Historie anzeigen
git diff	   Änderungen vergleichen
git show	   Details eines Commits anzeigen
git branch	 Branches anzeigen oder verwalten
git switch	 Branch wechseln oder erstellen
git checkout Historischer, vielseitiger Befehl zum Wechseln bzw. Wiederherstellen
git merge	   Branches zusammenführen
git rebase	 Commit-Reihe auf eine neue Basis setzen
git fetch	   Änderungen vom Remote abrufen, ohne sie direkt zu integrieren
git pull	   Remote-Änderungen abrufen und integrieren
git push	   Lokale Commits zum Remote übertragen
git remote	 Remote-Verbindungen verwalten
git stash	   Änderungen vorübergehend beiseitelegen
git restore	 Dateien wiederherstellen bzw. Änderungen verwerfen
git reset	   HEAD und gegebenenfalls den Index zurücksetzen
git revert	 Einen früheren Commit durch einen Gegen-Commit rückgängig machen
git rm	     Dateien aus dem Arbeitsverzeichnis und der Versionsverwaltung entfernen
git mv	     Datei umbenennen oder verschieben
git tag	     Versionsmarkierungen verwalten
git blame	   Anzeigen, welcher Commit einzelne Zeilen zuletzt geändert hat
git clean	   Nicht versionierte Dateien entfernen
git config	 Git-Einstellungen konfigurieren

# Aber was ist Git überhaupt und warum sollte es verwendet werden?
#### Git ist ein sog. Versionsverwaltungssystem für Dateien und Code. Hier werden Änderungen in der Bearbeitung von Code gespeichert, sodass jede Version des Quellcodes bzw. der Codeblöcke nachvollziehbar bleibt. Anstelle immer wieder ein neues Doc abzuspeichern und es in die "aktuellste" Version umzubenennen, hat man einfach allle Versionen gespeichert und kann in allen jeweils arbeiten, Fehler beheben und/oder Inhalte optimieren ohne sich zu verzetteln. Git = eine Art Trackingtool für die eigenen Arbeitsetappen.


# Warum sollte man Git verwenden?

##### Änderungen verfolgen: Immer ersichtlich, was sich verändert hat.
##### Sicherheit: Frühere Versionen sind jederzeit verfügbar und können als Grundgerüst für Optimierungen dienen.
##### Branches: Funktionen können getestet/ausprobiert werden, ohne dass der Hauptstand zu verändert und/oder verloren geht.
##### Zusammenarbeit: Mehrere Personen können am selben Projekt arbeiten oder einander hineinzupfuschen.
##### Kurz gesagt: Git hilft, Änderungen zu organisieren und den Überblick über ein Projekt zu behalten.

# Was sind Branches, wie werden diese genutzt und was passiert bei sog. Merge-Konflikten?

##### Branches sind die einzelnen Entwicklungszweige in Git. In jedem Branche (Zweig) können Änderungen unabhängig vom Hauptzweig (main) bearbeitet und getestet werden.
##### Einen neuen Branch erstellt man für neue Funktionen, Tests und Nachbesserungen. Wenn die Änderungen fertig und getestet sind, führt man sie per Merge mit main als finale bzw. aktuellste Version zusammen. Dabei können sog. Merge-Konflikte entstehen. Das passiert wenn zwei ohner mehr einzelne Branches an derselben Stelle einer Datei Unterschiede aufweisen. Git kann dann nicht automatisch entscheiden, welche Änderung übernommen werden soll. Die Stelle muss also manuell angepasst, also vereinheitlicht werden auf allen relevanten Branches. Beispielsweise kann es auch nur ein Typo sein: Drei Branches mit einem Text in einer der Zeilen. In 1+2 steht nämlich. In 3 steht nähmlich. Das alleine löst einen Mergekonflikt aus.


# So nutze ich Git mit IntelliJ/PyCharm: Local und Remote Repositories
##

# Welche nützlichen Git-Tools und Plattformen gibt es und wofür eigentlich ?
