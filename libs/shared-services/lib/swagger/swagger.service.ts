import 'reflect-metadata';
import { defaultMetadataStorage } from 'class-transformer/cjs/storage'
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { getMetadataArgsStorage } from 'routing-controllers';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import swaggerUi from 'swagger-ui-express';

export function initializeSwagger(controllers: Function[]) {
    const schemas = validationMetadatasToSchemas({
        classTransformerMetadataStorage: defaultMetadataStorage,
        refPointerPrefix: '#/components/schemas/',
    });

    const routingControllersOptions = {
        controllers: controllers,
    };

    const storage = getMetadataArgsStorage();
    const spec = routingControllersToSpec(storage, routingControllersOptions, {
        components: {
        schemas,
        securitySchemes: {
            basicAuth: {
            scheme: 'basic',
            type: 'http',
            },
        },
        },
        info: {
        description: 'Generated with `routing-controllers-openapi`',
        title: 'A sample API',
        version: '1.0.0',
        },
    });

    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
}
