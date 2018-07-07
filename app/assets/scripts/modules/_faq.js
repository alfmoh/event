import $ from "jquery";
import { resolve } from "url";

class Faq {
    constructor() {
        this.que = $(".faq__item__que");

        this.events();
    }

    events() {
        this.toggleFaq();
    }

    toggleFaq() {
        this.que.click((e) => {
            let ele = e.target;
            let ans = ele.nextElementSibling;
            if (ans.style.display === "block") {
                ans.style.display = "none"
            }
            else {
                    ans.style.display = "block";
            }
        });
    }
}

export default Faq;