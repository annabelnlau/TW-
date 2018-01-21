const allElements = document.getElementsByTagName('*')
const allParagraphs = document.getElementsByTagName('p')

let triggers = ['sexual assault', 'sexually assaulting', 'sexually assaulted', 'rape', 'sexual violence', 'sexual abuse', 'child abuse', 'pedophilia', 'pedophile',
  'suicide', 'suicidal', 'anorexia', 'bulimia', 'eating disorder', 'self-harm', 'self harm', 'domestic abuse', 'domestic violence']

let triggersCI = triggers.map(trigger => trigger.toLowerCase()) //case insensitive

let foundTrigger = false

let index

let title = document.getElementsByTagName('title')[0].innerText.toString().toLowerCase()
//console.log(allParagraphs, "wut uppppp")

// if (triggersCaseInsensitive.indexOf(title)) {
//   confirm(title, "YAAYYY!")
//   foundTrigger = true
//   console.log(text, "TEXT")
//index = triggers.indexOf(text)
//console.log(index, "INDEX 1!!!")
//console.log(child, "child")
//hideElements()

//console.log("LOCAL STORAGE: ", localStorage)
//text.style.visibility = 'hidden'


// alert(newTitle)


// let elementsToHide = document.getElementsByTagName('*')

// const hideElements = () => {
//   for (let k = 0; k < elementsToHide.length; k++) {
//     elementsToHide[k].style.visibility = 'hidden'
//   }
// }

// const displayElements = () => {
//   let elementsToHide = document.getElementsByTagName('*')
//   for (let l = 0; l < elementsToHide.length; l++) {
//     elementsToHide[l].style.visibility = 'visible'
//   }
// }

//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("sexual assault", "g"), "WE ARE HERE");

//console.log(document.body.innerHTML, "heeeeey")



for (let i = 0; i < allElements.length; i++) {
  let currentElement = allElements[i]
  let children = currentElement.childNodes
  for (let j = 0; j < children.length; j++) {
    let child = children[j]
    //if (child.nodeType === 3) {
    let text = child.nodeValue
    if (triggersCI.indexOf(text) > -1) {
      console.log("inside the text loop")
      foundTrigger = true
      index = triggers.indexOf(text)
      //hideElements()

      //console.log("LOCAL STORAGE: ", localStorage)
      //text.style.visibility = 'hidden'
      break

    }
    else {
      for (let m = 0; m < triggersCI.length; m++) {
        if (title.includes(triggersCI[m])) {
          console.log("inside the title loop")
          foundTrigger = true
          index = m
          break
        }


      }

    }
  }

}


if (foundTrigger) {
  // console.log(index, "INDEX 2")
  let triggerAlert = confirm('TW: ' + triggers[index].toUpperCase() + '\n\n' +
    'Hey! There may be some potentially triggering content on this page.' + '\n' +
    'Click OK to continue or Cancel to go back.')
  //text.style.visibility = 'hidden'
  if (triggerAlert) {
    //text.style.visibility = 'visible'
  } else {
    window.history.back();
  }
}
