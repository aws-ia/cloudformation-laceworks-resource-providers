import {AbstractLaceworkResource} from "../../Lacework-Common/src/abstract-lacework-resource"
import {exceptions} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {LaceworkClient} from "../../Lacework-Common/src/lacework-client"
import {ResourceModel, TypeConfigurationModel} from './models';
import {version} from "../package.json";
import {CaseTransformer, Transformer} from "../../Lacework-Common/src/util";

interface CallbackContext extends Record<string, any> {}

type AlertRule = {
    data: any
}

type AlertRules = {
    data: any[]
}
class Resource extends AbstractLaceworkResource<ResourceModel, ResourceModel, ResourceModel, ResourceModel, TypeConfigurationModel> {
    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel> {
        let transform = Transformer.for(model.toJSON())
            .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
            .transform();

        const response = await new LaceworkClient(typeConfiguration.laceworkAccess, this.userAgent, this.loggerProxy).doRequest<any>(
            'post',
            `/AlertRules`,
            null, {...transform});

        return new ResourceModel(response.data.data);
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel> {
        const body = new ResourceModel({...model});
        delete body.mcGuid;
        delete body.createdOrUpdatedTime;
        delete body.type_;

        const response = await new LaceworkClient(typeConfiguration.laceworkAccess, this.userAgent).doRequest<AlertRule>(
            'patch',
            `/AlertRules/${model.mcGuid}`,
            null, {
                ...Transformer.for(body.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                    .transform()
            });

        return new ResourceModel(response.data.data);
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<void> {
        if (!model.mcGuid) {
            throw new exceptions.NotFound(this.typeName, null);
        }

        await new LaceworkClient(typeConfiguration.laceworkAccess, this.userAgent).doRequest<void>(
            'delete',
            `/AlertRules/${model.mcGuid}`,
            null, null);
    }

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel> {
        if (!model.mcGuid) {
            throw new exceptions.NotFound(this.typeName, null);
        }

        const response = await new LaceworkClient(typeConfiguration.laceworkAccess, this.userAgent).doRequest<AlertRule>(
            'get',
            `/AlertRules/${model.mcGuid}`,
            null, null);

        return new ResourceModel(response.data.data);
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel[]> {
        const response = await new LaceworkClient(typeConfiguration.laceworkAccess, this.userAgent).doRequest<AlertRules>(
            'get',
            `/AlertRules`,
            null, null);


        if(!response.data.data) {
            return [];
        }

        return response.data.data.map(group => this.setModelFrom(new ResourceModel(), new ResourceModel(group)));
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: ResourceModel | undefined): ResourceModel {
        if (!from) {
            return model;
        }
        return new ResourceModel({
            ...model,
            ...from,
            type_: (<any>from).type
        });
    }

}

// @ts-ignore // if running against v1.0.1 or earlier of plugin the 5th argument is not known but best to ignored (runtime code may warn)
export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel)!;

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
