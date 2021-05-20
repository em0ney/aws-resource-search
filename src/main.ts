import { createImagesCollection } from './create_images_collection';
import dotenv from 'dotenv';

const main = async () => {
    console.log('starting');
    dotenv.config();
    console.log(JSON.stringify(process.env));
    await createImagesCollection();
    console.log('created images collection');
};

main().catch(e => {
    console.error('Uncaught Error', e);
    console.error(e.stack);
});
