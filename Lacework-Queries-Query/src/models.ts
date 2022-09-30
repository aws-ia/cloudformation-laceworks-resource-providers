// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Lacework::Queries::Query';

    @Exclude()
    protected readonly IDENTIFIER_KEY_QUERYID: string = '/properties/QueryId';

    @Expose({ name: 'QueryId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'queryId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    queryId?: Optional<string>;
    @Expose({ name: 'QueryText' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'queryText', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    queryText?: Optional<string>;
    @Expose({ name: 'EvaluatorId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'evaluatorId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    evaluatorId?: Optional<string>;
    @Expose({ name: 'Owner' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'owner', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    owner?: Optional<string>;
    @Expose({ name: 'LastUpdateTime' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'lastUpdateTime', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    lastUpdateTime?: Optional<string>;
    @Expose({ name: 'LastUpdateUser' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'lastUpdateUser', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    lastUpdateUser?: Optional<string>;
    @Expose({ name: 'ResultSchema' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'resultSchema', value, obj, [Array, Map]),
        {
            toClassOnly: true,
        }
    )
    resultSchema?: Optional<Array<Map<string, object>>>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.queryId != null) {
            identifier[this.IDENTIFIER_KEY_QUERYID] = this.queryId;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 1 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'LaceworkAccess' })
    @Type(() => LaceworkAccess)
    laceworkAccess?: Optional<LaceworkAccess>;

}

export class LaceworkAccess extends BaseModel {
    ['constructor']: typeof LaceworkAccess;


    @Expose({ name: 'Url' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'url', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    url?: Optional<string>;
    @Expose({ name: 'AccessKeyId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'accessKeyId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    accessKeyId?: Optional<string>;
    @Expose({ name: 'SecretKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'secretKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    secretKey?: Optional<string>;

}

