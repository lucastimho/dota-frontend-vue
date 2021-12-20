<template>
  <div>
    <section id="contact">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Contact Me</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">
              If you enjoyed what you saw, feel free to send me a message of your thoughts.
              <br />
              If you see anything I could improve, don't hesitate to send a message as well.
            </p>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-4">
            <div class="info">
              <div>
                <i class="bi bi-github"></i>
                <p>github.com/lucastimho</p>
              </div>

              <div>
                <i class="bi bi-linkedin"></i>
                <p>
                  linkedin.com/in/
                  <br />
                  lucas-t-ho
                </p>
              </div>

              <div>
                <i class="bi bi-envelope-plus-fill"></i>
                <p>lucas.t.ho.lh@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="col-lg-5 col-md-8">
            <div class="form">
              <form action="https://formspree.io/f/mlezeznd" method="post" role="form" class="php-email-form">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div class="form-group mt-3">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
