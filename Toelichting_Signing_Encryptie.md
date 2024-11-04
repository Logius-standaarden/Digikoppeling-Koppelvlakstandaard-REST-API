
# HTTP Message Signing & Encryptie in het Digikoppeling REST API profiel

## Inleiding

Door een HTTP-Request/Response te voorzien van een digitale handtekening kan identiteit van de afzender worden gecontroleerd en het HTTP verkeer beschermd worden tegen manipulatie van buitenaf, ook kan met de digitale handtekening onweerlegbaarheid worden gerealiseerd in de zin dat de ontvanger niet kan ontkennen het bericht te hebben ontvangen en de verzender niet kan ontkennen het bericht te hebben
verzonden.

Bij HTTP verkeer wordt voor authenticatie, integriteits bescherming (en bescherming van de vertrouwelijkheid) TLS (Transport Level Security) breed toegepast. In Digikoppeling wordt specifiek 2-zijdig TLS toegepast. Echter TLS beschermt alleen via één TLS-verbinding en het pad tussen de client en de server kan bestaan ​​uit meerdere onafhankelijke TLS-verbindingen (bijvoorbeeld als de applicatie wordt gehost achter een TLS-beëindigende gateway of als de client zich achter een TLS Inspection-apparaat bevindt). In dergelijke gevallen kan TLS geen end-to-end berichtintegriteit of authenticiteit tussen de client en de server garanderen.

HTTP Message signing kan dit geval gebruikt worden om end-to-end bescherming tegen manipulatie te realiseren voor het volledige pad Client naar Server;

HTTP Payload encryptie kan dit geval gebruikt worden om end-to-end vertrouwelijkheid te realiseren voor het volledige pad Client naar Server;

```mermaid
  graph LR;
      Client-->Proxy;
      Proxy-->API_Gateway
      API_Gateway-->Server

```

## Wanneer is HTTP Message Signing/Encryptie te gebruiken

Wanneer Client en Server middels 2-zijdig TLS verbonden zijn over 1 connectie (bijvoorbeeld  direct of als de gateway d.m.v. 'pass-through' verkeer doorgeeft aan de Server) dan is er al sprake van end-to-end bescherming van het verkeer en is voor bescherming HTTP Message Signing niet nodig. (Voor vastlegging van audit logs of om rekening te houden met toekomstige infrastuktuur wijzigingen die end-to-end 2-zijdig TLS onderbreken zou signing ook in dit geval bruikbaar kunnen zijn ).

Wanneer de 2-zijdig TLS connectie bij de Gateway wordt beindigd en de gateway het verkeer ontsleuteld en doorstuurd naar de server is er geen end-to-end beveiliging via TLS. In dit geval kan met behulp van HTTP Message Signing wel end-to-end bescherming geboden worden.
De Client kan HTTP header informatie zoals bv de HTTP Operatie (GET/POST/DELETE/etc) en het resource pad samen met de body van het bericht voorzien van een handtekening, De Gateway kan deze ondertekening doorsturen naar de Server en de Server kan dmv de handtekening afzender en integriteit van het bericht controleren en vaststellen.


> NB Of HTTP Signing en Encryptie nodig/wenselijk zijn is afhankelijk van de opzet van de infrastruktuur en het gewenste beschermingsniveau. Signing , en ook Encryptie toepassen zorgt voor meer comlexiteit in de uitwisselingen. Ook zijn Signing en Encryptie relatief zware operaties die ook beslag op resources opleveren dus het is belangrijk om dit alleen toe te passen in use cases waar  HTTP Signing en Encryptie toegevoegde waarde hebben




