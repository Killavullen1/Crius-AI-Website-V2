// Sections: Nav, Hero, Logos, HowItWorks, ROI+Calculator, Integrations, Testimonials, FAQ, Demo, Footer
const { useState: useStateS, useMemo: useMemoS } = React;

/* ---------- NAV ---------- */
function CriusMark({ variant = 'dark' }) {
  const src = variant === 'light' ? 'assets/crius-mark-light.png' : 'assets/crius-mark-dark.png';
  return <img src={src} alt="Crius" />;
}

function Nav({ tab, setTab }) {
  const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'platform', label: 'Platform' },
  { id: 'build', label: 'Build' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }];

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" onClick={(e) => {e.preventDefault();setTab('home');}} className="logo">
          <span className="logo-mark" aria-hidden="true"><CriusMark /></span>
          <span>Crius <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>AI</em></span>
        </a>
        <div className="nav-links">
          {tabs.map((t) =>
          <a key={t.id} href={`#${t.id}`} onClick={(e) => {e.preventDefault();setTab(t.id);}}
          style={{ color: tab === t.id ? 'var(--accent)' : undefined, fontWeight: tab === t.id ? 500 : 400 }}>
              {t.label}
            </a>
          )}
        </div>
        <div className="nav-cta">
          <a href="#" onClick={(e) => {e.preventDefault();setTab('contact');}} className="btn btn-primary" style={{ padding: '10px 16px' }}>Book a Demo <IconArrow /></a>
        </div>
      </div>
    </nav>);

}

window.CriusMark = CriusMark;

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="hero container">
      <div className="hero-top">
        <div>
          <span className="eyebrow" style={{ marginBottom: 28, display: 'inline-flex' }}>Built for Foresight · Designed for Growth</span>
          <h1 style={{ marginTop: 24 }}>
            Operational intelligence.<br />
            Bespoke AI. <em>Built in Ireland.</em>
          </h1>
          <p style={{ marginTop: 28, fontSize: 17, color: 'var(--ink-3)', maxWidth: '52ch', lineHeight: 1.5 }}>Crius is an Irish AI company with two products live in the real world. The Crius Platform helps construction, engineering and hospitality teams stay on top of stock and day-to-day operations. Crius Build delivers custom AI assistants for senior professionals in regulated industries.</p>
          <div className="hero-cta">
            <a href="#" onClick={(e) => {e.preventDefault();window.__setTab && window.__setTab('contact');}} className="btn btn-primary">Book a Demo <IconArrow /></a>
            <a href="#" onClick={(e) => {e.preventDefault();window.__setTab && window.__setTab('platform');}} className="btn btn-ghost">See the platform</a>
          </div>
        </div>
        <div>
          <p className="lede">Crius looks at the data your business already produces, picks up the patterns that lead to problems, and gives you a heads-up before they hit the bottom line. Live today across construction, multi-site hospitality, and a four-agent platform built for a senior pharmaceutical consultant.</p>
          <div className="hero-meta">
            <div className="meta-item">
              <div className="k">Crius Platform</div>
              <div className="v" style={{ fontSize: 32, lineHeight: 1.15 }}>Construction &amp; hospitality</div>
              <div className="s">predictive stock and operations intelligence</div>
            </div>
            <div className="meta-item">
              <div className="k">Crius Build</div>
              <div className="v" style={{ fontSize: 32, lineHeight: 1.15 }}>Bespoke AI agents</div>
              <div className="s">for pharma, finance, legal and healthcare</div>
            </div>
            <div className="meta-item">
              <div className="k">Based</div>
              <div className="v" style={{ fontSize: 32, lineHeight: 1.15 }}>Cork, Ireland</div>
              <div className="s">deployed in production with paying clients</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="app-shot hero-shot">
          <img src="assets/app-dashboard.png" alt="Crius dashboard, sales, inventory and weather impact at a glance" />
        </div>
      </div>
    </section>);

}

