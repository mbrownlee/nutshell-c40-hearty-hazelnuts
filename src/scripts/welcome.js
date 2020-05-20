const createWelcomeVideo = () => {
    let vidContainer = document.createElement('div')
    vidContainer.className = "video_container"
    vidContainer.innerHTML = `
    <video autoplay muted loop id="welcome-video">
    <source src="../media/MovingBackground.mp4" type="video/mp4">
    </video>
    `
    document.body.appendChild(vidContainer)
}

export default { createWelcomeVideo }