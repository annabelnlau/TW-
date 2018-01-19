let allElements = document.getElementsByTagName('*')

let triggers = ['sexual assault', 'rape', 'sexual abuse', 'child abuse', 'pedophilia', 'pedophile', 
'suicide', 'suicidal', 'anorexia', 'bulimia', 'eating disorder', 'self-harm', 'self harm']

let triggersCaseInsensitive = triggers.map(trigger => trigger.toLowerCase())

let foundTrigger = false


for (let i = 0; i < allElements.length; i++) {
  let currentElement = allElements[i]
  let children = currentElement.childNodes
  for (let j = 0; j < children.length; j++) {
    let child = children[j]

    if (child.nodeType === 3) {
      let text = child.nodeValue
      if (triggers.indexOf(text.toLowerCase()) > -1) {
        foundTrigger = true
        break
      }
    }
  }


}



if (foundTrigger) {
  let triggerAlert = confirm('Hey! There may be some potentially triggering content on this page. Click OK to continue or Cancel to go back.')
  if (triggerAlert) {
    console.log('proceeding')
  } else {
    window.history.back();
  }
}