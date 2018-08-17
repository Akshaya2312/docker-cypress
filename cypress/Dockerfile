FROM cypress/base:centos7
ADD . /tmp/cypress
WORKDIR /tmp
RUN cp /tmp/cypress/cypress.json /tmp/cypress.json
RUN cp /tmp/cypress/package.json /tmp/package.json
RUN npm install --save-dev cypress
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run
