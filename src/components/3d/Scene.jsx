import htmlLogo from "../../assets/html.png";
import cssLogo from "../../assets/css.png";
import jsLogo from "../../assets/js.png";
import reactLogo from "../../assets/react.png";
import gitLogo from "../../assets/git.png";
import firebaseLogo from "../../assets/firebase.png";
import framerLogo from "../../assets/framer.png";
import mongodbLogo from "../../assets/mongodb.png";
import nodejsLogo from "../../assets/nodejs.png";
import reduxLogo from "../../assets/redux.png";

const TEAL = "#0F7B6C";

// ─── LAYOUT GEOMETRY ──────────────────────────────────────────────────────────
const CENTER = { x: 260, y: 205 };
const OUTER_RADIUS = 145; // distance of every outer node from center (equal for all)
const OUTER_NODE_R = 27; // hexagon circumradius (equal for all outer nodes)
const CENTER_NODE_R = 36; // radius of the center node

const OUTER_LOGOS = [
  { id: "html", logo: htmlLogo },
  { id: "css", logo: cssLogo },
  //   { id: "js", logo: jsLogo },
  { id: "react", logo: reactLogo },
  { id: "git", logo: gitLogo },
  { id: "firebase", logo: firebaseLogo },
  { id: "framer", logo: framerLogo },
  { id: "nodejs", logo: nodejsLogo },
  { id: "redux", logo: reduxLogo },
  { id: "mongodb", logo: mongodbLogo },
];

function polarToCartesian(centerX, centerY, radius, angleDeg) {
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: centerX + radius * Math.sin(angleRad),
    y: centerY - radius * Math.cos(angleRad),
  };
}

// Regular flat-top hexagon point string, centered on local origin (0,0).
function hexPoints(r) {
  const pts = [];
  for (let k = 0; k < 6; k++) {
    const angle = (60 * k * Math.PI) / 180;
    pts.push(
      `${(r * Math.cos(angle)).toFixed(2)},${(r * Math.sin(angle)).toFixed(2)}`,
    );
  }
  return pts.join(" ");
}

// ─── NODE POSITIONS (computed, not hand-placed) ──────────────────────────────
const ANGLE_STEP = 360 / OUTER_LOGOS.length; // equal spacing guarantee

const OUTER_NODES = OUTER_LOGOS.map((node, i) => {
  const angle = i * ANGLE_STEP;
  const { x, y } = polarToCartesian(CENTER.x, CENTER.y, OUTER_RADIUS, angle);
  return { ...node, x, y, r: OUTER_NODE_R, angle };
});

const CENTER_NODE = {
  id: "js",
  logo: jsLogo,
  x: CENTER.x,
  y: CENTER.y,
  r: CENTER_NODE_R,
};

// Shared hexagon point strings (relative coords — reused via <g transform>)
const HEX_BASE = hexPoints(OUTER_NODE_R);
const HEX_PULSE = hexPoints(OUTER_NODE_R + 9);

function pointOnQuadratic(p0, c, p2, t = 0.5) {
  const mt = 1 - t;
  return {
    x: mt * mt * p0.x + 2 * mt * t * c.x + t * t * p2.x,
    y: mt * mt * p0.y + 2 * mt * t * c.y + t * t * p2.y,
  };
}

function curvedPath(p1, p2, bend = 0.06) {
  const mx = (p1.x + p2.x) / 2;
  const my = (p1.y + p2.y) / 2;
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const ux = -dy / len;
  const uy = dx / len;
  const offset = len * bend;
  const cx = mx + ux * offset;
  const cy = my + uy * offset;
  const mid = pointOnQuadratic(p1, { x: cx, y: cy }, p2, 0.5);
  return {
    d: `M ${p1.x} ${p1.y} Q ${cx} ${cy} ${p2.x} ${p2.y}`,
    cx,
    cy,
    midX: mid.x,
    midY: mid.y,
  };
}

