class MobileNavbar {

    constructor(mobileMenu, navBar, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navBar = document.querySelector(navBar);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link) => {
            console.log(index);
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease frowards 0.3s`);
        });
    }

    handleClick() {
        this.navBar.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar (
    ".mobile-menu",
    ".navbar ul",
    ".navbar ul li",
);
mobileNavbar.init();