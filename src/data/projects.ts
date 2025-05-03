
export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Instalação Usina',
    slug: 'projetoinstalacao-usina',
    description:
      'Sistema solar com potência de 3,24 kWp, composto por 2 microinversores Deye 2000W e 6 módulos Jinko 550W. Geração média de 435 kWh/mês, com economia média de R$ 326/mês e R$ 3.920/ano. Garantia de 15 anos, monitoramento individual por módulo. Investimento de R$ 15.000,00 com retorno em 4 anos.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246417/instalacaousina1_pyg9hh.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246417/instalacaousina1_pyg9hh.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246415/instalacaousina_oqkki0.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246677/instalacaousina2_adqejq.jpg'],
  },
  {
    id: 2,
    title: 'Cliente:HUMBERTO / Cidade:UBERABA - MG',
    slug: 'projetohumberto',
    description: 'Sistema solar residencial de 3,24 kWp com 6 painéis Jinko de 550 W e 2 microinversores Deye 2000 W. Gera em média 435 kWh/mês, economizando cerca de R$ 326 mensais (R$ 3.920 ao ano). Monitoramento individual por módulo e garantia de 15 anos Deye. Investimento de R$ 15.000, com payback em apenas 4 anos.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246405/humberto_pa0wg4.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246405/humberto_pa0wg4.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246409/humberto1_kmwcbt.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246439/humberto2_j3sves.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246408/humberto3_znielp.jpg'],
  },
  {
    id: 3,
    title: 'Cliente:LAZARO / Cidade:UBERLANDIA - MG',
    slug: 'projetolazaro',
    description: 'Sistema solar residencial de 2,16 kWp para o Sr. Lázaro, em Uberlândia – MG, com 4 módulos JA Solar 540 W bifaciais e 1 microinversor APSystems 1600 W. Gera em média 300 kWh/mês, reduzindo sua conta em R$ 225 por mês (R$ 2.700 ao ano), com garantia de performance e monitoramento inteligente. Investimento que se paga em poucos anos e coloca você no caminho da energia limpa e economia real.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246424/lazaro_mukunb.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246424/lazaro_mukunb.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246427/lazaro3_n3xzm1.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246426/lazaro2_lasax9.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246425/lazaro1_eimu2s.jpg'],
  },
  {
    id: 4,
    title: 'Cliente:João Paulo / Cidade:UBERLANDIA - MG',
    slug: 'projetojoaopaulo',
    description: 'Sistema solar residencial de 3,28 kWp para João Paulo, em Uberlândia – MG, com 8 módulos Canadian Solar de 410 W e 2 microinversores APSystems de 1.600 W. Gera em média 435 kWh/mês, proporcionando uma economia de R$ 320 mensais (R$ 3.848 ao ano). Solução escalável, com monitoramento inteligente e garantia de performance, que alia energia limpa a economia real.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246445/joaopaulo_qgfmww.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246445/joaopaulo_qgfmww.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246515/joaopaulo3_pizxor.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246453/joaopaulo4_w1snfr.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246446/joaopaulo2_ondssr.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246448/joaopaulo1_ag9vmv.jpg'],
  },
  {
    id: 5,
    title: 'Cliente:ISAIAS / Cidade:UBERLANDIA - MG',
    slug: 'projetoISAIAS',
    description: 'Sistema solar residencial de 3,36 kWp para o Sr. Isaías, em Uberlândia – MG, com 8 módulos Canadian Solar de 420 W e 2 microinversores APSystems de 1.600 W. Gera em média 460 kWh/mês, reduzindo sua conta em R$ 345 mensais (R$ 4.140 ao ano). Monitoramento inteligente, garantia de performance e um investimento que se paga rapidamente, unindo energia limpa e economia real.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246440/ISAIAS_ougz9z.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246440/ISAIAS_ougz9z.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246514/ISAIAS1_lkrx03.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246445/ISAIAS2_xecili.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246444/ISAIAS3_cuyyh3.jpg'],
  },
  {
    id: 6,
    title: 'Cliente:Ediney / Cidade:UBERLANDIA - MG',
    slug: 'projetoediney',
    description: 'Sistema solar residencial de 4,32 kWp para o Sr. Ediney, em Uberlândia – MG, com 8 módulos JA Solar de 540 W bifaciais e 2 microinversores APSystems de 1.600 W. Gera em média 600 kWh/mês, proporcionando uma economia de R$ 412 mensais (R$ 4.950 ao ano). Solução com monitoramento inteligente por módulo e garantia de performance, que alia energia limpa a economia real.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246399/Ediney_2_owgmx5.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246399/Ediney_2_owgmx5.jpg'],
  },
  {
    id: 7,
    title: 'Cliente:DEBORA / Cidade:UBERLANDIA - MG',
    slug: 'projetoDEBORA',
    description: 'Sistema solar residencial de 6,48 kWp para a Sra. Débora, em Uberlândia – MG, com 12 módulos JA Solar de 540 W bifaciais e 3 microinversores APSystems de 1 600 W. Gera em média 850 kWh/mês, resultando em economia de R$ 637,50 mensais (R$ 7 650 ao ano). Solução com monitoramento inteligente por módulo, garantia de performance e retorno rápido do investimento, unindo sustentabilidade e economia real.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246403/DEBORA_ft24af.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246403/DEBORA_ft24af.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246401/DEBORA1_nkvp16.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246403/DEBORA2_ypmjaz.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246414/DEBORA3_murxno.jpg'],
  },
  {
    id: 8,
    title: 'Cliente:Edimundo / Cidade:UBERLANDIA - MG',
    slug: 'projetoedimundo',
    description: 'Sistema solar residencial de 3,24 kWp com 6 módulos de 540 W e 2 microinversores APSystems, ideal para quem busca eficiência e controle. Gera em média 430 kWh/mês, garantindo uma economia mensal de R$ 322,50 (R$ 3.869,94 por ano). Conta com monitoramento individual por módulo e garantia premium estendida de 25 anos. Investimento de R$ 17.600,00, com retorno estimado em 4 anos e 6 meses — energia limpa com excelente custo-benefício.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246398/Edimundo_ebilkq.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246398/Edimundo_ebilkq.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246413/Edimundo3_do7mjv.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246397/Edimundo2_mfxclr.jpg','https://res.cloudinary.com/dlthukrz8/image/upload/v1746246395/Edimundo1_vykajr.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246376/Edimundo4_zm2rrv.jpg'],
  },
  {
    id: 9,
    title: 'Cliente:Guilherme / Cidade:UBERLANDIA - MG',
    slug: 'projetoguilherme',
    description: 'Sistema solar residencial de 3,24 kWp para o Sr. Guilherme, em Uberlândia – MG, com 6 módulos JA Solar de 540 W bifaciais e 2 microinversores APSystems de 1.600 W. Gera em média 345 kWh/mês, proporcionando uma economia de R$ 260 mensais (R$ 3.120 ao ano). Equipamento de alta eficiência com monitoramento inteligente e excelente retorno sobre o investimento, unindo sustentabilidade e economia para o dia a dia.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246402/ClienteGuilherme_CidadeUBERLANDIA_-_MG_gabdff.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246402/ClienteGuilherme_CidadeUBERLANDIA_-_MG_gabdff.jpg',  'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246420/ClienteGuilherme_CidadeUBERLANDIA_-_MG3_kpshkf.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246412/ClienteGuilherme_CidadeUBERLANDIA_-_MG4_pnuqiy.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246389/ClienteGuilherme_CidadeUBERLANDIA_-_MG2_du7rpx.jpg'],
  },
  {
    id: 10,
    title: 'Cliente:Matheus Oliveira / Cidade:UBERLANDIA - MG',
    slug: 'projetomatheusoliveira',
    description: 'Sistema solar residencial de 3,64 kWp para a Sra. Eliane da Silveira Morais, em Uberlândia – MG, com 8 módulos de alta eficiência. Gera em média 500 kWh/mês, resultando em uma economia mensal de R$ 502 (R$ 6.032 ao ano). Solução moderna, sustentável e com excelente retorno financeiro, ideal para quem busca autonomia energética e redução real na conta de luz.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246437/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia13_cffrxb.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246437/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia13_cffrxb.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246436/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia12_mll0jd.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246435/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia10_kn1fwi.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246434/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia1_rtvvso.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246424/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia9_lss4dl.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246422/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia8_p91f21.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246421/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia7_w8xd41.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246420/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia6_jn1w6z.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246417/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia4_ia3jjb.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246414/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia2_n1oowp.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246414/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia3_txtt0o.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246410/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia11_c2vutk.jpg'],
  },
  {
    id: 11,
    title: 'Cliente:Sergio Henrique / Cidade:UBERLANDIA - MG',
    slug: 'projetosergiohenrique',
    description: 'Sistema solar residencial de 2,67 kWp para o Sr. Sérgio Henrique, em Uberlândia – MG, com 6 módulos de alta performance. Gera em média 350 kWh/mês, proporcionando uma economia de R$ 360 por mês (R$ 4.320 ao ano). Uma solução eficiente e sustentável, ideal para reduzir custos e garantir independência energética com ótimo retorno sobre o investimento.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246433/Instala%C3%A7%C3%A3o_para_SERGIO_HENRIQUE_em_Uberl%C3%A2ndia1_tvdgop.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246433/Instala%C3%A7%C3%A3o_para_SERGIO_HENRIQUE_em_Uberl%C3%A2ndia1_tvdgop.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246513/Instala%C3%A7%C3%A3o_para_SERGIO_HENRIQUE_em_Uberl%C3%A2ndia3_zzkm2u.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246511/Instala%C3%A7%C3%A3o_para_SERGIO_HENRIQUE_em_Uberl%C3%A2ndia2_k1ly2c.jpg'],
  },
  {
    id: 12,
    title: 'Cliente:Eliane Silveira / Cidade:UBERLANDIA - MG',
    slug: 'projetoelianedasilveira',
    description: 'Sistema solar residencial de 3,64 kWp para a Sra. Eliane da Silveira Morais, em Uberlândia – MG, com 8 módulos de alto rendimento. Gera aproximadamente 500 kWh/mês, resultando em uma economia mensal de R$ 502 (R$ 6.032 ao ano). Projeto ideal para quem busca autonomia energética, redução significativa na conta de luz e contribuição para um futuro mais sustentável.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246432/ELIANE_DA_SILVEIRA_MORAIS_rlwuof.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246432/ELIANE_DA_SILVEIRA_MORAIS_rlwuof.jpg'],
  },
  {
    id: 13,
    title: 'Cliente:Weiton Divino / Cidade:UBERLANDIA - MG',
    slug: 'projetoweitondivino',
    description: 'Sistema solar residencial de 3,6 kWp para o Sr. Weiton Divino, em Uberlândia – MG, com 8 módulos de alta eficiência. Gera em média 450 kWh/mês, proporcionando uma economia mensal de R$ 498,23 (R$ 5.978,76 ao ano). Solução sustentável e econômica que garante autonomia energética e excelente retorno sobre o investimento.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246509/Instala%C3%A7%C3%A3o_feita_para_WEITON_DIVINO4_ousb82.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246431/Instala%C3%A7%C3%A3o_feita_para_WEITON_DIVINO2_xju0b7.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246521/Instala%C3%A7%C3%A3o_feita_para_WEITON_DIVINO_szaia4.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246512/Instala%C3%A7%C3%A3o_feita_para_WEITON_DIVINO5_kaoclz.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246509/Instala%C3%A7%C3%A3o_feita_para_WEITON_DIVINO4_ousb82.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246508/Instala%C3%A7%C3%A3o_feita_para_WEITON_DIVINO1_degzpp.jpg'],
  },
  {
    id: 14,
    title: 'Cliente:Rogerio Batista David / Cidade:UBERLANDIA - MG',
    slug: 'projetorogeriodavid',
    description: 'Sistema solar residencial de 2,7 kWp para o Sr. Rogério Batista David, em Uberlândia – MG, com 6 módulos de alto desempenho. Gera em média 350 kWh/mês, garantindo uma economia mensal de R$ 402 (R$ 4.829 ao ano). Uma solução eficiente e sustentável, ideal para quem busca reduzir custos com energia e investir em um futuro mais econômico e ecológico.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246505/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID4_mvqkg2.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246519/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID3_shaguo.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246517/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID6_zrbalz.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246507/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID5_zjwgkk.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246505/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID4_mvqkg2.jpg','https://res.cloudinary.com/dlthukrz8/image/upload/v1746246504/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID_dxwddx.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246450/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID2_ohkqcl.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246436/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID1_oovgca.jpg'],
  },
  {
    id: 15,
    title: 'Cliente:Helio Batista David / Cidade:PERDIZES - MG',
    slug: 'projetoheliobatista',
    description: 'Sistema solar residencial de 2,64 kWp para o Sr. Hélio Batista David, em Perdizes – MG, com 8 módulos de alta eficiência. Gera em média 380 kWh/mês, proporcionando uma economia mensal de R$ 376,20 (R$ 4.514,40 ao ano). Um investimento inteligente que une economia, sustentabilidade e autonomia energética para o dia a dia.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246380/Instala%C3%A7%C3%A3o_feita_para_HELIO_BATISTA_DAVID1_lsqdyu.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246429/Instala%C3%A7%C3%A3o_feita_para_HELIO_BATISTA_DAVID1_qcmrft.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246380/Instala%C3%A7%C3%A3o_feita_para_HELIO_BATISTA_DAVID2_nexjnl.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246380/Instala%C3%A7%C3%A3o_feita_para_HELIO_BATISTA_DAVID1_lsqdyu.jpg'],
  },
  {
    id: 16,
    title: 'Cliente:Walter Luiz / Cidade:UBERLANDIA - MG',
    slug: 'projetowalterluiz',
    description: 'Sistema solar residencial de 9,1 kWp para o Sr. Walter Luiz, em Uberlândia – MG, com 20 módulos de alta performance. Gera em média 1200 kWh/mês, oferecendo uma economia mensal de R$ 1.015,33 (R$ 12.187,58 ao ano). Uma solução completa que garante grande economia e sustentabilidade, com rápido retorno sobre o investimento.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246397/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia_vebdtd.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246397/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia_vebdtd.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246394/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia9_tc8uxh.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246393/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia8_p9f9eh.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246392/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia6_gahmdh.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246391/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia7_b6goyq.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246390/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia5_goecsv.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246387/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia3_g9ndme.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246386/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia2_lbhkxa.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246385/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia4_amiya5.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246384/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia13_i2kktw.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246383/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia11_g8w6co.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246379/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia12_cm5e3x.jpg'],
  },
  {
    id: 17,
    title: 'Cliente:Alan Carlos / Cidade:Patrocínio – MG',
    slug: 'projetoalancarlos',
    description: 'Sistema solar residencial de 6,02 kWp para o Sr. Alan Carlos Borges, em Patrocínio – MG, com 17 módulos de alta eficiência. Gera em média 800 kWh/mês, proporcionando uma economia mensal de R$ 880,00 (R$ 10.560,00 ao ano). Uma solução sustentável que oferece alta economia e rápido retorno sobre o investimento.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246368/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG_q4xrqb.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246375/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG8_jscrx6.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246374/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG6_iapudm.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246373/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG5_dbs9ka.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246372/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG2_n14ee4.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246371/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG1_tfxahi.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246368/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG_q4xrqb.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246367/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG7_bya81w.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246336/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG4_eonwb2.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246335/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG3_jy6fg6.jpg'],
  },

  
  
];
