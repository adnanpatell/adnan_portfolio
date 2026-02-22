"use client"

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Aurora light rays from corners */}
      {/* Top-left corner - Primary blue ray */}
      <div 
        className="absolute -left-[25vw] -top-[25vh] h-[150vh] w-[150vw] opacity-50 dark:opacity-60"
        style={{
          background: `conic-gradient(
            from 135deg at 15% 15%,
            transparent 0deg,
            rgba(59, 130, 246, 0.35) 15deg,
            rgba(6, 182, 212, 0.2) 35deg,
            transparent 70deg,
            transparent 360deg
          )`,
          animation: 'ray1 20s ease-in-out infinite',
        }}
      />
      {/* Bottom-right corner - Cyan with purple hint */}
      <div 
        className="absolute -bottom-[25vh] -right-[25vw] h-[150vh] w-[150vw] opacity-40 dark:opacity-50"
        style={{
          background: `conic-gradient(
            from -45deg at 85% 85%,
            transparent 0deg,
            rgba(6, 182, 212, 0.3) 15deg,
            rgba(139, 92, 246, 0.1) 30deg,
            transparent 60deg,
            transparent 360deg
          )`,
          animation: 'ray2 25s ease-in-out infinite',
        }}
      />
      {/* Top-right corner - Soft blue accent */}
      <div 
        className="absolute -right-[25vw] -top-[25vh] h-[150vh] w-[150vw] opacity-30 dark:opacity-40"
        style={{
          background: `conic-gradient(
            from -135deg at 85% 15%,
            transparent 0deg,
            rgba(59, 130, 246, 0.25) 20deg,
            rgba(6, 182, 212, 0.15) 40deg,
            transparent 65deg,
            transparent 360deg
          )`,
          animation: 'ray3 30s ease-in-out infinite',
        }}
      />
      
      {/* Dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Subtle noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes ray1 {
          0%, 100% { transform: translate(0%, 0%) rotate(0deg); }
          25% { transform: translate(8%, 10%) rotate(2deg); }
          50% { transform: translate(-5%, 8%) rotate(-1deg); }
          75% { transform: translate(10%, -5%) rotate(1.5deg); }
        }
        @keyframes ray2 {
          0%, 100% { transform: translate(0%, 0%) rotate(0deg); }
          33% { transform: translate(-10%, -8%) rotate(-2deg); }
          66% { transform: translate(8%, -10%) rotate(1.5deg); }
        }
        @keyframes ray3 {
          0%, 100% { transform: translate(0%, 0%) rotate(0deg); }
          50% { transform: translate(-12%, 10%) rotate(-1.5deg); }
        }
      `}</style>
    </div>
  )
}
