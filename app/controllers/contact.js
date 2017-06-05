/* global fetch */
import Ember from 'ember';

export default Ember.Controller.extend({
    formValues: {},
    actions: {
        sendMail () {
            fetch('http://mail.bushidostudios.org:1080/send', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "content-type": "application/json; charset=UTF-8"
                },
                mode: 'cors',
                body: JSON.stringify(this.get("formValues")),
            })
            .then(() => {
                this.set("formValues", {});
                this.set("isSubmitted", true);
                setTimeout(function() {
                    this.set("isSubmitted", false);
                }.bind(this), 4000);
            });
        }
    },
});