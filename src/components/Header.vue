<template>
    <header class="p-3 ">
        <div class="container">

            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="/"><img class="nav-logo" src="/public/img/paul-ray-logo.png"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav ">
                            <RouterLink to="/" activeClass="active" class="nav-link">Home</RouterLink>
                            <RouterLink to="/approach" activeClass="active" class="nav-link">Approach</RouterLink>
                            <a href="https://paulray.setmore.com/" class="nav-link">Book</a>
                            <RouterLink to="/about" activeClass="active" class="nav-link">About</RouterLink>
                            <RouterLink to="/contact" activeClass="active" class="nav-link">Contact</RouterLink>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    </header>
</template>