function curveOutward(p1, p2, center, bend = 0.18) {
  const mx = (p1.x + p2.x) / 2;
  const my = (p1.y + p2.y) / 2;
  let dx = mx - center.x;
  let dy = my - center.y;
  const dlen = Math.sqrt(dx * dx + dy * dy) || 1;
  dx /= dlen;
  dy /= dlen;
  const chordLen = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  const offset = chordLen * bend;
  const cx = mx + dx * offset;
  const cy = my + dy * offset;
  const mid = pointOnQuadratic(p1, { x: cx, y: cy }, p2, 0.5);
  return {
    d: `M ${p1.x} ${p1.y} Q ${cx} ${cy} ${p2.x} ${p2.y}`,
    cx,
    cy,
    midX: mid.x,
    midY: mid.y,
  };
}

// ─── CONNECTIONS ──────────────────────────────────────────────────────────────
const SPOKES = OUTER_NODES.map((n, i) => {
  const c = curvedPath(n, CENTER_NODE, i % 2 === 0 ? 0.05 : -0.05);
  return { id: `spoke-${n.id}`, ...c };
});

const RING = OUTER_NODES.map((n, i) => {
  const next = OUTER_NODES[(i + 1) % OUTER_NODES.length];
  const c = curveOutward(n, next, CENTER, 0.2);
  return { id: `ring-${i}`, ...c };
});

const SECONDARY_INDICES = [0, 3, 6];
const SECONDARY = SECONDARY_INDICES.map((idx, i) => {
  const a = OUTER_NODES[idx];
  const b = OUTER_NODES[SECONDARY_INDICES[(i + 1) % SECONDARY_INDICES.length]];
  const c = curveOutward(a, b, CENTER, -0.1);
  return { id: `secondary-${i}`, ...c };
});

const CONNECTIONS = [...SPOKES, ...RING, ...SECONDARY];

// ─── FLOW DOTS ────────────────────────────────────────────────────────────────
const DOTS = CONNECTIONS.map((c, i) => ({
  path: c.id,
  dur: 1.4 + (i % 5) * 0.3,
  delay: (i * 0.35) % 3,
}));

