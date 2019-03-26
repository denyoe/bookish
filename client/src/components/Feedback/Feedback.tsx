import React, { Component } from 'react'
import './Feedback.css'
// const mojs = require('mo-js')

interface IState {}
interface IProps {
    status: string
}

class Feedback extends Component<IProps, IState> {

    // timeline = new mojs.Timeline()

    // triangleBurst: any
    // circleBurst: any
    // circle: any
    // tween1: any
    // tween2: any
    // tween3: any

    constructor(props: IProps) {
        super(props)
    }

    componentDidMount() {
        const tlDuration = 300
        const RADIUS = 28
        let numberOfClaps = 0
        let clapHold

        // const scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0')
        // let el = document.querySelector('.reaction') as any // li.icobutton
        // let elSpan = el.querySelector('i') as any // li > input.radioCustomButton

        // console.log(el)

        // this.triangleBurst = new mojs.Burst({
        //     parent: '.reaction',
        //     radius: { 50: 95 },
        //     count: 5,
        //     angle: 30,
        //     children: {
        //         shape: 'polygon',
        //         radius: { 6: 0 },
        //         scale: 1,
        //         stroke: 'rgba(211,84,0 ,0.5)',
        //         strokeWidth: 2,
        //         angle: 210,
        //         delay: 30,
        //         speed: 0.2,
        //         easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        //         duration: tlDuration
        //     }
        // })

        // this.circle = new mojs.Shape({
        //     stroke: '#FF9C00',
        //     strokeWidth: { [2 * RADIUS]: 0 },
        //     fill: 'none',
        //     scale: { 0: 1, easing: 'quad.out' },
        //     radius: RADIUS,
        //     duration: 450
        // })

        // this.circleBurst = new mojs.Burst({
        //     parent: el,
        //     // radius: { 6: RADIUS - 7 },
        //     radius: { 50: 75 },
        //     angle: 25,
        //     duration: tlDuration,
        //     children: {
        //         shape: 'circle',
        //         fill: 'rgba(149,165,166 ,0.5)',
        //         delay: 30,
        //         speed: 0.2,
        //         radius: { 3: 0 },
        //         easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        //     }
        // })

        // this.tween1 = new mojs.Burst({
        //     parent: el,
        //     duration: 1500,
        //     shape: 'circle',
        //     fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
        //     opacity: 0.6,
        //     childOptions: { radius: { 20: 0 } },
        //     radius: { 40: 120 },
        //     count: 6,
        //     isSwirl: true,
        //     easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        // })

        // this.tween2 = new mojs.Transit({
        //     parent: el,
        //     duration: 750,
        //     type: 'circle',
        //     radius: { 0: 50 },
        //     fill: 'transparent',
        //     stroke: '#988ADE',
        //     strokeWidth: { 15: 0 },
        //     opacity: 0.6,
        //     easing: mojs.easing.bezier(0, 1, 0.5, 1)
        // })

        // this.tween3 = new mojs.Tween({
        //     duration: 900,
        //     onUpdate: function (progress: any) {
        //         var scaleProgress = scaleCurve(progress);
        //         elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
        //     }
        // });

        // this.timeline.add(this.tween1, this.tween2)
        // this.timeline.add([
        //     this.triangleBurst,
        //     this.circleBurst
        // ])

        // const rect = el.getBoundingClientRect()
        // const coords = { left: rect.left, right: rect.right }

        // console.log(rect, rect.top, rect.left)
        // console.log(rect, coords)
        // this.tween1.tune(coords)
        // this.tween2.tune(coords)
        // this.triangleBurst.tune(coords)
        // this.circleBurst.tune(coords)

        // this.timeline.replay()
    }

    // animate(target: HTMLElement) {
    //     const rect = target.getBoundingClientRect()
    //     const coords = { x: rect.left, y: rect.top }

    //     console.log(rect, coords)
    //     this.tween1.tune(coords)
    //     this.tween2.tune(coords)
    //     this.triangleBurst.tune(coords)
    //     this.circleBurst.tune(coords)

    //     this.timeline.replay()
    // }

    render() {

        if( this.props.status === '' ) {
            const style = {
                height: '20vh'
            }
            return (
                <div style={style}></div>
            )
        }

        const _class = this.props.status === 'true' ? 'fas fa-thumbs-up' : 'fas fa-thumbs-down'

        return (
            <div className="feedback">
                <span className="reaction">
                    <i className={_class}></i>
                </span>
                <span></span>
            </div>
        )
    }
}

export default Feedback