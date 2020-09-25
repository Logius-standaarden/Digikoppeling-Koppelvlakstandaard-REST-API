# Context voor ontwikkeling van het profiel

*Dit profiel is in ontwikkeling*

Het Digikoppeling Rest API profiel is gericht op M2M (Machine-to--Machine) en G2G (Government-to-Government) interacties conform de algemene uitgangspunten van de Digkoppeling standaard en het toepassingsgebied van Digikoppeling op de PTLU (Pas toe of leg uit) lijst van het Forum Standaardisatie;

Opzet Digikoppeling:

![alt text](https://github.com/centrumvoorstandaarden/DigikoppelingRestfulApiProfiel/raw/master/media/fig-structuur.png)




# Digikoppeling Restful API profiel

HTML versie [Digikoppeling Restful API Profiel](https://centrumvoorstandaarden.github.io/DigikoppelingRestfulApiProfiel/)

## Inleiding

- Historie

Vanuit het TO Digikoppeling zijn al langere tijd de ontwikkelingen rond Restful API's gevolgd. Binnen het Kennisplatform API zijn de REST-API Design Rules (REST ADR) ontwikkeld en de REST ADR standaard is ook opgenomen op de PTLU lijst van het Formum Standaardisatie. De REST ADR standaard is dan ook als basis genomen voor dit Digikoppeling REST API Profiel dat zich specifiek richt op G2G (Government-to-Government) interactie en M2M (Machine-to-Machine verkeer).


- Toepassingsgebied

Het toepassingsgebied is voor Digikoppeling:

*Digikoppeling moet worden toegepast op alle digitale gegevensuitwisseling met behulp van gestructureerde berichten die plaatsvindt met voorzieningen die onderdeel zijn van de GDI, waaronder de basisregistraties, of die sector-overstijgend is.*

*Geautomatiseerde gegevensuitwisseling tussen informatiesystemen op basis van NEN3610 is uitgesloten van het functioneel toepassingsgebied*.

Dit profiel is toe te passen bij het aanbieden van REST API's ten behoeve van het ontsluiten van overheidsinformatie en/of functionaliteit.

## DK API REST profiel

### Algemeen

Het DK REST-API profiel is gebaseed op de REST-API Design Rules standaard zoals ontwikkeld door het Kennisplatform API's en in beheer gebracht bij Logius Stelsels & Standaarden:

<https://docs.geostandaarden.nl/api/API-Designrules/>

### Transport beveiliging
Zie https://logius.nl/sites/default/files/bestanden/website/Digikoppeling_Beveiligingsstandaarden_en_voorschriften_v1.3.pdf


### Identificatie Authenticatie
https://logius.nl/sites/default/files/public/bestanden/diensten/DigiKoppeling/Standaarden/Digikoppeling-Identificatie-en-Authenticatie.pdf

### Gebruik Service register

[Toelichting volgt]

### API Design Rules

#### Toelichting aanduidingen

 Voorschriften zijn aangeduid met Must, Should, Could en Won't waarvoor de volgende definities gelden: 

-  M -- Must have: De Must have eisen moeten gerealiseerd worden. Hier kan niet van afgeweken worden. 

-  S -- Should have: Implementatie conform voorschrift tenzij dit niet mogelijk is én er een workaround beschikbaar is die een vergelijkbaar resultaat mogelijk maakt. 

-  C -- Could have: Dit betreft eisen die gewenst zijn maar waar men vrij is een andere keuze te maken.

-  W -- Won't : Deze eisen worden in de context van dit profiel niet toegepast.

#### Regels

|**Categorie** |**Principe** | **Toelichting** |
| --- | --- |---|
|MUST|3.1 API-01: Operations are Safe and/or Idempotent||
|MUST|3.2 API-02: Do not maintain state information at the server||
|MUST|3.3 API-03: Only apply default HTTP operations||
|MUST|3.4 API-04: Define interfaces in Dutch unless there is an official English glossary|  |
|MUST|3.5 API-05: Use plural nouns to indicate resources|  |
|MUST|3.6 API-06: Create relations of nested resources within the endpoint|  |
|MUST|3.7 API-09: Implement custom representation if supported|  |
|MUST|3.8 API-10: Implement operations that do not fit the CRUD model as sub-resources|  |
|MUST|3.9 API-16: Use OAS 3.0 for documentation|  |
|MUST|3.10 API-17: Publish documentation in Dutch unless there is existing documentation in English or there is an official English glossary available|  |
|MUST|3.11 API-18: Include a deprecation schedule when publishing API changes|  |
|MUST|3.12 API-19: Allow for a maximum 1 year transition period to a new API version|  |
|MUST|3.13 API-20: Include the major version number only in ihe URI|  |
|MUST|3.14 API-48: Leave off trailing slashes from API endpoints |  |
|MUST|3.15 API-51: Publish OAS at the base-URI in JSON-format|  |

## Afspraken API Design Rules extensies

|**Categorie**|**Principe**|**Toelichting**|
| --- | --- |---|
|COULD|17.1 API-11: Encrypt connections using at least TLS v1.3|  |
|COULD|17.2 API-12: Allow access to an API only if an API key is provided|  |
|MUST |17.3 API-13: Accept tokens as HTTP headers only |  |
|COULD |17.4 API-14: Use OAuth 2.0 for authorisation|  |
|MUST|17.5 API-15: Use PKIoverheid certificates for access-restricted or purpose-limited API authentication|  |
|WON'T|17.6 API-21: Inform users of a deprecated API actively|  |
|COULD|17.7 API-22: JSON first - APIs receive and send JSON|  |
|COULD |17.8 API-23: APIs may provide a JSON Schema|  |
|COULD |17.9 API-24: Support content negotiation|  |
|COULD |17.10 API-25: Check the Content-Type header settings|  |
|COULD |17.11 API-26: Define field names in in camelCase|  |
|COULD |17.12 API-27: Disable pretty print|  |
|COULD |17.13 API-28: Send a JSON-response without enclosing envelope|  |
|COULD |17.14 API-29: Support JSON-encoded POST, PUT, and PATCH payloads|  |
|COULD |17.15 API-30: Use query parameters corresponding to the queryable fields|  |
|COULD |17.16 API-31: Use the query parameter sorteer to sort|  |
|COULD |17.17 API-32: Use the query parameter zoek for full-text search|  |
|COULD |17.18 API-33: Support both * and ? wildcard characters for full-text search APIs|  |
|COULD |17.19 API-34: Support GeoJSON for GEO APIs|  |
|COULD |17.20 API-35: Include GeoJSON as part of the embedded resource in the JSON response|  |
|COULD |17.21 API-36: Provide a POST endpoint for GEO queries|  |
|COULD |17.22 API-37: Support mixed queries at POST endpoints|  |
|COULD |17.23 API-38: Put results of a global spatial query in the relevant geometric context|  |
|COULD |17.24 API-39: Use ETRS89 as the preferred coordinate reference system (CRS)|  |
|COULD |17.25 API-40: Pass the coordinate reference system (CRS) of the request and the response in the headers|  |
|COULD |17.26 API-41: Use content negotiation to serve different CRSs|  |
|COULD |17.27 API-42: Use JSON+HAL with media type application/hal+json for pagination|  |
|COULD |17.28 API-43: Apply caching to improve performance|  |
|COULD |17.29 API-44: Apply rate limiting|  |
|COULD |17.30 API-45: Provide rate limiting information|  |
|COULD |17.31 API-46: Use default error handling|  |
|COULD |17.32 API-47: Use the required HTTP status codes|  |
|COULD |17.33 API-49: Use public API-keys|  |
|WON'T|17.34 API-50: Use CORS to control access|  |
|COULD|17.35 API-52: Use OAuth 2.0 for authorisation with rights delegation|  |

Onderpen in extensies:

- API Security

- Versionering

- JSON

- Filtering

- Sorting

- Custom representation

- Search

- Time travelling

- GEO support

- Paging

- Caching

- Rate limiting

- Error handling

- Signing and Encryption
