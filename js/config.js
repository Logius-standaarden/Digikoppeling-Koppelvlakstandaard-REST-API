var respecConfig = {
  //voor specStatus mogelijkheden zie https://github.com/centrumvoorstandaarden/respec/wiki/specStatus
  specStatus: "WV",
  //voor specType mogelijkheden zie https://github.com/centrumvoorstandaarden/respec/wiki/specType
  specType: "ST",
  shortName: "restapi",
  addSectionLinks: true,


  license: 'cc-by-nd',
  // logos: [], // Geef een lege array op als er geen Geonovum logo moet staan
  doJsonLd: true,
  editors: [
    {
      name: "Peter Haasnoot",
      company: "Logius",
      companyURL: "http://www.logius.nl/",
    },
    {
      name: "Pieter Hering",
      company: "Logius",
      companyURL: "http://www.logius.nl/",
    },
  ],

  // url van de github repository waar je in werkt
  github: "https://github.com/centrumvoorstandaarden/DigikoppelingRestfulAPiProfiel",


  // this parameter will add the tag_name of the latest release to the document Title
  // only set this parameter when a release has been set
  nl_addReleaseTagTitle: true,

  // if you use a single document for your spec, which uses more than one markdown H1 header, e.g. '# inleiding'
  // this configuration can be set to make sure that the alle H1 headers and navigation bars are preserved
  nl_markdownSplitH1sections: true,

  // in some cases the Repository of a Specification document and the Issue- and PR bases are split
  // thi scan be configured below
  // if not set, the url's will be generated on the respecConfig.github automatically  
  nl_github: {
    //  issueBase: "https://github.com/Logius-standaarden/Digikoppeling-Wat-is-Digikoppeling/issues",
    revision: "https://github.com/centrumvoorstandaarden/DigikoppelingRestfulAPiProfiel",
    //  pullrequests: "https://github.com/Logius-standaarden/Digikoppeling-Wat-is-Digikoppeling/pulls"
  },

  // nl_organisationName is used for some company specific values in the header (and Sotd)
  // currently supported: Logius and Geonovum (default)  
  nl_organisationName: "Logius",

  // prefix for the names of company specific css, svg and ico prefixes
  // defaults to "GN-"  
  nl_organisationPrefix: "LS-",

  // class style can be automatically insertd in generated markdown tables
  // currently defaults to simple, but this may change
  // options simple, data, <your css>    
  nl_markdownTableClass: "dkkvs",

  // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
  // so that figures can be linked are be a part of table of figures
  nl_markdownEmbedImageInFigure: true,

  // this url points to the folder where organsation specific css files are stored
  // defaults to https://tools.geostandaarden.nl/respec/style/ if not set
  nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",
  // nl_organisationStylesURL: "http://localhost:8081/respec/style/",

  // nl_organisationPublishURL points to organisation specifica publication page, used in header
  // defaults to  https://docs.geostandaarden.nl/"
  nl_organisationPublishURL: "https://publicatie.centrumvoorstandaarden.nl/",

  // nl_logo refers to company logo
  // defaults to https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg
  nl_logo: {
    src: "https://publicatie.centrumvoorstandaarden.nl/respec/style/logos/figure-logius.svg",
    alt: "Logius",
    id: "Logius",
    height: 77,
    width: 44,
    url: "https://www.logius.nl/standaarden",
  },

  localBiblio: {
    NEN3610: {
      href: "http://www.nen.nl/web/Normshop/Norm/NEN-36102011-nl.htm",
      title:
        "Basismodel Geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
      authors: [""],
      date: "Maart 2011",
      publisher: "Nederlands Normalisatie-instituut",
    },
    "API Design Rules": {
      href: "https://publicatie.centrumvoorstandaarden.nl/api/adr/",
      title: "API Design Rules (Nederlandse API Strategie IIa)",
      authors: ["Jasper Roes", "Joost Farla"],
      date: "Juli 2020",
      publisher: "Logius",
    },
    "API Design Rules-Extensions": { 
      href: "https://docs.geostandaarden.nl/api/API-Strategie-ext", 
      title: "API Designrules Extensions (Nederlandse API Strategie IIb)",
      authors: ["Jasper Roes", "Linda van den Brink"],
      date: "Januari 2020",
      publisher: "Geonovum/Kennisplatform APi's",
    },
    Beheermodel:
    {
      href: "https://www.logius.nl/sites/default/files/public/bestanden/diensten/DigiKoppeling/Standaarden/Digikoppeling-Beheermodel.pdf",
      title: "Beheermodel en releasebeleid Digikoppeling v1.5",
      date: "Oktober 2017",
      publisher: "Logius",
    },
    "Digikoppeling Architectuur": {
      href: "https://centrumvoorstandaarden.github.io/Architectuur2.0-metRestfulAPI/static.html",
      title:
        "Digikoppeling Architectuur",
      authors: ["Logius Centrum voor standaarden"],
      date: "december 2020",
      publisher: "Logius",
    },
    "Digikoppeling Beveiligingsdocument": {
      href: "https://www.logius.nl/sites/default/files/bestanden/website/Digikoppeling_Beveiligingsstandaarden_en_voorschriften_v1.3.pdf",
      title: "Digikoppeling Beveiligingsstandaarden en voorschriften",
      date: "2020",
      publisher: "Logius",
    },
    "Digikoppeling Identificatie-Authenticatie":{
      href: "http://www.logius.nl/digikoppeling",
      title: "Digikoppeling Identificatie en Authenticatie",
      publisher: "Logius",
    },
    "Digikoppeling-Cert": {
      href: "http://www.logius.nl/digikoppeling",
      title: "Gebruik en achtergrond van Digikoppeling certificaten",
      publisher: "Logius",
    },
    "PKI Policy": {
      href: "https://www.logius.nl/diensten/pkioverheid/aansluiten-als-tsp/pogramma-van-eisen",
      title: "Programma van Eisen (PKIoverheid)",
      publisher: "Logius",
    },
    "PKI CA": {
      href: "https://www.logius.nl/diensten/pkioverheid/aansluiten-als-tsp/toegetreden-vertrouwensdienstverleners",
      title: "Toegetreden vertrouwensdienstverleners",
      publisher: "Logius",
    },
    "PKIoverheid Certificaten": {
      href: "https://cert.pkioverheid.nl/",
      title: "Pkioverheid certificaten",
      publisher: "Logius"
    },
    "Logius website": {
      href: "https://logius.nl/digikoppeling",
      title: "Logius Digikoppeling",
      publisher: "Logius",
    },
    "Digikoppeling Compliance Voorziening": {
      href: "https://portaal.digikoppeling.nl",
      title: "Digikoppeling Compliance Voorziening",
      publisher: "Logius",
    }
  },
};

