import "next-auth";

declare module "next-auth" {
	interface User {
		id: string; // Define an id field in the User object
		email: string; // Explicitly define email as always available
		name?: string;
	}

	interface Session {
		user: User; // Link the extended User type here
	}
}
