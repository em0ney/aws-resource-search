import { createImagesCollection } from './create_images_collection';
import dotenv from 'dotenv';

const main = async () => {
    dotenv.config();
    await createImagesCollection();
    console.log('created images collection');
};

main().catch(e => {
    console.error('Uncaught Error', e);
});
