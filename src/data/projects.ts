
export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  gallery: string[];
  category: 'residencial' | 'comissionamento' | 'limpezaemanutencao' | 'comercial';
}

export const projects: Project[] = [
  {
    category: 'residencial',
    id: 2,
    title: 'Cliente: Humberto',
    slug: 'projetohumberto',
    description:
      'Cliente: HUMBERTO\n' +
      'Cidade: UBERABA - MG\n' +
      'Quantidade de Módulos: 8 modulos DAH Solar 450 W\n' +
      'Quantidade de inversores: 2 inversor apsystems 1600W\n' +
      'Potência: 3,6Kwp\n' +
      'Energia gerada mensal: 500Kw/h\n' +
      'Economia mensal: R$ 400,00\n' +
      'Economia Anual: R$ 4500,00',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246405/humberto_pa0wg4.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246405/humberto_pa0wg4.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246409/humberto1_kmwcbt.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246439/humberto2_j3sves.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246408/humberto3_znielp.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 3,
    title: 'Cliente: Lázaro',
    slug: 'projetolazaro',
    description:
      'Cliente: LAZARO\n' +
      'Cidade: UBERLANDIA - MG\n' +
      'Quantidade de Módulos: 4 modulos JA Solar 540w Bifacial \n' +
      'Quantidade de ionversor: 1 inversor apsystems 1600w\n' +
      'Potência: 2,16Kwp\n' +
      'Energia gerada mensal: 300 Kw/h\n' +
      'Economia mensal: R$ 225,00\n' +
      'Economia Anual: R$ 2.700,00',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246424/lazaro_mukunb.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246424/lazaro_mukunb.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246427/lazaro3_n3xzm1.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246426/lazaro2_lasax9.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246425/lazaro1_eimu2s.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 4,
    title: 'Cliente: João Paulo',
    slug: 'projetojoaopaulo',
    description:
      'Cliente: João Paulo\n' +
      'Cidade: UBERLANDIA - MG\n' +
      'Quantidade de Módulos: 8 DE 410W canadian Solar \n' +
      'Quantidade de inversores: 2 microinversor Apsystems 1600w\n' +
      'Potência: 3,28Kwp\n' +
      'Energia gerada mensal: 435 Kw/h\n' +
      'Economia mensal: R$ 320,00\n' +
      'Economia Anual: R$ 3.848,00',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246445/joaopaulo_qgfmww.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246445/joaopaulo_qgfmww.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246515/joaopaulo3_pizxor.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246453/joaopaulo4_w1snfr.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246446/joaopaulo2_ondssr.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246448/joaopaulo1_ag9vmv.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 5,
    title: 'Cliente: Isaías',
    slug: 'projetoISAIAS',
    description:
      'Cliente: ISAIAS\n' +
      'Cidade: UBERLANDIA - MG\n' +
      'Quantidade de Módulos: 8 DE 420W canadian Solar \n' +
      'Quantidade de inversores: 2 microinversor Apsystems 1600w\n' +
      'Potência: 3,36Kwp\n' +
      'Energia gerada mensal: 460 Kw/h\n' +
      'Economia mensal: R$ 345,00\n' +
      'Economia Anual: R$ 4.140,00',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246440/ISAIAS_ougz9z.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246440/ISAIAS_ougz9z.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246514/ISAIAS1_lkrx03.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246445/ISAIAS2_xecili.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246444/ISAIAS3_cuyyh3.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 6,
    title: 'Cliente: Ediney',
    slug: 'projetoediney',
    description:
      'Cliente: Ediney\n' +
      'Cidade: UBERLANDIA - MG\n' +
      'Quantidade de Módulos: 8 DE 540W JA Solar Bifacial\n' +
      'Quantidade de inversores: 2 microinversor Apsystems 1600w\n' +
      'Potência: 4,32Kwp\n' +
      'Energia gerada mensal: 600 Kw/h\n' +
      'Economia mensal: R$ 412,00\n' +
      'Economia Anual: R$ 4.950,00',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246399/Ediney_2_owgmx5.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246399/Ediney_2_owgmx5.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 7,
    title: 'Cliente: Débora',
    slug: 'projetoDEBORA',
    description:
      'Cliente: DEBORA\n' +
      'Cidade: UBERLANDIA - MG\n' +
      'Quantidade de Módulos: 12 modulos JA Solar 540W bifacial\n' +
      'Quantidade de inversor: 3 micro inversor Apsystems 1600w\n' +
      'Potência: 6,48Kwp\n' +
      'Energia gerada mensal: 850 Kw/h\n' +
      'Economia mensal: R$ 637,50\n' +
      'Economia Anual: R$ 7.650,00',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246403/DEBORA_ft24af.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246403/DEBORA_ft24af.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246401/DEBORA1_nkvp16.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246403/DEBORA2_ypmjaz.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246414/DEBORA3_murxno.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 8,
    title: 'Cliente: Edimundo',
    slug: 'projetoedimundo',
    description:
      'Potencia 3,24Kwp\n' +
      '2 Micro inversor apsystems\n' +
      '6 módulos 540w\n' +
      'Geração média mensal de 430 Kwh/mês\n' +
      'ecônomia média mensal R$ 322,50\n' +
      'ecônomia média anual E$ 3.869,94\n' +
      'garantia estendida de 25 anos premium Apsystems \n' +
      'Monitoramento individualizado por módulo \n' +
      'Valor do investimento R$ 17.600,00\n' +
      'Retorno do investimento 4 anos e 6 meses',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246398/Edimundo_ebilkq.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246398/Edimundo_ebilkq.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246413/Edimundo3_do7mjv.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246397/Edimundo2_mfxclr.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246395/Edimundo1_vykajr.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246376/Edimundo4_zm2rrv.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 9,
    title: 'Cliente: Guilherme',
    slug: 'projetoguilherme',
    description:
      'Cliente: Guilherme\n' +
      'Cidade: UBERLANDIA - MG\n' +
      'Quantidade de Módulos: 6 DE 540W JA Solar bifacial\n' +
      'Quantidade de inversores: 2 microinversor Apsystems 1600w\n' +
      'Potência: 3,24Kwp\n' +
      'Energia gerada mensal: 345 Kw/h\n' +
      'Economia mensal: R$ 260,00\n' +
      'Economia Anual: R$ 3.120,00',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246402/ClienteGuilherme_CidadeUBERLANDIA_-_MG_gabdff.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246402/ClienteGuilherme_CidadeUBERLANDIA_-_MG_gabdff.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246420/ClienteGuilherme_CidadeUBERLANDIA_-_MG3_kpshkf.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246412/ClienteGuilherme_CidadeUBERLANDIA_-_MG4_pnuqiy.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246389/ClienteGuilherme_CidadeUBERLANDIA_-_MG2_du7rpx.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 10,
    title: 'Cliente: Matheus Oliveira',
    slug: 'projetomatheusoliveira',
    description:
      'Cliente: Matheus Oliveira\n' +
      'Cidade: Uberlandia - MG\n' +
      'Quantidade de Módulos: 08\n' +
      'Potência: 3,64Kwp\n' +
      'Energia gerada mensal: 500 Kw/h\n' +
      'Economia mensal: R$ 502,00\n' +
      'Economia Anual: R$ 6.032,00',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246437/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia13_cffrxb.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246437/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia13_cffrxb.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246436/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia12_mll0jd.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246435/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia10_kn1fwi.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246434/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia1_rtvvso.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246424/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia9_lss4dl.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246422/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia8_p91f21.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246421/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia7_w8xd41.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246420/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia6_jn1w6z.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246417/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia4_ia3jjb.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246414/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia2_n1oowp.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246414/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia3_txtt0o.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246410/Instala%C3%A7%C3%A3o_Realizada_para_o_cliente_MATHEUS_OLIVEIRA_-_Uberl%C3%A2ndia11_c2vutk.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 11,
    title: 'Cliente: Sérgio Henrique',
    slug: 'projetosergiohenrique',
    description:
      'Cliente:SERGIO HENRIQUE\n' +
      'Cidade:Uberlandia - MG\n' +
      'Quantidade de Módulos: 06\n' +
      'Potência:2,67Kwp\n' +
      'Energia gerada mensal:350 Kw/h\n' +
      'Economia mensal:R$ 360,00\n' +
      'Economia Anual:R$ 4.320,00\n' ,
      imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246433/Instala%C3%A7%C3%A3o_para_SERGIO_HENRIQUE_em_Uberl%C3%A2ndia1_tvdgop.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246433/Instala%C3%A7%C3%A3o_para_SERGIO_HENRIQUE_em_Uberl%C3%A2ndia1_tvdgop.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246513/Instala%C3%A7%C3%A3o_para_SERGIO_HENRIQUE_em_Uberl%C3%A2ndia3_zzkm2u.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246511/Instala%C3%A7%C3%A3o_para_SERGIO_HENRIQUE_em_Uberl%C3%A2ndia2_k1ly2c.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 12,
    title: 'Cliente: Eliane Silveira',
    slug: 'projetoelianedasilveira',
    description:
      'Cliente:ELIANE DA SILVEIRA MORAIS\n' +
      'Cidade:Uberlandia - MG\n' +
      'Quantidade de Módulos: 08\n' +
      'Potência:3,64Kwp\n' +
      'Energia gerada mensal:500 Kw/h\n' +
      'Economia mensal:R$ 502,00\n' +
      'Economia Anual:R$ 6.032,00\n',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246432/ELIANE_DA_SILVEIRA_MORAIS_rlwuof.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246432/ELIANE_DA_SILVEIRA_MORAIS_rlwuof.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 13,
    title: 'Cliente: Weiton Divino',
    slug: 'projetoweitondivino',
    description:
      'Cliente:WEITON DIVINO\n' +
      'Cidade:Uberlandia - MG\n' +
      'Quantidade de Módulos: 08\n' +
      'Potência:3,6Kwp\n' +
      'Energia gerada mensal:450 Kw/h\n' +
      'Economia mensal:R$ 498,23\n' +
      'Economia Anual:R$ 5.978,76\n',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246509/Instala%C3%A7%C3%A3o_feita_para_WEITON_DIVINO4_ousb82.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246431/Instala%C3%A7%C3%A3o_feita_para_WEITON_DIVINO2_xju0b7.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246521/Instala%C3%A7%C3%A3o_feita_para_WEITON_DIVINO_szaia4.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246512/Instala%C3%A7%C3%A3o_feita_para_WEITON_DIVINO5_kaoclz.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246509/Instala%C3%A7%C3%A3o_feita_para_WEITON_DIVINO4_ousb82.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246508/Instala%C3%A7%C3%A3o_feita_para_WEITON_DIVINO1_degzpp.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 14,
    title: 'Cliente: Rogério Batista David',
    slug: 'projetorogeriodavid',
    description:
      'Cliente:ROGERIO BATISTA DAVID\n' +
      'Cidade:Uberlandia - MG\n' +
      'Quantidade de Módulos: 06\n' +
      'Potência:2,7Kwp\n' +
      'Energia gerada mensal:350 Kw/h\n' +
      'Economia mensal:R$ 402,00\n' +
      'Economia Anual:R$ 4.829,00\n',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246505/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID4_mvqkg2.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246519/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID3_shaguo.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246517/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID6_zrbalz.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246507/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID5_zjwgkk.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246505/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID4_mvqkg2.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246504/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID_dxwddx.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246450/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID2_ohkqcl.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246436/Instala%C3%A7%C3%A3o_feita_para_ROGERIO_BATISTA_DAVID1_oovgca.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 15,
    title: 'Cliente: Hélio Batista David',
    slug: 'projetoheliobatista',
    description:
      'Cliente:HELIO BATISTA DAVID\n' +
      'Cidade:PERDIZES - MG\n' +
      'Quantidade de Módulos: 08\n' +
      'Potência:2,64Kwp\n' +
      'Energia gerada mensal:380 Kw/h\n' +
      'Economia mensal:R$ 376,20\n' +
      'Economia Anual:R$ 4514,40\n',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246380/Instala%C3%A7%C3%A3o_feita_para_HELIO_BATISTA_DAVID1_lsqdyu.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246429/Instala%C3%A7%C3%A3o_feita_para_HELIO_BATISTA_DAVID1_qcmrft.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246380/Instala%C3%A7%C3%A3o_feita_para_HELIO_BATISTA_DAVID2_nexjnl.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246380/Instala%C3%A7%C3%A3o_feita_para_HELIO_BATISTA_DAVID1_lsqdyu.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 16,
    title: 'Cliente: Walter Luiz',
    slug: 'projetowalterluiz',
    description:
      'Cliente:Walter Luiz\n' +
      'Cidade:Uberlandia - MG\n' +
      'Quantidade de Módulos: 20\n' +
      'Potência:9,1Kwp\n' +
      'Energia gerada mensal:1200 Kw/h\n' +
      'Economia mensal:R$ 1.015,33\n' +
      'Economia Anual:R$ 12.187,58\n',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246397/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia_vebdtd.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246397/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia_vebdtd.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246394/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia9_tc8uxh.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246393/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia8_p9f9eh.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246392/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia6_gahmdh.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246391/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia7_b6goyq.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246390/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia5_goecsv.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246387/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia3_g9ndme.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246386/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia2_lbhkxa.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246385/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia4_amiya5.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246384/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia13_i2kktw.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246383/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia11_g8w6co.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246379/Instala%C3%A7%C3%A3o_feita_para_Walter_Luiz_em_Uberlandia12_cm5e3x.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 17,
    title: 'Cliente: Alan Carlos',
    slug: 'projetoalancarlos',
    description:
      'Cliente:ALAN CARLOS BORGES\n' +
      'Cidade:Patrocinio - MG\n' +
      'Quantidade de Módulos:17\n' +
      'Potência:6,02Kwp\n' +
      'Energia gerada mensal:800 Kw/h\n' +
      'Economia mensal:R$ 880,00a\n' +
      'Economia Anual:R$ 10560,00\n',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246368/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG_q4xrqb.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246375/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG8_jscrx6.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246374/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG6_iapudm.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246373/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG5_dbs9ka.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246372/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG2_n14ee4.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246371/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG1_tfxahi.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246368/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG_q4xrqb.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246367/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG7_bya81w.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246336/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG4_eonwb2.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246335/Instala%C3%A7%C3%A3o_feita_para_Alan_Carlos_Patroc%C3%ADnio_MG3_jy6fg6.jpg'],
  }
  ,
  {
    category: 'residencial',
    id: 18,
    title: 'Cliente: Geferson',
    slug: 'projetogeferson',
    description:
      'Cliente:Geferson\n' +
      'Cidade:UBERLANDIA - MG\n' +
      'Quantidade de Módulos:8 DE 470W Jinko Solar \n' +
      'Quantidade de inversores: 1 inversor hibridro Growatt 5kw\n' +
      'Bateria: Banco de bateria Energy source 9,48 Kwh/dia s\n' +
      'Potência:3,76Kwp\n' +
      'Energia gerada mensal:500 Kw/h\n' +
      'Economia mensal:R$ 375,00\n' +
      'Economia Anual:R$ 4.500,00\n',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746297418/geferson_ig2wue.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746297418/geferson_ig2wue.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746297417/geferson3_n7c8wj.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746297416/geferson4_e5rpz4.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746297412/geferson6_feziru.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746297412/geferson1_kyfa0n.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746297411/geferson2_vsbdsu.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746297411/geferson5_icdnwp.jpg'],
  },
  {
    category: 'comissionamento',
    id: 19,
    title: 'UFV AGI II – TECNOVA | Araguari-MG',
    slug: 'comissionamentoufvagi2',
    description: 'A usina fotovoltaica UFV AGI II, localizada em Araguari-MG e pertencente ao cliente TECNOVA, possui 7.280 módulos, totalizando uma potência máxima de 3.295 kWp em corrente contínua (DC) e 2.500 kWp em corrente alternada (AC). A planta conta com 25 inversores e 174 trackers. Durante o comissionamento, foram realizadas diversas inspeções e testes, incluindo: inspeção visual da usina, do sistema de alarme de incêndio, da estrutura civil, do sistema InfraScada, dos inversores, do nobreak, dos painéis auxiliares e da estação de trabalho (WorkStation). Também foram executados testes de resistência de isolamento nos cabos CC e CA, além da verificação da tensão de circuito aberto.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309538/Comissionamento_UFV_AGI_II_-_Posts-img-14_arttl3.webp',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746309538/Comissionamento_UFV_AGI_II_-_Posts-img-14_arttl3.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309539/Comissionamento_UFV_AGI_II_-_Posts-img-15_xziivw.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309538/Comissionamento_UFV_AGI_II_-_Posts-img-16_x4gewy.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309525/Comissionamento_UFV_AGI_II_-_Posts-img-13_s7jmlj.webp'],
  },
  {
    category: 'comissionamento',
    id: 20,
    title: 'UFV AGI III – TECNOVA | Araguari-MG',
    slug: 'comissionamentoufvagi3',
    description: 'A usina fotovoltaica UFV AGI III, localizada em Araguari-MG e pertencente ao cliente TECNOVA, é composta por 7.280 módulos fotovoltaicos, com potência máxima de 3.295 kWp em corrente contínua (DC) e 2.500 kWp em corrente alternada (AC). O sistema inclui 25 inversores e 196 trackers. No processo de comissionamento, foram realizadas inspeções visuais na usina, no sistema de alarme de incêndio, na estrutura civil, no sistema InfraScada, nos inversores, no nobreak, nos painéis auxiliares e na estação de trabalho (WorkStation). Também foram conduzidos testes elétricos, incluindo a resistência de isolamento dos cabos CC e CA, além da medição da tensão em circuito aberto.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309526/Comissionamento_UFV_AGI_III_-_Posts-img-16_lvfcqk.webp',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746309526/Comissionamento_UFV_AGI_III_-_Posts-img-16_lvfcqk.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309545/Comissionamento_UFV_AGI_III_-_Posts-img-14_fawr2g.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309544/Comissionamento_UFV_AGI_III_-_Posts-img-21_y7e5mr.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309544/Comissionamento_UFV_AGI_III_-_Posts-img-18_qxnou7.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309542/Comissionamento_UFV_AGI_III_-_Posts-img-15_wm7el2.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309542/Comissionamento_UFV_AGI_III_-_Posts-img-13_xwir85.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309532/Comissionamento_UFV_AGI_III_-_Posts-img-20_zcobum.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309531/Comissionamento_UFV_AGI_III_-_Posts-img-17_gfqyx3.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309528/Comissionamento_UFV_AGI_III_-_Posts-img-19_iusrm6.webp'],
  },
  {
    category: 'comissionamento',
    id: 21,
    title: 'UFV AGI IV – TECNOVA | Araguari-MG',
    slug: 'comissionamentoufvagi4',
    description: 'A usina fotovoltaica UFV AGI IV, situada em Araguari-MG e pertencente ao cliente TECNOVA, conta com 7.392 módulos, alcançando uma potência máxima de 3.341 kWp em corrente contínua (DC) e 2.500 kWp em corrente alternada (AC). O sistema é composto por 25 inversores e 176 trackers. Durante o comissionamento, foram realizadas inspeções visuais da usina, do sistema de alarme de incêndio, da estrutura civil, do sistema InfraScada, dos inversores, do nobreak, dos painéis auxiliares e da estação de trabalho (WorkStation). Além disso, foram efetuados testes de resistência de isolamento dos cabos em corrente contínua e alternada, bem como a medição da tensão de circuito aberto.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309546/Comissionamento_UFV_AGI_IV_-_Posts-img-19_mcb14r.webp',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746309546/Comissionamento_UFV_AGI_IV_-_Posts-img-19_mcb14r.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309546/Comissionamento_UFV_AGI_IV_-_Posts-img-16_ggcytj.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309545/Comissionamento_UFV_AGI_IV_-_Posts-img-20_f6kpml.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309540/Comissionamento_UFV_AGI_IV_-_Posts-img-15_xwhhyc.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309538/Comissionamento_UFV_AGI_IV_-_Posts-img-32_zkvyda.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309536/Comissionamento_UFV_AGI_IV_-_Posts-img-31_sffxru.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309536/Comissionamento_UFV_AGI_IV_-_Posts-img-18_t1vawr.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309534/Comissionamento_UFV_AGI_IV_-_Posts-img-17_abfcws.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309534/Comissionamento_UFV_AGI_IV_-_Posts-img-14_aiht7k.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309533/Comissionamento_UFV_AGI_IV_-_Posts-img-30_bxx2ei.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309533/Comissionamento_UFV_AGI_IV_-_Posts-img-28_wwwyi4.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309533/Comissionamento_UFV_AGI_IV_-_Posts-img-27_jgmh0r.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309533/Comissionamento_UFV_AGI_IV_-_Posts-img-29_cj8ojw.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309532/Comissionamento_UFV_AGI_IV_-_Posts-img-26_iu6j9x.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309532/Comissionamento_UFV_AGI_IV_-_Posts-img-25_nzhsqb.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309532/Comissionamento_UFV_AGI_IV_-_Posts-img-23_npx2i8.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309531/Comissionamento_UFV_AGI_IV_-_Posts-img-24_crnz0w.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309530/Comissionamento_UFV_AGI_IV_-_Posts-img-21_t7qc0w.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309528/Comissionamento_UFV_AGI_IV_-_Posts-img-22_qavxte.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309526/Comissionamento_UFV_AGI_IV_-_Posts-img-13_mzhfjn.webp'],
  },
  {
    category: 'comissionamento',
    id: 22,
    title: 'UFV ARA I – TECNOVA | Montes Claros-MG',
    slug: 'comissionamentoara1',
    description: 'A usina fotovoltaica UFV ARA I, localizada em Montes Claros-MG e pertencente ao cliente TECNOVA, é composta por 5.880 módulos fotovoltaicos, atingindo uma potência máxima de 3.116 kWp em corrente contínua (DC) e 2.400 kWp em corrente alternada (AC). O sistema conta com 12 inversores e 210 trackers. No processo de comissionamento, foram realizadas inspeções visuais da usina, do sistema de alarme de incêndio, da parte civil, do sistema InfraScada, dos inversores, do nobreak, dos painéis auxiliares e da estação de trabalho (WorkStation). Também foram conduzidos testes elétricos, como a medição da resistência de isolamento dos cabos CC e CA e da tensão em circuito aberto.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746311503/62ff973d-dd1c-4005-b31a-5aa8ac1e0fec_h5jace.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746309537/Comissionamento_UFV_ARA_I_-_Posts-img-13_m5hmbt.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309536/Comissionamento_UFV_ARA_I_-_Posts-img-15_lfsvvg.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309534/Comissionamento_UFV_ARA_I_-_Posts-img-16_o3ijoe.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309533/Comissionamento_UFV_ARA_I_-_Posts-img-14_pjwex1.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746311503/62ff973d-dd1c-4005-b31a-5aa8ac1e0fec_h5jace.jpg'],
  },
  {
    category: 'comissionamento',
    id: 23,
    title: 'UFV CG II – (RE)ENERGISA | Campo Grande-MS',
    slug: 'comissionamentoufvcg2',
    description: 'A usina fotovoltaica UFV CG II, localizada em Campo Grande-MS e de propriedade da (RE)ENERGISA, é composta por 6.720 módulos fotovoltaicos, atingindo uma potência máxima de 3.696 kWp em corrente contínua (DC) e 2.500 kWp em corrente alternada (AC). O sistema conta com 10 inversores. Durante o comissionamento, foram realizados diversos testes e inspeções, incluindo: inspeção visual da usina e dos inversores, verificação da continuidade dos condutores de aterramento, ensaios de polaridade e tensão de circuito aberto, ensaio de curto-circuito nas séries fotovoltaicas, medição da resistência de isolamento dos circuitos em corrente contínua e alternada, além do comissionamento da estação solarimétrica.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309560/Comissionamento_UFV_CG_II_-_Posts-img-26_lebaqo.webp',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746309560/Comissionamento_UFV_CG_II_-_Posts-img-26_lebaqo.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310046/Comissionamento_UFV_CG_II_-_Posts-img-27_czgo9s.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309559/Comissionamento_UFV_CG_II_-_Posts-img-25_ulvwzk.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309558/Comissionamento_UFV_CG_II_-_Posts-img-24_ia0tu3.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309557/Comissionamento_UFV_CG_II_-_Posts-img-23_ihoh3w.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309554/Comissionamento_UFV_CG_II_-_Posts-img-20_hfjsw4.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309552/Comissionamento_UFV_CG_II_-_Posts-img-19_dljsgr.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309550/Comissionamento_UFV_CG_II_-_Posts-img-17_qlap0j.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309549/Comissionamento_UFV_CG_II_-_Posts-img-16_rquq9a.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309548/Comissionamento_UFV_CG_II_-_Posts-img-14_jgg0aq.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309538/Comissionamento_UFV_CG_II_-_Posts-img-13_e8nyyb.webp'],
  },
  {
    category: 'comissionamento',
    id: 24,
    title: 'UFV CG III – (RE)ENERGISA | Campo Grande-MS',
    slug: 'comissionamentoufvcg3',
    description: 'A usina fotovoltaica UFV CG III, situada em Campo Grande-MS e pertencente à (RE)ENERGISA, possui 6.720 módulos, totalizando uma potência máxima de 3.696 kWp em corrente contínua (DC) e 2.500 kWp em corrente alternada (AC). A planta conta com 10 inversores. Durante o processo de comissionamento, foram realizados diversos ensaios e inspeções técnicas, incluindo: inspeção visual da usina e dos inversores, verificação da continuidade dos condutores de aterramento, ensaios de polaridade e de tensão de circuito aberto, ensaio de curto-circuito nas séries fotovoltaicas, medição da resistência de isolamento dos circuitos em corrente contínua e alternada, além do comissionamento da estação solarimétrica.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310023/Comissionamento_UFV_CG_III_-_Posts-img-38_ex9w5y.webp',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746310023/Comissionamento_UFV_CG_III_-_Posts-img-38_ex9w5y.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310047/Comissionamento_UFV_CG_III_-_Posts-img-21_ao8uan.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310021/Comissionamento_UFV_CG_III_-_Posts-img-36_yenxvr.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310019/Comissionamento_UFV_CG_III_-_Posts-img-33_j6iii4.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310019/Comissionamento_UFV_CG_III_-_Posts-img-31_s73mkp.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310018/Comissionamento_UFV_CG_III_-_Posts-img-30_cd0wbb.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310017/Comissionamento_UFV_CG_III_-_Posts-img-28_mfxjg9.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309981/Comissionamento_UFV_CG_III_-_Posts-img-26_vubuw2.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309763/Comissionamento_UFV_CG_III_-_Posts-img-25_pp0flj.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309758/Comissionamento_UFV_CG_III_-_Posts-img-22_dsioib.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309756/Comissionamento_UFV_CG_III_-_Posts-img-24_ex94rb.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309756/Comissionamento_UFV_CG_III_-_Posts-img-23_lnmksx.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309616/Comissionamento_UFV_CG_III_-_Posts-img-19_uxjzai.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309616/Comissionamento_UFV_CG_III_-_Posts-img-18_n11dz5.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309615/Comissionamento_UFV_CG_III_-_Posts-img-16_dxynkc.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309614/Comissionamento_UFV_CG_III_-_Posts-img-17_qw5xzi.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309576/Comissionamento_UFV_CG_III_-_Posts-img-15_njw8i6.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746309561/Comissionamento_UFV_CG_III_-_Posts-img-13_klphxx.webp'],
  },
  {
    category: 'comissionamento',
    id: 25,
    title: 'UFV CP I – (RE)ENERGISA | Caarapó-MS',
    slug: 'comissionamentoufvcp1',
    description: 'A usina fotovoltaica UFV CP I, localizada em Caarapó-MS e pertencente à (RE)ENERGISA, é composta por 12.320 módulos fotovoltaicos, alcançando uma potência máxima de 6.776 kWp em corrente contínua (DC) e 5.000 kWp em corrente alternada (AC). A planta é equipada com 20 inversores. Durante o processo de comissionamento, foram realizadas inspeções visuais na usina e nos inversores, verificação da continuidade dos condutores de aterramento, ensaios de polaridade e tensão de circuito aberto, ensaio de curto-circuito nas séries fotovoltaicas, além da medição da resistência de isolamento dos circuitos em corrente contínua e alternada.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310022/Comissionamento_UFV_CP_I_-_Posts-img-13_xwi8ev.webp',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746310022/Comissionamento_UFV_CP_I_-_Posts-img-13_xwi8ev.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310027/Comissionamento_UFV_CP_I_-_Posts-img-27_ok37r1.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310027/Comissionamento_UFV_CP_I_-_Posts-img-26_eukrzw.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310026/Comissionamento_UFV_CP_I_-_Posts-img-25_kq3zsn.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310026/Comissionamento_UFV_CP_I_-_Posts-img-24_gro2yk.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310025/Comissionamento_UFV_CP_I_-_Posts-img-23_oxupki.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310025/Comissionamento_UFV_CP_I_-_Posts-img-20_xb9njz.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310025/Comissionamento_UFV_CP_I_-_Posts-img-21_iju2os.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310024/Comissionamento_UFV_CP_I_-_Posts-img-19_doh2cl.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310024/Comissionamento_UFV_CP_I_-_Posts-img-18_vg20ep.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310024/Comissionamento_UFV_CP_I_-_Posts-img-17_jy6su2.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310022/Comissionamento_UFV_CP_I_-_Posts-img-15_zhkaod.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310022/Comissionamento_UFV_CP_I_-_Posts-img-14_kmmtqk.webp'],
  },
  {
    category: 'comissionamento',
    id: 26,
    title: 'UFV DIV – TECNOVA | Divinópolis-MG',
    slug: 'comissionamentoufvdivtecnova',
    description: 'A usina fotovoltaica UFV DIV, localizada em Divinópolis-MG e pertencente ao cliente TECNOVA, é composta por 12.000 módulos fotovoltaicos, com potência máxima de 6.540,0 kWp em corrente contínua (DC) e 5.000 kWp em corrente alternada (AC). A planta possui 26 inversores. O comissionamento incluiu uma série de inspeções visuais abrangentes — da usina, do sistema de alarme de incêndio, da estrutura civil, do sistema InfraScada, dos inversores, do nobreak, dos painéis auxiliares e da estação de trabalho (WorkStation). Foram também realizados testes elétricos, como a resistência de isolamento dos cabos CC e CA, tensão de circuito aberto e, adicionalmente, teste com Hipot nos cabos de média tensão em corrente alternada.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310027/Comissionamento_UFV_DIV_-_Posts-img-13_zaujhz.webp',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746310027/Comissionamento_UFV_DIV_-_Posts-img-13_zaujhz.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310048/Comissionamento_UFV_DIV_-_Posts-img-21_frqrts.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310048/Comissionamento_UFV_DIV_-_Posts-img-19_rix0t6.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310030/Comissionamento_UFV_DIV_-_Posts-img-23_sqc564.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310030/Comissionamento_UFV_DIV_-_Posts-img-20_xfm4zw.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310030/Comissionamento_UFV_DIV_-_Posts-img-22_zma9or.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310029/Comissionamento_UFV_DIV_-_Posts-img-18_mgbu8k.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310029/Comissionamento_UFV_DIV_-_Posts-img-17_mmhylu.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310029/Comissionamento_UFV_DIV_-_Posts-img-16_pl9yui.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310028/Comissionamento_UFV_DIV_-_Posts-img-14_jw5omo.webp'],
  },
  {
    category: 'comissionamento',
    id: 27,
    title: 'UFV GRT II – TECNOVA | Montes Claros-MG',
    slug: 'comissionamentoufvgrt2',
    description: 'A usina fotovoltaica UFV GRT II, localizada em Montes Claros-MG e pertencente ao cliente TECNOVA, conta com 4.929 módulos fotovoltaicos, com potência máxima de 2.612 kWp em corrente contínua (DC) e 2.000 kWp em corrente alternada (AC). O sistema possui 10 inversores e 176 trackers. No processo de comissionamento, foram realizadas inspeções visuais da usina, do sistema de alarme de incêndio, da parte civil, do sistema InfraScada, dos inversores, do nobreak, dos painéis auxiliares e da estação de trabalho (WorkStation). Também foram executados testes elétricos, como a medição da resistência de isolamento dos cabos CC e CA e da tensão de circuito aberto.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310031/Comissionamento_UFV_GRT_II_-_Posts-img-14_wbj1dv.webp',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746310051/Comissionamento_UFV_GRT_II_-_Posts-img-25_zv3ygl.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310036/Comissionamento_UFV_GRT_II_-_Posts-img-27_iq59e8.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310035/Comissionamento_UFV_GRT_II_-_Posts-img-26_rjnmil.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310035/Comissionamento_UFV_GRT_II_-_Posts-img-24_d4dpse.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310035/Comissionamento_UFV_GRT_II_-_Posts-img-23_oz4swy.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310034/Comissionamento_UFV_GRT_II_-_Posts-img-21_hxkxm7.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310034/Comissionamento_UFV_GRT_II_-_Posts-img-22_o4wslr.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310033/Comissionamento_UFV_GRT_II_-_Posts-img-20_zeyctr.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310033/Comissionamento_UFV_GRT_II_-_Posts-img-19_uahdpf.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310033/Comissionamento_UFV_GRT_II_-_Posts-img-18_bqpehy.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310032/Comissionamento_UFV_GRT_II_-_Posts-img-17_gyjcvb.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310032/Comissionamento_UFV_GRT_II_-_Posts-img-16_cu3k3o.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310031/Comissionamento_UFV_GRT_II_-_Posts-img-15_cdqhdh.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310031/Comissionamento_UFV_GRT_II_-_Posts-img-14_wbj1dv.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310031/Comissionamento_UFV_GRT_II_-_Posts-img-13_ozed83.webp'],
  },
  {
    category: 'comissionamento',
    id: 28,
    title: 'UFV LAP – TECNOVA | Lagoa da Prata-MG',
    slug: 'comissionamentoufvlap',
    description: 'A usina fotovoltaica UFV LAP, localizada em Lagoa da Prata-MG e pertencente ao cliente TECNOVA, é composta por 12.060 módulos fotovoltaicos, com potência máxima de 6.572,7 kWp em corrente contínua (DC) e 5.000 kWp em corrente alternada (AC). A planta conta com 26 inversores. Durante o comissionamento, foram realizadas inspeções visuais da usina, do sistema de alarme de incêndio, da estrutura civil, do sistema InfraScada, dos inversores, do nobreak, dos painéis auxiliares e da WorkStation. Também foram executados testes elétricos como a resistência de isolamento dos cabos CC e CA, teste de tensão de circuito aberto e teste com Hipot em cabos de média tensão CA.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310040/Comissionamento_UFV_LAP_-_Posts-img-22_qvf6ea.webp',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746310052/Comissionamento_UFV_LAP_-_Posts-img-35_laymjk.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310051/Comissionamento_UFV_LAP_-_Posts-img-23_u3k0fh.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310051/Comissionamento_UFV_LAP_-_Posts-img-36_dzrar8.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310050/Comissionamento_UFV_LAP_-_Posts-img-27_xidksq.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310045/Comissionamento_UFV_LAP_-_Posts-img-34_eab5gi.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310045/Comissionamento_UFV_LAP_-_Posts-img-32_ejabgm.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310044/Comissionamento_UFV_LAP_-_Posts-img-30_wg7wcn.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310044/Comissionamento_UFV_LAP_-_Posts-img-31_khztoi.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310044/Comissionamento_UFV_LAP_-_Posts-img-29_dipth0.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310044/Comissionamento_UFV_LAP_-_Posts-img-28_i0zz6q.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310043/Comissionamento_UFV_LAP_-_Posts-img-26_dudeku.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310042/Comissionamento_UFV_LAP_-_Posts-img-25_guf6sb.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310042/Comissionamento_UFV_LAP_-_Posts-img-24_vfdl7p.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310040/Comissionamento_UFV_LAP_-_Posts-img-21_g1uhee.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310040/Comissionamento_UFV_LAP_-_Posts-img-22_qvf6ea.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310039/Comissionamento_UFV_LAP_-_Posts-img-20_anl0cw.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310039/Comissionamento_UFV_LAP_-_Posts-img-19_k491u2.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310038/Comissionamento_UFV_LAP_-_Posts-img-18_gxxnfe.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310038/Comissionamento_UFV_LAP_-_Posts-img-17_lk8hq3.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310037/Comissionamento_UFV_LAP_-_Posts-img-16_wbuzjo.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310037/Comissionamento_UFV_LAP_-_Posts-img-15_otv23h.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310036/Comissionamento_UFV_LAP_-_Posts-img-14_wsnkup.webp', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746310036/Comissionamento_UFV_LAP_-_Posts-img-13_krwoub.webp'],
  },
  {
    category: 'limpezaemanutencao',
    id: 29,
    title: '',
    slug: 'comissionamentoufvlap',
    description: 'A usina fotovoltaica UFV LAP, localizada em Lagoa da Prata-MG e pertencente ao cliente TECNOVA, é composta por 12.060 módulos fotovoltaicos, com potência máxima de 6.572,7 kWp em corrente contínua (DC) e 5.000 kWp em corrente alternada (AC). A planta conta com 26 inversores. Durante o comissionamento, foram realizadas inspeções visuais da usina, do sistema de alarme de incêndio, da estrutura civil, do sistema InfraScada, dos inversores, do nobreak, dos painéis auxiliares e da WorkStation. Também foram executados testes elétricos como a resistência de isolamento dos cabos CC e CA, teste de tensão de circuito aberto e teste com Hipot em cabos de média tensão CA.',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746326040/Limpeza_e_manuten%C3%A7%C3%A3o_de_sistemas_fotovoltaicos_-_Posts-img-25_hv98pf.webp',
    gallery: ["https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653576/IMG-20250602-WA0012_zosksj.jpg", "https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653578/IMG-20250602-WA0016_kkoeme.jpg",
      "https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653576/IMG-20250602-WA0015_iqfudw.jpg", "https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653579/IMG-20250602-WA0017_p2avv7.jpg",
      "https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653580/IMG-20250602-WA0014_nfyqpm.jpg", "https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653582/IMG-20250602-WA0019_mn3o5y.jpg",
      "https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653581/IMG-20250602-WA0021_tob5ju.jpg", "https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653585/IMG-20250602-WA0022_irp7ds.jpg",
      "https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653585/IMG-20250602-WA0020_grlffj.jpg", "https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653588/IMG-20250602-WA0023_pteoay.jpg",
      "https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653588/IMG-20250602-WA0024_bthiur.jpg", "https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653588/IMG-20250602-WA0025_uhdw9r.jpg",
      "https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653596/IMG-20250602-WA0027_bhvxrn.jpg",
      "https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653589/IMG-20250602-WA0026_zpfvci.jpg"
    ],
  },
  {
    category: 'comercial',
    id: 29,
    title: 'Cliente: Asul',
    slug: 'comercialaasul',
    description:
      'Cliente: Asul\n' +
      'Cidade: UBERLNDIA - MG\n' +
      'Quantidade de Módulos: 30 modulos Risen 700 W\n' +
      'Quantidade de inversores: 8 inversores apsystems 2000W\n' +
      'Potência: 20,30Kw\n',
    imageUrl: 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663325/WhatsApp_Image_2025-04-24_at_12.37.48_krdwdl.jpg',
    gallery: ['https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663332/WhatsApp_Image_2025-04-24_at_12.39.51_lumi2y.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663331/WhatsApp_Image_2025-04-24_at_12.39.50_o6yqcu.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663329/WhatsApp_Image_2025-04-24_at_12.39.04_tc0acq.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663328/WhatsApp_Image_2025-04-24_at_12.39.02_ztmsui.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663328/WhatsApp_Image_2025-04-24_at_12.39.02_ztmsui.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663327/WhatsApp_Image_2025-04-24_at_12.38.18_vbsqyh.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663326/WhatsApp_Image_2025-04-24_at_12.37.49_rzvojj.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663325/WhatsApp_Image_2025-04-24_at_12.37.48_krdwdl.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663324/WhatsApp_Image_2025-04-24_at_12.37.23_sk0toq.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663323/WhatsApp_Image_2025-04-24_at_12.37.23_1_qkxqcu.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663320/WhatsApp_Image_2025-04-24_at_12.36.47_owgpud.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753658714/WhatsApp_Image_2025-04-24_at_12.39.51_yxse6n.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753658713/WhatsApp_Image_2025-04-24_at_12.39.50_djkaod.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753658712/WhatsApp_Image_2025-04-24_at_12.38.18_xjhkpx.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753658711/WhatsApp_Image_2025-04-24_at_12.39.02_mof19t.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753658707/WhatsApp_Image_2025-04-24_at_12.37.48_hlubf5.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753658706/WhatsApp_Image_2025-04-24_at_12.37.22_1_y5o9od.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753658704/WhatsApp_Image_2025-04-24_at_12.37.22_syeyuy.jpg'],
  },
  {
    category: 'comercial',
    id: 30,
    title: 'Cliente: Condomínio Concept',
    slug: 'comercialconcept',
    description:
      'Cliente: Cliente: Condomínio Concept\n' +
      'Cidade: UBERLANDIA - MG\n' +
      'Quantidade de Módulos: 14 modulos DAH Solar 585 W\n' +
      'Quantidade de inversores: 4 inversores apsystems\n' +
      'Potência: 8,19Kw\n',
    imageUrl: 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663333/WhatsApp_Image_2025-04-17_at_10.34.15_13_oshanx.jpg',
    gallery: ['https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663338/WhatsApp_Image_2025-04-17_at_10.34.15_trhcix.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663335/WhatsApp_Image_2025-04-17_at_10.34.15_2_amujgm.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663334/WhatsApp_Image_2025-04-17_at_10.34.15_14_erot3m.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663333/WhatsApp_Image_2025-04-17_at_10.34.15_13_oshanx.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753658717/WhatsApp_Image_2025-04-17_at_10.34.15_13_tbwuc9.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753658719/WhatsApp_Image_2025-04-17_at_10.34.15_14_lfosff.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753658720/WhatsApp_Image_2025-04-17_at_10.34.15_ahrbj4.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753658715/WhatsApp_Image_2025-04-17_at_10.34.15_2_trt4xy.jpg'],
  },
  {
    category: 'comercial',
    id: 31,
    title: 'Condomínio Uchoa',
    slug: 'comercialuchoa',
    description:
      'Cliente: Condomínio Uchoa\n' +
      'Cidade: UBERLANDIA - MG\n' +
      'Quantidade de Módulos: 106 modulos Longi 545 W\n' +
      'Quantidade de inversores: 3 inversor SOLAREdge 27,6K\n' +
      'Potência: 57,77Kwp\n',
    imageUrl: 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663354/DJI_20230803134848_0001_V_bpvok8.jpg',
    gallery: ['https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663447/DJI_20230803134926_0003_V_s3csbf.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663444/DJI_20230803134852_0002_V_e1g8gt.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663354/DJI_20230803134848_0001_V_bpvok8.jpg'],
  },
  {
    category: 'comercial',
    id: 32,
    title: 'Cliente: Giro Motopeças',
    slug: 'comercialgiromotopecas',
    description:
      'Cliente: Giro Motopeças\n' +
      'Cidade: UBERLANDIA - MG\n' +
      'Quantidade de Módulos: 12 modulos Ja Solar 395 W e mais 12 modulos Jinko 350 W \n' +
      'Quantidade de inversores: 3 inversores apsystems 900W e mais 3 inversores NEP 2250 W\n' +
      'Potência: 8,94Kwp\n',
    imageUrl: 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663426/DJI_20250603121748_0007_V_g0fnyz.jpg',
    gallery: ['https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663447/DJI_20250603121457_0001_V_ncnnqd.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663426/DJI_20250603121748_0007_V_g0fnyz.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663423/DJI_20250603121738_0006_V_djfc6m.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663422/DJI_20250526160538_0023_V_xd1zwa.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663420/DJI_20250526160455_0019_V_mqcjnf.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663406/DJI_20250526160329_0006_V_jwn2ma.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663370/DJI_20250603121826_0010_V_ijcnkh.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663350/DJI_20250603121506_0002_V_s2p2sk.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753663345/DJI_20250603121647_0005_V_lfgzrl.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753658725/DJI_20250603121506_0002_V_r4ilgo.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753658724/DJI_20250603121826_0010_V_uo0qve.jpg', 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753658722/DJI_20250603121647_0005_V_qdlwhx.jpg'],
  },
  {
    category: 'comercial',
    id: 33,
    title: 'Cliente: Moleques Lanches',
    slug: 'comercialmolequeslanches',
    description:
      'Cliente: Moleques Lanches\n' +
      'Cidade: UBERLANDIA - MG\n',
    imageUrl: 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246405/humberto_pa0wg4.jpg',
    gallery: ['https://res.cloudinary.com/dlthukrz8/image/upload/v1746246405/humberto_pa0wg4.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246409/humberto1_kmwcbt.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246439/humberto2_j3sves.jpg', 'https://res.cloudinary.com/dlthukrz8/image/upload/v1746246408/humberto3_znielp.jpg'],
  },

];
