
loadDependencies().then(() => {
    addListeners();
});

// Load Header 
function loadHeader() {
    return fetch('../elements/header.html').then(response => response.text()).then(data => {
        document.getElementById('header-container').innerHTML = data;
    }).catch(error => {
        console.error('Error loading: ', error);
    });
}

//Load Footer
function loadFooter() {
    return fetch('../elements/footer.html').then(response => response.text()).then(data => {
        document.getElementById('footer-container').innerHTML = data;
    }).catch(error => {
        console.error('Error loading: ', error);
    });
}

function loadSideDrawer()
{
    return fetch('../elements/side-drawer.html').then(response => response.text()).then(data => {
        document.getElementById('side-drawer').innerHTML = data;
    }).catch(error => {
        console.error("Cannot load: ",error);
    });
}

// Load All Dependencies
function loadDependencies() {
    return Promise.all([loadHeader(), loadFooter(), loadSideDrawer()]);
}

// Go to language select page
function go_to_language_select() {
    window.location.href = "language-settings.html"
}

function changeImage(direction) {
    scrollContainer = document.getElementById('bg-container');
    if (direction == 1)
        scrollContainer.scrollLeft += scrollContainer.clientWidth;
    else
        scrollContainer.scrollLeft -= scrollContainer.clientWidth;
}

function open_side_drawer() {
    document.getElementById('all-side-drawer').classList.add('active');
}

function close_side_drawer() {
    document.getElementById('all-side-drawer').classList.remove('active');
}

function addListeners() {

    // Location Select Box Popup Open Close
    document.getElementById('location-popup-btn').addEventListener('click', () => {
        document.getElementById('overlay').classList.add('active');
        document.getElementById('location-popup').classList.add('active');
    });
    document.getElementById('popup-close-btn').addEventListener('click', () => {
        document.getElementById('overlay').classList.remove('active');
        document.getElementById('location-popup').classList.remove('active');
    });
    document.getElementById('pop-up-done-btn').addEventListener('click', () => {
        document.getElementById('overlay').classList.remove('active');
        document.getElementById('location-popup').classList.remove('active');
    });
    // Amazon Logo Function
    document.getElementById('nav-logo').addEventListener('click', () => {
        window.location.href = "index.html";
    })

    // Back to top button
    document.getElementById('back-to-top-btn').addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Accounts button
    document.getElementById('accounts-btn').addEventListener('click', function () {
        window.location.href = "sign-in.html";
    });
}