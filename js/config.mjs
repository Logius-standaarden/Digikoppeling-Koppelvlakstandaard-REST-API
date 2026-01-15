import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";
import { generateMermaidFigures } from "https://logius-standaarden.github.io/publicatie/respec/plugins/mermaid.mjs";

loadRespecWithConfiguration({
  authors: [ 
      { 
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl/",
        "name" : "Peter Haasnoot"
      },
      { 
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl/",
        "name" : "Pieter Hering"
      }
    ],
  editors: [ {    
        "company" : "Logius",  
        "companyURL" : "https://www.logius.nl/",
        "name" : "Standaardenbeheer"
      } ],
  github: "https://github.com/Logius-standaarden/Digikoppeling-Koppelvlakstandaard-REST-API",
  previousPublishVersion: "3.0.0",
  pubDomain: "dk",
  publishDate: "2025-11-05",
  publishVersion: "3.0.1",
  shortName: "restapi",
  specStatus: "DEF",
  specType: "ST",
  postProcess: [ generateMermaidFigures ]
});