export default function Scene() {
  return (
    <div
      className="w-full h-full rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(150deg, #f8f7f4 0%, #f0eeea 100%)",
        boxShadow:
          "0 4px 32px rgba(15,123,108,0.06), 0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      <svg
        viewBox="0 0 520 420"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="w-full h-full"
        aria-label="Developer technology network"
      >
        <defs>
          <clipPath id="hex-clip">
            <polygon points={hexPoints(OUTER_NODE_R - 5)} />
          </clipPath>
          <clipPath id="center-clip">
            <circle cx="0" cy="0" r={CENTER_NODE_R - 3} />
          </clipPath>

          <filter id="sc-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter
            id="sc-hexglow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="4" />
          </filter>

          <filter id="sc-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="5"
              floodColor={TEAL}
              floodOpacity="0.12"
            />
            <feDropShadow
              dx="0"
              dy="1"
              stdDeviation="2"
              floodColor="#000"
              floodOpacity="0.07"
            />
          </filter>

          {CONNECTIONS.map((c) => (
            <path key={`mp-${c.id}`} id={`sc-mp-${c.id}`} d={c.d} fill="none" />
          ))}

          <pattern
            id="sc-dots"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="0.8" fill={TEAL} opacity="0.10" />
          </pattern>
        </defs>

        {/* Background */}
        <rect width="520" height="420" fill="url(#sc-dots)" />

        {/* ── Connection lines ── */}
        <g fill="none">
          {[...SPOKES, ...RING].map((c) => (
            <g key={c.id}>
              <path
                d={c.d}
                stroke={TEAL}
                strokeWidth="1.2"
                opacity="0.14"
                strokeDasharray="3 5"
              />
              <path d={c.d} stroke={TEAL} strokeWidth="3" opacity="0.04" />
            </g>
          ))}
          {SECONDARY.map((c) => (
            <path
              key={c.id}
              d={c.d}
              stroke={TEAL}
              strokeWidth="1"
              opacity="0.07"
            />
          ))}

          {[...SPOKES, ...RING].map((c) => (
            <g key={`joint-${c.id}`}>
              <circle
                cx={c.midX}
                cy={c.midY}
                r="4"
                fill={TEAL}
                opacity="0.08"
              />
              <circle
                cx={c.midX}
                cy={c.midY}
                r="1.8"
                fill={TEAL}
                opacity="0.5"
              />
            </g>
          ))}
        </g>

        {/* ── Animated flow dots ── */}
        {DOTS.map((dot, i) => (
          <circle key={`dot-${i}`} r="3.5" fill={TEAL} filter="url(#sc-glow)">
            <animateMotion
              dur={`${dot.dur}s`}
              repeatCount="indefinite"
              begin={`${dot.delay}s`}
            >
              <mpath href={`#sc-mp-${dot.path}`} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.08;0.88;1"
              dur={`${dot.dur}s`}
              repeatCount="indefinite"
              begin={`${dot.delay}s`}
            />
          </circle>
        ))}

        {/* ── Center node (circular core) ── */}
        <g transform={`translate(${CENTER_NODE.x} ${CENTER_NODE.y})`}>
          <circle r={CENTER_NODE_R} fill="none" stroke={TEAL} strokeWidth="1.5">
            <animate
              attributeName="r"
              values={`${CENTER_NODE_R};${CENTER_NODE_R + 10};${CENTER_NODE_R + 10}`}
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.45;0;0"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <g filter="url(#sc-shadow)">
            <circle
              r={CENTER_NODE_R}
              fill="white"
              stroke="#E2E8E6"
              strokeWidth="1.2"
            />
            <image
              href={CENTER_NODE.logo}
              clipPath="url(#center-clip)"
              x={-CENTER_NODE_R * 0.65}
              y={-CENTER_NODE_R * 0.65}
              width={CENTER_NODE_R * 1.3}
              height={CENTER_NODE_R * 1.3}
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </g>

        {/* ── Outer hexagon nodes ── */}
        {OUTER_NODES.map((node, i) => (
          <g key={node.id} transform={`translate(${node.x} ${node.y})`}>
            <polygon
              points={HEX_BASE}
              fill="none"
              stroke={TEAL}
              strokeWidth="1.5"
            >
              <animate
                attributeName="points"
                values={`${HEX_BASE};${HEX_PULSE};${HEX_PULSE}`}
                dur={`${3 + i * 0.25}s`}
                repeatCount="indefinite"
                begin={`${i * 0.5}s`}
              />
              <animate
                attributeName="opacity"
                values="0.45;0;0"
                dur={`${3 + i * 0.25}s`}
                repeatCount="indefinite"
                begin={`${i * 0.5}s`}
              />
            </polygon>

            <polygon
              points={HEX_BASE}
              fill="none"
              stroke={TEAL}
              strokeWidth="6"
              opacity="0.09"
              filter="url(#sc-hexglow)"
            />

            <g filter="url(#sc-shadow)">
              <polygon
                points={HEX_BASE}
                fill="white"
                stroke={TEAL}
                strokeWidth="1.4"
                strokeOpacity="0.55"
              />
              <image
                href={node.logo}
                clipPath="url(#hex-clip)"
                x={-node.r * 0.62}
                y={-node.r * 0.62}
                width={node.r * 1.24}
                height={node.r * 1.24}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          </g>
        ))}

        {/* ── Bottom label ── */}
        <text
          x="260"
          y="410"
          textAnchor="middle"
          fill="#C0C8D0"
          fontSize="7.5"
          fontFamily="DM Sans, sans-serif"
          letterSpacing="3"
        >
          DEVELOPER ECOSYSTEM
        </text>
      </svg>
    </div>
  );
}
