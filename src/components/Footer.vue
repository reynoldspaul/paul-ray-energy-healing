<template>
    <div class="container text-center footer">
        <footer class="py-3 my-5">
            <div class="row border-bottom">
                <div class="col-3"></div>
                <div class=" col-6">
                    <ul class="nav justify-content-center pb-1">
                        <li class="nav-item">
                            <RouterLink to="/" activeClass="active" class="nav-link px-2 text-body-secondary">Home
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/approach" activeClass="active" class="nav-link px-2 text-body-secondary">
                                Approach</RouterLink>
                        </li>
                        <li class="nav-item"><a href="https://paulray.setmore.com/book"
                                class="nav-link px-2 text-body-secondary">Book</a></li>
                        <li class="nav-item">
                            <RouterLink to="/about" activeClass="active" class="nav-link px-2 text-body-secondary">About
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/contact" activeClass="active" class="nav-link px-2 text-body-secondary">
                                Contact</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="col-3 d-flex justify-content-end">
                    <a href="https://www.instagram.com/paulrayenergyhealing/" target="_blank"><i
                            class="bi bi-instagram"></i></a>
                </div>
            </div>

            <p class="text-center text-body-secondary mt-4">&copy; 2025 Paul Ray Energy Healing</p>

        </footer>
    </div>
</template>