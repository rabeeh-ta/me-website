import React from 'react';

export default function ContactMe() {
  return (
    <div className="container-fluid footer">
      <div className="row contact">
        <div className="col-md-6 contact-form">
          <h3 className="content-ct">
            <span className="ti-email"></span> Contact Me
          </h3>
          <form className="form-horizontal" data-toggle="validator">
            <div className="form-group">
              <label className="col-sm-3 control-label">
                Your Message<sup>*</sup>
              </label>
              <div className="col-sm-9">
                <textarea
                  id="message"
                  className="form-control"
                  rows="3"
                  required
                ></textarea>
                <div className="help-block with-errors pull-right"></div>
                <span
                  className="form-control-feedback"
                  aria-hidden="true"
                ></span>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-3 col-sm-9">
                <button
                  type="submit"
                  id="submit"
                  name="submit"
                  onClick={() => alert('implement whatsapp message redirect')}
                  className="btn btn-yellow pull-right"
                >
                  Send <span className="ti-arrow-right"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4 col-md-offset-1 content-ct">
          <h3>
            <span className="ti-mobile"></span> Hit me up
          </h3>
          <p>
            Hit me up if you have any project ideas or just say hey, always open
            for collaboration.
          </p>
          <h3>
            <span className="ti-game"></span> Gamer Life
          </h3>
          <p>
            I do play a lot of Minecraft and run a server, maybe you can join
            us.
          </p>
        </div>
      </div>
      <div className="row footer-credit">
        <div className="col-md-6 col-sm-6">
          <p>
            &copy; 2020, <a href="http://www.rabeeh.ml">Rabeeh T A</a>{' '}
          </p>
        </div>
        <div className="col-md-6 col-sm-6">
          <ul className="footer-menu">
            <li>
              <a href="https://twitter.com/rabeeh_ta">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/rabe.eh_/">Instagram</a>
            </li>
            <li>
              <a href="https://github.com/rabeeh-ta">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
