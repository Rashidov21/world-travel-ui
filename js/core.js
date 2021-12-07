M.AutoInit();
var elems = document.querySelectorAll('.carousel');
var instances = M.Carousel.init(elems, {
    duration:400,
    fullWidth:true,
    indicators:true,
    noWrap:false,
    dist:-500,
    shift:200
});