export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'porfolio-backend'),
			user: env('DATABASE_USERNAME', 'YojanHernandez'),
			password: env('DATABASE_PASSWORD', 'YojanHernandez'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
