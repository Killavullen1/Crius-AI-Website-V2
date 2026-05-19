// Dashboard mocks, the 4 module previews + the hero overview
const { useMemo, useState, useEffect } = React;

/* ========== Sparkline ========== */
function Sparkline({ points, height = 120, color = 'var(--ink)', fillOpacity = 0.05 }) {
  const w = 400;
  const h = height;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const step = w / (points.length - 1);
  const path = points.map((p, i) => {
    const x = i * step;
    const y = h - ((p - min) / range) * (h - 16) - 8;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const fill = `${path} L${w},${h} L0,${h} Z`;
  return (
    <svg className="dash-spark" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparkgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={fillOpacity * 3} />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill="url(#sparkgrad)" />
      <path d={path} stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ========== Mini bars for hero stat ========== */
function MiniBars({ values, height = 22 }) {
  const max = Math.max(...values);
  return (
    <div className="dash-mini-bars" style={{ height }}>
      {values.map((v, i) => (
        <span key={i} style={{ height: `${(v / max) * 100}%` }} />
      ))}
    </div>
  );
}

/* ========== HERO DASHBOARD, overview ========== */
function HeroDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(x => x + 1), 3000);
    return () => clearInterval(t);
  }, []);

  // slightly shifting data feel
  const revenue = 14250 + (tick % 5) * 38;
  const covers = 186 + (tick % 4);
  const laborPct = 24.8;

  const sparkData = useMemo(() => {
    const base = [22, 28, 34, 31, 38, 42, 48, 54, 61, 58, 66, 72, 68, 74, 81, 78, 85, 92, 88, 95, 102, 98, 108, 115];
    return base.map(v => v + (tick % 3) * 1.5);
  }, [tick]);

  return (
    <div className="dash">
      <div className="dash-top">
        <div className="dash-tabs">
          <div className="dash-tab active">Overview</div>
          <div className="dash-tab">Staffing</div>
          <div className="dash-tab">Orders</div>
          <div className="dash-tab">Stock</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="dash-chip" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>◉ Multi-POS Enabled</span>
          <span className="dash-chip" style={{ background: 'var(--accent)', color: 'var(--bg)' }}>✦ Sync POS</span>
        </div>
      </div>

      <div className="dash-body">
        <div className="dash-left">
          <div className="dash-stats">
            <div className="dash-stat">
              <div className="label">Revenue · today</div>
              <div className="val">€{revenue.toLocaleString()}</div>
              <div className="delta pos">+12.4% vs fcst</div>
            </div>
            <div className="dash-stat">
              <div className="label">Covers</div>
              <div className="val">{covers}</div>
              <div className="delta pos">+6 last hour</div>
            </div>
            <div className="dash-stat">
              <div className="label">Labour cost</div>
              <div className="val">{laborPct}%</div>
              <div className="delta neg">target 26%</div>
            </div>
          </div>

          <div className="dash-chart">
            <div className="dash-chart-head">
              <div className="dash-chart-title">Revenue · last 24 hours</div>
              <div className="dash-chart-meta">hourly · €</div>
            </div>
            <Sparkline points={sparkData} />
          </div>
        </div>

        <div className="dash-right">
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Agent actions · last 30m
          </div>

          <div className="dash-row">
            <div className="icon"><IconUsers /></div>
            <div className="main">
              <div className="title-line">Called in 2 extra staff · Saturday dinner</div>
              <div className="sub-line">forecast +18% covers · confirmed</div>
            </div>
            <div className="pill auto">AUTO</div>
          </div>

          <div className="dash-row">
            <div className="icon"><IconBox /></div>
            <div className="main">
              <div className="title-line">Reordered Tonic, Prosecco, Limes</div>
              <div className="sub-line">PAR level · delivery tue 6am</div>
            </div>
            <div className="pill auto">AUTO</div>
          </div>

          <div className="dash-row">
            <div className="icon"><IconChart /></div>
            <div className="main">
              <div className="title-line">Flagged rising food cost on brunch</div>
              <div className="sub-line">eggs +11% wk-on-wk · review menu</div>
            </div>
            <div className="pill new">FLAG</div>
          </div>

          <div className="dash-row">
            <div className="icon"><IconCheck /></div>
            <div className="main">
              <div className="title-line">Payroll draft ready for approval</div>
              <div className="sub-line">14 staff · 412.5 hrs · €8,240</div>
            </div>
            <div className="pill ok">READY</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========== STAFFING preview ========== */
function StaffingPreview() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const rows = [
    { name: 'A. Byrne',    blocks: ['a','a','','b','b','a',''] },
    { name: 'J. Okafor',   blocks: ['','b','b','b','a','a','a'] },
    { name: 'S. Martinez', blocks: ['c','','a','a','','b','b'] },
    { name: 'L. Chen',     blocks: ['a','a','a','','b','',''] },
    { name: 'M. Dubois',   blocks: ['','','b','b','b','a','a'] },
  ];
  return (
    <div style={{ background: 'var(--bg-card)', borderRadius: 10, border: '1px solid var(--rule)', padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 18 }}>This week · Rotation</div>
        <div className="dash-chip"><span className="live-dot"></span>Auto-optimised</div>
      </div>
      <div className="sched-grid">
        <div className="sched-head"></div>
        {days.map((d, i) => <div key={i} className="sched-head">{d}</div>)}
        {rows.map((r, ri) => (
          <React.Fragment key={ri}>
            <div className="sched-cell" style={{ textAlign: 'left', color: 'var(--ink-2)' }}>{r.name}</div>
            {r.blocks.map((b, bi) => (
              <div key={bi} className={`sched-cell ${b ? '' : 'empty'}`} style={{ background: 'transparent', padding: 2 }}>
                {b ? (
                  <div className={`sched-block ${b}`}>
                    {b === 'a' ? 'AM' : b === 'b' ? 'PM' : 'OT'}
                  </div>
                ) : <div style={{ height: 18 }}/>}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div style={{ marginTop: 16, padding: 12, background: 'var(--bg)', border: '1px solid var(--rule)', borderRadius: 8, fontSize: 12, color: 'var(--ink-3)', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--mono)', color: 'var(--ink-2)' }}>412.5 scheduled hrs</span>
        <span style={{ fontFamily: 'var(--mono)' }}>labour 24.8% · target 26%</span>
      </div>
      <div style={{ marginTop: 12, padding: 12, background: 'var(--accent-soft)', borderRadius: 8, fontSize: 12, color: 'var(--accent)', display: 'flex', gap: 10, alignItems: 'center' }}>
        <IconSparkle />
        <span><strong style={{ color: 'var(--accent)'}}>Forecast:</strong> Saturday dinner +18% covers. Shift A. Byrne to close · add 1 runner.</span>
      </div>
    </div>
  );
}

/* ========== ORDERING preview ========== */
function OrderingPreview() {
  const orders = [
    { table: 'T4', items: '2× Margherita, 1× Aperol', time: '2 min ago', price: '€46.50', status: 'sent' },
    { table: 'BAR', items: '3× Guinness, 2× Moscow Mule', time: '4 min ago', price: '€38.00', status: 'paid' },
    { table: 'T12', items: 'Sunday roast ×4, kids menu', time: '7 min ago', price: '€112.00', status: 'prep' },
    { table: 'DLV', items: 'Deliveroo · 2 items', time: '9 min ago', price: '€28.40', status: 'out' },
  ];
  return (
    <div style={{ background: 'var(--bg-card)', borderRadius: 10, border: '1px solid var(--rule)', padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 18 }}>Live orders</div>
        <div className="dash-chip"><span className="live-dot"></span>Clover · Square · Deliveroo</div>
      </div>
      {orders.map((o, i) => (
        <div key={i} className="order-row">
          <div className="ord-main">
            <div><strong style={{ color: 'var(--ink)' }}>{o.table}</strong> · {o.items}</div>
            <div className="ord-sub">{o.time} · {o.status.toUpperCase()}</div>
          </div>
          <div className="ord-price">{o.price}</div>
        </div>
      ))}
      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {[
          { k: 'Open tabs', v: '14' },
          { k: 'Avg ticket', v: '€38' },
          { k: 'Hour covers', v: '52' },
        ].map((s, i) => (
          <div key={i} style={{ padding: 10, background: 'var(--bg)', border: '1px solid var(--rule)', borderRadius: 8 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.k}</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, marginTop: 2 }}>{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ========== STOCK preview ========== */
function StockPreview() {
  const [flash, setFlash] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setFlash(x => x + 1), 3200);
    return () => clearInterval(t);
  }, []);

  const items = [
    { name: 'Baby gem lettuce', pct: 62, val: '3.1 kg / 5.0', low: false, flash: true },
    { name: 'Croutons',         pct: 41, val: '820 g / 2.0', low: false, flash: true },
    { name: 'Caesar mayo',      pct: 28, val: '560 g / 2.0', low: true,  flash: true },
    { name: 'Parmesan 30m',     pct: 74, val: '1.48 kg / 2.0', low: false },
    { name: 'Chicken breast',   pct: 52, val: '5.2 kg / 10.0', low: false },
    { name: 'Sourdough',        pct: 86, val: '52 / 60', low: false },
  ];
  return (
    <div style={{ background: 'var(--bg-card)', borderRadius: 10, border: '1px solid var(--rule)', padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 18 }}>Stock · recipe-linked</div>
        <div className="dash-chip"><span className="live-dot"></span>auto-deducting</div>
      </div>

      {/* Recipe trace */}
      <div style={{ padding: 10, background: 'var(--bg)', border: '1px solid var(--rule)', borderRadius: 8, marginBottom: 12, fontSize: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>POS · just now</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)' }}>▼ deducting</span>
        </div>
        <div style={{ color: 'var(--ink)', fontWeight: 500 }}>Sale: 1× Chicken Caesar · €14.50</div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', marginTop: 6, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <span>−120g lettuce</span>
          <span>−40g croutons</span>
          <span>−35g mayo</span>
          <span>−25g parmesan</span>
          <span>−140g chicken</span>
        </div>
      </div>

      {items.map((it, i) => (
        <div key={i} className="inv-row" style={ it.flash ? { background: flash % 2 === 0 ? 'transparent' : 'rgba(107,31,34,0.04)', transition: 'background .6s' } : {} }>
          <span style={{ color: 'var(--ink-2)' }}>{it.name}</span>
          <div className="inv-bar">
            <div className={`fill ${it.low ? 'low' : ''}`} style={{ width: `${it.pct}%` }}></div>
          </div>
          <span className="inv-val">{it.val}</span>
        </div>
      ))}

      <div style={{ marginTop: 12, padding: 12, background: 'var(--accent-soft)', borderRadius: 8, fontSize: 12, color: 'var(--accent)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <IconSparkle />
        <span><strong>Invoice parsed:</strong> Musgrave delivery · 42 lines posted to stock · 06:41. No manual entry.</span>
      </div>
    </div>
  );
}

/* ========== ANALYTICS preview ========== */
function AnalyticsPreview() {
  const data = [28, 34, 40, 36, 46, 52, 58, 54, 62, 68, 64, 72, 78, 74, 82, 88];
  return (
    <div style={{ background: 'var(--bg-card)', borderRadius: 10, border: '1px solid var(--rule)', padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 18 }}>Performance · 16 weeks</div>
        <div className="dash-chip">all venues</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
        <div style={{ padding: 14, background: 'var(--bg)', border: '1px solid var(--rule)', borderRadius: 8 }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Revenue</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 30, marginTop: 4, lineHeight: 1 }}>€612k</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--pos)', marginTop: 4 }}>+22% YoY</div>
        </div>
        <div style={{ padding: 14, background: 'var(--bg)', border: '1px solid var(--rule)', borderRadius: 8 }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>GP margin</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 30, marginTop: 4, lineHeight: 1 }}>68.4%</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--pos)', marginTop: 4 }}>+3.1 pts</div>
        </div>
      </div>
      <div style={{ padding: '8px 2px 0' }}>
        <Sparkline points={data} height={90} />
      </div>
      <div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        <span>wk 1</span>
        <span style={{ textAlign: 'center' }}>wk 8</span>
        <span style={{ textAlign: 'right' }}>wk 16</span>
      </div>
    </div>
  );
}

Object.assign(window, {
  HeroDashboard,
  StaffingPreview,
  OrderingPreview,
  StockPreview,
  AnalyticsPreview,
  Sparkline,
  MiniBars,
});
