import ScrollingObserver from './ScrollingObserver'

let instance

export default function scroll () {
    if (!instance) {
        instance = new ScrollingObserver()
    }
    return instance
}
