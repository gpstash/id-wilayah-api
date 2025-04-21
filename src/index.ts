import { Hono } from 'hono';
import { createRoutes } from './routes';
import { applyGlobalHandlers } from './utils/appHandlers';

const app = new Hono<{ Bindings: CloudflareBindings }>();

applyGlobalHandlers(app);

app.route('', createRoutes());

export default app;
