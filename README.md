# Note Application

### This application is written in notejs to add / remove / list / read note from a file. It use the node packages:

1. chalk
2. yargs

### Prepare the application

1. Clone the git repo (git clone https://github.com/plezidevops/note-app.git)
2. cd to the application folder
3. run `npm install`

### Run the application

1. Adding a note
```
node add --title="<<note title>>" --body="<<note description>>"\
```

2. Remove a note
```
node remove --title="<<note title>>"
```

3. List the notes
```
node list
```

4. Read a note
```
node read --title=<<note title>>
```