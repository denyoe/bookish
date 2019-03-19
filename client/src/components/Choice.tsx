import React, {Component} from 'react'
import { IQuestion } from '../util/types';
const mojs = require('mo-js')

// const burst = new mojs.Burst({
//   radius: { 0: 1000 },
//   children: {
//     shape: 'circle',
//     fill: { '#E16B8C': '#FEDFE1' },
//     duration: 750,
//     radius: 200,
//   }
// });

// const burst2 = new mojs.Burst({
//   radius: { 200: 300 },
//   count: 20,
//   children: {
//     shape: 'line',
//     stroke: ['white', '#FFE217', '#FC46AD', '#D0D202', '#B8E986', '#D0D202'],
//     scale: 1,
//     scaleX: { 1: 0 },
//     // pathScale:    'rand(.5, 1.25)',
//     degreeShift: 'rand(-90, 90)',
//     radius: 'rand(20, 40)',
//     // duration:     200,
//     delay: 'rand(0, 150)',
//     isForce3d: true
//   }
// });

interface IState {}
interface IProps {
    question: string,
    body: any,
    handlerChoiceSelected: any
}

// const generateRandomNumber = (min: number, max: number) => {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
class Choice extends Component<IProps, IState> {
    timeline = new mojs.Timeline()

    triangleBurst: any
    circleBurst: any
    circle: any
    tween1: any
    tween2: any

    constructor(props: IProps) {
        super(props)

        this.animate = this.animate.bind(this)
        this.handlerChoiceSelected = this.handlerChoiceSelected.bind(this)
    }

    generateRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    componentDidMount() {
        // const initialNumberOfClaps = this.generateRandomNumber(500, 10000)
        // const btnDimension = 80
        const tlDuration = 300
        const RADIUS = 28
        let numberOfClaps = 0
        let clapHold

        const scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0')
        // let el = document.querySelector('.icobutton') as HTMLButtonElement // li.icobutton
        let el = document.querySelector('.icobutton') as HTMLButtonElement // li.icobutton
        // let elSpan = el
        let elSpan = el.querySelector('.radioCustomLabel') as HTMLElement // li > input.radioCustomButton
        // radioCustomButton

        // const rect = elSpan.getBoundingClientRect()

        this.triangleBurst = new mojs.Burst({
            parent: el,
            radius: { 50: 95 },
            count: 5,
            angle: 30,
            children: {
                shape: 'polygon',
                radius: { 6: 0 },
                scale: 1,
                stroke: 'rgba(211,84,0 ,0.5)',
                strokeWidth: 2,
                angle: 210,
                delay: 30,
                speed: 0.2,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                duration: tlDuration
            }
        })

        this.circle = new mojs.Shape({
            left: 0, top: 0,
            stroke: '#FF9C00',
            strokeWidth: { [2 * RADIUS]: 0 },
            fill: 'none',
            scale: { 0: 1, easing: 'quad.out' },
            radius: RADIUS,
            duration: 450
        })

        this.circleBurst = new mojs.Burst({
            parent: el,
            // radius: { 6: RADIUS - 7 },
            radius: { 50: 75 },
            angle: 25,
            duration: tlDuration,
            children: {
                shape: 'circle',
                fill: 'rgba(149,165,166 ,0.5)',
                delay: 30,
                speed: 0.2,
                radius: { 3: 0 },
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
            }
        })

        // { x: e.pageX, y: e.pageY }

        // const scaleButton = new mojs.Html({
        //     el: '#clap',
        //     duration: tlDuration,
        //     scale: { 1.3: 1 },
        //     easing: mojs.easing.out
        // })

        this.tween1 = new mojs.Burst({
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

        this.tween2 = new mojs.Transit({
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

        // const tween3 = new mojs.Tween({
        //     top: rect.top,
        //     left: rect.left,
        //     duration: 900,
        //     onUpdate: function (progress: any) {
        //         var scaleProgress = scaleCurve(progress);
        //         elSpan.style.webkitTransform = elSpan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
        //     }
        // })

        this.timeline.add(this.tween1, this.tween2)
        this.timeline.add([
            this.triangleBurst,
            this.circleBurst
        ])
    }

    animate(target: HTMLElement) {
        const rect = target.getBoundingClientRect()
        const coords = { x: rect.left, y: rect.top }

        // console.log(rect, rect.top, rect.left)
        console.log(rect, coords)
        this.tween1.tune(coords)
        this.tween2.tune(coords)
        this.triangleBurst.tune(coords)
        this.circleBurst.tune(coords)

        this.timeline.replay()

        // const coords = { x: e.pageX, y: e.pageY };
        // burst.tune(coords);
        // circle.tune(coords);
        // star.tune(coords);
        // timeline.replay();
        
        // burst.tune({
        //     count: 'rand(3,7)',
        //     angle: 'rand(0, 360)'
        // }).replay();
        // burst2.replay();
    }

    handlerChoiceSelected(e: any) {
        // this.animate(e.target)
        this.props.handlerChoiceSelected(e)
    }

    render() {
        const props = this.props

        return (
            <li className="choice-item icobutton">
                <input
                    type="radio"
                    className="radioCustomButton"
                    name={"radioGroup" + props.question}
                    id={props.body.body}
                    value={JSON.stringify(props.body)}
                    onChange={this.handlerChoiceSelected}
                />
                
                <label className="radioCustomLabel" htmlFor={props.body.body}>
                    {props.body.body}
                </label>
            </li>
        )
    }
}

export default Choice