/* ---------- LOGO STRIP ---------- */
function LogoStrip() {
  const clients = [
  { name: 'Springfort Hall', tag: 'Hotels · Munster' },
  { name: 'Regional hotel collection', tag: 'Hotels · Leinster' },
  { name: 'Bridgewater Construction', tag: 'Construction · Ireland' },
  { name: 'launchhub.ie', tag: 'Consulting project' }];

  return (
    <section className="section-tight" id="customers">
      <div className="container">
        <div className="logo-strip">
          <div className="label">Piloting with operators<br />across Ireland.</div>
          <div className="logos">
            {clients.map((c, i) =>
            <div key={i} className="logo-cell">
                <div>
                  {c.name}
                  <div className="tag">{c.tag}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- SECTION HEAD ---------- */
function SecHead({ num, eyebrow, title, lede }) {
  return (
    <div className="sec-head">
      <div>
        <span className="num">{num} · {eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <div>
        <p className="lede">{lede}</p>
      </div>
    </div>);

}

/* ---------- PLATFORM (Construction + Hospitality tabs) ---------- */
function Platform() {
  const [vertical, setVertical] = useStateS('construction');
  return (
    <section className="section" id="platform">
      <div className="container">
        <SecHead
          num="§01"
          eyebrow="The Crius Platform"
          title="Predictive stock and operations intelligence."
          lede="Crius takes the data you already produce and uses it to spot the things that cause stock-outs, waste and lost margin. You get a clear heads-up before they show up on the books." />
        

        <div className="vertical-switch">
          <button
            className={`vswitch ${vertical === 'construction' ? 'active' : ''}`}
            onClick={() => setVertical('construction')}>
            
            <span className="vswitch-k">For</span>
            <span className="vswitch-t">Construction &amp; engineering</span>
            <span className="vswitch-s">MEP contractors, multi-site project firms</span>
          </button>
          <button
            className={`vswitch ${vertical === 'hospitality' ? 'active' : ''}`}
            onClick={() => setVertical('hospitality')}>
            
            <span className="vswitch-k">For</span>
            <span className="vswitch-t">Hospitality operators</span>
            <span className="vswitch-s">multi-site cafés, restaurants, hotel groups</span>
          </button>
        </div>

        {vertical === 'construction' ? <ConstructionModules /> : <Modules />}

        <div className="section-cta">
          <a href="#" onClick={(e) => {e.preventDefault();window.__setTab && window.__setTab('contact');}} className="btn btn-primary">Book a Demo <IconArrow /></a>
        </div>
      </div>
    </section>);

}

/* ---------- CONSTRUCTION MODULES ---------- */
function ConstructionModules() {
  const [active, setActive] = useStateS(0);
  const mods = [
  {
    k: '01',
    t: 'Material forecasting',
    title: 'Know what materials you need, before site asks for them.',
    body: 'Crius reads your build programme, drawings, BOQs and past site usage, and works out what you will need week by week and site by site. Procurement sees the call-off coming. No overordering, no last-minute price uplifts from suppliers.',
    bullets: [
    'Material take-offs tied to your build programme',
    'Demand worked out per work package and per site',
    'Reorder alerts that take supplier lead times into account',
    'Differences against the original BOQ, flagged'],

    preview: 'assets/app-construction-workpackage.png',
    previewAlt: 'Crius Construction Edition, Slab Pour Zone A work package with bill of materials tracked per m²'
  },
  {
    k: '02',
    t: 'Multi-project stock visibility',
    title: 'Every stock requisition, every site, one view.',
    body: 'Live stock figures across yards, containers and active sites. Goods received notes and requisitions flow in from the systems you already use. Crius matches them up, removes duplicates, and shows you what is actually on hand against what has already been committed.',
    bullets: [
    'Stock figures for yards, containers and each site',
    'Goods received notes matched against purchase orders',
    'Suggestions for moving stock between sites',
    'How long each item has been on site, and what it is costing you'],

    preview: 'assets/app-construction-stock-real.png',
    previewAlt: 'Crius Construction Edition stock catalogue at Dublin Docklands Commercial Development with cost per unit and reorder thresholds'
  },
  {
    k: '03',
    t: 'Loss & wastage detection',
    title: 'Catch wastage and losses the day they happen.',
    body: 'Every day, Crius compares what was actually used on site to what should have been used, broken down by site and work package. It flags the patterns that point to losses (miscoded GRNs, wastage, the build slipping behind) while you still have time to do something about it.',
    bullets: [
    'Daily check of expected vs. actual use',
    'Loss patterns spotted by work package',
    'Early warning when the build starts slipping',
    'Drill down by crew, shift or supplier'],

    preview: 'assets/app-construction-requisitions.png',
    previewAlt: 'Crius Construction Edition requisitions, Quick Draw deducting from stock with permanent reference history'
  },
  {
    k: '04',
    t: 'Procurement intelligence',
    title: 'Real prices, real lead times, real supplier performance.',
    body: 'Crius keeps an eye on every purchase order and goods received note to track what your suppliers actually deliver, at what price, and how often they get it right. Your procurement team walks into the next negotiation with the numbers already in hand.',
    bullets: [
    'Real lead times per supplier and product',
    'Landed cost compared across your projects',
    'Supplier scoring on time and in full',
    'Reorder timing matched to your build programme'],

    preview: 'assets/app-construction-alerts.png',
    previewAlt: 'Crius Construction Edition reorder alerts, Cement Bag out of stock with one-tap acknowledge and resolve'
  }];

  const m = mods[active];
  return (
    <div className="modules-wrap">
      <div className="modules-tabs">
        {mods.map((mm, i) =>
        <button key={i} className={`modules-tab ${i === active ? 'active' : ''}`} onClick={() => setActive(i)}>
            <span className="tab-k">Module {mm.k}</span>
            <span className="tab-t">{mm.t}</span>
          </button>
        )}
      </div>
      <div className="modules-body">
        <div className="modules-copy">
          <span className="eyebrow">{m.t}</span>
          <h3 dangerouslySetInnerHTML={{ __html: m.title }}></h3>
          <p>{m.body}</p>
          <ul className="modules-list">
            {m.bullets.map((b, i) =>
            <li key={i}><span className="dot"></span>{b}</li>
            )}
          </ul>
        </div>
        <div className="modules-preview">
          <ScreenshotPreview src={m.preview} alt={m.previewAlt} label={`Construction · ${m.t}`} />
        </div>
      </div>
    </div>);

}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
  {
    n: 'Step 01',
    t: 'Connect',
    p: 'Plug Crius into your POS, payroll, supplier portals and booking tools. No rip-and-replace; we work with what you already have.'
  },
  {
    n: 'Step 02',
    t: 'Learn',
    p: 'Crius learns from up to four years of your own data and local demand signals, building a baseline for every venue, site and shift.'
  },
  {
    n: 'Step 03',
    t: 'Run',
    p: 'Rotas, re-orders and prep volumes publish automatically. Managers approve by exception, not by default.'
  },
  {
    n: 'Step 04',
    t: 'Improve',
    p: 'Weekly loops re-tune forecasts, PAR levels and labour mix. You get compounding margin back, not a one-off gain.'
  }];

  return (
    <section className="section" id="how" style={{ background: 'var(--bg-sunk)' }}>
      <div className="container">
        <SecHead
          num="§02"
          eyebrow="How it works"
          title="Live fast. Improving every week after."
          lede="No waterfall implementation. No twelve-month rollout. Crius goes live on one venue, proves itself, and rolls across the estate from there." />
        
        <div className="steps">
          {steps.map((s, i) =>
          <div key={i} className="step">
              <span className="n">{s.n}</span>
              <h4>{s.t}</h4>
              <p>{s.p}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- ROI + CALCULATOR ---------- */
function ROI() {
  const [sites, setSites] = useStateS(6);
  const [avgRev, setAvgRev] = useStateS(45000); // weekly revenue per site
  const [wastePct, setWastePct] = useStateS(6); // current waste % of revenue
  const [wasteImprove, setWasteImprove] = useStateS(1.0); // pts you assume Crius recovers
  const [laborImprove, setLaborImprove] = useStateS(1.0); // pts of labor efficiency you assume
  const [adminHrs, setAdminHrs] = useStateS(8); // hrs/wk admin reclaimed per venue (your assumption)

  const wasteDelta = Math.min(wasteImprove, wastePct);
  const newWastePct = wastePct - wasteDelta;

  const annualRev = avgRev * 52 * sites;
  const wasteSave = Math.round(annualRev * (wasteDelta / 100));
  const laborSave = Math.round(annualRev * (laborImprove / 100));
  const adminSave = Math.round(adminHrs * 28 * 52 * sites);
  const total = laborSave + wasteSave + adminSave;

  return (
    <section className="section" id="results">
      <div className="container">
        <SecHead
          num="§03"
          eyebrow="Model your impact"
          title="Build the case on your own numbers."
          lede="Every input below is yours to set. Use it as a back-of-envelope model, then book a demo and we'll work the figures against your actual estate." />
        

        <div className="roi-grid">
          <div className="metrics">
            <div className="metric">
              <div className="k">What you control</div>
              <div className="v" style={{ fontSize: 32, lineHeight: 1.15 }}>Labour, waste, admin time</div>
              <div className="s">the three line items hospitality operators move first</div>
            </div>
            <div className="metric">
              <div className="k">How Crius helps</div>
              <div className="v" style={{ fontSize: 32, lineHeight: 1.15 }}>One source of truth</div>
              <div className="s">forecasts, rotas and stock from the same data</div>
            </div>
            <div className="metric">
              <div className="k">What you'll see</div>
              <div className="v" style={{ fontSize: 32, lineHeight: 1.15 }}>Quieter back office</div>
              <div className="s">managers spending the saved hours on the floor, not the laptop</div>
            </div>
            <div className="metric">
              <div className="k">How we prove it</div>
              <div className="v" style={{ fontSize: 32, lineHeight: 1.15 }}>Pilot first</div>
              <div className="s">one venue, measured against your own baseline, before you scale</div>
            </div>
          </div>

          <div className="roi-calc">
            <h4>Project your ROI</h4>
            <div className="sub">All inputs are your assumptions, change them freely.</div>

            <div className="roi-row">
              <label>Number of venues</label>
              <input type="range" min="1" max="40" step="1" value={sites} onChange={(e) => setSites(+e.target.value)} className="roi-slider" />
              <span className="value">{sites}</span>
            </div>
            <div className="roi-row">
              <label>Avg. weekly revenue per venue</label>
              <input type="range" min="10000" max="120000" step="2500" value={avgRev} onChange={(e) => setAvgRev(+e.target.value)} className="roi-slider" />
              <span className="value">€{(avgRev / 1000).toFixed(1)}k</span>
            </div>
            <div className="roi-row">
              <label>Current waste (% of revenue)</label>
              <input type="range" min="2" max="12" step="0.5" value={wastePct} onChange={(e) => setWastePct(+e.target.value)} className="roi-slider" />
              <span className="value">{wastePct}%</span>
            </div>
            <div className="roi-row">
              <label>Waste recovery you'd target (pts)</label>
              <input type="range" min="0" max="4" step="0.1" value={wasteImprove} onChange={(e) => setWasteImprove(+e.target.value)} className="roi-slider" />
              <span className="value">{wasteImprove.toFixed(1)} pts</span>
            </div>
            <div className="roi-row">
              <label>Labour efficiency you'd target (pts of revenue)</label>
              <input type="range" min="0" max="4" step="0.1" value={laborImprove} onChange={(e) => setLaborImprove(+e.target.value)} className="roi-slider" />
              <span className="value">{laborImprove.toFixed(1)} pts</span>
            </div>
            <div className="roi-row">
              <label>Admin hrs reclaimed per venue / week</label>
              <input type="range" min="0" max="30" step="1" value={adminHrs} onChange={(e) => setAdminHrs(+e.target.value)} className="roi-slider" />
              <span className="value">{adminHrs} hrs</span>
            </div>

            <div style={{ marginTop: 14, padding: 14, background: 'var(--accent-soft)', border: '1px solid var(--rule)', borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Modelled waste</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--accent)', marginTop: 4 }}>
                  {wastePct.toFixed(1)}% → {newWastePct.toFixed(1)}%
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Points recovered</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--ink)', marginTop: 4 }}>−{wasteDelta.toFixed(1)} pts</div>
              </div>
            </div>

            <div style={{ marginTop: 16, border: '1px solid var(--rule)', borderRadius: 10, background: 'var(--bg)', overflow: 'hidden' }}>
              {[
              ['Waste recovered', wasteSave, `−${wasteDelta.toFixed(1)} pts of revenue`],
              ['Labour efficiency', laborSave, `−${laborImprove.toFixed(1)} pts of revenue`],
              ['Admin time reclaimed', adminSave, `~${(adminHrs * sites).toLocaleString()} hrs/wk × €28`]].
              map(([k, v, s], i) =>
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: i < 2 ? '1px solid var(--rule)' : 0 }}>
                  <div>
                    <div style={{ fontSize: 13, color: 'var(--ink)' }}>{k}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 2 }}>{s}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--ink)' }}>€{v.toLocaleString()}</div>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', background: 'var(--accent)', color: 'var(--bg)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em' }}>Total annualised</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 28, lineHeight: 1 }}>€{total.toLocaleString()}</div>
              </div>
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', marginTop: 10, lineHeight: 1.5 }}>
              Illustrative only. Modelled from median 90-day outcomes. Actual results depend on current baseline, POS integration scope and venue mix.
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- RECIPE-LEVEL FEATURE ---------- */
function RecipeFeature() {
  return (
    <section className="section" style={{ background: 'var(--bg-card)' }}>
      <div className="container">
        <SecHead
          num="§02·a"
          eyebrow="Featured · Recipe-level stock"
          title="Stock management that actually manages itself."
          lede="Most inventory tools make you count. Crius watches your till instead. Every sale is matched to a recipe, and every ingredient inside that recipe is deducted from stock in real time. When an invoice arrives, we parse it and top the same stock back up. After initial setup, the loop runs itself." />
        

        <div className="recipe-shots">
          <figure className="recipe-shot">
            <div className="num">1</div>
            <img src="assets/app-recipes.png" alt="Crius stock overview, ingredients, recipes, urgent reorders, warnings" />
            <figcaption>
              <div className="cap-eye">Stock overview</div>
              <h4>Forecasting and inventory in one view.</h4>
              <p>Ingredients on hand, recipes defined, urgent reorders and low-stock warnings, all in one view so the next move is obvious.</p>
            </figcaption>
          </figure>

          <figure className="recipe-shot">
            <div className="num">2</div>
            <img src="assets/app-ingredients.png" alt="Crius ingredient list with reorder thresholds and live current stock" />
            <figcaption>
              <div className="cap-eye">Ingredients</div>
              <h4>Live levels, set thresholds.</h4>
              <p>Every raw material with its reorder point and current stock, deducted on every sale through the connected POS. Low-stock states flagged the moment they’re crossed.</p>
            </figcaption>
          </figure>

          <figure className="recipe-shot">
            <div className="num">3</div>
            <img src="assets/app-stock-overview.png" alt="Crius recipe definitions, mapping menu items to ingredient consumption" />
            <figcaption>
              <div className="cap-eye">Recipes</div>
              <h4>What each menu item consumes.</h4>
              <p>Define a recipe once (an Iced Latte is 50ml milk and 10g coffee) and Crius applies the deduction every time it sells. No spreadsheets, no manual counts.</p>
            </figcaption>
          </figure>
        </div>

        {/* Outcomes strip */}
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
          ['Zero manual counts', 'after initial setup'],
          ['Live cost of goods', 'per dish, per shift'],
          ['Shrinkage flagged', 'the day it happens'],
          ['Supplier pricing', 'benchmarked automatically']].
          map(([k, v], i) =>
          <div key={i} style={{ paddingTop: 20, borderTop: '1px solid var(--rule)' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.15 }}>{k}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 6 }}>{v}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- WHY DIFFERENT ---------- */
function WhyDifferent() {
  const points = [
  {
    k: 'Foresight, not hindsight',
    p: 'Most analytics tools tell you what went wrong after the fact. Crius shows you the issue as it forms, when it started, and what to do about it, often before it hits the bottom line.'
  },
  {
    k: 'Early-warning signals',
    p: 'Crius keeps an eye on your everyday data and picks up the patterns that lead to a stock-out, lost margin or a bottleneck, giving you time to act before it bites.'
  },
  {
    k: 'A connected system',
    p: 'Crius understands your operation as a whole, how staff, suppliers, customers and locations interact. Not dashboards that leave you guessing, but clear signals that point to root causes.'
  },
  {
    k: 'Built to keep improving',
    p: 'Every week, the model re-tunes against fresh data from your operation. The platform you run in year two is sharper than the one you started with.'
  }];

  return (
    <section className="section" style={{ background: 'var(--bg-sunk)' }}>
      <div className="container">
        <SecHead
          num="§03"
          eyebrow="Why Crius is different"
          title="Built on a fundamentally different idea."
          lede="Where other platforms simply report what went wrong, Crius tells you what's about to go wrong, and what to do about it. Foresight, not hindsight." />
        
        <div className="steps">
          {points.map((s, i) =>
          <div key={i} className="step">
              <span className="n">Difference {String(i + 1).padStart(2, '0')}</span>
              <h4>{s.k}</h4>
              <p>{s.p}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- TEAM ---------- */
function Team() {
  const team = [
  {
    name: "Rory O'Leary",
    role: 'Founder & CEO',
    initial: 'R',
    bio: 'Rory founded Crius to build the operations platform he wished existed while working in a cafe chain himself. He leads product, strategy and partnerships from Cork, and works directly with the operators and senior professionals using Crius every day.'
  },
  {
    name: 'Bill Palmer',
    role: 'Head of Outreach',
    initial: 'B',
    bio: 'Bill leads client outreach and partnerships. He works directly with business owners to understand their operations and make sure Crius delivers real, measurable value, building long-term relationships across Ireland.'
  },
  {
    name: 'Ben Norton',
    role: 'Chief Technical Officer',
    initial: 'B',
    bio: 'Ben leads all technical development at Crius. With experience in large-scale systems, he keeps the platform robust, scalable and reliable, overseeing integrations, architecture and performance.'
  }];

  return (
    <section className="section">
      <div className="container">
        <SecHead
          num="§02"
          eyebrow="The team"
          title="The people building Crius."
          lede="A small, senior team working alongside the operators who use the platform every day. Based in Cork, shipping across Ireland." />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {team.map((t, i) =>
          <div key={i} style={{ border: '1px solid var(--rule)', borderRadius: 14, padding: 32, background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--accent-soft)', color: 'var(--accent)', display: 'grid', placeItems: 'center', fontFamily: 'var(--serif)', fontSize: 32 }}>{t.initial}</div>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 26, lineHeight: 1.15 }}>{t.name}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 6 }}>{t.role}</div>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.55 }}>{t.bio}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- INTEGRATIONS ---------- */
function Integrations() {
  const items = [
  { name: 'Clover', type: 'POS', desc: 'Two-way sync · menu, orders, payments' },
  { name: 'Square', type: 'POS', desc: 'Real-time orders, refunds, payouts' },
  { name: 'CBE', type: 'POS', desc: 'Hospitality-grade EPOS integration' },
  { name: 'Connect Hospitality Consultancy', type: 'Partner', desc: 'Operational expertise from Gerard Butterly\u2019s team', partner: true }];

  return (
    <section className="section" id="integrations" style={{ background: 'var(--bg-sunk)' }}>
      <div className="container">
        <SecHead
          num="§04"
          eyebrow="Integrations &amp; partners"
          title="Plugs into the stack you already run."
          lede="Crius is POS-agnostic. We integrate natively with Clover, Square and CBE, and partner with Connect Hospitality Consultancy for operational expertise, so you keep the tools your teams know." />
        
        <div className="integrations-grid">
          {items.map((it, i) =>
          <div key={i} className={`intg ${it.partner ? 'partner' : ''}`}>
              <div className="type">{it.type}{it.partner ? ' · ★ strategic' : ''}</div>
              <div className="name">{it.name}</div>
              <div className="desc">{it.desc}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SecHead
          num="§03"
          eyebrow="What operators say"
          title="Built with the people running the floor."
          lede="We designed Crius alongside group operations directors and single-venue managers. Their feedback is the product." />
        
        <div className="quotes">
          <div className="quote big">
            <div className="mark">“</div>
            <p>
              I would take this product over anything else on the market right now.
            </p>
            <div className="cite">
              <div className="av">M</div>
              <div className="who">
                <div className="name">Operations Manager</div>
                <div className="role">Cork-based café chain</div>
              </div>
            </div>
          </div>

          <div className="quote">
            <div className="mark">“</div>
            <p>
              The stock management system is the best I have seen on the market.
            </p>
            <div className="cite">
              <div className="av">G</div>
              <div className="who">
                <div className="name">Gerard Butterly</div>
                <div className="role">Connect Hospitality Consultancy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- FAQ ---------- */
function FAQ() {
  const [open, setOpen] = useStateS(0);
  const items = [
  {
    q: 'Does Crius replace my POS or ERP?',
    a: 'No. Crius sits on top of the systems you already run, such as Clover, Square, CBE, COINS and Causeway. We integrate via official APIs and normalise the data so every site or venue, regardless of stack, rolls into one view.'
  },
  {
    q: 'How long does implementation take?',
    a: 'A single venue or site can go live quickly from contract, including historical data ingestion. Multi-site rollouts proceed site-by-site at a pace that fits the operator.'
  },
  {
    q: 'Where is my data held?',
    a: 'Data is held in EU region data centres, encrypted in transit and at rest. We are GDPR compliant and operator data is never used to train cross-customer models.'
  },
  {
    q: 'What does pricing look like?',
    a: 'Pricing is per-site, banded by revenue or project value, with volume discounts for multi-site groups. No per-seat fees. A dedicated implementation manager is included in every contract.'
  },
  {
    q: 'Can we start with one module?',
    a: 'Yes. Most operators begin with the module that hurts most (stock visibility, material forecasting or recipe-level inventory) and add the rest once the first is settled. The same underlying model powers every module, so each one makes the next stronger.'
  },
  {
    q: 'Do the AI decisions require approval?',
    a: 'By default, yes. Every autonomous action (reorder, rota publish, price change) is draft-by-default with a one-click approval. Operators can enable full autonomy on a per-workflow basis once they trust the baseline.'
  }];

  return (
    <section className="section" style={{ background: 'var(--bg-sunk)' }}>
      <div className="container">
        <SecHead
          num="§04"
          eyebrow="Frequently asked"
          title="The questions operators ask us first."
          lede="If your question isn't here, our team answers within the business day. Most answers start with 'yes, here's how.'" />
        
        <div className="faq">
          {items.map((it, i) =>
          <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="faq-plus"><IconPlus size={12} /></span>
              </button>
              <div className="faq-a">{it.a}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- BUILD (Crius Build) ---------- */
function Build() {
  return (
    <section className="section build-section" id="build">
      <div className="container">
        <SecHead
          num="§01"
          eyebrow="Crius Build"
          title="Your industry. Your workflow. Your AI platform."
          lede="A bespoke service for senior professionals in regulated industries. Crius Build designs, builds and deploys custom AI agent platforms; prompted to your domain, integrated with your tools, branded for your practice, and built to evolve with how you work." />
        

        <div className="build-grid">
          <div className="build-pillar">
            <div className="build-k">01 Bespoke</div>
            <h4>Custom-prompted to your domain.</h4>
            <p>Not a chatbot. Not a generic copilot. Each agent is built around the specific decisions, deliverables and language of your practice, and refined alongside the people who use it every day.</p>
          </div>
          <div className="build-pillar">
            <div className="build-k">02 Integrated</div>
            <h4>In the tools you already use.</h4>
            <p>Microsoft 365 native, with extensions to the systems your industry actually runs on. Persistent memory across conversations. Your data stays yours, deployed in environments your IT can sign off.</p>
          </div>
          <div className="build-pillar">
            <div className="build-k">03 Powered</div>
            <h4>Claude Sonnet 4.6, with engineering around it.</h4>
            <p>The underlying model is Anthropic's Claude Sonnet 4.6. The platform around it (agents, memory, integrations, branding) is built by Crius to make a frontier model usable inside a serious professional workflow.</p>
          </div>
          <div className="build-pillar">
            <div className="build-k">04 Evolving</div>
            <h4>Built to grow with your practice.</h4>
            <p>Engagement-based, not productised. We tune the agents, extend the integrations and add capability in step with how the practice changes. The platform you have in year two is the one your practice has earned.</p>
          </div>
        </div>

        <div className="case-study">
          <div className="case-meta">
            <div className="case-tag">Case study · in production</div>
            <div className="case-title">Pharmaceutical Launch Consulting</div>
            <div className="case-sub">Currently deployed for a senior pharmaceutical launch consultant.</div>
          </div>
          <div className="case-body">
            <p>A four-agent platform built around the work of bringing a new therapy to market. Custom-branded for the consultant's practice, integrated with Microsoft 365, and powered by Claude Opus 4.6. The four agents:</p>
            <ul className="case-agents">
              <li><span className="ag-k">Agent 01</span><span className="ag-t">Launch strategy</span><span className="ag-p">Indication framing, competitive landscape, sequencing of launch milestones.</span></li>
              <li><span className="ag-k">Agent 02</span><span className="ag-t">Market access &amp; reimbursement</span><span className="ag-p">Payer archetypes, value-dossier scaffolding, country-level access pathways.</span></li>
              <li><span className="ag-k">Agent 03</span><span className="ag-t">Cross-functional launch planning</span><span className="ag-p">Workstream coordination across medical, commercial, regulatory and supply.</span></li>
              <li><span className="ag-k">Agent 04</span><span className="ag-t">Personal assistant</span><span className="ag-p">Calendar, correspondence and document drafting against the consultant's voice.</span></li>
            </ul>
          </div>
        </div>

        <div className="build-fits">
          <div className="fits-label">A fit for senior practitioners in</div>
          <div className="fits-list">
            <span>Pharma &amp; life sciences</span>
            <span>Finance</span>
            <span>Legal</span>
            <span>Healthcare</span>
            <span>Executive advisory</span>
          </div>
        </div>

        <div className="section-cta">
          <a href="#" onClick={(e) => {e.preventDefault();window.__setTab && window.__setTab('contact');}} className="btn btn-primary">Let's Talk <IconArrow /></a>
        </div>
      </div>
    </section>);

}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SecHead
          num="§01"
          eyebrow="About Crius"
          title="An Irish AI company with two production platforms."
          lede="Crius is built in Cork and deployed in demanding industries: construction and engineering teams, multi-site hospitality estates, and a four-agent pharmaceutical launch platform. Every engagement is judged on whether the numbers move, not on theory." />
        

        <Testimonials />

        <div className="section-cta">
          <a href="#" onClick={(e) => {e.preventDefault();window.__setTab && window.__setTab('contact');}} className="btn btn-primary">Book a Demo <IconArrow /></a>
        </div>
      </div>
    </section>);

}

/* ---------- CONTACT FORM ---------- */
function DemoForm() {
  const [sent, setSent] = useStateS(false);
  const [sending, setSending] = useStateS(false);
  const [error, setError] = useStateS('');
  const [form, setForm] = useStateS({ name: '', email: '', company: '', industry: '', message: '' });

  // Forminit form — submissions land in the Forminit inbox tied to contactus@crius.ie.
  const FORM_ID = 't1k0174t41w';

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setError('');
    setSending(true);
    try {
      if (typeof window.Forminit === 'undefined') {
        throw new Error("Forminit SDK didn't load. Check your connection and try again.");
      }
      const forminit = new window.Forminit();
      const fd = new FormData();
      fd.append('fi-sender-fullName', form.name);
      fd.append('fi-sender-email', form.email);
      fd.append('fi-sender-company', form.company);
      fd.append('fi-select-industry', form.industry);
      fd.append('fi-text-message', form.message);

      const { error: submitError } = await forminit.submit(FORM_ID, fd);
      if (submitError) {
        throw new Error(submitError.message || 'Submission failed');
      }
      setSent(true);
    } catch (err) {
      setError(err && err.message ? err.message : "Sorry — we couldn't send that. Please email contactus@crius.ie or try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section" id="demo">
      <div className="container">
        <div className="demo">
          <div className="demo-copy">
            <span className="eyebrow">Contact</span>
            <h2 style={{ marginTop: 20 }}>Book a demo, or just say hello.</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              We'll respond within one business day. Discovery calls are 30 minutes, direct with one of the team, on your data and your questions.
            </p>

            <div className="contact-card">
              <div className="contact-row">
                <div className="contact-k">Email</div>
                <div className="contact-v">
                  <a href="mailto:contactus@crius.ie">contactus@crius.ie</a>
                  <div className="contact-sub">general enquiries, demos and partnerships</div>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-k">Phone</div>
                <div className="contact-v">
                  <a href="tel:+353851777335">085 177 7335</a>
                  <div className="contact-sub">weekdays, Irish time</div>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-k">Based</div>
                <div className="contact-v">
                  <div>Cork, Ireland</div>
                  <div className="contact-sub">deployed across Ireland </div>
                </div>
              </div>
            </div>
          </div>

          {!sent ?
          <form className="demo-form" onSubmit={submit}>
              <div className="form-row">
                <div className="form-field">
                  <label>Full name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                </div>
                <div className="form-field">
                  <label>Work email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@yourcompany.ie" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Company</label>
                  <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Your company" />
                </div>
                <div className="form-field">
                  <label>Industry</label>
                  <select required value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })}>
                    <option value="">Select</option>
                    <option>Construction &amp; Engineering</option>
                    <option>Hospitality</option>
                    <option>Pharma &amp; Life Sciences</option>
                    <option>Finance</option>
                    <option>Legal</option>
                    <option>Healthcare</option>
                    <option>Executive advisory</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="form-row-full">
                <div className="form-field">
                  <label>What you're looking at</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="A few lines on what you'd like to discuss." rows="4"></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
                {sending ? 'Sending…' : <React.Fragment>Send message <IconArrow /></React.Fragment>}
              </button>
              {error ? <div className="form-note" style={{ color: '#b54545' }}>{error}</div> : <div className="form-note">We'll respond within one business day. Discovery calls are 30 minutes.</div>}
            </form> :

          <div className="demo-form">
              <div className="form-success">
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--bg)', border: '1px solid var(--rule)', display: 'grid', placeItems: 'center', margin: '0 auto 20px', color: 'var(--accent)' }}>
                  <IconCheck />
                </div>
                <h4>Message received.</h4>
                <p>Thanks {form.name ? form.name.split(' ')[0] : ''}, we'll be in touch within one business day at <strong style={{ color: 'var(--ink)' }}>{form.email || 'your email'}</strong>.</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>);

}

/* ---------- FOOTER ---------- */
function Footer({ setTab }) {
  const go = (e, tab) => {
    e.preventDefault();
    if (setTab) setTab(tab);
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" onClick={(e) => go(e, 'home')} className="logo">
              <span className="logo-mark" aria-hidden="true"><CriusMark variant="light" /></span>
              <span>Crius <em style={{ color: 'rgba(246,237,224,0.55)' }}>AI</em></span>
            </a>
            <p>Operational intelligence and bespoke AI agents. Built in Cork, deployed in production with paying clients.</p>
          </div>
          <div>
            <h5>Platform</h5>
            <ul>
              <li><a href="#" onClick={(e) => go(e, 'platform')}>Construction &amp; engineering</a></li>
              <li><a href="#" onClick={(e) => go(e, 'platform')}>Hospitality</a></li>
              <li><a href="#" onClick={(e) => go(e, 'build')}>Crius Build</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#" onClick={(e) => go(e, 'about')}>About</a></li>
              <li><a href="#" onClick={(e) => go(e, 'contact')}>Contact</a></li>
              <li><a href="#" onClick={(e) => go(e, 'contact')}>Book a demo</a></li>
            </ul>
          </div>
          <div>
            <h5>Get in touch</h5>
            <ul>
              <li><a href="mailto:contactus@crius.ie">contactus@crius.ie</a></li>
              <li><a href="tel:+353851777335">085 177 7335</a></li>
              <li>Cork, Ireland</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Crius AI Ltd · Registered in Ireland</span>
          <span><a href="mailto:contactus@crius.ie" style={{ color: 'inherit' }}>contactus@crius.ie</a></span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { Nav, Hero, LogoStrip, Platform, ConstructionModules, RecipeFeature, HowItWorks, WhyDifferent, Team, ROI, Integrations, Testimonials, FAQ, Build, About, DemoForm, Footer });