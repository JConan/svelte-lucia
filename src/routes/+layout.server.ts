import { NODE_ENV, npm_package_version } from '$env/static/private';


export async function load({ locals }) {
    const session = await locals.auth.validate();

    return {
        session,
        appInfo: `v${npm_package_version} (${NODE_ENV})`
    };
}