# BIJLAGE Gebruik van Signing & Encryptie in de context van HTTP / Rest API

<aside class="note">Deze bijlage is informatief en geen normatief onderdeel van het profiel</aside>

## Signing in de context van HTTP Rest

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

Enkele voorbeelden van signing standaarden die in ontwikkeling zijn:


- https://tools.ietf.org/html/draft-ietf-httpbis-message-signatures
- https://www.openbankingeurope.eu/media/2095/obe-json-web-signature-profile-for-open-banking.pdf


## Encryptie in de context van HTTP Rest

Voor encryptie is de standaard JSON Web Encryption (JWE) [[rfc7516]] beschikbaar

Zie ook de ADR extensie signing en encryptie:

- https://docs.geostandaarden.nl/api/API-Strategie-ext/#signing-and-encryption
