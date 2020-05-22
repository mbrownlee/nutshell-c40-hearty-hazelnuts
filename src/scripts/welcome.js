// ZN Inserts welcome screen background video
const createWelcomeVideo = () => {
    let vidContainer = document.createElement('div')
    vidContainer.className = "video_container"
    vidContainer.innerHTML = `
    <video src="./media/MovingBackground.mp4" type="video/mp4" playsinline autoplay muted loop id="welcome-video">
    </video>
    `
    document.body.prepend(vidContainer)
}

// ZN, BC Creates welcome component
const createWelcome = () => {
    return `
    <h1 class="welcome_header">🌰 Welcome to Nutshell 🌰</h1>
    <h2 class="welcome_subheader">Please log in above</h2>
    <p class="welcome_footer">created by michelle mclane, tom strother, brian cravens, & zach nicholson</p>
    `
}

// BC Inserts welcome into HTML
const renderWelcome = (HTML) => {
    const dashboardContainer = document.getElementById('dashboard')
    dashboardContainer.innerHTML = HTML;
}

// ZN Exported function to completely render Welcome page
const welcome = () => {
    createWelcomeVideo();
    renderWelcome(createWelcome());
}

export default { welcome }