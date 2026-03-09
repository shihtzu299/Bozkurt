import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  Copy,
  Check,
  Send,
  Rocket,
  Twitter,
  ChevronDown,
  BarChart3,
  Activity,
  LineChart,
} from "lucide-react";
import logo from "./assets/bozkurt-logo.png";

export default function App() {
  const [mouse, setMouse] = useState({ x: -500, y: -500 });
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  const contractAddress = "3kvRhK58AGZYQJeV4KFmwr64C1mo2kbM8TosSApYpump";
  const pumpFunUrl =
    "https://pump.fun/coin/3kvRhK58AGZYQJeV4KFmwr64C1mo2kbM8TosSApYpump";
  const xUrl = "https://x.com/i/communities/2018142836034572513";
  const telegramUrl = "https://t.me/BOZKURTSOLANA";
  const dexscreenerUrl =
    "https://dexscreener.com/solana/d75iqmse3a5f1j7gpi4j6kgykqvjsst9xzevraavqjcz";
  const birdeyeUrl =
    "https://birdeye.so/solana/token/3kvRhK58AGZYQJeV4KFmwr64C1mo2kbM8TosSApYpump";
  const chartUrl =
    "https://gmgn.ai/sol/token/3kvRhK58AGZYQJeV4KFmwr64C1mo2kbM8TosSApYpump";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const stars = useMemo(() => {
    return Array.from({ length: 42 }, (_, i) => ({
      id: i,
      size: 2 + (i % 3),
      left: `${(i * 17) % 100}%`,
      top: `${(i * 11) % 100}%`,
      duration: 3 + (i % 5),
      delay: (i % 7) * 0.4,
      opacity: 0.14 + (i % 5) * 0.07,
    }));
  }, []);

  const handleMouseMove = (e) => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseLeave = () => {
    setMouse({ x: -500, y: -500 });
  };

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05070B]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <div className="relative flex flex-col items-center">
              <motion.div
                className="absolute h-[220px] w-[220px] rounded-full bg-[rgba(255,200,80,0.18)] blur-[80px]"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.45, 0.8, 0.45],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={logo}
                alt="Bozkurt logo"
                className="relative z-10 mb-4 w-[120px] drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  y: {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
              <motion.div
                className="relative z-10 font-display text-4xl tracking-[0.22em] text-white md:text-6xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                BOZKURT
              </motion.div>
              <motion.div
                className="mt-3 text-[10px] uppercase tracking-[0.45em] text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                The Pack Is Moving
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="min-h-screen bg-obsidian text-white overflow-x-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* CURSOR GLOW FIXED */}
        <motion.div
          className="pointer-events-none fixed z-[60] hidden rounded-full md:block"
          animate={{
            x: mouse.x - 180,
            y: mouse.y - 180,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 18,
            mass: 0.5,
          }}
          style={{
            width: 360,
            height: 360,
            background:
              "radial-gradient(circle, rgba(255,215,120,0.16) 0%, rgba(255,215,120,0.10) 28%, rgba(123,167,255,0.06) 52%, rgba(255,215,120,0.00) 72%)",
            filter: "blur(38px)",
          }}
        />

        {/* NAVBAR */}
        <motion.header
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] md:px-6">
            <a href="#top" className="flex items-center gap-3">
              <motion.img
                src={logo}
                alt="Bozkurt logo"
                className="h-10 w-10 rounded-full object-cover md:h-11 md:w-11"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="leading-none">
                <div className="font-display text-2xl tracking-[0.14em]">
                  BOZKURT
                </div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-gray-400">
                  Run With The Pack
                </div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
              <a href="#lore" className="transition hover:text-white">
                Lore
              </a>
              <a href="#roadmap" className="transition hover:text-white">
                Roadmap
              </a>
              <a href="#token" className="transition hover:text-white">
                Token
              </a>
              <a href="#socials" className="transition hover:text-white">
                Socials
              </a>
            </nav>

            <a
              href={pumpFunUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-105"
            >
              Buy on Pump.fun
            </a>
          </div>
        </motion.header>

        {/* HERO */}
        <section
          id="top"
          className="relative min-h-screen overflow-hidden px-6 pt-32 pb-16 text-center md:px-8 md:pt-36"
        >
          {/* starfield */}
          <div className="pointer-events-none absolute inset-0">
            {stars.map((star) => (
              <motion.span
                key={star.id}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  left: star.left,
                  top: star.top,
                  opacity: star.opacity,
                }}
                animate={{
                  opacity: [star.opacity, star.opacity + 0.26, star.opacity],
                  scale: [1, 1.45, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  delay: star.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* background layers */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,80,0.10),transparent_35%),radial-gradient(circle_at_50%_20%,rgba(123,167,255,0.10),transparent_30%),linear-gradient(to_bottom,#07090D,rgba(7,9,13,0.96),#07090D)]" />

          <motion.div
            className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(255,200,80,0.18)] blur-[90px] md:h-[560px] md:w-[560px]"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.45, 0.75, 0.45],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(255,215,130,0.22)] md:h-[380px] md:w-[380px]"
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center">
            <motion.div
              className="relative"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="absolute inset-[-18px] rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(255,215,0,0.00)",
                    "0 0 45px rgba(255,215,0,0.28)",
                    "0 0 0px rgba(255,215,0,0.00)",
                  ],
                }}
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={logo}
                alt="Bozkurt logo"
                className="relative z-10 mb-6 w-[180px] drop-shadow-[0_0_40px_rgba(255,215,0,0.55)] md:mb-8 md:w-[280px]"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: [0, -1, 1, 0],
                }}
                transition={{
                  opacity: { duration: 0.9 },
                  scale: { duration: 0.9 },
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            </motion.div>

            <motion.h1
              className="text-5xl font-display leading-none tracking-[0.18em] sm:text-6xl md:text-8xl lg:text-9xl"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
            >
              BOZKURT
            </motion.h1>

            <motion.p
              className="mt-4 max-w-xl text-base text-gray-300 md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.8 }}
            >
              Run With The Pack
            </motion.p>

            <motion.p
              className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.8 }}
            >
              A premium wolf-coin brand built for believers, raiders, and early
              movers. The forest is loud. The pack is louder.
            </motion.p>

            <motion.div
              className="mt-8 flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.8 }}
            >
              <a
                href={pumpFunUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]"
              >
                Buy on Pump.fun
              </a>

              <a
                href="#token"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
              >
                View Token Details
              </a>
            </motion.div>

            <motion.div
              className="mt-10 text-[10px] uppercase tracking-[0.35em] text-gray-500 md:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Fair Launch • Pack Energy • Moon Signal
            </motion.div>

            <motion.a
              href="#lore"
              className="mt-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-400 transition hover:text-white"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Scroll for the lore
              <ChevronDown size={16} />
            </motion.a>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="section-divider" />

        {/* LORE */}
        <motion.section
          id="lore"
          {...fadeUp}
          className="relative z-10 min-h-screen bg-steel px-6 py-20 md:px-8 md:py-24 flex items-center justify-center"
        >
          <div className="max-w-4xl text-center">
            <div className="mb-4 text-xs uppercase tracking-[0.35em] text-moon">
              Bozkurt Manifesto
            </div>

            <h2 className="mb-6 text-4xl font-display tracking-[0.1em] sm:text-5xl md:text-6xl">
              The Pack Is Moving
            </h2>

            <p className="text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
              In every cycle, noise fills the forest. Only one signal cuts
              through it. Bozkurt is not just another memecoin. It is the call
              of the pack. Fast. Fearless. Relentless.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Pack Energy",
                  text: "Community-first momentum built for believers and raiders.",
                },
                {
                  title: "Mythic Identity",
                  text: "A wolf signal strong enough to cut through the timeline.",
                },
                {
                  title: "Moon Discipline",
                  text: "Dark, premium, unforgettable branding from first glance.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <h3 className="mb-3 font-display text-2xl tracking-[0.08em]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <div className="section-divider" />

        {/* ROADMAP */}
        <motion.section
          id="roadmap"
          {...fadeUp}
          className="relative z-10 min-h-screen bg-obsidian px-6 py-20 md:px-8 md:py-24 flex flex-col items-center"
        >
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-moon">
            The Hunt
          </div>

          <h2 className="mb-14 text-center text-4xl font-display tracking-[0.1em] sm:text-5xl md:text-6xl">
            Roadmap
          </h2>

          <div className="grid w-full max-w-6xl gap-6 md:grid-cols-2">
            {[
              {
                phase: "Phase I — The Howl",
                text: "The signal is sent. Bozkurt emerges from the forest and the first wolves answer the call.",
              },
              {
                phase: "Phase II — Pack Formation",
                text: "The pack grows stronger. Raiders spread the signal across the timeline.",
              },
              {
                phase: "Phase III — Hunt Mode",
                text: "Momentum builds. The forest echoes with the howl of Bozkurt.",
              },
              {
                phase: "Phase IV — Moon Signal",
                text: "The pack reaches peak velocity. The signal is impossible to ignore.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:border-white/20"
              >
                <div className="mb-3 text-xs uppercase tracking-[0.3em] text-moon">
                  Hunt Sequence
                </div>
                <h3 className="mb-4 font-display text-2xl tracking-[0.08em]">
                  {item.phase}
                </h3>
                <p className="leading-relaxed text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="section-divider" />

        {/* TOKEN / CONTRACT */}
        <motion.section
          id="token"
          {...fadeUp}
          className="relative z-10 bg-steel px-6 py-20 md:px-8 md:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl md:p-8">
              <div className="mb-4 text-xs uppercase tracking-[0.35em] text-moon">
                Token Signal
              </div>

              <h2 className="mb-5 text-4xl font-display tracking-[0.1em] sm:text-5xl">
                Launch Details
              </h2>

              <p className="max-w-2xl text-gray-300 leading-relaxed">
                Bozkurt launches with a clean, direct, community-first setup.
                Replace the placeholders below with your live token details when
                ready.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    Launch Type
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    Fair Launch
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    Platform
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    Pump.fun
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    Symbol
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    BOZKURT
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    Status
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    Launched
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-3 text-xs uppercase tracking-[0.25em] text-gray-500">
                  Contract Address
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="overflow-hidden text-ellipsis whitespace-nowrap font-mono text-sm text-gray-200">
                    {contractAddress}
                  </div>

                  <button
                    onClick={copyContract}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-black transition hover:scale-105"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Copied" : "Copy CA"}
                  </button>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <a
                  href={chartUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
                >
                  <BarChart3 size={16} />
                  View Chart
                </a>

                <a
                  href={dexscreenerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
                >
                  <LineChart size={16} />
                  Dexscreener
                </a>

                <a
                  href={birdeyeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
                >
                  <Activity size={16} />
                  Birdeye
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7 backdrop-blur-xl md:p-8">
              <div className="mb-4 text-xs uppercase tracking-[0.35em] text-moon">
                Entry Point
              </div>

              <h3 className="mb-4 text-3xl font-display tracking-[0.08em]">
                Join The Hunt
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Use these primary launch actions. Replace the placeholder links
                with your real X, Telegram, and pump.fun page when live.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href={pumpFunUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.02]"
                >
                  <Rocket size={18} />
                  Buy on Pump.fun
                </a>

                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  <Send size={18} />
                  Join Telegram
                </a>

                <a
                  href={xUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  <Twitter size={18} />
                  Follow on X
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  Launch Note
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  Launch began fairly on pumpfun, giving everyone equal
                  opportunity to join the park.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="section-divider" />

        {/* SOCIALS */}
        <motion.section
          id="socials"
          {...fadeUp}
          className="relative z-10 bg-obsidian px-6 py-20 md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-4 text-xs uppercase tracking-[0.35em] text-moon">
              Where The Pack Gathers
            </div>

            <h2 className="mb-6 text-4xl font-display tracking-[0.1em] sm:text-5xl md:text-6xl">
              Stay Connected
            </h2>

            <p className="mx-auto max-w-2xl text-gray-300 leading-relaxed">
              Every wolf needs a signal. Use these channels to coordinate, push
              momentum, and grow the pack.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <motion.a
                whileHover={{ y: -6 }}
                href={xUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/20"
              >
                <Twitter className="mx-auto mb-4" size={26} />
                <div className="font-display text-2xl tracking-[0.08em]">X</div>
                <p className="mt-2 text-sm text-gray-300">
                  Push the signal across the timeline.
                </p>
              </motion.a>

              <motion.a
                whileHover={{ y: -6 }}
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/20"
              >
                <Send className="mx-auto mb-4" size={26} />
                <div className="font-display text-2xl tracking-[0.08em]">
                  Telegram
                </div>
                <p className="mt-2 text-sm text-gray-300">
                  Gather the pack and coordinate the hunt.
                </p>
              </motion.a>

              <motion.a
                whileHover={{ y: -6 }}
                href={pumpFunUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/20"
              >
                <Rocket className="mx-auto mb-4" size={26} />
                <div className="font-display text-2xl tracking-[0.08em]">
                  Pump.fun
                </div>
                <p className="mt-2 text-sm text-gray-300">
                  The launch point for Bozkurt momentum.
                </p>
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="relative z-10 border-t border-white/10 bg-black/40 px-6 py-8 md:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Bozkurt logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="font-display text-2xl tracking-[0.12em]">
                  BOZKURT
                </div>
                <div className="text-xs uppercase tracking-[0.28em] text-gray-500">
                  The Pack Is Moving
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              © 2026 Bozkurt. All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
