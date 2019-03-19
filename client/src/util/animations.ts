const mojs = require('mo-js')

export const init = () => {
    const scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0')
    let el = document.querySelector('.icobutton') as HTMLButtonElement

    console.log(el)

    let elSpan = el.querySelector('span') as HTMLSpanElement
    
    const timeline = new mojs.Timeline()

    const tween1 = new mojs.Burst({
        parent: el,
        duration: 1500,
        shape: 'circle',
        fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
        opacity: 0.6,
        childOptions: { radius: { 20: 0 } },
        radius: { 40: 120 },
        count: 6,
        isSwirl: true,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    })

    const tween2 = new mojs.Transit({
        parent: el,
        duration: 750,
        type: 'circle',
        radius: { 0: 50 },
        fill: 'transparent',
        stroke: '#988ADE',
        strokeWidth: { 15: 0 },
        opacity: 0.6,
        easing: mojs.easing.bezier(0, 1, 0.5, 1)
    })

    const tween3 = new mojs.Tween({
        duration: 900,
        onUpdate: function (progress: any) {
            var scaleProgress = scaleCurve(progress);
            elSpan.style.webkitTransform = elSpan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
        }
    })

    timeline.add(tween1, tween2, tween3)

    el.addEventListener('mouseenter', function () {
        timeline.replay();
    });
}