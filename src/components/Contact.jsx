import { useState } from "react";
import Icon from "./Icon";

export default function Contact({ formRef }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "Law Firm",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email required";
    if (!form.message.trim())
      errs.message = "Tell me a bit about what you'd use it for";

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Submit to Formspree
    setSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xyzpqwab", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          industry: form.industry,
          message: form.message,
          _replyto: form.email,
        }),
      });

      if (response.ok) {
        setSent(true);
        setForm({
          name: "",
          email: "",
          company: "",
          industry: "Law Firm",
          message: "",
        });
      } else {
        setErrors({ submit: "Failed to send. Please try emailing directly." });
      }
    } catch (err) {
      setErrors({ submit: "Failed to send. Please try emailing directly." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section-pad" id="contact" ref={formRef}>
      <div className="container">
        <div className="benefits-head reveal">
          <div>
            <span className="eyebrow code">contact</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>
              Book a free, <span className="accent">on-site demo.</span>
            </h2>
          </div>
          <p className="lede">
            Tell me what your firm does. I'll bring a working setup to your
            office, walk through it with your team, and leave you a quote — at
            no cost.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <a
              href="mailto:abbas@abai.consulting"
              className="contact-line"
              style={{ textDecoration: "none" }}
            >
              <div className="contact-line-icon">
                <Icon name="mail" size={16} stroke={2} />
              </div>
              <div>
                <div className="contact-line-label">Email</div>
                <div className="contact-line-val">abbas@abai.consulting</div>
              </div>
            </a>
            <a
              href="tel:9054628072"
              className="contact-line"
              style={{ textDecoration: "none" }}
            >
              <div className="contact-line-icon">
                <Icon name="phone" size={16} stroke={2} />
              </div>
              <div>
                <div className="contact-line-label">Phone</div>
                <div className="contact-line-val">905 462 8072</div>
              </div>
            </a>
            <div className="contact-line">
              <div className="contact-line-icon">
                <Icon name="pin" size={16} stroke={2} />
              </div>
              <div>
                <div className="contact-line-label">Service area</div>
                <div className="contact-line-val">Ontario, Canada</div>
              </div>
            </div>
            <span className="contact-resp">Responds within 24 hours</span>
            <p className="contact-foot-line" style={{ marginTop: 24 }}>
              Serving GTA, KW, Hamilton, Ottawa, and all of Ontario.
            </p>
          </div>

          <form className="contact-form reveal" onSubmit={submit} noValidate>
            {sent ? (
              <div className="form-success">
                <div className="form-success-icon">
                  <Icon name="check" size={24} stroke={2.5} />
                </div>
                <h3>Thanks — I'll be in touch.</h3>
                <p>You'll get an email back within one business day.</p>
              </div>
            ) : (
              <>
                {errors.submit && (
                  <div
                    style={{ color: "#DC2626", marginBottom: 16, fontSize: 14 }}
                  >
                    {errors.submit}
                  </div>
                )}
                <div className="field-row">
                  <div className="field">
                    <label>Name</label>
                    <input
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Jane Partner"
                      disabled={submitting}
                    />
                    {errors.name && (
                      <span className="field-error">{errors.name}</span>
                    )}
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="jane@firm.ca"
                      disabled={submitting}
                    />
                    {errors.email && (
                      <span className="field-error">{errors.email}</span>
                    )}
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label>Firm / Company</label>
                    <input
                      value={form.company}
                      onChange={update("company")}
                      placeholder="Smith & Co."
                      disabled={submitting}
                    />
                  </div>
                  <div className="field">
                    <label>Industry</label>
                    <select
                      value={form.industry}
                      onChange={update("industry")}
                      disabled={submitting}
                    >
                      <option>Law Firm</option>
                      <option>Medical Clinic</option>
                      <option>Accounting / Tax</option>
                      <option>Financial Advisor</option>
                      <option>Real Estate</option>
                      <option>Property Management</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label>What would you use it for?</label>
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    placeholder="One or two tasks that take too long today, or that you'd never paste into ChatGPT."
                    disabled={submitting}
                  />
                  {errors.message && (
                    <span className="field-error">{errors.message}</span>
                  )}
                </div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    height: 50,
                    opacity: submitting ? 0.6 : 1,
                  }}
                >
                  {submitting ? "Sending..." : "Request demo"}
                  {!submitting && <Icon name="arrow-right" size={14} />}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
