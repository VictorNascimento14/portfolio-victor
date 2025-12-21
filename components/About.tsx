import React from 'react';
import { PERSONAL_INFO, STATS } from '../constants';
import ProfileCard from './ProfileCard';

const About: React.FC = () => {
    return (
        <section id="sobre" className="relative w-full h-screen flex items-start justify-center bg-black text-white pt-28 pb-8 snap-start overflow-hidden">
            
            {/* SVG de Fundo Decorativo */}
            <div className="absolute inset-0 pointer-events-none flex items-end justify-center">
                <svg 
                    className="w-full h-auto scale-150 opacity-10 translate-y-10" 
                    viewBox="0 0 2665 434" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M55.9978 424.81H2608.43L1540.02 9.18988H1124.4L55.9978 424.81Z" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1118.63 11.4336H1545.79" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1112.54 13.8054H1551.89" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1106.08 16.3166H1558.34" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1099.24 18.9799H1565.19" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1091.96 21.8095H1572.46" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1084.22 24.8214H1580.2" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1075.96 28.034H1588.46" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1067.13 31.4679H1597.29" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1057.68 35.1468H1606.75" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1047.52 39.0979H1616.9" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1036.58 43.3526H1627.84" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1024.77 47.9473H1639.65" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1011.98 52.9243H1652.45" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M998.071 58.3337H1666.35" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M982.904 64.2341H1681.52" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M966.293 70.6956H1698.13" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M948.024 77.8024H1716.4" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M927.836 85.6561H1736.59" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M905.407 94.3809H1759.02" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M880.345 104.13H1784.08" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M852.156 115.096H1812.27" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M820.215 127.522H1844.21" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M783.721 141.718H1880.7" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M741.625 158.094H1922.8" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M692.531 177.192H1971.89" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M634.535 199.753H2029.89" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M564.974 226.813H2099.45" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M480.005 259.867H2184.42" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M373.873 301.153H2290.55" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M237.545 354.186H2426.88" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M2526.09 424.81L1526.61 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M2443.75 424.81L1513.21 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M2361.42 424.81L1499.8 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M2279.08 424.81L1486.39 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M2196.74 424.81L1472.99 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M2114.41 424.81L1459.58 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M2032.07 424.81L1446.17 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1949.73 424.81L1432.76 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1867.4 424.81L1419.36 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1785.06 424.81L1405.95 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1702.73 424.81L1392.54 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1620.39 424.81L1379.14 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1538.05 424.81L1365.73 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1455.72 424.81L1352.32 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1373.38 424.81L1338.92 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1291.04 424.81L1325.51 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1208.71 424.81L1312.1 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1126.37 424.81L1298.69 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M1044.03 424.81L1285.29 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M961.698 424.81L1271.88 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M879.362 424.81L1258.47 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M797.025 424.81L1245.07 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M714.689 424.81L1231.66 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M632.352 424.81L1218.25 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M550.016 424.81L1204.84 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M467.68 424.81L1191.44 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M385.343 424.81L1178.03 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M303.007 424.81L1164.62 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M220.671 424.81L1151.22 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                    <path d="M138.334 424.81L1137.81 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ... Resto do seu conteúdo (Quem sou eu, Grid, Stats) ... */}
                <div className="text-center mb-10">
                    <p className="text-lg text-text-secondary uppercase tracking-[0.2em] font-medium">Sobre</p>
                    <h2 className="text-4xl sm:text-6xl font-heading uppercase text-primary font-black tracking-tight mt-1">
                        QUEM SOU EU
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-8">
                            <p className="text-text-secondary leading-relaxed">
                                Desenvolvedor Full Stack, com mais de 2 anos de experiência no desenvolvimento de aplicações web. Atuo tanto no Front-End, criando interfaces modernas, responsivas e focadas na experiência do usuário, quanto no Back-End, desenvolvendo APIs e regras de negócio bem estruturadas.
                                Tenho forte compromisso com código limpo, boas práticas, performance e organização, entregando soluções eficientes, confiáveis e alinhadas às necessidades do negócio.
                            </p>
                            <a href="#" className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-md text-sm hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
                                Saiba Mais
                            </a>
                        </div>
                        <div className="space-y-4">
                            {(Object.keys(PERSONAL_INFO) as Array<keyof typeof PERSONAL_INFO>).map((key) => (
                                <p key={key} className="flex justify-between border-b border-white/10 pb-3">
                                    <span className="font-bold text-white capitalize">{key}:</span>
                                    <span className="text-primary">{PERSONAL_INFO[key]}</span>
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 flex items-center justify-center lg:pt-0 pt-8">
                        <ProfileCard />
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {STATS.map(stat => (
                        <div key={stat.label} className="py-9  border-white/10">
                            <p className="text-6xl sm:text-7xl lg:text-7xl font-heading text-primary font-black">{stat.value}</p>
                            <p className="text-text-secondary mt-2 uppercase tracking-widest text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;