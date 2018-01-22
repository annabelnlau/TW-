//IN PROGRESS

function save_options() {
    let newWord = document.getElementById('newWord').value;
    chrome.storage.local.set({
      newWord: newWord
    }, function() {
      let status = document.getElementById('status');
      status.textContent = 'Your new word has been saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }

  function restore_options() {
    chrome.storage.local.get({
      newWord: newWord,
    }, function(words) {
      document.getElementById('newWord').value = words.newWord;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);

