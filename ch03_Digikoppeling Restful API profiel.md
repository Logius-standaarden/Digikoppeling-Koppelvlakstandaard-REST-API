# Digikoppeling Restful API profiel

## Historie

Vanuit het TO Digikoppeling zijn al langere tijd de ontwikkelingen rond Restful API's gevolgd. Binnen het Kennisplatform API zijn de REST-API Design Rules (REST ADR) ontwikkeld en de REST ADR standaard is ook opgenomen op de Pas-toe-of-leg-uit lijst van het Forum Standaardisatie. De REST ADR standaard is dan ook als basis genomen voor dit Digikoppeling REST API Profiel dat zich specifiek richt op G2G (Government-to-Government) interactie en M2M (Machine-to-Machine verkeer).

## Toepassingsgebied

Het toepassingsgebied is voor Digikoppeling:

> Digikoppeling moet worden toegepast bij digitale gegevensuitwisseling die plaatsvindt met voorzieningen die onderdeel zijn van de GDI, waaronder de basisregistraties, of die sectoroverstijgend is. De verplichting geldt voor gegevensuitwisseling tussen systemen waarbij er noodzaak is voor tweezijdige authenticatie.

Dit profiel is toe te passen bij het aanbieden van REST API's ten behoeve van het ontsluiten van overheidsinformatie en/of functionaliteit.

## Algemeen

Het Digikoppeling REST-API profiel is gebaseerd op de REST-API Design Rules standaard zoals ontwikkeld door het Kennisplatform API's en in beheer gebracht bij Logius Stelsels & Standaarden: [[ADR]]


Het Digikoppeling REST-API profiel conformeert zich volledig aan het normatieve deel van de REST-API Design Rules.

## Koppelvlak Generiek

### Vertrouwelijkheid

De Digikoppeling Beveiligingsstandaarden en voorschriften gaan specifiek in op het verplichte gebruik van PKIO certificaten [[PKIO-PvE]] en 2-zijdig TLS.
* Zie [[[DK-beveiliging]]]


### Identificatie & Authenticatie

Digikoppeling maakt gebruik van het OIN (Organisatie Identificatie Nummer) voor de identificatie van organisaties.
Binnen dit DK REST-API profielprofiel zijn er alleen voorschriften m.b.t. het verplicht gebruik van het OIN binnen PKIO certificaten. Voor OIN gebruik binnen payloads (bv JSON) of resource-pad gelden geen specifieke voorschriften.
* Zie [[[DK-IDAuth]]]

## API Design Rules

### Regels

Het Digikoppeling REST-API profiel conformeert zich volledig aan het normatieve deel van de [[[ADR]]]. Het is verplicht te voldoen aan alle (normatieve) eisen van de REST-API Design Rules:

- [/core/naming-resources](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/naming-resources): Use nouns to name resources
- [/core/naming-collections](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/naming-collections): Use plural nouns to name collection resources
- [/core/interface-language](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/interface-language): Define interfaces in Dutch unless there is an official English glossary available
- [/core/hide-implementation](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/hide-implementation): Hide irrelevant implementation details
- [/core/http-safety](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/http-safety): Adhere to HTTP safety and idempotency semantics for operations
- [/core/stateless](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/stateless): Do not maintain session state on the server
- [/core/nested-child](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/nested-child): Use nested URIs for child resources
- [/core/resource-operations](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/resource-operations): Model resource operations as a sub-resource or dedicated resource
- [/core/doc-language](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/doc-language): Publish documentation in Dutch unless there is existing documentation in English
- [/core/deprecation-schedule](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/deprecation-schedule): Include a deprecation schedule when deprecating features or versions
- [/core/transition-period](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/transition-period): Schedule a fixed transition period for a new major API version
- [/core/changelog](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/changelog): Publish a changelog for API changes between versions
- [/core/geospatial](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/geospatial): Apply the geospatial module for geospatial data
- [/core/no-trailing-slash](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/no-trailing-slash): Leave off trailing slashes from URIs
- [/core/http-methods](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/http-methods): Only apply standard HTTP methods
- [/core/doc-openapi](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/doc-openapi): Use OpenAPI Specification for documentation
- [/core/publish-openapi](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/publish-openapi): Publish OAS document at a standard location in JSON-format
- [/core/uri-version](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/uri-version): Include the major version number in the URI
- [/core/semver](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/semver): Adhere to the Semantic Versioning model when releasing API changes
- [/core/version-header](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/version-header): Return the full version number in a response header
- [/core/transport-security](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/transport-security): Apply the transport security module

### Afspraken API Design Rules modules

Extensies op de [[[ADR]]] zijn geschreven in modules. Hieronder wordt aangegeven welke regels uit de API Design Rules modules in dit profiel verplicht zijn of worden aanbevolen.

| Categorie             | Module             | Principe                                                                                                                                                    |
|-----------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Niet van toepassing\* | Transport Security | [Secure connections using TLS](https://gitdocumentatie.logius.nl/publicatie/api/mod-ts/#/transport/tls)                                                     |
| Verplicht\*\*         | Transport Security | [No sensitive information in URIs](https://gitdocumentatie.logius.nl/publicatie/api/mod-ts/#/transport/no-sensitive-uris)                                   |
| Verplicht             | API access control | [Accept tokens as HTTP headers only](https://docs.geostandaarden.nl/api/API-Strategie-mod-access-control/#api-13)                                           |
| Aanbevolen            | Error handling     | [Use default error handling](https://github.com/Geonovum/KP-APIs/blob/master/API-strategie-modules/_extensions_legacy/ext-error-handling.md#api-46)         |
| Aanbevolen            | Error handling     | [Use the required HTTP status codes](https://github.com/Geonovum/KP-APIs/blob/master/API-strategie-modules/_extensions_legacy/ext-error-handling.md#api-47) |

\* Wat betreft TLS zijn de Digikoppeling beveiligingsvoorschriften leidend (zie [[[DK-beveiliging]]]).<br>
\*\* Alleen verplicht indien er sprake is van logging in systemen die niet onder controle van de betrokken client- en serverorganisatie staan.

#### Toelichting aanduidingen

Voorschriften zijn aangeduid met 'Verplicht', 'Aanbevolen' en 'Niet van Toepassing' waarvoor de volgende definities gelden (gebaseerd op [[?rfc2119]]):
 
|Categorie | Codering RFC2119 |Voorschrift |
| --- | --- |---|
|  Verplicht | MUST |De eisen moeten gevolgd worden. Hier kan niet van afgeweken worden.|
|  Aanbevolen | SHOULD | Aanbevolen is om de eisen conform conform voorschrift te implementeren. Wanneer hier van afgeweken wordt dient een zorgvuldige afweging plaats te vinden  |
|  Niet van Toepassing | - | De eisen zijn niet van toepassing|
