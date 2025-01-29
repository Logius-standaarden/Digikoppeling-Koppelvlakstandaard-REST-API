# Digikoppeling REST API profiel

## Inleiding

### Historie

Vanuit het TO Digikoppeling zijn al langere tijd de ontwikkelingen rond RESTful API's gevolgd. Binnen het Kennisplatform API zijn de REST-API Design Rules (REST ADR) ontwikkeld en de REST ADR standaard is ook opgenomen op de Pas-toe-of-leg-uit lijst van het Forum Standaardisatie. De REST ADR standaard is dan ook als basis genomen voor dit Digikoppeling REST API Profiel dat zich specifiek richt op G2G (Government-to-Government) interactie en M2M (Machine-to-Machine verkeer).
Daarnaast is de standaard Federated Service Connectivity (FSC) ontwikkeld die voorschrijft hoe organisaties REST API's kunnen ontdekken, aanbieden en consumeren. De FSC standaard is opgenomen in dit Digikoppeling REST API Profiel om de koppelingen met REST API's te standardiseren waardoor er een interoperabel API landschap ontstaat.  

### Toepassingsgebied

Het toepassingsgebied is voor Digikoppeling:

> Digikoppeling moet worden toegepast bij digitale gegevensuitwisseling die plaatsvindt met voorzieningen die onderdeel zijn van de GDI, waaronder de basisregistraties, of die sectoroverstijgend is. De verplichting geldt voor gegevensuitwisseling tussen systemen waarbij er noodzaak is voor tweezijdige authenticatie.

Dit profiel is toe te passen bij het aanbieden en/of consumeren van REST API's ten behoeve van het ontsluiten van overheidsinformatie en/of functionaliteit.

## Digikoppeling REST API profiel

### Algemeen

Het Digikoppeling REST API profiel is o.a. gebaseerd op de REST-API Design Rules standaard zoals ontwikkeld door het Kennisplatform API's en in beheer gebracht bij Logius Stelsels & Standaarden: [[ADR]]


Het Digikoppeling REST API profiel conformeert zich volledig aan het normatieve deel van de REST-API Design Rules.

Het Digikoppeling REST API profiel maakt gebruik van de FSC-standaard.


### Koppelvlak Generiek


#### Vertrouwelijkheid

De Digikoppeling Beveiligingsstandaarden en voorschriften gaan specifiek in op het verplichte gebruik van PKIO certificaten [[PKIO-PvE]].
* Zie [[[DK-beveiliging]]]


#### Identificatie & Authenticatie

Digikoppeling maakt gebruik van het OIN (Organisatie Identificatie Nummer) voor de identificatie van organisaties. Binnen dit Digikoppeling REST API profiel zijn er alleen voorschriften m.b.t. het verplicht gebruik van het OIN binnen PKIO certificaten en FSC. Voor OIN gebruik binnen payloads (bv JSON) of resource-pad gelden geen specifieke voorschriften.
* Zie [[[DK-IDAuth]]]

### Federated Service Connectivity Standaard (FSC)

