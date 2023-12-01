// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="lucia" />
declare global {
	namespace Lucia {
		type Auth = import("$lib/server/AuthenticationServices").Auth;
		type DatabaseUserAttributes = {
			username: string,
			email: string,
			last_name?: string | null,
			first_name?: string | null,
		};
		type DatabaseSessionAttributes = {};
	}
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import("$lib/server/AuthenticationServices").AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };
