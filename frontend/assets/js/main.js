const showMenu = (toggleId, navId, userInfoId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    const userInfo = document.getElementById(userInfoId);

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu');

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon');

        // Toggle user_info visibility
        userInfo.classList.toggle('show-user-info');
    });
}

showMenu('nav-toggle', 'nav-menu', 'user-info');
