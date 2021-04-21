let imgIndex = 0;
let imgArray = [
    {src:"https://picsum.photos/id/169/500/300",caption:'Imagen 1'},
    {src:"https://picsum.photos/id/170/500/300",caption:'Imagen 2'},
    {src:"https://picsum.photos/id/171/500/300",caption:'Imagen 3'},
    {src:"https://picsum.photos/id/172/500/300",caption:'Imagen 4'},
    {src:"https://picsum.photos/id/173/500/300",caption:'Imagen 5'}
]

const setImgSrc = (src,caption) => {
    $(".gallery-wrapper img").fadeTo("slow",0, () => {
        $(".gallery-wrapper img").attr("src",src)
        $(".gallery-wrapper .img-caption").html(caption)
        setTimeout( function(){
            $(".gallery-wrapper img").fadeTo("slow",1)
        },300)
    })
}

const setButtonsState = () => {
    imgIndex === 0 
        ? $(".backward").attr("disabled", true)
        : $(".backward").attr("disabled", false)

    imgIndex === imgArray.length - 1
        ? ($(".forward").attr("disabled", true), $(".add-slides").removeClass("d-none"))
        : ($(".forward").attr("disabled", false), $(".add-slides").addClass("d-none"))
}

setButtonsState()

const forward = () => {
    imgIndex++
    let src = imgArray[imgIndex].src
    let caption = imgArray[imgIndex].caption
    setImgSrc(src,caption)
    setButtonsState()
}

const backward = () => {
    imgIndex--
    let src = imgArray[imgIndex].src
    let caption = imgArray[imgIndex].caption
    setImgSrc(src,caption)
    setButtonsState()
}

const addSlides = amount => {
    nextIndex=imgArray.length+1
    for( let i = nextIndex; i < nextIndex+amount; i++ ){
        let randomId = Math.floor(Math.random() * ( 255 - 1) + 1)
        console.log( randomId )
        let url = `https://picsum.photos/id/${randomId}/500/300`
        let textcaption = `Imagen ${i}`
        imgArray.push ({src:url,caption: textcaption})
        
    }
    setButtonsState()
}

$(".forward").click( forward )
$(".backward").click( backward )

$(".add-slides").click(() => {
    addSlides(5)
})
