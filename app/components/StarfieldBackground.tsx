'use client'

export default function StarfieldBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black opacity-30"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(1px 1px at 20px 30px, white, transparent),
          radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.8), transparent),
          radial-gradient(1px 1px at 50px 160px, rgba(255,255,255,0.6), transparent),
          radial-gradient(1.5px 1.5px at 90px 40px, white, transparent),
          radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.7), transparent),
          radial-gradient(1px 1px at 160px 120px, rgba(255,255,255,0.5), transparent),
          radial-gradient(2px 2px at 200px 50px, white, transparent),
          radial-gradient(1px 1px at 250px 160px, rgba(255,255,255,0.8), transparent),
          radial-gradient(1px 1px at 300px 90px, rgba(255,255,255,0.6), transparent),
          radial-gradient(1.5px 1.5px at 350px 140px, white, transparent),
          radial-gradient(1px 1px at 400px 60px, rgba(255,255,255,0.7), transparent),
          radial-gradient(1px 1px at 450px 180px, rgba(255,255,255,0.5), transparent),
          radial-gradient(2px 2px at 500px 100px, white, transparent),
          radial-gradient(1px 1px at 550px 150px, rgba(255,255,255,0.8), transparent),
          radial-gradient(1px 1px at 600px 70px, rgba(255,255,255,0.6), transparent),
          radial-gradient(1.5px 1.5px at 650px 130px, white, transparent),
          radial-gradient(1px 1px at 700px 40px, rgba(255,255,255,0.7), transparent),
          radial-gradient(1px 1px at 750px 170px, rgba(255,255,255,0.5), transparent),
          radial-gradient(2px 2px at 800px 80px, white, transparent),
          radial-gradient(1px 1px at 850px 140px, rgba(255,255,255,0.8), transparent),
          radial-gradient(1px 1px at 900px 50px, rgba(255,255,255,0.6), transparent),
          radial-gradient(1.5px 1.5px at 950px 110px, white, transparent)
        `,
        backgroundSize: '1000px 1000px',
        animation: 'stars 100s linear infinite'
      }}></div>
      <style jsx>{`
        @keyframes stars {
          from { transform: translateY(0); }
          to { transform: translateY(-1000px); }
        }
      `}</style>
    </div>
  )
}
