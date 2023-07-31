export function formatTime(timeInSeconds) {
    if(timeInSeconds === 0) return '00:00'

    const seconds = timeInSeconds % 60
    const minutes = ((timeInSeconds - seconds) / 60)

    const secondsText = seconds <= 9 ? `0${seconds}` : seconds
    const minutesText = minutes <= 9 ? `0${minutes}` : minutes

    return `${minutesText}:${secondsText}`
}