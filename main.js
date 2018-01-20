let allElements = document.getElementsByTagName('*')

let triggers = ['sexual assault', 'rape', 'sexual violence', 'sexual abuse', 'child abuse', 'pedophilia', 'pedophile',
  'suicide', 'suicidal', 'anorexia', 'bulimia', 'eating disorder', 'self-harm', 'self harm', 'domestic abuse', 'trigger warning']

let triggersCaseInsensitive = triggers.map(trigger => trigger.toLowerCase())

let foundTrigger = false

let index

// let elementsToHide = document.getElementsByTagName('*')

const hideElements = () => {
  for (let k = 0; k < elementsToHide.length; k++) {
    elementsToHide[k].style.visibility = 'hidden'
  }
}

// const displayElements = () => {
//   let elementsToHide = document.getElementsByTagName('*')
//   for (let l = 0; l < elementsToHide.length; l++) {
//     elementsToHide[l].style.visibility = 'visible'
//   }
// }

for (let i = 0; i < allElements.length; i++) {
  //console.log(allElements)
  let currentElement = allElements[i]
  //console.log(currentElement, "currentElement")
  let children = currentElement.childNodes
  //console.log(children, "CHILDREN")
  for (let j = 0; j < children.length; j++) {
    let child = children[j]
    //console.log(child, "CHILD")
    if (child.nodeType === 3) {
      let text = child.nodeValue
      //console.log(text, "TEXT")
      if (triggersCaseInsensitive.indexOf(text.toLowerCase()) > -1) {
        index = triggers.indexOf(text.toLowerCase())
        //console.log(child, "child")
        //hideElements()
        foundTrigger = true
        //console.log("LOCAL STORAGE: ", localStorage)
        //text.style.visibility = 'hidden'
        break
      }
    }
  }


}


if (foundTrigger) {

  let triggerAlert = confirm('TW: ' + triggers[index].toUpperCase() + '\n\n' +
    'Hey! There may be some potentially triggering content on this page.' + '\n' +
    'Click OK to continue or Cancel to go back.')
  //text.style.visibility = 'hidden'
  if (triggerAlert === true) {
    //text.style.visibility = 'visible'
  } else {
    window.history.back();
  }
}