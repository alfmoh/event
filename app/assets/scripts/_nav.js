import $ from "jquery";

class Nav {
    constructor() {
        this.navHome = $("#nav-home");
        this.navAgenda = $("#nav-agenda");
        this.navSpeakers = $("#nav-speakers");
        this.navFaq = $("#nav-faq");

        this.events();
    }

    events() {
        this.navHome.click(e => this.animator(e.currentTarget.id));
        this.navAgenda.click(e => this.animator(e.currentTarget.id));
        this.navSpeakers.click(e => this.animator(e.currentTarget.id));
        this.navFaq.click(e => this.animator(e.currentTarget.id));
    }

    animator(id) {
        $('html, body').animate({
            scrollTop: $(this.getClass(id)).offset().top
        }, 1000);
    }

    getClass(id) {
        return "." + id.slice(id.indexOf("-") + 1, id.length) +"-heading";
    }

}

export default Nav;