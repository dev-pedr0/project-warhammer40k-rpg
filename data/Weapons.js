const Weapon = require('../models/Weapon');

//current list of existing types of weapons. Able to create more
const weaponsData = [
    {
        weaponName: "Pistola Bolter",
        weaponType: "Armas Bolter",
        weaponClass: "Pistola",
        weaponRange: "30m",
        weaponRateOfFire: "S/2/-",
        weaponDamage: "1d10+5 X",
        weaponPenetration: 4,
        weaponMunition: 8,
        weaponRecharge: "Padrão",
        weaponSpecial: "Dilacerante",
        weaponWeight: "3.5kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Arma Bolter",
        weaponType: "Armas Bolter",
        weaponClass: "Básica",
        weaponRange: "100m",
        weaponRateOfFire: "S/3/-",
        weaponDamage: "1d10+5 X",
        weaponPenetration: 4,
        weaponMunition: 24,
        weaponRecharge: "Padrão",
        weaponSpecial: "Dilacerante",
        weaponWeight: "7kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Bolter Pesado",
        weaponType: "Armas Bolter",
        weaponClass: "Pesada",
        weaponRange: "150m",
        weaponRateOfFire: "-/-/6",
        weaponDamage: "1d10+8 X",
        weaponPenetration: 5,
        weaponMunition: 60,
        weaponRecharge: "Padrão",
        weaponSpecial: "Dilacerante",
        weaponWeight: "40kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Bolter Tempestade",
        weaponType: "Armas Bolter",
        weaponClass: "Básica",
        weaponRange: "90m",
        weaponRateOfFire: "S/2/4",
        weaponDamage: "1d10+5 X",
        weaponPenetration: 4,
        weaponMunition: 60,
        weaponRecharge: "Padrão",
        weaponSpecial: "Dilacerante, Barragem",
        weaponWeight: "40kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Lança Chamas de Mão",
        weaponType: "Armas Incendiárias",
        weaponClass: "Pistola",
        weaponRange: "10m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10+4 E",
        weaponPenetration: 2,
        weaponMunition: 2,
        weaponRecharge: "Padrão x2",
        weaponSpecial: "Chama, Spray",
        weaponWeight: "3.5kg",
        weaponAvailability: "Raro",
    },
    {
        weaponName: "Lança Chamas",
        weaponType: "Armas Incendiárias",
        weaponClass: "Básica",
        weaponRange: "20m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10+4 E",
        weaponPenetration: 2,
        weaponMunition: 6,
        weaponRecharge: "Padrão x2",
        weaponSpecial: "Chama, Spray",
        weaponWeight: "6kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Lança Chamas Pesado",
        weaponType: "Armas Incendiárias",
        weaponClass: "Pesada",
        weaponRange: "30m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10+5 E",
        weaponPenetration: 4,
        weaponMunition: 10,
        weaponRecharge: "Padrão x2",
        weaponSpecial: "Chama, Spray",
        weaponWeight: "45kg",
        weaponAvailability: "Raro",
    },
    {
        weaponName: "Pistola Las",
        weaponType: "Armas Las",
        weaponClass: "Pistola",
        weaponRange: "30m",
        weaponRateOfFire: "S/2/-",
        weaponDamage: "1d10+2 E",
        weaponPenetration: 0,
        weaponMunition: 30,
        weaponRecharge: "Simples",
        weaponSpecial: "Confiável",
        weaponWeight: "1.5kg",
        weaponAvailability: "Comum",
    },
    {
        weaponName: "Arma Las",
        weaponType: "Armas Las",
        weaponClass: "Básica",
        weaponRange: "100m",
        weaponRateOfFire: "S/3/-",
        weaponDamage: "1d10+3 E",
        weaponPenetration: 0,
        weaponMunition: 60,
        weaponRecharge: "Padrão",
        weaponSpecial: "Confiável",
        weaponWeight: "4kg",
        weaponAvailability: "Comum",
    },
    {
        weaponName: "Laslock",
        weaponType: "Armas Las",
        weaponClass: "Básica",
        weaponRange: "70m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10+4 E",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponRecharge: "Simples",
        weaponSpecial: "Instável",
        weaponWeight: "4kg",
        weaponAvailability: "Fértil",
    },
    {
        weaponName: "Las Longo",
        weaponType: "Armas Las",
        weaponClass: "Básica",
        weaponRange: "150m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10+3 E",
        weaponPenetration: 1,
        weaponMunition: 40,
        weaponRecharge: "Padrão",
        weaponSpecial: "Confiável, Precisa, Sobrenatural (4)",
        weaponWeight: "4.5kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Pistola Las Hot-Shot",
        weaponType: "Armas Las",
        weaponClass: "Pistola",
        weaponRange: "20m",
        weaponRateOfFire: "S/2/-",
        weaponDamage: "1d10+4 E",
        weaponPenetration: 7,
        weaponMunition: 40,
        weaponRecharge: "Padrão x2",
        weaponSpecial: "",
        weaponWeight: "4kg",
        weaponAvailability: "Raro",
    },
    {
        weaponName: "Arma Las Hot-Shot",
        weaponType: "Armas Las",
        weaponClass: "Básica",
        weaponRange: "60m",
        weaponRateOfFire: "S/3/-",
        weaponDamage: "1d10+4 E",
        weaponPenetration: 7,
        weaponMunition: 30,
        weaponRecharge: "Padrão x2",
        weaponSpecial: "",
        weaponWeight: "6kg",
        weaponAvailability: "Raro",
    },
    {
        weaponName: "Lança Granadas",
        weaponType: "Armas de Lançador",
        weaponClass: "Básica",
        weaponRange: "60m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "",
        weaponPenetration: 0,
        weaponMunition: 6,
        weaponRecharge: "Padrão x2",
        weaponSpecial: "",
        weaponWeight: "12kg",
        weaponAvailability: "Padrão",
    },
    {
        weaponName: "Lança Mísseis",
        weaponType: "Armas de Lançador",
        weaponClass: "Pesada",
        weaponRange: "300m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponRecharge: "Padrão",
        weaponSpecial: "",
        weaponWeight: "35kg",
        weaponAvailability: "Raro",
    },
    {
        weaponName: "Boleadeira",
        weaponType: "Armas Arcaicas",
        weaponClass: "Lançar",
        weaponRange: "10m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponRecharge: "Padrão",
        weaponSpecial: "Imprecisa, Armadilha (1)",
        weaponWeight: "1.5kg",
        weaponAvailability: "Comum",
    },
    {
        weaponName: "Arco",
        weaponType: "Armas Arcaicas",
        weaponClass: "Básico",
        weaponRange: "30m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 L",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponRecharge: "Simples",
        weaponSpecial: "Primitiva (6), Confiável",
        weaponWeight: "2kg",
        weaponAvailability: "Padrão",
    },
    {
        weaponName: "Besta",
        weaponType: "Armas Arcaicas",
        weaponClass: "Básico",
        weaponRange: "30m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 L",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponRecharge: "Padrão x2",
        weaponSpecial: "Primitiva (7)",
        weaponWeight: "3kg",
        weaponAvailability: "Padrão",
    },
    {
        weaponName: "Pistola Inferno",
        weaponType: "Armas Melta",
        weaponClass: "Pistola",
        weaponRange: "10m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "2d10 + 10 E",
        weaponPenetration: 12,
        weaponMunition: 3,
        weaponRecharge: "Padrão",
        weaponSpecial: "Melta",
        weaponWeight: "3kg",
        weaponAvailability: "Quase Único",
    },
    {
        weaponName: "Arma Melta",
        weaponType: "Armas Melta",
        weaponClass: "Básico",
        weaponRange: "20m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "2d10 + 10 E",
        weaponPenetration: 12,
        weaponMunition: 5,
        weaponRecharge: "Padrão",
        weaponSpecial: "Melta",
        weaponWeight: "15kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Pistola de Plasma",
        weaponType: "Armas de Plasma",
        weaponClass: "Pistola",
        weaponRange: "30m",
        weaponRateOfFire: "S/2/-",
        weaponDamage: "1d10 + 6 E",
        weaponPenetration: 6,
        weaponMunition: 10,
        weaponRecharge: "Padrão x3",
        weaponSpecial: "Superaquecer, Maximização",
        weaponWeight: "4kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Arma de Plasma",
        weaponType: "Armas de Plasma",
        weaponClass: "Básico",
        weaponRange: "90m",
        weaponRateOfFire: "S/2/-",
        weaponDamage: "1d10 + 7 E",
        weaponPenetration: 6,
        weaponMunition: 40,
        weaponRecharge: "Padrão x5",
        weaponSpecial: "Superaquecer, Maximização",
        weaponWeight: "18kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Pistola Automática",
        weaponType: "Armas de Projeto Sólido",
        weaponClass: "Pistola",
        weaponRange: "30m",
        weaponRateOfFire: "S/-/6",
        weaponDamage: "1d10 + 2 I",
        weaponPenetration: 0,
        weaponMunition: 18,
        weaponRecharge: "Padrão",
        weaponSpecial: "",
        weaponWeight: "1.5kg",
        weaponAvailability: "Padrão",
    },
    {
        weaponName: "Arma Automática",
        weaponType: "Armas de Projeto Sólido",
        weaponClass: "Básica",
        weaponRange: "100m",
        weaponRateOfFire: "S/3/10",
        weaponDamage: "1d10 + 3 I",
        weaponPenetration: 0,
        weaponMunition: 30,
        weaponRecharge: "Padrão",
        weaponSpecial: "",
        weaponWeight: "5kg",
        weaponAvailability: "Padrão",
    },
    {
        weaponName: "Canhão Automático",
        weaponType: "Armas de Projeto Sólido",
        weaponClass: "Pesada",
        weaponRange: "300m",
        weaponRateOfFire: "S/3/-",
        weaponDamage: "1d10 + 8 I",
        weaponPenetration: 6,
        weaponMunition: 24,
        weaponRecharge: "Padrão x2",
        weaponSpecial: "Confiável",
        weaponWeight: "40kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Canhão de Mão",
        weaponType: "Armas de Projeto Sólido",
        weaponClass: "Pistola",
        weaponRange: "35m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 4 I",
        weaponPenetration: 2,
        weaponMunition: 5,
        weaponRecharge: "Padrão x2",
        weaponSpecial: "",
        weaponWeight: "3kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Metralhadora Pesada",
        weaponType: "Armas de Projeto Sólido",
        weaponClass: "Pesada",
        weaponRange: "100m",
        weaponRateOfFire: "-/-/8",
        weaponDamage: "1d10 + 4 I",
        weaponPenetration: 3,
        weaponMunition: 80,
        weaponRecharge: "Padrão x2",
        weaponSpecial: "",
        weaponWeight: "30kg",
        weaponAvailability: "Raro",
    },
    {
        weaponName: "Espingarda",
        weaponType: "Armas de Projeto Sólido",
        weaponClass: "Básica",
        weaponRange: "30m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 4 I",
        weaponPenetration: 0,
        weaponMunition: 8,
        weaponRecharge: "Padrão x2",
        weaponSpecial: "Disperçar",
        weaponWeight: "5kg",
        weaponAvailability: "Padrão",
    },
    {
        weaponName: "Escopeta",
        weaponType: "Armas de Projeto Sólido",
        weaponClass: "Básica",
        weaponRange: "30m",
        weaponRateOfFire: "S/3/-",
        weaponDamage: "1d10 + 4 I",
        weaponPenetration: 0,
        weaponMunition: 18,
        weaponRecharge: "Padrão x2",
        weaponSpecial: "Disperçar",
        weaponWeight: "6.5kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Rifle de Precisão",
        weaponType: "Armas de Projeto Sólido",
        weaponClass: "Básica",
        weaponRange: "200m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 4 I",
        weaponPenetration: 3,
        weaponMunition: 20,
        weaponRecharge: "Padrão",
        weaponSpecial: "Confiável, Precisa",
        weaponWeight: "5kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Metralhadora Automática",
        weaponType: "Armas de Projeto Sólido",
        weaponClass: "Pistola",
        weaponRange: "30m",
        weaponRateOfFire: "S/3/-",
        weaponDamage: "1d10 + 3 I",
        weaponPenetration: 0,
        weaponMunition: 9,
        weaponRecharge: "Padrão",
        weaponSpecial: "",
        weaponWeight: "1.5kg",
        weaponAvailability: "Padrão",
    },
    {
        weaponName: "Revolver",
        weaponType: "Armas de Projeto Sólido",
        weaponClass: "Pistola",
        weaponRange: "30m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 3 I",
        weaponPenetration: 0,
        weaponMunition: 6,
        weaponRecharge: "Padrãox2",
        weaponSpecial: "Confiável",
        weaponWeight: "1.5kg",
        weaponAvailability: "Fértil",
    },
    {
        weaponName: "Pistola Grav",
        weaponType: "Armas Exóticas",
        weaponClass: "Pistola",
        weaponRange: "15m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 3 I",
        weaponPenetration: 6,
        weaponMunition: 6,
        weaponRecharge: "Padrão",
        weaponSpecial: "Concussivo (1), Graviton",
        weaponWeight: "3kg",
        weaponAvailability: "Quase Único",
    },
    {
        weaponName: "Arma Grav",
        weaponType: "Armas Exóticas",
        weaponClass: "Básica",
        weaponRange: "30m",
        weaponRateOfFire: "S/3/-",
        weaponDamage: "1d10 + 6 I",
        weaponPenetration: 8,
        weaponMunition: 9,
        weaponRecharge: "Padrãox2",
        weaponSpecial: "Concussivo (2), Graviton",
        weaponWeight: "6kg",
        weaponAvailability: "Extremamente Raro",
    },
    {
        weaponName: "Pistola Agulha",
        weaponType: "Armas Exóticas",
        weaponClass: "Pistola",
        weaponRange: "30m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 R",
        weaponPenetration: 0,
        weaponMunition: 6,
        weaponRecharge: "Padrão",
        weaponSpecial: "Precisa, Sobrenatural (1), Tóxica (5)",
        weaponWeight: "1.5kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Rifle Agulha",
        weaponType: "Armas Exóticas",
        weaponClass: "Básica",
        weaponRange: "180m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 R",
        weaponPenetration: 0,
        weaponMunition: 6,
        weaponRecharge: "Padrãox2",
        weaponSpecial: "Precisa, Sobrenatural (1), Tóxica (5)",
        weaponWeight: "2kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Pistola de Teia",
        weaponType: "Armas Exóticas",
        weaponClass: "Pistola",
        weaponRange: "30m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponRecharge: "Padrão",
        weaponSpecial: "Armadilha (0)",
        weaponWeight: "3.5kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Lança Teia",
        weaponType: "Armas Exóticas",
        weaponClass: "Básica",
        weaponRange: "50m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponRecharge: "Padrão",
        weaponSpecial: "Explosão (5), Armadilha (1)",
        weaponWeight: "8kg",
        weaponAvailability: "Raro",
    },
    {
        weaponName: "Granada Cegante",
        weaponType: "Granadas/Mísseis",
        weaponClass: "Lançar",
        weaponRange: "BF x 3",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponSpecial: "Fumaça (2)",
        weaponWeight: "0.5kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Granada de Asfixia",
        weaponType: "Granadas/Mísseis",
        weaponClass: "Lançar",
        weaponRange: "BF x 3",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "Especial",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponSpecial: "Explosão (3)",
        weaponWeight: "0.5kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Granada de Fragmento",
        weaponType: "Granadas/Mísseis",
        weaponClass: "Lançar",
        weaponRange: "BF x 3",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "2d10 X",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponSpecial: "Explosão (3)",
        weaponWeight: "0.5kg",
        weaponAvailability: "Padrão",
    },
    {
        weaponName: "Granada Alucinógenica",
        weaponType: "Granadas/Mísseis",
        weaponClass: "Lançar",
        weaponRange: "BF x 3",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponSpecial: "Explosão (6), Alucinógeno (2)",
        weaponWeight: "0.5kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Granada de Pulso Elétrico",
        weaponType: "Granadas/Mísseis",
        weaponClass: "Lançar",
        weaponRange: "BF x 3",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponSpecial: "Pulso Elétrico (2)",
        weaponWeight: "0.5kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Granada Krak",
        weaponType: "Granadas/Mísseis",
        weaponClass: "Lançar",
        weaponRange: "BF x 3",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "2d10 + 4 X",
        weaponPenetration: 6,
        weaponMunition: 1,
        weaponSpecial: "Concussivo (0)",
        weaponWeight: "0.5kg",
        weaponAvailability: "Raro",
    },
    {
        weaponName: "Granada de Flash de Fóton",
        weaponType: "Granadas/Mísseis",
        weaponClass: "Lançar",
        weaponRange: "BF x 3",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponSpecial: "Explosão (6)",
        weaponWeight: "0.5kg",
        weaponAvailability: "Raro",
    },
    {
        weaponName: "Granada de Fumaça",
        weaponType: "Granadas/Mísseis",
        weaponClass: "Lançar",
        weaponRange: "BF x 3",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponSpecial: "Fumaça (4)",
        weaponWeight: "0.5kg",
        weaponAvailability: "Padrão",
    },
    {
        weaponName: "Granada de Atordoamento",
        weaponType: "Granadas/Mísseis",
        weaponClass: "Lançar",
        weaponRange: "BF x 3",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponSpecial: "Explosão (3), Concussivo (2)",
        weaponWeight: "0.5kg",
        weaponAvailability: "Padrão",
    },
    {
        weaponName: "Granada de Teia",
        weaponType: "Granadas/Mísseis",
        weaponClass: "Lançar",
        weaponRange: "BF x 3",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponSpecial: "Explosão (3), Armadilha (2)",
        weaponWeight: "0.5kg",
        weaponAvailability: "Raro",
    },
    {
        weaponName: "Míssil de Fragmento",
        weaponType: "Granadas/Mísseis",
        weaponClass: "Lançar",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "2d10 + 2 X",
        weaponPenetration: 2,
        weaponMunition: 1,
        weaponSpecial: "Explosão (5)",
        weaponWeight: "1kg",
        weaponAvailability: "Comum",
    },
    {
        weaponName: "Míssil Krak",
        weaponType: "Granadas/Mísseis",
        weaponClass: "Lançar",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "3d10 + 8 X",
        weaponPenetration: 8,
        weaponMunition: 1,
        weaponSpecial: "Concussivo (3), Efetiva (2)",
        weaponWeight: "1kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Bomba de Fogo",
        weaponType: "Granadas/Mísseis",
        weaponClass: "Lançar",
        weaponRange: "BF x 3",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 2 E",
        weaponPenetration: 0,
        weaponMunition: 1,
        weaponSpecial: "Explosão (2), Chama",
        weaponWeight: "0.5kg",
        weaponAvailability: "Fértil",
    },
    {
        weaponName: "Bomba Melta",
        weaponType: "Granadas/Mísseis",
        weaponClass: "Lançar",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "6d10 E",
        weaponPenetration: 12,
        weaponMunition: 1,
        weaponSpecial: "Explosão (2), Chama, Melta",
        weaponWeight: "12kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Machado Corrente",
        weaponType: "Armas de Corrente",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 4 L",
        weaponPenetration: 2,
        weaponSpecial: "Dilacerante",
        weaponWeight: "13kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Faca Corrente",
        weaponType: "Armas de Corrente",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 1 L",
        weaponPenetration: 1,
        weaponSpecial: "Dilacerante",
        weaponWeight: "2kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Espada Corrente",
        weaponType: "Armas de Corrente",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 2 L",
        weaponPenetration: 2,
        weaponSpecial: "Dilacerante, Balanceada",
        weaponWeight: "6kg",
        weaponAvailability: "Comum",
    },
    {
        weaponName: "Esvicerador",
        weaponType: "Armas de Corrente",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "2d10 L",
        weaponPenetration: 9,
        weaponSpecial: "Dilacerante, Pesada, Afiada",
        weaponWeight: "15kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Espada de Força",
        weaponType: "Armas de Força",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 1 L",
        weaponPenetration: 2,
        weaponSpecial: "Balanceada, Energia",
        weaponWeight: "5kg",
        weaponAvailability: "Quase Único",
    },
    {
        weaponName: "Bastão de Força",
        weaponType: "Armas de Força",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 L",
        weaponPenetration: 2,
        weaponSpecial: "Energia",
        weaponWeight: "2kg",
        weaponAvailability: "Extremamente Raro",
    },
    {
        weaponName: "Arma Grande",
        weaponType: "Armas Arcaicas",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "2d10 L",
        weaponPenetration: 0,
        weaponSpecial: "Desbalanceada",
        weaponWeight: "7kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Lança Explosiva",
        weaponType: "Armas Arcaicas",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "2d10 + 3 X",
        weaponPenetration: 7,
        weaponSpecial: "Concussiva (3)",
        weaponWeight: "4kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Arma Improvisada",
        weaponType: "Armas Arcaicas",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 - 2 L",
        weaponPenetration: 0,
        weaponSpecial: "Primitiva (7), Desbalanceada",
        weaponWeight: "varia",
        weaponAvailability: "Ubíquo",
    },
    {
        weaponName: "Faca",
        weaponType: "Armas Arcaicas",
        weaponClass: "Corpo/Lançar",
        weaponRange: "5m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d5 L",
        weaponPenetration: 0,
        weaponSpecial: "",
        weaponWeight: "1",
        weaponAvailability: "Fértil",
    },
    {
        weaponName: "Escudo",
        weaponType: "Armas Arcaicas",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d5 I",
        weaponPenetration: 0,
        weaponSpecial: "Defensiva",
        weaponWeight: "3kg",
        weaponAvailability: "Padrão",
    },
    {
        weaponName: "Lança",
        weaponType: "Armas Arcaicas",
        weaponClass: "Corpo/Lançar",
        weaponRange: "5m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 L",
        weaponPenetration: 0,
        weaponSpecial: "Primitiva (8)",
        weaponWeight: "3kg",
        weaponAvailability: "Padrão",
    },
    {
        weaponName: "Bastão",
        weaponType: "Armas Arcaicas",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 L",
        weaponPenetration: 0,
        weaponSpecial: "Primitiva (7), Balanceada",
        weaponWeight: "3kg",
        weaponAvailability: "Fértil",
    },
    {
        weaponName: "Espada",
        weaponType: "Armas Arcaicas",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 L",
        weaponPenetration: 0,
        weaponSpecial: "Balanceada",
        weaponWeight: "3kg",
        weaponAvailability: "Padrão",
    },
    {
        weaponName: "Cassetete",
        weaponType: "Armas Arcaicas",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 L",
        weaponPenetration: 0,
        weaponSpecial: "Primitiva (7)",
        weaponWeight: "2kg",
        weaponAvailability: "Fértil",
    },
    {
        weaponName: "Martelo de Guerra",
        weaponType: "Armas Arcaicas",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 3 L",
        weaponPenetration: 1,
        weaponSpecial: "Concussiva (1), Primitiva (8)",
        weaponWeight: "4.5kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Chicote",
        weaponType: "Armas Arcaicas",
        weaponClass: "Corpo",
        weaponRange: "3m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 L",
        weaponPenetration: 0,
        weaponSpecial: "Primitiva (6), Flexível",
        weaponWeight: "2kg",
        weaponAvailability: "Comum",
    },
    {
        weaponName: "Machado do Omnissian",
        weaponType: "Armas de Energia",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "2d10 + 4 E",
        weaponPenetration: 6,
        weaponSpecial: "Campo de Força, Desbalanceada",
        weaponWeight: "8kg",
        weaponAvailability: "Extremamente Raro",
    },
    {
        weaponName: "Punho de Energia",
        weaponType: "Armas de Energia",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "2d10 + BFx2 E",
        weaponPenetration: 9,
        weaponSpecial: "Campo de Força, Pesada",
        weaponWeight: "13kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Espada de Energia",
        weaponType: "Armas de Energia",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 5 E",
        weaponPenetration: 5,
        weaponSpecial: "Campo de Força, Balanceada",
        weaponWeight: "3kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Machado de Energia",
        weaponType: "Armas de Energia",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 7 E",
        weaponPenetration: 7,
        weaponSpecial: "Campo de Força, Desbalanceada",
        weaponWeight: "6kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Maça de Energia (Forte)",
        weaponType: "Armas de Energia",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 5 E",
        weaponPenetration: 4,
        weaponSpecial: "Campo de Força, Chocante",
        weaponWeight: "3.5kg",
        weaponAvailability: "Muito Raro",
    },
    {
        weaponName: "Maça de Choque",
        weaponType: "Armas de Energia",
        weaponClass: "Corpo",
        weaponRange: "",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 3 E",
        weaponPenetration: 0,
        weaponSpecial: "Chocante",
        weaponWeight: "2.5kg",
        weaponAvailability: "Escarço",
    },
    {
        weaponName: "Chicote de Choque",
        weaponType: "Armas de Energia",
        weaponClass: "Corpo",
        weaponRange: "3m",
        weaponRateOfFire: "S/-/-",
        weaponDamage: "1d10 + 3 E",
        weaponPenetration: 0,
        weaponSpecial: "Chocante, Flexível",
        weaponWeight: "3kg",
        weaponAvailability: "Raro",
    },
];

//Function that verify existing weapons and add/update weapons to the database
const insertWeapons = async() => {
    try {
        for (const weapon of weaponsData) {
            await Weapon.findOneAndUpdate(
                { weaponName: weapon.weaponName }, // Search weapon by name
                { $set: weapon }, // Data to be updated or added
                { upsert: true, new: true } // Added new weapon or update it
            );
            //console.log(`${weapon.weaponName} inserido/atualizado com sucesso.`);
        }
    } catch (error) {
        console.error('Erro ao inserir armas:', error);
    }
}

module.exports = {
    insertWeapons
};