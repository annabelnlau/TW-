// Saves options to chrome.storage.sync.
function save_options() {
    let newWord = document.getElementById('newWord').value;
    console.log(newWord, "new word!")
    chrome.storage.sync.set({
      newWord: newWord
    }, function() {
      // Update status to let user know options were saved.
      let status = document.getElementById('status');
      status.textContent = 'Your new word has been saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
console.log(newWord, "new word!")


  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
      newWord: newWord,
    }, function(words) {
      document.getElementById('newWord').value = words.newWord;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);

