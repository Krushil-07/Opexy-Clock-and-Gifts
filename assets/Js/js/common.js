document.getElementById('header').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid mx-2 mx-md-5 ">
    <a class="navbar-brand d-lg-none" href="./index.html">
        <img src="./assets/images/logo.png" class="logo" alt="">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" style="width: 50%;"
        aria-labelledby="offcanvasDarkNavbarLabel">

        <div class="offcanvas-header justify-content-evenly">
            <a class="navbar-brand" href="./index.html">
                <img src="./assets/images/logo.png" class="logo" alt="">
            </a>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-evenly flex-grow-1 pe-3">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About us</a>
                </li>
                <li class="nav-item d-none d-lg-block">
                    <a href="./index.html">
                        <img src="./assets/images/logo.png" class="logo" alt="">
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Shop</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./Contactus.html">Contact us</a>
                </li>
            </ul>
        </div>
    </div>
</div>
</nav>
`;


document.getElementById('footer').innerHTML = `
<div class="container-fluid bg-dark text-light footer">
<footer class="row row-cols-2 row-cols-sm-2 row-cols-md-4 py-5 mt-3 border-top">
    <div class="col mb-md-3 mb-sm-5 mb-5">
        <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <img src="./assets/images/logo.png" width="" height="">
            </img>
        </a>
        <p>started at year 2003</p>
    </div>

    <div class="col mb-md-3 mb-sm-5 mb-5">
        <h5>Important Links</h5>
        <hr style="width: 5rem; border: 2px solid white;">
        <ul class="nav flex-column">
            <li class="nav-item mb-2 d-flex">
                <span class="material-symbols-outlined">
                    double_arrow
                </span>
                <a href="#" class="nav-link p-0 text-body-secondary align-items-center">
                    Home
                </a>
            </li>
            <li class="nav-item mb-2 d-flex">
                <span class="material-symbols-outlined">
                    double_arrow
                </span>
                <a href="#" class="nav-link p-0 text-body-secondary align-items-center">
                    About us
                </a>
            </li>
            <li class="nav-item mb-2 d-flex">
                <span class="material-symbols-outlined">
                    double_arrow
                </span>
                <a href="#" class="nav-link p-0 text-body-secondary align-items-center">
                    Shop
                </a>
            </li>
            <li class="nav-item mb-2 d-flex">
                <span class="material-symbols-outlined">
                    double_arrow
                </span>
                <a href="#" class="nav-link p-0 text-body-secondary align-items-center">
                    Contact us
                </a>
            </li>
        </ul>
    </div>

    <div class="col mb-md-3 mb-sm-5 mb-5">
        <h5>Our Products</h5>
        <hr style="width: 5rem; border: 2px solid white;">
        <ul class="nav flex-column">
            <li class="nav-item mb-2 d-flex">
                <span class="material-symbols-outlined">
                    double_arrow
                </span>
                <a href="#" class="nav-link p-0 text-body-secondary align-items-center">
                    Wall Clocks
                </a>
            </li>
            <li class="nav-item mb-2 d-flex">
                <span class="material-symbols-outlined">
                    double_arrow
                </span>
                <a href="#" class="nav-link p-0 text-body-secondary align-items-center">
                    Alarm Clock
                </a>
            </li>
            <li class="nav-item mb-2 d-flex">
                <span class="material-symbols-outlined">
                    double_arrow
                </span>
                <a href="#" class="nav-link p-0 text-body-secondary align-items-center">
                    Mugs
                </a>
            </li>
            <li class="nav-item mb-2 d-flex">
                <span class="material-symbols-outlined">
                    double_arrow
                </span>
                <a href="#" class="nav-link p-0 text-body-secondary align-items-center">
                    Photo Frames
                </a>
            </li>
            <li class="nav-item mb-2 d-flex">
                <span class="material-symbols-outlined">
                    double_arrow
                </span>
                <a href="#" class="nav-link p-0 text-body-secondary align-items-center">
                    Ideals
                </a>
            </li>
        </ul>
    </div>

    <div class="col mb-md-3 mb-sm-5 mb-5 not-hover">
        <h5>Contact Us</h5>
        <hr style="width: 5rem; border: 2px solid white;">
        <ul class="nav flex-column">
            <li class="nav-item mb-2 d-flex">
                <a href="https://maps.app.goo.gl/Vnb29P6KNDFBL8gG9" target="_blank"
                    class="nav-link p-0 text-body-secondary align-items-center">
                    <span class="material-symbols-outlined me-2">
                        location_on
                    </span>
                    SURVE NO. 292/1-2 RAJPAR, Nasitpar Rd, Morbi, Gujarat 363641
                </a>
            </li>
            <li class="nav-item mb-2 d-flex">
                <a href="tel:+919825827856" class="nav-link p-0 text-body-secondary align-items-center">
                    <span class="material-symbols-outlined me-2">
                        call
                    </span>
                    +91 9825827856
                </a>
            </li>
            <li class="nav-item mb-2 d-flex">
                <a href="mailto:opexy@gmail.com" class="nav-link p-0 text-body-secondary align-items-center">
                    <span class="material-symbols-outlined me-2">
                        mail
                    </span>
                    opexy@gmail.com
                </a>
            </li>
        </ul>
    </div>

</footer>

<div class="container-fluid">
    <hr class="mb-1">
    <p class="text-center py-0 pb-2 my-0">© 2024 copyright</p>
</div>
</div>
`;