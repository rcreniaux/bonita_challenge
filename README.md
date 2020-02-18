Instructions : 

The company’s Adoption department would like to promote a Bonita Studio usage samples beyond the scope of usual Business Process Management applications.

As a freshly hired developer you are asked to provide a Bonita application that allows basic container start/stop/monitoring in a local docker.

Luckily, the team senior developer prepared a skeleton for you - attached .bos file - containing the necessary application workflow diagram and one UI page draft. He added the following guidance note :

get the docker image via a REST call within the pullImage connector
implement the docker instance creation by configuring the REST call within the Create container connector
implement the docker instance start by configuring the REST call within the Start container connector
implement the docker instance stop by configuring the REST call within the Stop container connector
implement the docker instance deletion by configuring the REST call within the Delete container connector
display the list of running docker instances via a REST call in the listContainerPage
propose application/UI improvements – css, ergonomics, container links or state details – using Custom Widgets within the container list.


Please provide your solution built on a Bonita Studio Community 7.10.1 via a Github repo.

You're invited to ask questions or use any publicly available resources if necessary.

Hints:

to configure a (REST) connector in a diagram: Select the diagram task → Execution tab → Connectors in → Select the connector → Edit → Next
