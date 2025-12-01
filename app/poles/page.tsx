import Image from 'next/image';

const poles = [
  { name: 'Animals', desc: "Protection et bien-être des animaux", query: 'animals' },
  { name: 'Charity', desc: "Soutien ciblé aux causes qui comptent", query: 'charity' },
  { name: 'Community', desc: "Rassemblements, partenariats, réseaux", query: 'community' },
  { name: 'Culture', desc: "Promotion des arts et de la culture", query: 'culture' },
  { name: 'Education', desc: "Programmes et formations pour tous", query: 'education' },
  { name: 'Environment', desc: "Actions & projets pour préserver notre planète", query: 'environment' },
  { name: 'Finance', desc: "Solutions financières pour l'impact", query: 'finance' },
  { name: 'Freeze', desc: "Freeze automatique en cas de chute ou problème", query: 'security' },
  { name: 'Health', desc: "Santé et bien-être des populations", query: 'health' },
  { name: 'Impact', desc: "Mesure & suivi des impacts positifs", query: 'impact' },
  { name: 'Innovation', desc: "Tech & Web3 pour l'impact", query: 'innovation' },
  { name: 'Tech', desc: "Technologie et infrastructure", query: 'technology' },
  { name: 'Volunteer', desc: "Engage-toi, impacte localement", query: 'volunteer' },
];

export default function Poles() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-accent">Nos Pôles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {poles.map(p => (
          <div key={p.name} className="bg-secondary rounded shadow p-4">
            <Image src={`https://source.unsplash.com/800x450/?${p.query}`} alt={p.name} width={800} height={450} className="rounded" />
            <h2 className="text-2xl font-bold text-accent mt-3">{p.name}</h2>
            <p className="text-graylight mt-1">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



