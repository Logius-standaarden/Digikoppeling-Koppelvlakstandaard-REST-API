# Digikoppeling REST API profiel

## Historie

Vanuit het TO Digikoppeling zijn al langere tijd de ontwikkelingen rond RESTful API's gevolgd. Binnen het Kennisplatform API zijn de REST-API Design Rules (REST ADR) ontwikkeld en de REST ADR standaard is ook opgenomen op de Pas-toe-of-leg-uit lijst van het Forum Standaardisatie. De REST ADR standaard is dan ook als basis genomen voor dit Digikoppeling REST API Profiel dat zich specifiek richt op G2G (Government-to-Government) interactie en M2M (Machine-to-Machine verkeer).
Daarnaast is de standaard Federated Service Connectivity (FSC) ontwikkeld die voorschrijft hoe organisaties REST API's kunnen ontdekken, aanbieden en consumeren. De FSC standaard is opgenomen in dit Digikoppeling REST API Profiel om de koppelingen met REST API's te standardiseren waardoor er een interoperabel API landschap ontstaat.  

## Toepassingsgebied

Het toepassingsgebied is voor Digikoppeling:

> Digikoppeling moet worden toegepast bij digitale gegevensuitwisseling die plaatsvindt met voorzieningen die onderdeel zijn van de GDI, waaronder de basisregistraties, of die sectoroverstijgend is. De verplichting geldt voor gegevensuitwisseling tussen systemen waarbij er noodzaak is voor tweezijdige authenticatie.

Dit profiel is toe te passen bij het aanbieden en/of consumeren van REST API's ten behoeve van het ontsluiten van overheidsinformatie en/of functionaliteit.

## Algemeen

Het Digikoppeling REST API profiel is o.a. gebaseerd op de REST-API Design Rules standaard zoals ontwikkeld door het Kennisplatform API's en in beheer gebracht bij Logius Stelsels & Standaarden: [[ADR]]


Het Digikoppeling REST API profiel conformeert zich volledig aan het normatieve deel van de REST-API Design Rules.

Het Digikoppeling REST API profiel maakt gebruik van de FSC-standaard.


## Koppelvlak Generiek

### Vertrouwelijkheid

De Digikoppeling Beveiligingsstandaarden en voorschriften gaan specifiek in op het verplichte gebruik van PKIO certificaten [[PKIO-PvE]].
* Zie [[[DK-beveiliging]]]


### Identificatie & Authenticatie

Digikoppeling maakt gebruik van het OIN (Organisatie Identificatie Nummer) voor de identificatie van organisaties. Binnen dit Digikoppeling REST API profiel zijn er alleen voorschriften m.b.t. het verplicht gebruik van het OIN binnen PKIO certificaten en FSC. Voor OIN gebruik binnen payloads (bv JSON) of resource-pad gelden geen specifieke voorschriften.
* Zie [[[DK-IDAuth]]]

### Federated Service Connectivity Standaard (FSC)

