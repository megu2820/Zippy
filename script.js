let pic = document.getElementsByClassName('Pic')

let currentImages = document.getElementsByClassName('current')

for (var i=0; i < pic.length; i++){

  pic[i].addEventListener('mouseover', function(){
    //console.log(currentImages)

    document.getElementById('default').src = this.src
  })
}

