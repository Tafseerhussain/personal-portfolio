<template>
    <section class="contact-us-area section-padding bg-color-dark img-cover">
        <div class="container">
            <div class="row d-none">
                <div class="col-12">
                    <div class="section-title text-center">
                        <span class="water-text">{{ data.sectionTitleWaterText }}</span>
                        <h2 class="title">{{ data.sectionTitle }}</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12" style="margin-bottom: 300px">
                    <div class="contact-info text-center">
                        <div class="contact-info__list address">
                            <i class="fa fa-home"></i>
                            <p>Faisalabad, Pakistan</p>
                        </div>
                        <div class="contact-info__list email">
                            <i class="fa fa-envelope"></i>
                            <a href="mailto:tafseerhussain88@gmail.com">tafseerhussain88@gmail.com</a>
                        </div>
                        <div class="contact-info__list phone">
                            <i class="fa fa-phone"></i>
                            <a href="tel:+923316474720">+92-331-6474720</a>
                        </div>
                        <div class="contact-info__list phone">
                            <a href="https://www.upwork.com/freelancers/~01cb0a9c5dfaf4ab7c" style="color: #de1738" target="_blank">Visit Upwork Profile</a>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-8 offset-lg-2">
                    <form class="contact-form">
                        <div class="row">
                            <div class="col-12">
                                <input name="name" type="text" placeholder="Your Name">
                            </div>
                            <div class="col-12">
                                <input name="subject" type="email" placeholder="Your Subject">
                            </div>
                            <div class="col-12">
                                <input name="email" type="email" placeholder="Your Email">
                            </div>
                            <div class="col-12">
                                <textarea name="message" placeholder="Your Message"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-default">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
    import data from '../data/contact.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>