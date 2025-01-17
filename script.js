document.addEventListener("DOMContentLoaded", function() {
    fetch('devlog.json')
      .then(response => response.json())
      .then(data => {
        const devlogList = document.getElementById('devlog-list');
        data.forEach(entry => {
          const row = document.createElement('tr');
          
          const dateCell = document.createElement('td');
          dateCell.textContent = entry.date;
          row.appendChild(dateCell);
          
          const logEntryCell = document.createElement('td');
          logEntryCell.textContent = entry.logEntry;
          row.appendChild(logEntryCell);
          
          const authorCell = document.createElement('td');
          authorCell.textContent = entry.author;
          row.appendChild(authorCell);
  
          const versionCell = document.createElement('td');
          versionCell.textContent = entry.modVersion;
          row.appendChild(versionCell);
          
          devlogList.appendChild(row);
        });
      })
      .catch(error => console.error('Error loading devlog:', error));
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    fetch('patchnotes.json')
      .then(response => response.json())
      .then(data => {
        const patchnotesList = document.getElementById('patchnotes-list');
        data.forEach(patch => {
          const listItem = document.createElement('li');
          
          const version = document.createElement('h3');
          version.textContent = `Version ${patch.version} - ${patch.date}`;
          listItem.appendChild(version);
          
          const notesList = document.createElement('ul');
          patch.notes.forEach(note => {
            const noteItem = document.createElement('li');
            noteItem.textContent = note;
            notesList.appendChild(noteItem);
          });
          
          listItem.appendChild(notesList);
          patchnotesList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error loading patch notes:', error));
  });
  