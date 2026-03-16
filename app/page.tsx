import { MotionConfig, motion } from "framer-motion";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-950 text-slate-50">
        <main className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 pb-20 pt-24 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-balance text-center text-4xl font-semibold tracking-tight md:text-left md:text-5xl"
            >
              Immersive{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                3D Product
              </span>{" "}
              experiences for premium launches.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="max-w-xl text-center text-sm text-slate-400 md:text-left"
            >
              This is your live Next.js app. Replace this section with your 3D viewer
              and product storytelling to turn it into a full experience platform.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="flex-1"
          >
            <div className="relative h-64 w-full max-w-md overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-black shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,#38bdf8_0,transparent_55%),radial-gradient(circle_at_100%_0,#a855f7_0,transparent_55%)] opacity-50" />
              <div className="relative flex h-full items-center justify-center">
                <div className="h-24 w-24 animate-spin-slow rounded-full border border-sky-500/50 border-t-transparent" />
                <div className="absolute text-xs text-slate-300">
                  3D viewer placeholder
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </MotionConfig>
  );
}

