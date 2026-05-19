// Minimal, stroke-based icons. Consistent 16px viewBox, 1.5 stroke.
const Icon = ({ d, size = 16, stroke = 1.5, fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill={fill} stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    {typeof d === 'string' ? <path d={d} /> : d}
  </svg>
);

const IconArrow = ({ size = 14 }) => (
  <Icon size={size} d="M3 8h10M9 4l4 4-4 4" />
);
const IconPlus = ({ size = 14 }) => (
  <Icon size={size} d="M8 3v10M3 8h10" />
);
const IconUsers = () => (
  <Icon d={<g><circle cx="6" cy="6" r="2.2" /><path d="M2 13c0-2.2 1.8-4 4-4s4 1.8 4 4" /><path d="M11 3.5a2.2 2.2 0 010 4.3" /><path d="M13.5 12.5c0-1.5-.9-2.8-2.2-3.4" /></g>} />
);
const IconBox = () => (
  <Icon d={<g><path d="M2.5 5l5.5-2.5L13.5 5v6L8 13.5 2.5 11z" /><path d="M2.5 5L8 7.5 13.5 5M8 7.5v6" /></g>} />
);
const IconCart = () => (
  <Icon d={<g><path d="M2 3h2l1.6 8h7.4L14.5 6H5" /><circle cx="6.5" cy="13.5" r="1" /><circle cx="12" cy="13.5" r="1" /></g>} />
);
const IconChart = () => (
  <Icon d={<g><path d="M2 13h12" /><path d="M4 11V7M7.5 11V4M11 11V8" /></g>} />
);
const IconBell = () => (
  <Icon d={<g><path d="M4 7a4 4 0 018 0c0 3 1.5 4 1.5 4h-11S4 10 4 7z" /><path d="M6.5 13a1.5 1.5 0 003 0" /></g>} />
);
const IconCheck = () => (
  <Icon d="M3 8.5L6.5 12L13 4.5" />
);
const IconSparkle = () => (
  <Icon d={<g><path d="M8 2v3M8 11v3M2 8h3M11 8h3" /><path d="M4.5 4.5l1.5 1.5M10 10l1.5 1.5M4.5 11.5L6 10M10 6l1.5-1.5" /></g>} />
);
const IconShield = () => (
  <Icon d="M8 2L3 4v4c0 3 2 5 5 6 3-1 5-3 5-6V4l-5-2z" />
);

window.Icon = Icon;
window.IconArrow = IconArrow;
window.IconPlus = IconPlus;
window.IconUsers = IconUsers;
window.IconBox = IconBox;
window.IconCart = IconCart;
window.IconChart = IconChart;
window.IconBell = IconBell;
window.IconCheck = IconCheck;
window.IconSparkle = IconSparkle;
window.IconShield = IconShield;
