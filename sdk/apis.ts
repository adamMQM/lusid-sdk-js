import {AggregationApi} from './api/aggregationApi';
import {AllocationsApi} from './api/allocationsApi';
import {ApplicationMetadataApi} from './api/applicationMetadataApi';
import {CalendarsApi} from './api/calendarsApi';
import {ComplexMarketDataApi} from './api/complexMarketDataApi';
import {ConfigurationRecipeApi} from './api/configurationRecipeApi';
import {CorporateActionSourcesApi} from './api/corporateActionSourcesApi';
import {CutLabelDefinitionsApi} from './api/cutLabelDefinitionsApi';
import {DataTypesApi} from './api/dataTypesApi';
import {DerivedTransactionPortfoliosApi} from './api/derivedTransactionPortfoliosApi';
import {EntitiesApi} from './api/entitiesApi';
import {ExecutionsApi} from './api/executionsApi';
import {InstrumentsApi} from './api/instrumentsApi';
import {LegalEntitiesApi} from './api/legalEntitiesApi';
import {OrdersApi} from './api/ordersApi';
import {PersonsApi} from './api/personsApi';
import {PortfolioGroupsApi} from './api/portfolioGroupsApi';
import {PortfoliosApi} from './api/portfoliosApi';
import {PropertyDefinitionsApi} from './api/propertyDefinitionsApi';
import {QuotesApi} from './api/quotesApi';
import {ReconciliationsApi} from './api/reconciliationsApi';
import {ReferencePortfolioApi} from './api/referencePortfolioApi';
import {RelationshipDefinitionsApi} from './api/relationshipDefinitionsApi';
import {RelationshipsApi} from './api/relationshipsApi';
import {ScopesApi} from './api/scopesApi';
import {SearchApi} from './api/searchApi';
import {SequencesApi} from './api/sequencesApi';
import {SystemConfigurationApi} from './api/systemConfigurationApi';
import {TransactionPortfoliosApi} from './api/transactionPortfoliosApi';

export class Api {
    public aggregation:  AggregationApi
    public allocations:  AllocationsApi
    public applicationMetadata:  ApplicationMetadataApi
    public calendars:  CalendarsApi
    public complexMarketData:  ComplexMarketDataApi
    public configurationRecipe:  ConfigurationRecipeApi
    public corporateActionSources:  CorporateActionSourcesApi
    public cutLabelDefinitions:  CutLabelDefinitionsApi
    public dataTypes:  DataTypesApi
    public derivedTransactionPortfolios:  DerivedTransactionPortfoliosApi
    public entities:  EntitiesApi
    public executions:  ExecutionsApi
    public instruments:  InstrumentsApi
    public legalEntities:  LegalEntitiesApi
    public orders:  OrdersApi
    public persons:  PersonsApi
    public portfolioGroups:  PortfolioGroupsApi
    public portfolios:  PortfoliosApi
    public propertyDefinitions:  PropertyDefinitionsApi
    public quotes:  QuotesApi
    public reconciliations:  ReconciliationsApi
    public referencePortfolio:  ReferencePortfolioApi
    public relationshipDefinitions:  RelationshipDefinitionsApi
    public relationships:  RelationshipsApi
    public scopes:  ScopesApi
    public search:  SearchApi
    public sequences:  SequencesApi
    public systemConfiguration:  SystemConfigurationApi
    public transactionPortfolios:  TransactionPortfoliosApi
}
