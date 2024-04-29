document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="row">
                <!-- Company Info -->
                <div class="col-md-6">
                    <div class="footer-brand d-flex align-items-center">
                        <img class="styled-footer-svg" src="./img/person-digging.svg"/>
                        <h2 class="nav-overview-title ms-2">Dessert Diggers Utah</h2>
                    </div>
                    <p>Our dedicated crew handles your home and wheels with the tender care of a parent cradling a newborn. From moving to car detailing, we pamper your prized possessions. We aim for a chill vibe only, so leave the stress to the professionals – namely, your in-laws.</p>
                    <a href="#" class="btn btn-primary">Leave a Review!</a>
                </div>              
            
                <!-- Services -->
                <div class="col-md-3">
                    <h5 class="nav-overview-title">Adventures</h5>
                    <ul class="list-unstyled">
                        <li><a href="#the-prospector">The Prospector</a></li>
                        <li><a href="#the-gold-digger">The Gold Digger</a></li>
                        <li><a href="#the-mother-lode">The Mother Lod</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="col-md-2">
                    <h5 class="nav-overview-title">Contact</h5>
                    <div class="footer-brand d-flex align-items-center">
                    <i style="font-size:1.5rem" class="fa-solid fa-sm fa-envelope text-white me-2 nav-overview-title"></i>
                    <p style="margin-top:12px"><a href="mailto:xxx@gmail.com">xxx@gmail.com</a></p>
                    </div>
                    <div class="footer-brand d-flex align-items-center">
                        <i style="font-size:1.5rem" class="fa-solid fa-sm fa-phone text-white me-2 nav-overview-title"></i>
                        <p style="margin-top:12px"><a href="tel:">xxx-xxx-xxxx</a></p>
                    </div>
                    <address>xxx main street, Wasatch County, UT</address>
                    <!-- Social Media Icons -->
                    <div class="social-media">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>`;

    // Assuming you want to insert this into a specific element on your page:
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
