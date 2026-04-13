import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MOCK_USER_DATA } from './mockdata';
import './Styles.css';

// --- SUB-COMPONENTS ---

const Home = ({ setView }) => {
  const carouselData = [
    { title: "What is KYC?", desc: "Know Your Customer (KYC) is the process of verifying a client's identity. It is a mandatory requirement for financial institutions to ensure transparency." },
    { title: "Why do we need KYC?", desc: "Verification is the frontline defense against identity theft and fraud. It ensures services are provided only to legitimate entities." },
    { title: "What is AML?", desc: "Anti-Money Laundering (AML) refers to a suite of procedures designed to stop criminals from disguising illegally obtained funds." },
    { title: "Why is AML needed?", desc: "AML screening protects global financial integrity by monitoring transaction patterns and flagging high-risk behavior." }
  ];

  return (
    <div className="elite-container home-scroll-container">
      <section className="home-section hero-section" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="blur-bridge" style={{ left: '50%', transform: 'translateX(-50%)', width: '800px', opacity: 0.3 }}></div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div style={{ background: 'rgba(110, 68, 104, 0.2)', padding: '8px 20px', borderRadius: '40px', display: 'inline-block', marginBottom: '20px', border: '1px solid var(--secondary)' }}>
            <span className="mono-data" style={{ fontSize: '0.7rem', letterSpacing: '2px', color: 'white' }}>ADVANCED COMPLIANCE INTELLIGENCE</span>
          </div>
          <h1 className="logo-main" style={{ fontSize: '6rem', lineHeight: 1 }}>COMPLI<span>SENSE</span></h1>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '300', marginTop: '15px', opacity: 0.9, color: 'white' }}>Precision Identity Verification for the Age of AI.</h2>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px' }}>
            <button className="btn-main" style={{ width: '220px' }} onClick={() => setView('LANDING')}>Access Portal</button>
          </div>
        </motion.div>
      </section>

      <section className="home-section" style={{ background: 'rgba(0,0,0,0.15)' }}>
        <div className="carousel-header">
          <p className="mono-data" style={{ color: 'var(--secondary)', marginBottom: '10px' }}>CORE CAPABILITIES</p>
          <h2 style={{ color: 'white', fontSize: '3rem' }}>Identity verification designed to scale.</h2>
        </div>
        <div className="value-grid">
          <div className="value-card"><h4>AI-Native Fraud Prevention</h4><p style={{opacity: 0.6}}>Utilizing neural networks to detect deepfakes, synthetic identities, and document tampering with high accuracy.</p></div>
          <div className="value-card"><h4>Fast Onboarding</h4><p style={{opacity: 0.6}}>A frictionless user experience designed for high conversion and real-time Liveliness checking.</p></div>
          <div className="value-card"><h4>Custom Risk Logic</h4><p style={{opacity: 0.6}}>Configure your own risk thresholds and compliance workflows without writing a single line of code.</p></div>
        </div>
      </section>

      <section className="home-section">
        <div className="carousel-header">
          <p className="mono-data" style={{ color: 'var(--secondary)', marginBottom: '10px' }}>THE FLOW</p>
          <h2 style={{ color: 'white', fontSize: '3rem' }}>How CompliSense Protects You</h2>
        </div>
        <div className="steps-container">
          {[
            { t: "ID Upload", d: "AI captures data via OCR within seconds." },
            { t: "Liveliness Scan", d: "Passive liveness detection ensures a real human is present." },
            { t: "Risk Analysis", d: "Background signals check for VPNs and global blocklists." },
            { t: "Onboarding", d: "Instant approval for legitimate users." }
          ].map((step, i) => (
            <div className="step-item" key={i}>
              <div className="step-number">{i + 1}</div>
              <h4 style={{ marginBottom: '10px', color: 'white' }}>{step.t}</h4>
              <p style={{ fontSize: '0.85rem', opacity: 0.5, color: 'white' }}>{step.d}</p>
              {i < 3 && <div style={{ position: 'absolute', top: '25px', right: '-15%', width: '30%', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>}
            </div>
          ))}
        </div>
      </section>

      <section className="home-section" style={{ paddingBottom: '150px' }}>
        <div className="carousel-header"><h2 style={{ color: 'white', fontSize: '3rem' }}>Understanding Compliance</h2></div>
        <div className="carousel-container">
          {carouselData.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.03 }} className="info-block">
              <h3>{item.title}</h3><p style={{ color: 'white', opacity: 0.7 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer style={{ padding: '60px', textAlign: 'center', background: 'var(--accent)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <h1 className="logo-main" style={{ fontSize: '2rem', marginBottom: '20px' }}>COMPLI<span>SENSE</span></h1>
        <p className="mono-data" style={{ opacity: 0.3, color: 'white' }}>© 2026 COMPLISENSE // GLOBAL COMPLIANCE INFRASTRUCTURE</p>
      </footer>
    </div>
  );
};

const Landing = ({ type, setType, setView }) => (
  <div className="elite-container">
    <div className="blur-bridge"></div>
    {/* RESTORED Branding on Left */}
    <div className="branding-area">
      <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 6, repeat: Infinity }}>
        <h1 className="logo-main">COMPLI<span>SENSE</span></h1>
        <p style={{ opacity: 0.4, letterSpacing: '4px', textAlign: 'center' }}>IDENTITY PORTAL</p>
      </motion.div>
    </div>
    <div className="glass-panel">
      <div style={{ maxWidth: '400px', margin: 'auto', width: '100%' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'white' }}>Select Access</h2>
        {['New User', 'Already Existing User', 'Admin Login'].map(t => (
          <motion.div key={t} whileTap={{ scale: 0.95 }} className={`glass-card ${type === t ? 'active' : ''}`} onClick={() => setType(t)}>
            <span style={{ fontWeight: type === t ? '700' : '400', color: 'white' }}>{t}</span>
            <span style={{ opacity: type === t ? 1 : 0.2, color: 'white' }}>✦</span>
          </motion.div>
        ))}
        <button className="btn-main" disabled={!type} onClick={() => setView('AUTH')} style={{marginTop: '20px'}}>Continue</button>
      </div>
    </div>
  </div>
);

const Auth = ({ type, setView, setUser, setPendingUser }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const getStrength = () => {
    if (pass.length === 0) return { width: '0%', color: 'transparent' };
    const hasNumbers = /\d/.test(pass);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    if (hasSymbols) return { width: '100%', color: 'var(--success)' };
    if (hasNumbers) return { width: '60%', color: '#FFB703' };
    return { width: '30%', color: 'var(--error)' };
  };

  const login = () => {
    if (type === 'Admin Login') setView('ADMIN');
    else if (type === 'New User') {
      if (!username) return alert("Please choose a username");
      setPendingUser({ name: username, status: "PENDING", transactions: [] });
      setView('EXISTING_USER_OTP');
    } else {
      const p = MOCK_USER_DATA[email];
      if (p) { setPendingUser(p); setView('EXISTING_USER_OTP'); }
      else alert("Login Failed.");
    }
  };

  return (
    <div className="elite-container">
      <div className="blur-bridge"></div>
      <div className="glass-panel" style={{ margin: 'auto', maxWidth: '500px' }}>
        <h2 style={{ marginBottom: '25px', textAlign: 'center', color: 'white' }}>{type} Access</h2>
        {type === 'New User' && <input className="premium-input" placeholder="Desired Username" onChange={e => setUsername(e.target.value)} />}
        <input className="premium-input" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="premium-input" type="password" placeholder="Password" onChange={e => setPass(e.target.value)} />
        <div className="strength-container"><div className="strength-bar" style={{ width: getStrength().width, backgroundColor: getStrength().color }}></div></div>
        <button className="btn-main" onClick={login}>Secure Access</button>
      </div>
    </div>
  );
};

const ExistingUserOTP = ({ pendingUser, setUser, setView }) => {
  const [otp, setOtp] = useState('');
  const handleVerify = () => {
    if (otp === "998877" || otp === "654321") { 
      setUser(pendingUser); 
      pendingUser.status === "REJECTED" || pendingUser.status === "VERIFIED" ? setView('DASHBOARD') : setView('KYC_FORM');
    }
    else alert("Use 998877");
  };
  return (
    <div className="elite-container"><div className="glass-panel" style={{ margin: 'auto', maxWidth: '500px', textAlign: 'center' }}>
      <h2 style={{ color: 'white' }}>OTP Verification</h2>
      <p style={{ opacity: 0.5, marginBottom: '30px', color: 'white' }}>Enter code for <b>{pendingUser?.name}</b></p>
      <div className="otp-section"><input className="premium-input otp-input" placeholder="000000" maxLength={6} onChange={e => setOtp(e.target.value)} /></div>
      <button className="btn-main" style={{marginTop: '30px'}} onClick={handleVerify}>Confirm Identity</button>
    </div></div>
  );
};

const KYCQuestionnaire = ({ user, setView }) => (
  <div className="elite-container"><div className="glass-panel" style={{ margin: 'auto', maxWidth: '800px' }}>
    <h2 style={{ color: 'white', marginBottom: '10px' }}>KYC Onboarding</h2>
    <div className="questionnaire-grid">
      <input className="premium-input" placeholder="Full Name" defaultValue={user?.name} />
      <input className="premium-input" type="date" />
      <select className="premium-input" style={{background: 'rgba(255,255,255,0.05)'}}><option>Male</option><option>Female</option></select>
      <input className="premium-input" placeholder="PAN Number" />
      <input className="premium-input full-width-input" placeholder="Aadhar Number" />
      <input className="premium-input full-width-input" placeholder="Residential Address" />
      <input className="premium-input full-width-input" placeholder="Mobile" />
    </div>
    <button className="btn-main" style={{ marginTop: '30px' }} onClick={() => setView('KYC')}>Proceed to Livelines</button>
  </div></div>
);

const KYC = ({ user, setUser, setView }) => (
  <div className="elite-container">
    <div className="glass-panel" style={{ margin: 'auto', maxWidth: '800px', textAlign: 'center' }}>
      <h1 style={{ color: 'white', marginBottom: '10px' }}>Verification</h1>
      <div className="glass-card">
        <h3>1. Document Integrity</h3>
        <div style={{ height: '120px', border: '2px dashed rgba(255,255,255,0.2)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ opacity: 0.4 }}>Drop ID Document Here</span>
        </div>
      </div>
      <div className="glass-card">
        <h3>2. Liveliness Detection</h3>
        <div style={{ height: '220px', background: '#000', borderRadius: '15px', position: 'relative', overflow: 'hidden' }}>
          <div className="scan-line"></div>
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.3 }}>AI SCANNING ACTIVE</span>
        </div>
      </div>
      <button className="btn-main" onClick={() => {
        setUser({ ...user, status: 'VERIFIED', transactions: MOCK_USER_DATA["verified@complisense.com"].transactions });
        setView('DASHBOARD');
      }}>Complete Verification</button>
    </div>
  </div>
);

const UserDashboard = ({ user, setView }) => {
  const isV = user?.status === 'VERIFIED';
  return (
    <div className="elite-container" style={{ overflowY: 'auto' }}>
      <div className="glass-panel" style={{ margin: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
          <div><h1 style={{ color: 'white' }}>{user?.name}</h1><p className="mono-data" style={{ opacity: 0.5 }}>CLIENT_ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p></div>
          <div className="tooltip-trigger">
            <div style={{ background: isV ? 'var(--success)' : 'var(--error)', padding: '10px 25px', borderRadius: '30px', fontWeight: 'bold' }}>● KYC {user?.status}</div>
            {!isV && user?.reasons && (
              <div className="tooltip-box">
                <p style={{ fontWeight: 'bold', color: 'var(--error)', marginBottom: '10px' }}>Verification Declined</p>
                <ul className="rejection-reason-list">{user.reasons.map((r, i) => <li key={i}>{r}</li>)}</ul>
              </div>
            )}
          </div>
        </div>
        <div className="glass-card" style={{ flex: 1, background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '20px' }}>Audit History</h3>
          {!isV ? (
            <div style={{ width: '100%', padding: '40px' }}>
               <p style={{opacity: 0.4, marginBottom: '20px'}}>Your verification results were inconclusive.</p>
               {/* Lighter and Centered Button */}
               <button className="btn-main btn-light" style={{ width: '280px' }} onClick={() => setView('KYC')}>Redo KYC Verification</button>
            </div>
          ) : (
            <table style={{ width: '100%', color: 'white', marginTop: '20px' }}>
              <thead><tr style={{ opacity: 0.4 }}><th>REF</th><th>AMOUNT</th><th>AML STATUS</th></tr></thead>
              <tbody>{user.transactions?.map(t => <tr key={t.id} style={{ height: '60px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}><td>{t.id}</td><td>{t.amount}</td><td style={{ color: t.color, fontWeight: 'bold' }}>● {t.status}</td></tr>)}</tbody>
            </table>
          )}
        </div>
        <p onClick={() => setView('HOME')} style={{ marginTop: '20px', cursor: 'pointer', opacity: 0.3 }}>Logout Session</p>
      </div>
    </div>
  );
};

const AdminDashboard = ({ setView }) => {
  const [activeRisk, setActiveRisk] = useState(null);
  const [activeKYC, setActiveKYC] = useState(null);
  const maskAcc = (acc) => `XXXX XXXX ${acc.slice(-4)}`;
  
  const riskUsers = {
    "High Risk": [{ name: "Rahul Mulik", flags: 12, acc: "556711229088" }, { name: "Meghana Ghatage", flags: 15, acc: "990011223344" }],
    "Medium Risk": [{ name: "Parth Mahajan", flags: 6, acc: "112233445566" }, { name: "Priyanka Desai", flags: 4, acc: "778899001122" }],
    "Low Risk": [{ name: "Nitya Tiwari", flags: 1, acc: "887766554433" }, { name: "Soumya Jain", flags: 0, acc: "334455667788" }]
  };

  const kycData = {
    "Approved": [{ name: "Aaron Phillip", acc: "109288334455" }, { name: "Anushrav Mishra", acc: "900012345678" }],
    "Rejected": [{ name: "Bhadra Menon", acc: "445566778899" }, { name: "Shreya Singh", acc: "332211445566" }]
  };

  return (
    <div className="elite-container" style={{ overflowY: 'auto' }}>
      <div className="glass-panel" style={{ margin: '40px' }}>
        <h1 style={{ marginBottom: '40px', color: 'white' }}>Risk Matrix</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
          {['High Risk', 'Medium Risk', 'Low Risk'].map((level, i) => (
            <div key={level} className={`glass-card interactive-box ${activeRisk === level ? 'active' : ''}`} style={{ borderTop: `4px solid ${['var(--error)', '#FFB703', 'var(--success)'][i]}`, flexDirection: 'column', alignItems: 'flex-start' }} onClick={() => setActiveRisk(activeRisk === level ? null : level)}>
              <p style={{ opacity: 0.5 }}>{level}</p><h2 style={{ fontSize: '3rem' }}>{[12, 28, 60][i]}%</h2>
              {activeRisk === level && <div className="admin-list-container">{riskUsers[level]?.map(u => <div key={u.name} className="admin-list-item"><span>{u.name}</span><span className="mono-data">{maskAcc(u.acc)}</span></div>)}</div>}
            </div>
          ))}
        </div>

        <h1 style={{ marginBottom: '40px', color: 'white' }}>KYC Status Management</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
          {['Approved', 'Rejected'].map((status) => (
            <div key={status} className={`glass-card interactive-box ${activeKYC === status ? 'active' : ''}`} style={{ borderLeft: `4px solid ${status === 'Approved' ? 'var(--success)' : 'var(--error)'}`, flexDirection: 'column', alignItems: 'flex-start' }} onClick={() => setActiveKYC(activeKYC === status ? null : status)}>
              <h3>{status} KYCs</h3>
              {activeKYC === status && <div className="admin-list-container">{kycData[status].map(u => <div key={u.name} className="admin-list-item"><span>{u.name}</span><span className="mono-data">{maskAcc(u.acc)}</span></div>)}</div>}
            </div>
          ))}
        </div>

        <div className="glass-card" style={{ flex: 'none', textAlign: 'center' }}>
          <h3>Live Surveillance Feed</h3>
          <p className="mono-data" style={{ opacity: 0.3, marginTop: '20px' }}>[NO THREATS DETECTED] ... MONITORING ACTIVE</p>
        </div>
        <button onClick={() => setView('HOME')} style={{ background: 'none', border: 'none', color: 'white', opacity: 0.3, cursor: 'pointer', alignSelf: 'center', marginTop: '20px' }}>Logout Admin</button>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState('HOME');
  const [type, setType] = useState(null);
  const [user, setUser] = useState(null);
  const [pendingUser, setPendingUser] = useState(null);

  return (
    <main>
      {view === 'HOME' && <Home setView={setView} />}
      {view === 'LANDING' && <Landing type={type} setType={setType} setView={setView} />}
      {view === 'AUTH' && <Auth type={type} setView={setView} setUser={setUser} setPendingUser={setPendingUser} />}
      {view === 'EXISTING_USER_OTP' && <ExistingUserOTP pendingUser={pendingUser} setUser={setUser} setView={setView} />}
      {view === 'KYC_FORM' && <KYCQuestionnaire user={user} setView={setView} />}
      {view === 'KYC' && <KYC user={user} setUser={setUser} setView={setView} />}
      {view === 'DASHBOARD' && <UserDashboard user={user} setView={setView} />}
      {view === 'ADMIN' && <AdminDashboard setView={setView} />}
    </main>
  );
}