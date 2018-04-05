FROM microsoft/dotnet:2.0-sdk

RUN mkdir -p /usr/src
WORKDIR /usr/src

RUN apt-get update && apt-get install -y --no-install-recommends apt-utils && \
    curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    apt-get install -y nodejs && \
    apt-get install npm

RUN npm install -g autorest

# use specific version of modeler, see https://github.com/Azure/autorest/issues/2746
CMD autorest --nodejs --use=@microsoft.azure/autorest.modeler@2.3.40