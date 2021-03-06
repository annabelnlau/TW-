const allElements = document.getElementsByTagName('*')

let triggers = ['sexual assault', 'sexually assaulting', 'sexually assaulted', 'rape', 'sexual violence', 'sexual abuse', 'sexual misconduct', 'child abuse', 'pedophilia', 'pedophile', 'suicide', 'suicidal', 'anorexia', 'bulimia', 'eating disorder', 'self-harm', 'domestic abuse', 'domestic violence']

let triggersCI = triggers.map(trigger => trigger.toLowerCase()) //case insensitive

let foundTrigger = false

let index

let title = document.getElementsByTagName('title')[0].innerText.toString().toLowerCase()

chrome.storage.local.get('newWord', function (words) {
  var newWord = words.newWord.toLowerCase()
  triggersCI.push(newWord)
  for (let m = 0; m < triggersCI.length; m++) {
    if (title.includes(triggersCI[m])) {
      foundTrigger = true
      index = m
      break
    } else {
      for (let i = 0; i < allElements.length; i++) {
        let currentElement = allElements[i]
        let children = currentElement.childNodes
        for (let j = 0; j < children.length; j++) {
          let child = children[j]
          let text = child.nodeValue
          if (triggersCI.indexOf(text) > -1) {
            foundTrigger = true
            index = triggers.indexOf(text)
            break
          }
        }
      }
    }
  }
  if (foundTrigger) {
    let triggerAlert = confirm('TW: ' + triggersCI[index].toUpperCase() + '\n\n' +
      'Hey! There may be some potentially triggering content on this page.' + '\n' +
      'Click OK to continue or Cancel to go back.')
    if (triggerAlert) {
      console.log('proceeding')
    } else {
      window.history.back();
    }
  }
})
