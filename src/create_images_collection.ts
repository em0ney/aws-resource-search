import { getStash } from './cipherstash_client';

export const createImagesCollection = async () => {
    const stash = await getStash();
    return stash.createCollection('images', [
        { name: 'architecture', analyzer: 'keyword' },
        { name: 'creationDate', analyzer: 'timestamp' },
        // { name: 'imageId', analyzer: 'typeahead' },
        { name: 'imageLocation', analyzer: 'typeahead' },
        { name: 'imageType', analyzer: 'typeahead' },
        { name: 'public', analyzer: 'keyword' },
        { name: 'ownerId', analyzer: 'typeahead' },
        { name: 'platformDetails', analyzer: 'typeahead' },
        { name: 'usageOperation', analyzer: 'typeahead' },
        { name: 'state', analyzer: 'keyword' },
        // { name: 'blockDeviceMappings', analyzer: 'bool' },
        { name: 'description', analyzer: 'typeahead' },
        { name: 'hypervisor', analyzer: 'bool' },
        { name: 'imageOwnerAlias', analyzer: 'typeahead' },
        { name: 'name', analyzer: 'typeahead' },
        { name: 'rootDeviceType', analyzer: 'keyword' },
        { name: 'virtualizationType', analyzer: 'keyword' },
    ])
};