Gebruik van de [FSC-standaard](https://fsc-standaard.nl/) binnen het Digikoppeling REST API profiel is verplicht  <sup>[1](#f1)</sup>,  <sup>[2](#f2)</sup> 

De FSC standaard bestaat uit het hoofddocument [[[FSC-Core]]] en een extensie genaamd [[[FSC-Logging]]].
Het is verplicht Core en Logging beide te gebruiken.

<a name="f1"></a><sup>1</sup>: *De verplichting valt onder het pas-toe-of-leg-uit beginsel van het Forum Standaardisatie zoals dat geldt voor de Digikoppeling REST-API Koppelvlakstandaard.*

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

#### Toelichting aanduidingen

 Voorschriften zijn aangeduid met 'Verplicht', 'Aanbevolen' en 'Niet van Toepassing' waarvoor de volgende definities gelden:


|Categorie | Codering RFC2119 |Voorschrift | Toelichting |
| --- | --- |---|---|
|  Verplicht | MUST |De eisen moeten gevolgd worden. Hier kan niet van afgeweken worden.|
|  Aanbevolen | SHOULD | Aanbevolen is om de eisen conform conform voorschrift te implementeren. Wanneer hier van afgeweken wordt dient een zorgvuldige afweging plaats te vinden  |
|  Niet van Toepassing | - | De eisen zijn niet van toepassing|

(Indeling gebaseerd op [[?rfc2119]])

#### Regels

Het Digikoppeling REST API profiel conformeert zich volledig aan het normatieve deel van de [[ADR]].

 |Categorie |Principe |Toelichting |Link |
 |--- | --- |---|---|
 |Verplicht | REST-API Design Rules | Het is verplicht te voldoen aan alle (normatieve) eisen van de REST-API Design Rules |[[ADR]]. |

In onderstaande tabel worden de normatieve eisen van de [[ADR]] weergegeven:

Normatieve eisen van de REST API Design Rules
 |Categorie |Principe |Toelichting |Link |
 |--- | --- |---|---|
 |Verplicht |3.1 API-01: Adhere to HTTP safety and idempotency semantics for operations |  |[API-01: Adhere to HTTP safety and idempotency semantics for operations](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-01) |
 |Verplicht |3.3 API-02: Do not maintain state information at the server |  |[API-02: Do not maintain session state on the server](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-02) |
 |Verplicht|3.2 API-03: Only apply default HTTP operations |  |[API-03: Only apply standard HTTP methods](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-03) |
 |Verplicht|3.1 API-04: Define interfaces in Dutch unless there is an official English glossary available |  |[API-04: Define interfaces in Dutch unless there is an official English glossary available](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-04) |
 |Verplicht|3.5 API-05: Use nouns to indicate resources |  |[API-05: Use nouns to name resources](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-05) |
 |Verplicht|3.4 API-06: Use nested resources for child resources |  |[API-06: Use nested URIs for child resources](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-06) |
 |Verplicht|3.5 API-10: Model resource operations as a sub-reresource or dedicated resource |  |[API-10: Model resource operations as a sub-resource or dedicated resource](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-10) |
 |Verplicht |3.6 API-16: Use OpenAPI Specification for documentation |  |[API-16: Use OpenAPI Specification for documentation](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-16) |
 |Verplicht |3.6 API-17: Publish documentation in Dutch unless there is existing documentation in English |  |[API-17: Publish documentation in Dutch unless there is existing documentation in English](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-17) |
 |Verplicht |3.7 API-18: Include a deprecation schedule when publishing API changes |  |[API-18: Include a deprecation schedule when publishing API changes](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-18) |
 |Verplicht |3.7 API-19: Schedule a fixed transition period for a new major API version |  |[API-19: Schedule a fixed transition period for a new major API version](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-19) |
 |Verplicht|3.7 API-20: Include the major version number in the URI |  |[API-20: Include the major version number in the URI](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-20) |
 |Verplicht |3.1 API-48: Leave off trailing slashes from URIs |  |[API-48: Leave off trailing slashes from URIs](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-48) |
 |Verplicht |3.6 API-51: Publish OAS at a standard location in JSON-format | |[API-51: Publish OAS document at a standard location in JSON-format](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-51)
 |Verplicht |3.1 API-53: Hide irrelevant implementation details | |[API-53: Hide irrelevant implementation details](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-53)
 |Verplicht |3.1 API-54: Use plural nouns to name collection resources | | [API-54: Use plural nouns to name collection resources](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-54)
 |Verplicht |3.7 API-55: Publish a changelog for API changes between versions | | [API-55: Publish a changelog for API changes between versions](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-55)
 |Verplicht |3.7 API-56: Adhere to the Semantic Versioning model when releasing API changes | | [API-56: Adhere to the Semantic Versioning model when releasing API changes](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-56)
 |Verplicht |3.7 API-57: Return the full version number in a response header | | [API-57: Return the full version number in a response header](https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-57)

## Afspraken API Design Rules extensies

De ADR extensie onderderdelen van dit profiel zijn gebaseerd op: [[ADR-ext]].

Hieronder wordt aangegeven welke regels uit de API Design Rules extensies in dit profiel verplicht zijn of worden aanbevolen.

| Categorie | Principe | Extensie | Toelichting | Link |
| --- | --- | --- | --- | --- |
| Niet van toepassing | API-11: Secure connections using TLS | Security | Vervangen door Digikoppeling beveiligingsvoorschriften (*)  |[[[DK-beveiliging]]] |
| Verplicht | API-58  No sensitive information in URIs | Security | Alleen verplicht indien er sprake is van logging in systemen die niet onder controle van de betrokken client- en serverorganisatie staan | [API-58 No sensitive information in URIs  ](https://docs.geostandaarden.nl/api/def-hr-API-Strategie-ext-20211013/#api-58)|
| Verplicht | API-13: Accept tokens as HTTP headers only | Security Authorisation | | [API-13: Accept tokens as HTTP headers only](https://docs.geostandaarden.nl/api/def-hr-API-Strategie-ext-20211013/#api-13) |
| Aanbevolen | API-46: Use default error handling | Error handling | | [API-46: Use default error handling](https://docs.geostandaarden.nl/api/def-hr-API-Strategie-ext-20211013#api-46) |
| Aanbevolen | API-47: Use the required HTTP status codes | Error handling  | | [API-47: Use the required HTTP status codes](https://docs.geostandaarden.nl/api/def-hr-API-Strategie-ext-20211013#api-47) |


</span>

(*) Wat betreft TLS zijn de Digikoppeling beveiligingsvoorschriften leidend , Zie [[[DK-beveiliging]]]

