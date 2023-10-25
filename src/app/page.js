import Image from "next/image";
import dynamic from 'next/dynamic';
import loginimage from "@/images/sanofi.png";
import './globals.css';

const ClientComponent = dynamic(() => import('./ClientComponent'), {
  ssr: false
});

function redirectTo(route) {
  window.location.href = route;
}

export default function Home() {
  const handleLogout = () => {
    redirectTo('/login');
  };

  return (
    <div className="bg-slate-300 h-screen w-screen flex">
      <div className="fixed top-0 left-0 h-full w-64 max-h-screen bg-black shadow-lg">
        <div className="p-4">
          <div className="mb-4">
            <aside className="hidden md:flex p-4">
              <Image className="h-full w-full object-cover" src={loginimage} />
            </aside>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Profilaxia Tev Em Pacientes Cirúrgicos</button>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Profilaxia de Tev Em Pacientes Clínicos</button>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Avaliação de Risco Tev Em Pacientes Obstétricas</button>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Pacientes Especiais</button>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Tratamento do Tev</button>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Oncologia</button>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Cardiologia</button>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Recursos</button>
            <button className="w-full p-4 text-center text-white bg-red-500 rounded-lg" onClick={handleLogout}>
              Sair
            </button>
          </div>
       </div>
    </div>
    <div className="text-white flex flex-col justify-center items-center w-full">
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', fontSize: '30px', color:'#000'}}>
    <label className="checkbox-label">
      <input type="checkbox" className="risk-checkbox" id="risk1" style={{width: '30px', height: '30px', marginRight: '30px'}} /> Idade de 41 anos a 60 anos
    </label>
    {/* ... (outros checkboxes) ... */}
    <label className="checkbox-label">
      <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Doença pulmonar obstrutiva crônica
    </label>
  </div>
</div>


    <ClientComponent />
    </div>
  );
}
