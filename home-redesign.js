(() => {
  document.body.dataset.page = 'home';
  document.querySelector('header')?.replaceWith(Object.assign(document.createElement('div'), {id:'site-header'}));
  document.querySelector('footer')?.replaceWith(Object.assign(document.createElement('div'), {id:'site-footer'}));
  const main = document.querySelector('main');
  if (!main) return;
  main.innerHTML = `
    <section class="scroll-hero" aria-labelledby="home-title" data-scroll-hero>
      <div class="scroll-hero-sticky">
        <div class="scroll-scenes" aria-hidden="true">
          <figure class="scroll-scene is-active" data-scroll-scene><img src="assets/servtech-hero-poster.webp" width="1920" height="1080" alt="" fetchpriority="high"></figure>
          <figure class="scroll-scene" data-scroll-scene><img src="assets/service-valve-hq.webp" width="1400" height="900" alt=""></figure>
          <figure class="scroll-scene" data-scroll-scene><img src="assets/service-turbine-hq.webp" width="1400" height="900" alt=""></figure>
          <div class="scroll-hero-shade"></div><div class="scroll-grid"></div>
        </div>
        <div class="hero-lights" aria-hidden="true">
        <span class="plant-light red" style="--x:65.8%;--y:7.5%;--s:8px;--t:5.2s;--d:-1.1s"></span>
        <span class="plant-light red" style="--x:66.1%;--y:14%;--s:6px;--t:4.6s;--d:-3.2s"></span>
        <span class="plant-light amber" style="--x:59%;--y:27%;--s:7px;--t:5.8s;--d:-2.4s"></span>
        <span class="plant-light red" style="--x:49%;--y:33%;--s:6px;--t:4.9s;--d:-.7s"></span>
        <span class="plant-light amber" style="--x:38%;--y:35%;--s:7px;--t:5.5s;--d:-4.1s"></span>
        <span class="plant-light red" style="--x:43%;--y:41%;--s:5px;--t:4.4s;--d:-1.8s"></span>
        <span class="plant-light warm" style="--x:70%;--y:34%;--s:6px;--t:6.1s;--d:-3.7s"></span>
        <span class="plant-light amber" style="--x:82%;--y:25%;--s:5px;--t:5.1s;--d:-2.1s"></span>
        <span class="plant-light warm" style="--x:76%;--y:49%;--s:6px;--t:5.7s;--d:-.3s"></span>
        <span class="plant-light amber" style="--x:63%;--y:58%;--s:5px;--t:4.8s;--d:-3s"></span>
        <span class="plant-light warm" style="--x:57%;--y:62%;--s:5px;--t:6.3s;--d:-4.8s"></span>
        </div>
        <div class="scroll-beats">
          <article class="scroll-beat is-active" data-scroll-beat>
            <span class="eyebrow">Servtech Technical Services LLC</span><h1 id="home-title">Keeping critical industry moving.</h1><p>Valve refurbishment, rotating-equipment maintenance, precision fabrication and engineered flow-control products for demanding assets across the UAE and GCC.</p><div class="hero-actions"><a class="btn" href="quote.html">Request technical support</a><a class="btn btn-outline" href="services.html">Explore capabilities</a></div>
          </article>
          <article class="scroll-beat scroll-beat-center" data-scroll-beat>
            <span class="eyebrow">Workshop precision</span><h2>Inspect.<br>Restore.<br>Verify.</h2><p>Controlled overhaul, machining, testing and documentation return critical equipment to service with confidence.</p>
          </article>
          <article class="scroll-beat scroll-beat-final" data-scroll-beat>
            <span class="eyebrow">Field execution</span><h2>From Dubai to demanding assets across the GCC.</h2><p>Experienced teams, disciplined planning and responsive support—from planned outages to urgent field requirements.</p><div class="scroll-stats"><span><strong>1991</strong>Serving industry since</span><span><strong>Workshop + field</strong>Integrated delivery</span><span><strong>24/7</strong>Technical support</span></div>
          </article>
        </div>
        <div class="scroll-watermark" aria-hidden="true">SERVTECH</div>
        <div class="scroll-progress" aria-label="Hero story progress"><span class="is-active">01</span><span>02</span><span>03</span></div>
        <div class="scroll-cue" aria-hidden="true"><i></i> Scroll to explore</div>
      </div>
    </section>
    <div class="intro-band"><strong>Built around safe execution, technical control and dependable turnaround.</strong><span>Assess · Analyze · Act</span></div>

    <section class="home-section" id="services"><div class="section-head"><div><span class="section-kicker">Core capabilities</span><h2 class="section-heading">One technical partner. Six specialist disciplines.</h2></div><p>From workshop overhaul to shutdown support, Servtech helps owners and operators restore performance, manage risk and return critical assets to service.</p></div><div class="capability-grid">
      <a class="capability-card" href="service-valves.html"><img src="assets/service-valve-hq.webp" width="1400" height="900" loading="lazy" alt="Industrial valve refurbishment and testing in a modern workshop"><div class="capability-copy"><small>01</small><h3>Valve refurbishment &amp; testing</h3><p>Conventional and safety-valve inspection, overhaul, pressure testing and certification.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-boiler.html"><img src="assets/gas-plant.avif" width="1417" height="808" loading="lazy" alt="Modern power plant equipment supported by Servtech"><div class="capability-copy"><small>02</small><h3>Boiler maintenance</h3><p>HRSG and industrial boiler inspection, repair, tube work and outage support.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-turbine.html"><img src="assets/service-turbine-hq.webp" width="1400" height="900" loading="lazy" alt="Steam turbine rotor inspection during a planned outage"><div class="capability-copy"><small>03</small><h3>Turbine maintenance</h3><p>Mechanical maintenance for steam and gas-turbine systems and auxiliaries.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-fabrication.html"><img src="assets/service-fabrication-hq.webp" width="1400" height="900" loading="lazy" alt="Controlled stainless-steel process piping fabrication"><div class="capability-copy"><small>04</small><h3>Fabrication &amp; erection</h3><p>Industrial piping, structural steelwork and controlled on-site installation.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-machining.html"><img src="assets/service-machining-hq.webp" width="1400" height="900" loading="lazy" alt="Precision CNC machining of a critical industrial component"><div class="capability-copy"><small>05</small><h3>Machining &amp; reverse engineering</h3><p>Component restoration, dimensional capture and precision replacement parts.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-manpower.html"><img src="assets/service-manpower-hq.webp" width="1400" height="900" loading="lazy" alt="Qualified industrial maintenance team at a process facility"><div class="capability-copy"><small>06</small><h3>Technical manpower</h3><p>Qualified personnel for projects, planned shutdowns and maintenance programs.</p><b>View capability →</b></div></a>
    </div></section>

    <section class="home-section dark-surface" id="industries"><div class="section-head"><div><span class="section-kicker">Industries served</span><h2 class="section-heading">Experience where reliability is non-negotiable.</h2></div><p>Technical services and products aligned to high-pressure, high-temperature and critical flow-control environments.</p></div><div class="industry-grid">
      <article class="industry-item"><span>01</span><h3>Power generation</h3><p>Boilers, turbines, valves and outage support.</p></article><article class="industry-item"><span>02</span><h3>Oil &amp; gas</h3><p>Critical valves, piping and field service.</p></article><article class="industry-item"><span>03</span><h3>Water &amp; utilities</h3><p>Reliable mechanical assets and flow control.</p></article><article class="industry-item"><span>04</span><h3>Petrochemical</h3><p>Maintenance for demanding process duty.</p></article><article class="industry-item"><span>05</span><h3>Marine &amp; offshore</h3><p>Responsive support for harsh environments.</p></article>
    </div></section>

    <section class="home-section grey" id="about"><div class="proof-layout"><div class="proof-media"><img src="assets/valve.jpg" loading="lazy" alt="Servtech workshop and service operations"><div class="proof-stamp"><strong>Dubai</strong><span>Workshop capability with regional field reach</span></div></div><div class="proof-copy"><span class="section-kicker">About Servtech</span><h2 class="section-heading">Practical engineering. Accountable delivery.</h2><p class="lead">Servtech Technical Services LLC combines experienced technicians, workshop resources and field execution to support the full maintenance lifecycle of industrial mechanical assets.</p><ul class="check-list"><li>Workshop and on-site service capability</li><li>Planned shutdown and emergency response support</li><li>Inspection, repair, testing and documentation</li><li>OEM-quality parts and reverse-engineering support</li><li>Quality, health, safety and environmental controls</li></ul><a class="btn" href="about.html">Meet Servtech</a></div></div></section>

    <section class="home-section dark-surface" id="projects"><div class="section-head"><div><span class="section-kicker">Selected experience</span><h2 class="section-heading">Field-proven across complex operating assets.</h2></div><p>Representative maintenance and fabrication work delivered for industrial operators in power, utilities, oil and gas.</p></div><div class="project-grid-new">
      <a class="project-card-new" href="projects.html"><img src="assets/projects/jebel-ali.jpg" loading="lazy" alt="Maintenance work at Jebel Ali Power Station"><div><small>Power generation</small><h3>Annual boiler, auxiliary and fuel-gas system overhaul support</h3></div></a>
      <a class="project-card-new" href="projects.html"><img src="assets/projects/emirates-aluminium.jpg" loading="lazy" alt="Valve overhaul project"><div><small>Heavy industry</small><h3>Steam and miscellaneous valve overhaul</h3></div></a>
      <a class="project-card-new" href="projects.html"><img src="assets/projects/mab-oilfield.jpg" loading="lazy" alt="Structural steel fabrication"><div><small>Oil &amp; gas</small><h3>Structural steel fabrication</h3></div></a>
      <a class="project-card-new" href="projects.html"><img src="assets/projects/dewa-ro.jpg" loading="lazy" alt="Valve replacement at reverse osmosis plant"><div><small>Water</small><h3>Super duplex plug-valve replacement</h3></div></a>
      <a class="project-card-new" href="projects.html"><img src="assets/projects/dewa-jebel-ali.jpg" loading="lazy" alt="DEWA Jebel Ali industrial facility"><div><small>Utilities</small><h3>Steam and feed-water system works</h3></div></a>
    </div></section>

    <section class="home-section"><div class="section-head"><div><span class="section-kicker">How we work</span><h2 class="section-heading">Controlled from first inspection to return to service.</h2></div><p>A disciplined workflow helps maintain traceability, safety and technical clarity throughout each assignment.</p></div><div class="process-grid"><article><h3>Assess</h3><p>Review operating conditions, equipment history, urgency and required standards.</p></article><article><h3>Analyze</h3><p>Inspect, diagnose and define the most practical repair or service scope.</p></article><article><h3>Execute</h3><p>Deliver controlled workshop or field work with documented quality checks.</p></article><article><h3>Verify</h3><p>Test, certify where applicable, report findings and support reliable handover.</p></article></div></section>

    <section class="home-section client-section" aria-labelledby="client-heading"><div class="section-head"><div><span class="section-kicker">Selected customers</span><h2 class="section-heading" id="client-heading">Trusted across critical industries.</h2></div><p>Organizations and project stakeholders represented across Servtech's established industrial service experience.</p></div>
      <div class="client-strip" aria-label="Selected customers and project stakeholders">
        <div><img src="assets/partners/800113_logo.png" loading="lazy" alt="EPPCO"></div>
        <div><img src="assets/partners/s1-2-1.png" loading="lazy" alt="National Petroleum Construction Company, NPCC"></div>
        <div><img src="assets/partners/dewa.png" loading="lazy" alt="Dubai Electricity and Water Authority, DEWA"></div>
        <div><img src="assets/partners/sapco.png" loading="lazy" alt="Shuweihat Asia Power Company, SAPCO"></div>
        <div><img src="assets/partners/SEWA.png" loading="lazy" alt="Sharjah Electricity, Water and Gas Authority"></div>
        <div><img src="assets/partners/enoc-logo-png-transparent.png" loading="lazy" alt="Emirates National Oil Company, ENOC"></div>
        <div><img src="assets/partners/Siemens_Energy_logo_BG_white_svg.png" loading="lazy" alt="Siemens Energy"></div>
        <div><img src="assets/partners/CAE-Logo-PNG.png" loading="lazy" alt="Control and Applications Emirates"></div>
        <div><img src="assets/partners/fapco.png" loading="lazy" alt="Fujairah Asia Power Company"></div>
        <div><img src="assets/partners/PrimeSouth-Logo-1.png" loading="lazy" alt="PrimeSouth"></div>
        <div><img src="assets/partners/emirates-steel-logo.png" loading="lazy" alt="Emirates Steel"></div>
        <div><img src="assets/partners/ADWEA.png" loading="lazy" alt="Abu Dhabi Water and Electricity Authority"></div>
        <div><img src="assets/partners/goltens-logo.png" loading="lazy" alt="Goltens"></div>
        <div><img src="assets/partners/sembcorp.png" loading="lazy" alt="Sembcorp"></div>
        <div><img src="assets/partners/1200px-ADNOC_logo_svg.png" loading="lazy" alt="Abu Dhabi National Oil Company, ADNOC"></div>
        <div><img src="assets/partners/YTL_Power_International.png" loading="lazy" alt="YTL Power International"></div>
        <div><img src="assets/partners/2750CB2A-5056-B757-5CE215326280E9AE-logo.png" loading="lazy" alt="Emirates Global Aluminium, EGA"></div>
        <div><img src="assets/partners/Hyundai_Engineering_&_Construction_logo.png" loading="lazy" alt="Hyundai Engineering and Construction"></div>
        <div><img src="assets/partners/RCG.png" loading="lazy" alt="RCG"></div>
        <div><img src="assets/partners/TARGET.png" loading="lazy" alt="TARGET Engineering Construction Company"></div>
      </div>
    </section>

    <section class="conversion"><div><span class="section-kicker">Start a technical conversation</span><h2>Have an asset, outage or product requirement?</h2><p>Send the equipment details, service location and required schedule. Our team will review the scope and respond with the next practical step.</p></div><a class="btn" href="quote.html">Request a quotation</a></section>`;
  main.querySelectorAll('.intro-band, .home-section, .conversion').forEach((section) => section.classList.add('reveal'));
})();
