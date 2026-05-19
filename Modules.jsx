// Modules (tabbed section) component
const { useState: useStateM } = React;

function ScreenshotPreview({ src, alt, label, stack }) {
  if (stack && stack.length) {
    return (
      <div className="module-shot-stack">
        {stack.map((s, i) => (
          <div key={i} className="module-shot">
            <img src={s.src} alt={s.alt} />
          </div>
        ))}
      </div>
    );
  }
  if (!src) {
    return (
      <div className="module-shot module-shot-empty">
        <div className="module-shot-eye">{label} · preview</div>
        <div className="module-shot-placeholder">
          <div className="placeholder-mark"></div>
          <div className="placeholder-text">Product screen coming soon</div>
        </div>
      </div>
    );
  }
  return (
    <div className="module-shot">
      <img src={src} alt={alt} />
    </div>
  );
}

function Modules() {
  const [active, setActive] = useStateM(0);

  const mods = [
    {
      k: '01',
      t: 'Staffing',
      title: 'Schedules that match demand before you see it.',
      body: 'Forecast-driven rotas built from weather, bookings, local events and up to four years of your own data. Crius schedules the right people to the right shifts, routes swap requests, and surfaces payroll ready for approval.',
      bullets: [
        'Demand-forecast rotas, auto-published',
        'Shift swaps, time-off and payroll in one place',
        'Compliance with local labour and break rules',
        'Wage cost tracked live against daily revenue',
      ],
      preview: <ScreenshotPreview label="Staffing" stack={[
        { src: 'assets/app-staffing-availability.png', alt: 'Crius Staffing, weekly availability overview across staff and roles' },
        { src: 'assets/app-staffing-builder.png', alt: 'Crius Staffing, schedule builder with shifts by day and role' },
        { src: 'assets/app-staffing-publish.png', alt: 'Crius Staffing, publish screen with shift counts per day' },
      ]} />,
    },
    {
      k: '02',
      t: 'Stock',
      title: 'Every ingredient, tracked to the gram.',
      body: 'When a dish sells, Crius reads the POS line, looks up the recipe, and deducts every ingredient from stock in real time. When an invoice arrives, Crius parses it and tops the same stock back up. Fully automated after initial setup. No counts, no spreadsheets.',
      bullets: [
        'Recipe-level deduction on every sale',
        'Invoices auto-parsed and posted to stock',
        'PAR levels that self-tune to your velocity',
        'Daily variance and shrinkage alerts',
      ],
      preview: <ScreenshotPreview src="assets/app-stock-overview.png" alt="Crius Stock overview, ingredients, recipes, reorders, warnings" label="Stock" />,
    },
    {
      k: '03',
      t: 'Analytics',
      title: 'One truth across every venue.',
      body: 'Revenue, labour, food cost and guest metrics rolled up across the estate. Drill from group to site to shift in two clicks. Board-ready exports and anomaly alerts delivered before Monday.',
      bullets: [
        'Group, site and shift-level roll-ups',
        'Anomaly detection on margin and mix',
        'Weekly board pack, emailed automatically',
        'Benchmark against your own peer sites',
      ],
      preview: <ScreenshotPreview label="Analytics" stack={[
        { src: 'assets/app-analytics-trends.png', alt: 'Crius Analytics, sales trend and margin trend' },
        { src: 'assets/app-analytics-revenue.png', alt: 'Crius Analytics, revenue vs labour and top products' },
        { src: 'assets/app-analytics-margins.png', alt: 'Crius Analytics, product margins and category margins' },
      ]} />,
    },
  ];

  const m = mods[active];

  return (
    <div className="modules-wrap">
      <div className="modules-tabs">
        {mods.map((mm, i) => (
          <button key={i} className={`modules-tab ${i === active ? 'active' : ''}`} onClick={() => setActive(i)}>
            <span className="tab-k">Module {mm.k}</span>
            <span className="tab-t">{mm.t}</span>
          </button>
        ))}
      </div>
      <div className="modules-body">
        <div className="modules-copy">
          <span className="eyebrow">{m.t}</span>
          <h3>{m.title}</h3>
          <p>{m.body}</p>
          <ul className="modules-list">
            {m.bullets.map((b, i) => (
              <li key={i}><span className="dot"></span>{b}</li>
            ))}
          </ul>
        </div>
        <div className="modules-preview">
          {m.preview}
        </div>
      </div>
    </div>
  );
}

window.Modules = Modules;
