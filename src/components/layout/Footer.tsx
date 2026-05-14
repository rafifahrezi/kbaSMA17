export function Footer() {
  const socialLinks = [
    {
      name: "Facebook Group",
      url: "https://facebook.com/groups/152842648121456",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "@kba17.jakbaralumni",
      url: "https://instagram.com/kba17.jakbaralumni",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.779.263-1.618.634-2.223 1.24-.606.606-.977 1.444-1.24 2.224-.267.788-.468 1.658-.53 2.936C.032 8.333.016 8.74.016 12s.015 3.667.072 4.947c.06 1.277.261 2.148.528 2.936.263.78.634 1.617 1.24 2.224.606.606 1.444.977 2.224 1.24.788.268 1.657.468 2.936.53 1.28.057 1.687.072 4.947.072s3.667-.015 4.947-.072c1.280-.062 2.149-.262 2.936-.53.78-.263 1.617-.634 2.224-1.24.606-.606.977-1.444 1.24-2.224.268-.788.468-1.658.53-2.936.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.062-1.277-.262-2.149-.53-2.936-.263-.78-.634-1.618-1.24-2.224-.606-.606-1.444-.977-2.224-1.24-.788-.268-1.658-.468-2.936-.53C15.667.048 15.26.032 12 .032zm0 2.16c3.203 0 3.585.009 4.849.064 1.17.054 1.805.244 2.227.408.56.217.96.477 1.382.896.419.42.679.822.896 1.381.164.422.354 1.057.408 2.227.055 1.266.064 1.645.064 4.849s-.009 3.585-.064 4.849c-.054 1.17-.244 1.805-.408 2.227-.217.56-.477.96-.896 1.382-.42.419-.822.679-1.381.896-.422.164-1.057.354-2.227.408-1.266.055-1.645.064-4.849.064s-3.585-.009-4.849-.064c-1.17-.054-1.805-.244-2.227-.408-.56-.217-.96-.477-1.382-.896-.419-.42-.679-.822-.896-1.381-.164-.422-.354-1.057-.408-2.227-.055-1.266-.064-1.645-.064-4.849s.009-3.585.064-4.849c.054-1.17.244-1.805.408-2.227.217-.56.477-.96.896-1.382.42-.419.822-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.266-.055 1.645-.064 4.849-.064l-.003-.002z" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="18.406" cy="5.594" r="0.9" />
        </svg>
      ),
    },
    {
      name: "alumni17.jakarta.barat",
      url: "https://www.tiktok.com/@alumni17.jakarta.barat",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.2 0 .41.02.6.05V9.86a5.96 5.96 0 0 0-.6-.05A5.6 5.6 0 0 0 5 15.26a5.6 5.6 0 0 0 5.6 5.6 5.6 5.6 0 0 0 5.6-5.6V12.64a7.6 7.6 0 0 0 4.59 1.5v-3.68a4.8 4.8 0 0 1-.59-.05z" />
        </svg>
      ),
    },
    {
      name: "KBA17-SMA NEGERI 17 JAKARTA",
      url: "https://www.youtube.com/@LintasAlumni_SMAN17JAKBAR",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-card border-t py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="./images/logo.png" alt="KBA17 Logo" className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-display font-bold" />
              <span className="font-display font-bold text-lg">KBA17</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Keluarga Besar Alumni SMA Negeri 17 Jakarta Barat.
              Rumah bersama untuk semua angkatan dari Blandongan hingga Mangga Besar.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Kontak</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>JL. Mangga Besar IV/I No.27, Taman Sari, Kec. Taman Sari, Kota Jakarta Barat Prov. D.K.I. Jakarta.</p>
              <p>Hotline : 0852 1553 6771</p>
            </address>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Sosial Media</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Langsung klik dan ikuti kami di berbagai platform
            </p>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
                >
                  <span className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
                    {social.icon}
                  </span>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 KBA17. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
