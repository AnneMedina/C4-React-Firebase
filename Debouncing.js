

const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

const delay = 1000;

const updateDebounceText = debounce(text => {
    debounceText.textContent = text
})

const updateThrottleText = throttle(text => {
    throttleText.textContent = text
})


input.addEventListener("input", e => {
    defaultText.textContent = e.target.value
    updateDebounceText(e.target.value)
    updateThrottleText(e.target.value)
})

function debounce(callbackFunction) {
    let timeout

    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callbackFunction(...args)
        }, delay)
    }
}

function throttle(callbackFunction) {
    console.log("delay: ", delay)

    let shouldWait = false
    let leftOverArguments

    const timeoutFn = () => {
        if (leftOverArguments == null) {
            shouldWait = false
        }
        else {
            callbackFunction(...leftOverArguments)
            leftOverArguments = null
            setTimeout(timeoutFn, delay)
        }
    }

    return (...args) => {
        if (shouldWait) {
            leftOverArguments = args
            return
        }

        console.log("args: ", ...args)

        callbackFunction(...args)
        shouldWait = true

        setTimeout(timeoutFn, delay)
    }

}