let scrollTimer
let raf

export default class ScrollingObserver {
    /**
     * 构造函数
     * @param isScrolling 初始值是否为滚动
     * @param scrollTime 设置初始滚动时间
     * @param useRaf 是否使用 requestAnimationFrame
     */
    constructor (isScrolling = false, scrollTime = Date.now(), useRaf = true) {
        this.isScrolling = isScrolling
        this.scrollTime = scrollTime
        this.useRaf = useRaf
        this.initEvents()
    }

    /**
     * 初始化 touch 事件
     */
    initEvents () {
        window.addEventListener('touchmove', this.onWindowTouchMove.bind(this))
        window.addEventListener('touchend', this.onWindowTouchEnd.bind(this))
    }

    /**
     * 移除 touch 事件
     */
    destroy () {
        window.removeEventListener('touchmove', this.onWindowTouchMove.bind(this))
        window.removeEventListener('touchend', this.onWindowTouchEnd.bind(this))
    }

    onWindowTouchMove () {
        this.isScrolling = true
    }

    onWindowTouchEnd (e) {
        if (!this.isScrolling) return
        if (this.useRaf) {
            this.rafHandler(e)
        } else {
            this.setIntervalHandler(e)
        }
    }

    /**
     * 使用 requestAnimationFrame 判断元素位置是否发生变化
     * @param e
     */
    rafHandler (e) {
        const element = e.target
        let rectObject0 = element.getBoundingClientRect()
        const _this = this
        window.cancelAnimationFrame(raf)

        function step () {
            _this.scrollTime = Date.now()
            const rectObject1 = element.getBoundingClientRect()
            if (rectObject0.top !== rectObject1.top || rectObject0.left !== rectObject1.left) {
                rectObject0 = rectObject1
                raf = window.requestAnimationFrame(step)
            } else {
                _this.isScrolling = false
                window.cancelAnimationFrame(raf)
            }
        }

        raf = window.requestAnimationFrame(step)
    }

    /**
     * 使用 setInterval 判断元素位置是否发生变化
     * @param e
     */
    setIntervalHandler (e) {
        const element = e.target
        clearInterval(scrollTimer)
        let rectObject0 = element.getBoundingClientRect()
        scrollTimer = setInterval(() => {
            const rectObject1 = element.getBoundingClientRect()
            this.scrollTime = Date.now()
            if (rectObject0.top === rectObject1.top && rectObject0.left === rectObject1.left) {
                this.isScrolling = false
                clearInterval(scrollTimer)
            }
            rectObject0 = rectObject1
        }, 16.7 * 5)
    }
}
