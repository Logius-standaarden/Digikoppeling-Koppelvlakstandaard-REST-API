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
  previousPublishVersion: "3.0.1",
  pubDomain: "dk",
  publishDate: "2026-01-16",
  publishVersion: "3.1.0",
  shortName: "restapi",
  specStatus: "CV",
  specType: "ST",
  postProcess: [ generateMermaidFigures ]
});
