exports.formatDateTime = (time) => {

    const currentTime = new Date().getTime()
    const createdAt = new Date(time).getTime()

    const diff = Math.abs(currentTime - createdAt)
    const totalSeconds = Math.floor(diff / 1000)

    const seconds = totalSeconds % 60
    const minutes = Math.floor(totalSeconds / 60) % 60
    const hours = Math.floor(totalSeconds / 3_600) % 60
    const days = Math.floor(totalSeconds / 86_400)


    if (totalSeconds < 60) return `${seconds}s ago`
    if (totalSeconds < 3_600) return `${minutes}m:${seconds}s ago`
    if (totalSeconds < 86_400) return `${hours}h:${minutes}m:${seconds}s ago`
    return `${days}d ago`
}

