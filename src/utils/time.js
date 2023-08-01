export function formatTime(timeInSeconds) {

    if(isNaN(timeInSeconds)) {
        throw(new Error('type not supported'))
    }
    if(timeInSeconds === 0) return '00:00'

    const seconds = timeInSeconds % 60
    const minutes = ((timeInSeconds - seconds) / 60)

    const secondsText = seconds <= 9 ? `0${seconds}` : seconds
    const minutesText = minutes <= 9 ? `0${minutes}` : minutes

    return `${minutesText}:${secondsText}`
}