let allElements = document.getElementsByTagName('*')
let triggers = ['sexual assault', 'rape']
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
  alert('Trigger Warning')
}
