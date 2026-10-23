(() => {
  const page = document.body.dataset.page || '';
  if (!document.querySelector('link[href^="redesign.css"]')) {
    const css = document.createElement('link'); css.rel = 'stylesheet'; css.href = 'redesign.css?v=2'; document.head.appendChild(css);
  }
  const header = document.querySelector('#site-header');
  if (header) header.innerHTML = `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <header class="site-shell">
      <div class="header-inner">
        <a class="brand" href="index.html" aria-label="Servtech home"><img src="assets/logo-transparent.png" width="2169" height="725" alt="Servtech Technical Services LLC"></a>
        <button class="menu" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open navigation"><span></span></button>
        <nav id="site-nav" aria-label="Primary navigation">
          <a data-nav="home" href="index.html">HOME</a>
          <div class="nav-group"><button type="button" aria-expanded="false">COMPANY <span aria-hidden="true">⌄</span></button><div class="nav-dropdown"><a href="about.html">About Servtech</a><a href="who-we-are.html">Who we are</a><a href="why-join-us.html">Why join us</a><a href="projects.html">Project experience</a></div></div>
          <div class="nav-group"><button type="button" aria-expanded="false">SERVICES <span aria-hidden="true">⌄</span></button><div class="nav-dropdown"><a href="services.html">All industrial services</a><a href="service-valves.html">Valve refurbishment &amp; testing</a><a href="service-boiler.html">Boiler maintenance</a><a href="service-turbine.html">Turbine maintenance</a><a href="service-fabrication.html">Fabrication &amp; erection</a><a href="service-machining.html">Machining &amp; reverse engineering</a><a href="service-manpower.html">Technical manpower</a></div></div>
          <div class="nav-group"><button type="button" data-nav="products" aria-expanded="false">PRODUCTS <span aria-hidden="true">⌄</span></button><div class="nav-dropdown"><a href="products.html">Authorized brands overview</a><a href="zhejiang-coosai-valve.html">Zhejiang Coosai Valve</a><a href="khd-huadu-valve.html">KHD Huadu Valve</a><a href="lixin-valve.html">Lixin Valve</a><a href="rovv-shanghai-rogers.html">ROVV Shanghai Rogers</a><a href="huahang-filtration.html">Huahang Filtration</a></div></div>
          <a data-nav="projects" href="projects.html">PROJECTS</a><a data-nav="contact" href="contact.html">CONTACT</a><a class="mobile-quote" href="quote.html">GET A QUOTE</a>
        </nav>
        <div class="header-actions"><a class="header-phone" href="tel:+97142355660" aria-label="Call Servtech at +971 4 235 5660"><span>24/7 SUPPORT</span><strong>+971 4 235 5660</strong></a><a class="nav-cta" href="quote.html">GET A QUOTE</a></div>
      </div>
    </header>`;
  const footer = document.querySelector('#site-footer');
  if (footer) footer.innerHTML = `<footer class="site-footer">
    <div class="footer-intro"><img src="assets/logo-original.avif" width="190" height="60" alt="Servtech Technical Services LLC"><p>Mechanical maintenance, valve service, engineered products and field support for critical industrial assets across the UAE and GCC.</p></div>
    <div><h4>Capabilities</h4><a href="service-valves.html">Valve services</a><a href="service-boiler.html">Boiler maintenance</a><a href="service-turbine.html">Turbine maintenance</a><a href="service-fabrication.html">Fabrication</a><a href="service-machining.html">Machining</a></div>
    <div><h4>Contact</h4><p>274-106 Al Qusais Industrial Area 4<br>Dubai, United Arab Emirates</p><a href="tel:+97142355660">+971 4 235 5660</a><a href="tel:+97142672335">+971 4 267 2335</a><a href="mailto:info@servtech.ae">info@servtech.ae</a></div>
    <div class="footer-social"><span>Follow Servtech</span><div class="footer-social-links"><a href="https://www.facebook.com/profile.php?id=100082945436260" target="_blank" rel="noopener noreferrer" aria-label="Servtech on Facebook">f</a><a href="https://www.linkedin.com/company/80246597/" target="_blank" rel="noopener noreferrer" aria-label="Servtech on LinkedIn">in</a><a href="https://www.instagram.com/servtech_valve/" target="_blank" rel="noopener noreferrer" aria-label="Servtech on Instagram">◎</a></div></div>
    <small><span>© <span id="year"></span> Servtech Technical Services LLC</span><span>Engineering reliability since 1991 · Dubai, UAE</span></small>
  </footer>`;
  document.querySelector('[data-nav="' + page + '"]')?.classList.add('active');
  document.querySelector('main')?.setAttribute('id', 'main-content');
  if (!document.querySelector('link[rel="canonical"]')) { const c=document.createElement('link'); c.rel='canonical'; c.href=`https://servtech.ae/${location.pathname.split('/').pop() || 'index.html'}`; document.head.appendChild(c); }
  if (!document.querySelector('meta[name="robots"]')) { const r=document.createElement('meta'); r.name='robots'; r.content='index, follow, max-image-preview:large'; document.head.appendChild(r); }
})();
