import { AuthToken, Stash } from '@cipherstash/client';

export const getStash = async () => {
    const auth = new AuthToken({
      idpHost: process.env.IDP_HOST,
      creds: {
        clientId: process.env.CS_CLIENT_ID,
        clientSecret: process.env.CS_CLIENT_SECRET
      },  
      federation: {
        IdentityPoolId: process.env.CS_IDENTITY,
        region: process.env.CS_AWS_REGION,
      }
    });

    return Stash.connect(
        process.env.CS_ENDPOINT,
        process.env.CS_CLUSTER_ID,
        auth,
        process.env.CS_CMK
    );
};