Gebruik van de [FSC-standaard](https://fsc-standaard.nl/) binnen het Digikoppeling REST API profiel is verplicht  <sup>[1](#f1)</sup>,  <sup>[2](#f2)</sup> 

De FSC standaard bestaat uit het hoofddocument [[[FSC-Core]]] en een extensie genaamd [[[FSC-Logging]]].
Het is verplicht Core en Logging beide te gebruiken.

<a name="f1"></a><sup>1</sup>: *De verplichting valt onder het pas-toe-of-leg-uit beginsel van het Forum Standaardisatie zoals dat geldt voor de Digikoppeling REST-API Koppelvlakstandaard.*

<aside class="note" title="Toevoeging 18 april 2025">
Omdat FSC als nieuwe standaard aan de Digikoppeling REST-API koppelvlakstandaard is toegevoegd beoordeelt het Forum Standaardisatie of deze versie van het koppelvlak (met FSC) daarmee automatisch aanspraak kan maken op de ‘pas toe of leg uit’-verplichting of dat hiervoor een aanvullende toetsing vanuit het Forum nodig is.

(Verwacht wordt dat het resultaat van het onderzoek eind juli 2025 bekend is.)
</aside>

<a name="f2"></a><sup>2</sup>: *Voor bestaande implementaties is het toegestaan tot 1/1/2027 gebruik te maken van versie 1.1 van de Digikoppeling REST-API Koppelvlakstandaard.*


FSC beschrijft het volgende:

1. Hoe de identiteit van een organisatie wordt bepaald en vertrouwd.
2. Hoe een autorisatie om te mogen koppelen met een API gegeven, geweigerd of ontnomen wordt. 
3. Hoe organisaties van een netwerk de API's, en elkaar kunnen vinden.
4. Hoe een verbinding naar een API veilig kan worden opgezet.
5. Hoe logregels weggeschreven moet worden.
6. Hoe een intermediar namens een organisatie een API kan consumeren en/of publiceren.


Het Digikoppeling REST API profiel geeft invulling aan keuzes die gemaakt moeten worden bij het gebruik van FSC. 
In het Digikoppeling REST API profiel wordt er vanuit gegaan dat de lezer bekend is met de standaard FSC. Er worden namelijk termen gebruikt uit deze standaard.

De bovengenoemde functionaliteit is vastgelegd in FSC Core en de extensies Logging en Delegation. Core beschrijft het koppelen met API's, Logging hoe logregels weggeschreven moeten worden en Delegation hoe een intermediar namens een organisatie een API kan consumeren en/of publiceren.  

- [[[FSC-Core]]]
- [[[FSC-Logging]]]

De bovengenoemde functionaliteit is vastgelegd in FSC Core en de extensie Logging. Core beschrijft het koppelen,aanbieden en ontdekken van API's en de extensie Logging beschrijft hoe logregels weggeschreven moeten worden.


#### Vertrouwelijkheid

FSC spreekt over een Trust Anchor die door een Group moet worden gekozen. De Trust Anchor is binnen de context van X.509 certificaten de certificate authority (CA) waaruit het vertrouwen wordt afgeleid.
De Trust Anchor voor de FSC Group moet daarom de PKIO Private Root zijn.

#### Identificatie & Authenticatie

Het PeerID binnen de context van FSC is OIN. Het OIN wordt bij PKIO certificaten geplaatst in het SerialNumber veld van het Subject.
Het is verplicht vanuit FSC om te bepalen welk veld uit het certificaat de Peer name bepaald. Dit is het organization veld van het Subject van het PKIO certificaat.
Binnen dit Digikoppeling REST API profiel zijn er alleen voorschriften m.b.t. het verplicht gebruik van het OIN binnen PKIO certificaten en FSC. Voor OIN gebruik binnen payloads (bv JSON) of resource-pad gelden geen specifieke voorschriften.
* Zie [[[DK-IDAuth]]]


#### TLS 

De Digikoppeling Beveilingsstandaarden en voorschriften veplichten het gebruik van 2-zijdig TLS met minimaal TLS versie 1.2, FSC verscherpt deze eis door de ciphersuites die geen perfect forward secrecy ondersteunen niet toe te laten.
* Zie [[[DK-beveiliging]]]

#### Netwerk-poorten

De Digikoppeling Beveiligingsstandaarden en voorschriften verplichten het gebruik van de netwerkpoort 443 voor data verkeer. FSC voegt daar het gebruik van port 8443 voor managementverkeer aan toe. E.g. toegang aanvragen voor een API. 
* Zie [[[DK-beveiliging]]]

#### Contracten

FSC gebruikt Contracten om afspraken tussen Peers vast te leggen. Een Contract kan één of meerdere Grants bevatten. Een Grant beschrijft welke interactie er mogelijk is tussen de Peers.
FSC plaatst geen beperking op het aantal Grants per Contract. Het Digikoppeling REST API profiel doet dit wel om te voorkomen dat er fragiele Contracten ontstaan met een hoge beheerslast. Het aantal Grants wordt beperkt tot maximaal 10.

#### Retry-mechanisme voor versturen van Contracten en hantekeningen

De Peer die een Contract aanmaakt of een handtekening plaats op een Contract is zelf verantwoordelijk voor het distribureren van het Contract of handtekening naar de Peers op het Contract.
In het scenario dat het versturen van Contract of handtekening mislukt verplicht het Digikoppeling REST API profiel het toepassen van een exponential backoff retry-mechanisme.
> Het retry mechanisme betreft niet de HTTP-requests voor het bevragen van een Service.

Een exponential backoff retry-mechanism is een mechanisme dat een mislukt verzoek opnieuw gaat uitvoeren op een interval die exponentieel groeit. 
Deze exponentiële groei voorkomt dat een applicatie een veelvoud van verzoeken verstuurd naar een service die niet bereikbaar is. 

Voorbeeld: Peer A verstuurt een Contract naar Peer B. Het versturen mislukt. Peer A probeert het opnieuw na 1 seconde, het verzoek mislukt weer. De volgende poging wordt gedaan na 2 seconden, daarna 4 seconden, vervolgens 16 seconden, enzovoort. Om te voorkomen dat er langlopende processen worden gecreëerd hanteerd Peer A een maximale interval van 300 seconden.  

#### Logging

De FSC Logging extensie beschrijft een Transaction ID. Een unieke identifier in de vorm van een UUID voor elke transactie die gedaan wordt, i.e. een bevraging van een API. Deze transactie ID wordt weggeschreven bij elke log regel.
Het Digikoppeling REST API profiel verplicht het gebruik van een UUID V7 als Transaction ID.

### API Design Rules

### Regels

Het Digikoppeling REST-API profiel conformeert zich volledig aan het normatieve deel van de [[[ADR]]]. Het is verplicht te voldoen aan alle (normatieve) eisen van de REST-API Design Rules:

| Regelnaam                                                                                                      | Principe                                                                          |
|----------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [/core/naming-resources](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/naming-resources)         | Use nouns to name resources                                                       |
| [/core/naming-collections](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/naming-collections)     | Use plural nouns to name collection resources                                     |
| [/core/interface-language](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/interface-language)     | Define interfaces in Dutch unless there is an official English glossary available |
| [/core/hide-implementation](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/hide-implementation)   | Hide irrelevant implementation details                                            |
| [/core/http-safety](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/http-safety)                   | Adhere to HTTP safety and idempotency semantics for operations                    |
| [/core/stateless](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/stateless)                       | Do not maintain session state on the server                                       |
| [/core/nested-child](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/nested-child)                 | Use nested URIs for child resources                                               |
| [/core/resource-operations](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/resource-operations)   | Model resource operations as a sub-resource or dedicated resource                 |
| [/core/doc-language](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/doc-language)                 | Publish documentation in Dutch unless there is existing documentation in English  |
| [/core/deprecation-schedule](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/deprecation-schedule) | Include a deprecation schedule when deprecating features or versions              |
| [/core/transition-period](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/transition-period)       | Schedule a fixed transition period for a new major API version                    |
| [/core/changelog](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/changelog)                       | Publish a changelog for API changes between versions                              |
| [/core/geospatial](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/geospatial)                     | Apply the geospatial module for geospatial data                                   |
| [/core/no-trailing-slash](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/no-trailing-slash)       | Leave off trailing slashes from URIs                                              |
| [/core/http-methods](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/http-methods)                 | Only apply standard HTTP methods                                                  |
| [/core/doc-openapi](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/doc-openapi)                   | Use OpenAPI Specification for documentation                                       |
| [/core/publish-openapi](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/publish-openapi)           | Publish OAS document at a standard location in JSON-format                        |
| [/core/uri-version](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/uri-version)                   | Include the major version number in the URI                                       |
| [/core/semver](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/semver)                             | Adhere to the Semantic Versioning model when releasing API changes                |
| [/core/version-header](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/version-header)             | Return the full version number in a response header                               |
| [/core/transport-security](https://gitdocumentatie.logius.nl/publicatie/api/adr/#/core/transport-security)     | Apply the transport security module                                               |

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

 Voorschriften zijn aangeduid met 'Verplicht', 'Aanbevolen' en 'Niet van Toepassing' waarvoor de volgende definities gelden:

|Categorie | Codering RFC2119 |Voorschrift | Toelichting |
| --- | --- |---|---|
|  Verplicht | MUST |De eisen moeten gevolgd worden. Hier kan niet van afgeweken worden.|
|  Aanbevolen | SHOULD | Aanbevolen is om de eisen conform conform voorschrift te implementeren. Wanneer hier van afgeweken wordt dient een zorgvuldige afweging plaats te vinden  |
|  Niet van Toepassing | - | De eisen zijn niet van toepassing|

## Signing & Encryptie (in HTTP REST Context)

### Signing 

Signing van HTTP body en/of header kan gebruikt worden voor _authenticatie_, om de _integriteit_ van de request/response berichten te controleren en signing realiseert ook _onweerlegbaarheid_.
(Onweerlegbaarheid in de zin van: de verzender van de request/response kan niet ontkennen het bericht verzonden te hebben wanneer deze voorzien is van de digitale handtekening van de afzender).

De berichten kunnen ook samen met de digitale handtekeningen worden bewaard zodat deze bij audits of juridische bewijsvoering gebruikt kunnen worden.

Een HTTP requestbericht is opgebouwd uit de volgende onderdelen:

- Header
  - HTTP operatie (GET, POST etc)
  - Pad / URL resource
  - Protocol
  - Header velden
- Body
  - _data_

Door naast de body data ook onderdelen uit de header digitaal te ondertekenen kan worden gecontroleerd dat bv ook de HTTP operatie en resource specificatie in de request echt van de afzender afkomstig zijn en niet onderweg gemanipuleerd.

Indien signing van HTTP body/header wordt toegepast is het Verplicht om dit te doen volgens de regels van de ADR Module [ADR-HTTP Message and payload signing with JAdES](https://geonovum.github.io/KP-APIs/API-strategie-modules/signing-jades/)

### Encryptie 

Encryptie van HTTP request/response kan gebruikt worden om de vertrouwelijkheid van gegevens te beschermen.

Indien encryptie van HTTP request/response wordt toegepast is het Verplicht om dit te doen volgens de regels van de ADR Module [ADR-HTTP Payload encryption](https://geonovum.github.io/KP-APIs/API-strategie-modules/encryption/)