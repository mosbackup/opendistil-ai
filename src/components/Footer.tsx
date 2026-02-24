const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <path d="M10 4H18M11 4V10L5 22C4.5 23 5.2 24 6.3 24H21.7C22.8 24 23.5 23 23 22L17 10V4" stroke="hsl(0 72% 51%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-bold text-foreground">Open<span className="text-gradient-red">Distil</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Distillation-as-a-Service for the next generation of AI labs.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>One Sansome Street, Suite 1400</p>
              <p>San Francisco, CA 94104</p>
              <a href="mailto:info@opendistil.com" className="text-primary hover:text-primary/80 transition-colors block mt-2">
                info@opendistil.com
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Find Us</h4>
            <div className="rounded-lg overflow-hidden border border-border h-[160px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8!2d-122.4011!3d37.7907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580627b5ea0c3%3A0x3c1a22ef39a39e39!2sOne%20Sansome%20Street%2C%20San%20Francisco%2C%20CA%2094104!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OpenDistil Office Location"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 OpenDistil, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
