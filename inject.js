document.documentElement.addEventListener('DOMNodeInserted', function(e){
  if(typeof e.relatedNode.className === 'string' && e.relatedNode.className.match('chatImageContainer')){
    let image = e.relatedNode
    let img_link = image.getElementsByClassName('chatImageURL')[0].href
    let link = document.createElement('a')
        link.innerHTML = '<a href="' + img_link + '" target="_blank" rel="noopener noreferrer">' + img_link + '</a>'
    
    image.parentElement.replaceChild(link, image)
  }
}, false)